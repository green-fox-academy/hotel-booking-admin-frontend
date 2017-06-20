import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { User } from './user';
import { LoginService } from './loginservice.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [LoginService]
})

export class LoginComponent {
    title = 'Login';
    user = new User;
    token;
    isValid = true;
    loading = false;
    constructor (
        private loginservice: LoginService,
        public router: Router) { this.redirectHome() }

    checkError(inputField) {
        let formError = false
        if (inputField.errors && (inputField.touched || inputField.dirty)) {
            formError = true;
        }
        return formError;
    }
    redirectHome() {
        if (sessionStorage.Status === 'ok'){
                this.router.navigate(['']);
        }  
    }

    onUserLogin() {
        this.loading = true;
        this.loginservice.postLoginDetails(this.user)
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
