import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpModule } from "@angular/http";

import { NavbarComponent } from './navbar.component';
import { HotelService } from '../hotels/hotel.service';
import { GetHotelsService } from '../hotels/get-hotels.service';
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

    it('should change the form and hotel status', async(() => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const navbar = fixture.debugElement.componentInstance;
        navbar.toggleMenu('click', null);
        expect(navbar.menuIn).toBeTruthy();
        expect(navbar.menuOut).toBeFalsy();
        expect(navbar.blurOn).toBeTruthy();
        expect(navbar.blurOff).toBeFalsy();
        navbar.toggleMenu('click', null);
        expect(navbar.menuIn).toBeFalsy();
        expect(navbar.menuOut).toBeTruthy();
        expect(navbar.blurOn).toBeFalsy();
        expect(navbar.blurOff).toBeTruthy();
        }));
});
