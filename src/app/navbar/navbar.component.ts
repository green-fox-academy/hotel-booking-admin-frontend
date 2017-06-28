import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['../assets/app.component.scss'],
    animations: [
        trigger('activateMenu', [
            state('inactive', style({
                transform: 'translateX(100%)'
            })),
            state('active', style({
                transform: 'translateX(0)'
            })),
            transition('inactive => active', animate('1s ease-in')),
            transition('active => inactive', animate('1s ease-out')),
        ]),
        trigger('blurBackground', [
            state('inactive', style({
                    background: 'rgba(0, 0, 0, 0)'
            })),
            state('active', style({
                background: 'rgba(0, 0, 0, 0.15)'
            })),
            transition('inactive => active', animate('1s ease-in')),
            transition('active => inactive', animate('1s ease-out')),
        ]),
    ]
})
export class NavbarComponent {
    isItLogin = true;
    menuStateOut = true;
    state = 'inactive';

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

    // toggleMenu() {
    //     this.menuStateOut = this.menuStateOut !== true;
    // }

    toggleMenu() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        this.menuStateOut = this.menuStateOut !== true;
    }
}
