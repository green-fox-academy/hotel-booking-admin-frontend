import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRouting } from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./assets/app.component.scss'],
})

export class AppComponent {
    title = 'Hotel Booking Admin';
    
}
