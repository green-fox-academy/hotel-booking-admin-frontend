import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { User } from './user';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['../assets/app.component.css']
})

export class LoginComponent {
    title = 'Login';
    user = User;
}
