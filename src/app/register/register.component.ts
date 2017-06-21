import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

import { User } from '../login/user';
import { RegisterService } from './register.service';

@Component({
    selector: 'register-page',
    templateUrl: './register.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [RegisterService]
})

export class RegisterComponent {
    title = 'Register';
    user = new User;
    token;
    samePassword = false;
    loading = false;

    constructor (
        private register: RegisterService,
        public router: Router) {
            this.redirectHome();
        }

    checkError(inputField) {
        let formError = false;
        if (inputField.errors && (inputField.touched || inputField.dirty)) {
            formError = true;
        }
        return formError;
    }

    passwordChecker(password1, password2) {
        if (password1 !== password2) {
            this.samePassword = true;
        } else {
            this.samePassword = false;
        }
        console.log(this.samePassword)
        return this.samePassword;
    }

    redirectHome() {
        if (sessionStorage.Status === undefined) {
                this.router.navigate(['']);
            }
    }

    onUserRegister() {
        this.loading = true;
        this.register.postLoginDetails(this.user)
            .subscribe(
                response => {
                    this.token = response;
                    if (this.token.errors.status !== 400) {
                        this.router.navigate(['']);
                    }
                },
                error => alert(error),
                () => {
                    sessionStorage.setItem('CurrentUser', this.token.data.attributes.token);
                    sessionStorage.setItem('Status', this.token.errors.status);
                    this.loading = false;
                }
            );
    }
}
