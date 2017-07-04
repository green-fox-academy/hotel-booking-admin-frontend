import { Component } from '@angular/core';

import { GetHotelsService } from '../hotels/get-hotels.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['../assets/app.component.scss']
})
export class NavbarComponent {
    isItLogin = true;
    menuIn = false;
    menuOut = true;
    blurOn = false;
    blurOff = true;

    constructor(
        public gethotelsservice: GetHotelsService) { }

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

    toggleMenu() {
        if (this.menuOut) {
            this.menuIn = true;
            this.menuOut = false;
            this.blurOn = true;
            this.blurOff = false;
        } else {
            this.menuIn = false;
            this.menuOut = true;
            this.blurOn = false;
            this.blurOff = true;
        }
    }
}
