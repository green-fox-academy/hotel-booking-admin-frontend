import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpModule } from "@angular/http";

import { NavbarComponent } from './navbar.component';
import { HotelService } from '../hotelregistration/hotel.service';
import { GetHotelsService } from '../hotelregistration/get-hotels.service';
import { HttpService } from '../httprequest.service';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavbarComponent
            ],
            imports: [
                BrowserAnimationsModule,
                HttpModule
            ],
            providers: [
                GetHotelsService,
                HotelService,
                HttpService,
                Http, 
                ConnectionBackend
            ]
    })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
