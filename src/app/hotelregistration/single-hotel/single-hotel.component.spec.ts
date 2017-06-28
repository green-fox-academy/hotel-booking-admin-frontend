import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SingleHotelComponent } from './single-hotel.component';
import { HotelService } from '../hotel.service';

describe('SingleHotelComponent', () => {
    let component: SingleHotelComponent;
    let fixture: ComponentFixture<SingleHotelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ SingleHotelComponent ],
            providers: [ HotelService ]
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
