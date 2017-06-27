import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

import { User } from '../login/user';
import { HttpService } from '../httprequest.service';

@Component({
    selector: 'register-page',
    templateUrl: './register.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [HttpService]
})

export class RegisterComponent {
    title = 'Sign up';
    user = new User;
    token;
    samePassword = false;
    loading = false;
    isValid;
    endpoint = 'https://cake-cup.glitch.me/api/register';

    constructor (
        private register: HttpService,
        public router: Router) {
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
        return this.samePassword;
    }

    onUserRegister() {
        this.loading = true;
        this.register.httpRequest(this.user, this.endpoint, 'post')
            .subscribe(
                response => {
                    this.token = response;
                    this.router.navigate(['']);
                    this.loading = false;
                    sessionStorage.setItem('CurrentUser', this.token.data.attributes.token);
                    sessionStorage.setItem('Status', 'ok');
                },
                error => {
                    console.error(error)
                    this.isValid = false;
                    this.loading = false;
                });
    }
}
