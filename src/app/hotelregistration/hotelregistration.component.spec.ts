import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HotelComponent } from './hotelregistration.component';
import { HttpService } from '../httprequest.service';
import { HotelService } from './hotel.service';
import { AttributesComponent } from './attributes/attributes.component';
import { StarratingComponent } from './starrating/starrating.component';
import { GetHotelsService } from './get-hotels.service';
import { HotelAttributesService } from '../hotelregistration/attributes/hotel-attributes.service'


describe('HotelComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                HttpModule,
                BrowserAnimationsModule
            ],
            declarations: [
                HotelComponent,
                AttributesComponent,
                StarratingComponent
            ],
            providers: [
                HttpService,
                HotelService,
                GetHotelsService,
                HotelAttributesService
                ]
            }).compileComponents();
        }));

    it('should create the hotelregistration', async(() => {
        const fixture = TestBed.createComponent(HotelComponent);
        const hotel = fixture.debugElement.componentInstance;
        expect(hotel).toBeTruthy();
    }));

    it(`should have as title 'Hotels'`, async(() => {
        const fixture = TestBed.createComponent(HotelComponent);
        const hotel = fixture.debugElement.componentInstance;
        expect(hotel.title).toEqual('Hotels');
    }));

    it('should render title in a h2 tag', async(() => {
        const fixture = TestBed.createComponent(HotelComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain('Hotels');
    }));

    it('should change the form and hotel status', async(() => {
        const fixture = TestBed.createComponent(HotelComponent);
        const hotel = fixture.debugElement.componentInstance;
        hotel.dropForm('click', null);
        expect(hotel.formIn).toBeTruthy();
        expect(hotel.formOut).toBeFalsy();
        expect(hotel.hotelsUp).toBeTruthy();
        expect(hotel.hotelsDown).toBeFalsy();
        hotel.dropForm('click', null);
        expect(hotel.formIn).toBeFalsy();
        expect(hotel.formOut).toBeTruthy();
        expect(hotel.hotelsUp).toBeFalsy();
        expect(hotel.hotelsDown).toBeTruthy();
        }));

});
