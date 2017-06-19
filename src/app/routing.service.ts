import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class RoutingService implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {

    if (sessionStorage.Status === 'ok') { return true; }
        this.router.navigate(['/login']);
        return false;
    }
 }