import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { User } from './user';
import { HttpService } from '../httprequest.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [HttpService]
})

export class LoginComponent {
    title = 'Sign in';
    user = new User;
    token;
    isValid = true;
    loading = false;
    endpoint = 'https://cake-cup.glitch.me/api/login';

    constructor (
        private loginservice: HttpService,
        public router: Router) {
            this.redirectHome()
        }

    redirectHome() {
        if (sessionStorage.Status === 'ok'){
            this.router.navigate(['']);
        }
    }

    checkError(inputField) {
        let formError = false
        if (inputField.errors && (inputField.touched || inputField.dirty)) {
            formError = true;
        }
        return formError;
    }

    onUserLogin() {
        this.loading = true;
        this.loginservice.httpRequest(this.user, this.endpoint, 'post')
            .subscribe(
                response => {
                    this.token = response;
                    this.loading = false;
                    this.router.navigate(['']);
                    sessionStorage.setItem('CurrentUser', this.token.data.attributes.token);
                    sessionStorage.setItem('Status', 'ok');
                },
                error => {
                    console.error(error);
                    this.isValid = false;
                    this.loading = false;
                });
    }
}
