import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRouting } from './app.routing';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./assets/app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Hotel Booking Admin';
    isItLogin = true;

    endpointChecker = () => {
        if (location.href.slice(-5) === 'login') {
            this.isItLogin = true;
        } else {
            this.isItLogin = false;
        }
        return this.isItLogin;
    }

    setIsItLogin = () => {
        this.isItLogin = true
    }

    ngOnInit() {
        this.endpointChecker();
    }
}
