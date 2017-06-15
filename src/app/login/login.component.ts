import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { User } from './user';
import { LoginService } from '../loginservice.service';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['../assets/app.component.css'],
    providers: [LoginService]
})

export class LoginComponent {
    title = 'Login';
    user = User;
    token;
 
    constructor (private loginservice: LoginService) {
        
    } 
    onUserLogin() {
        this.loginservice.postLoginDetails()
            .subscribe(
                response => this.token = JSON.stringify(response),
                error => alert(error),
                () => console.log(this.token)
            );
    }    
}
