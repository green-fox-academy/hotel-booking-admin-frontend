import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../assets/app.component.scss']
})
export class NavbarComponent {
    isItLogin = true;
    menuStateOut = true;

    constructor() { }


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
        this.menuStateOut = this.menuStateOut === true ? false : true;
    }

}
