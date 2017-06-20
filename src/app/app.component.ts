import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRouting } from './app.routing';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./assets/app.component.scss']
})

export class AppComponent {
    title = 'Hotel Booking Admin';
    isItLogin = true;

    setIsItLogin() {
        this.isItLogin = true
    }

    setLoggedOut() {
        let loggedOut = true;
        const currentUser = sessionStorage.Status;
        if (currentUser === 'ok') {
            loggedOut = false;
        }
        return loggedOut;
     }

    clearSessionStorage() {
        sessionStorage.clear()
    }
}
