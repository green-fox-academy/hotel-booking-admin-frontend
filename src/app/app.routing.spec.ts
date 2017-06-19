import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoutingService } from './routing.service';
import { AppComponent } from './app.component';

@Component ({
    templateUrl: './app.component.html'
})
class RoutingComponent {  }

describe('component: RoutingComponent', () => {
    let location, routing;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule.withRoutes([
                    {path: 'home', component: HomeComponent, canActivate: [RoutingService]},
                    {path: 'login', component: LoginComponent}
                ])
            ],
            declarations: [
                AppComponent,
                RoutingComponent,
                HomeComponent,
                LoginComponent
            ]
        });
    });

    beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
        location = _location;
        routing = _router;
    }));

    it('should go home', async(() => {
        const fixture = TestBed.createComponent(RoutingComponent);
        fixture.detectChanges();
        routing.navigate(['home']).then(() => {
            expect(location.path()).toBe('/home');
            console.log('after expect');
        });
    }));

    it('should go to the login page', async(() => {
        const fixture = TestBed.createComponent(RoutingComponent);
        fixture.detectChanges();
        routing.navigate(['login']).then(() => {
            expect(location.path()).toBe('/login');
            console.log('after expect');
        });
    }));
});
