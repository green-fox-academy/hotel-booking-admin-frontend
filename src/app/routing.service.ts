import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class RoutingService implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {
        const currentUser = sessionStorage.CurrentUser;
        if (currentUser !== undefined) {
            this.router.navigate(['/home']);
            return false;
        } else {
            return true;
        }
    }
}
