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
    loading = false;
    isValid;
    endpoint = 'https://cake-cup.glitch.me/api/register';

    constructor (
        private register: HttpService,
        public router: Router) {
        }

    checkError(inputField) {
        return inputField.errors && (inputField.touched || inputField.dirty) ? true : false;
    }

    passwordChecker(password1, password2) {
        return password1 !== password2 ? true : false;
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
