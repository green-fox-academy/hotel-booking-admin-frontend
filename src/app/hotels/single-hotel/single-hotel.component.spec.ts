import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http,  ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from '@angular/router/testing';

import { SingleHotelComponent } from './single-hotel.component';
import { HotelService } from '../hotel.service';
import { GetHotelsService } from '../get-hotels.service';
import { HttpService } from '../../httprequest.service';

describe('SingleHotelComponent', () => {
    let component: SingleHotelComponent;
    let fixture: ComponentFixture<SingleHotelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ 
                FormsModule, 
                HttpModule,
                RouterTestingModule
                ],
            declarations: [ SingleHotelComponent ],
            providers: [ 
                HttpService,
                HotelService,
                GetHotelsService
                ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleHotelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
