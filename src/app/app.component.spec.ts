import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http,  ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetHotelsService } from './hotelregistration/get-hotels.service';
import { HttpService } from './httprequest.service';
import { HotelService } from './hotelregistration/hotel.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            BrowserAnimationsModule,
            HttpModule
        ],
      declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent
      ],
      providers: [
        GetHotelsService,
        HttpService, 
        Http, 
        ConnectionBackend,
        HotelService
        ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Hotel Booking Admin'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hotel Booking Admin');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hotel Booking Admin');
  }));
});
