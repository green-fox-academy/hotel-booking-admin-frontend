import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class RoutingService implements CanActivate {

    constructor(private router: Router) {
        
    }

    canActivate() {

        if (sessionStorage.Status === 'ok') { return true; }
        this.redirect('login')
        return false;
    }

    redirect(to) {
        this.router.navigate([to]);
    }
 }