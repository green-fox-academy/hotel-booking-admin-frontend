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
    isValid = true;
    loading = false;
    constructor (
        private register: RegisterService,
        public router: Router) { this.redirectHome() }

    checkError(inputField) {
        let formError = false
        if (inputField.errors && (inputField.touched || inputField.dirty)) {
            formError = true;
        }
        return formError;
    }
    redirectHome() {
        if (sessionStorage.Status === 'ok') {
                this.router.navigate(['']);
            }
    }

    onUserRegister() {
        this.loading = true;
        this.register.postLoginDetails(this.user)
            .subscribe(
                response => {
                    this.token = response;
                    if (this.token.status !== 'error') {
                        this.router.navigate(['']);
                    }
                },
                error => alert(error),
                () => {
                    sessionStorage.setItem('CurrentUser', this.token.token);
                    sessionStorage.setItem('Status', this.token.status);
                    if (this.token.status === 'error') {
                                this.isValid = false;
                    } else {
                        this.isValid = true;
                    }
                    this.loading = false;
                }
            );
    }
}
