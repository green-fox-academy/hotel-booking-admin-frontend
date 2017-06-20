import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoutingService } from './routing.service';
import { AppComponent } from './app.component';

class requestoptions {
    public requestoption: RequestOptions
}

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
                    { path: 'login', component: LoginComponent },
                    { path: '', component: HomeComponent, canActivate: [RoutingService] }
                ])
            ],
            declarations: [
                AppComponent,
                RoutingComponent,
                HomeComponent,
                LoginComponent
            ], 
            providers: [
                RoutingService,
                {provide: Http, useClass: requestoptions},
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

    // it('should go home when logged in', async(() => { 
    //     const fixture = TestBed.createComponent(RoutingComponent);
    //     fixture.detectChanges();
    //     if (sessionStorage.status === 'ok'){
    //         routing.navigate(['login']).then(() => {
    //             expect(location.path()).toBe('/');
    //             console.log('after expect');
    //         });
    //     }
    // }));

    it('should go to the login page', async(() => {
        const fixture = TestBed.createComponent(RoutingComponent);
        fixture.detectChanges();
        routing.navigate(['login']).then(() => {
            expect(location.path()).toBe('/login');
            console.log('after expect');
        });
    }));
});
