import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { fakeAsync, async, inject, TestBed, getTestBed } from '@angular/core/testing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { appRouting } from './app.routing';

@Component ({
  template:`
  <router-outlet></router-outlet>
  `
})
class RoutingComponent {  }

describe('component: RoutingComponent', () => {
  let location, routing;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
          {path: '', component: HomeComponent},
          {path: 'login', component: LoginComponent}
        ])],
        declarations: [RoutingComponent, HomeComponent, LoginComponent]
    });
  });

  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    routing = _router;
  }));

  it('should go home', async(() => {
    let fixture = TestBed.createComponent(RoutingComponent);
    fixture.detectChanges();
    routing.navigate(['/']).then(() => {
      expect(location.path()).toBe('/');
      console.log('after expect');
    });
  }));

  it('should go to the login page', async(() => {
    let fixture = TestBed.createComponent(RoutingComponent);
    fixture.detectChanges();
    routing.navigate(['login']).then(() => {
      expect(location.path()).toBe('/login');
      console.log('after expect');
    });
  }));
});