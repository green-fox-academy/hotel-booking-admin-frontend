import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { StarratingComponent } from './starrating.component';
import { HotelComponent } from '../hotelregistration.component'
import { HotelService } from '../hotel.service';

describe('StarratingComponent', () => {
    let component: StarratingComponent;
    let fixture: ComponentFixture<StarratingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [ StarratingComponent ],
            providers: [ HotelService ]
    })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StarratingComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
