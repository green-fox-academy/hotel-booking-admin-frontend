import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { RoomsComponent } from './rooms.component';
import { RoomService } from '../room-register/room-service';
import { HotelService } from '../../hotel.service';
import { HttpService } from '../../../httprequest.service';
import { GetroomsService } from './getrooms.service'

describe('RoomsComponent', () => {
    let component: RoomsComponent;
    let fixture: ComponentFixture<RoomsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            declarations: [ RoomsComponent ],
            providers: [
                RoomService,
                HotelService,
                HttpService,
                GetroomsService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
