import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class RoutingService implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {
        let loggedOut = true;
        const currentUser = sessionStorage.CurrentUser;
        if (currentUser !== undefined) {
            this.redirect()
            loggedOut = false;
        }
        return loggedOut;
    }

    redirect() {
        this.router.navigate(['home']);
    }
}
