import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoomRegisterComponent } from './room-register.component';
import { RoomService } from './room-service';
import { HttpService } from '../../../httprequest.service';

describe('RoomRegisterComponent', () => {
    let component: RoomRegisterComponent;
    let fixture: ComponentFixture<RoomRegisterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpModule
            ],
            declarations: [ RoomRegisterComponent ],
            providers: [
                RoomService,
                HttpService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoomRegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
