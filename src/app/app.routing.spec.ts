import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { AttributesComponent } from './hotelregistration/attributes/attributes.component';
import { StarratingComponent } from './hotelregistration/starrating/starrating.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoutingService } from './routing.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HotelComponent } from './hotelregistration/hotelregistration.component';

class RequestOption {
    public requestoption: RequestOptions
}

@Component ({
    templateUrl: './app.component.html'
})
class RoutingComponent {
    setLoggedOut() {
       return true;
    }
 }

describe('component: RoutingComponent', () => {
    let location, routing;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule.withRoutes([
                    { path: 'login', component: LoginComponent },
                    { path: 'register', component: RegisterComponent },
                    { path: 'hotels', component: HotelComponent },
                    { path: '', component: HomeComponent, canActivate: [RoutingService] }
                ])
            ],
            declarations: [
                AppComponent,
                RoutingComponent,
                HomeComponent,
                LoginComponent,
                NavbarComponent,
                RegisterComponent,
                HotelComponent,
                StarratingComponent, 
                AttributesComponent
            ],
            providers: [
                RoutingService,
                {provide: Http, useClass: RequestOption },
                ConnectionBackend
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
        routing.navigate(['']).then(() => {
            expect(location.path()).toBe('/');
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

    it('should go to the register page', async(() => {
        const fixture = TestBed.createComponent(RoutingComponent);
        fixture.detectChanges();
        routing.navigate(['register']).then(() => {
            expect(location.path()).toBe('/register');
            console.log('after expect');
        });
    }));

    it('should go to the hotel adding page', async(() => {
        const fixture = TestBed.createComponent(RoutingComponent);
        fixture.detectChanges();
        routing.navigate(['hotels']).then(() => {
            expect(location.path()).toBe('/hotels');
            console.log('after expect');
        });
    }));
});
