import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//     HttpModule,
//     XHRBackend,
//     ResponseOptions,
//     Response
// } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoutingService } from './routing.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HotelComponent } from './hotelregistration/hotelregistration.component';
import { SingleHotelComponent } from './hotelregistration/single-hotel/single-hotel.component';
import { AttributesComponent } from './hotelregistration/attributes/attributes.component';
import { StarratingComponent } from './hotelregistration/starrating/starrating.component';
import { GetHotelsService } from './hotelregistration/get-hotels.service'
import { HotelService } from './hotelregistration/hotel.service'
import { HttpService } from './httprequest.service';
import { GetHotelsService } from './hotelregistration/get-hotels.service';
import { HotelService } from './hotelregistration/hotel.service';

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

describe('RoutingComponent', () => {
    let location, routing;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                // HttpModule,
                RouterTestingModule.withRoutes([
                    { path: 'login', component: LoginComponent },
                    { path: 'register', component: RegisterComponent },
                    { path: 'hotels', component: HotelComponent },
                    { path: '', component: HomeComponent, canActivate: [RoutingService] },
                    { path: 'hotels/1', component: SingleHotelComponent, canActivate: [RoutingService] },
                    { path: '**', redirectTo: 'login' }
                ]),
                BrowserAnimationsModule
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
                AttributesComponent,
                SingleHotelComponent
            ],
            providers: [
                RoutingService,
                {provide: Http, useClass: RequestOption },
                ConnectionBackend,
                GetHotelsService,
                HttpService,
<<<<<<< HEAD
                { provide: XHRBackend, useClass: MockBackend },
                GetHotelsService,
                HotelService
=======
                HotelService
                // { provide: XHRBackend, useClass: MockBackend },
>>>>>>> d2b717b39439e6694fe8ff25168eaf7d61c279b8
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
        });
    }));

    it('should go to the login page', async(() => {
        const fixture = TestBed.createComponent(RoutingComponent);
        fixture.detectChanges();
        routing.navigate(['login']).then(() => {
            expect(location.path()).toBe('/login');
        });
    }));

    it('should go to the register page', async(() => {
        const fixture = TestBed.createComponent(RoutingComponent);
        fixture.detectChanges();
        routing.navigate(['register']).then(() => {
            expect(location.path()).toBe('/register');
        });
    }));

    it('should go to the hotel adding page', async(() => {
        const fixture = TestBed.createComponent(RoutingComponent);
        fixture.detectChanges();
        routing.navigate(['hotels']).then(() => {
            expect(location.path()).toBe('/hotels');
        });
    }));
});
