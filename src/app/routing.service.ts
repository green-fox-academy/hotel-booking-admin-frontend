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
            this.redirect('home')
            loggedOut = false;
        }
        return loggedOut;
    }

    redirect(to) {
        this.router.navigate([to]);
    }
}
