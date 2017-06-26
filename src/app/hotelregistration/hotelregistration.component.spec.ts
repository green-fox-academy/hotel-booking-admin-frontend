import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HotelComponent } from './hotelregistration.component';
import { HttpService } from '../httprequest.service';
import { HotelService } from './hotel.service';
import { AttributesComponent } from './attributes/attributes.component';
import { StarratingComponent } from './starrating/starrating.component';

describe('HotelComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            FormsModule,
            HttpModule
        ],
        declarations: [
            HotelComponent,
            AttributesComponent,
            StarratingComponent
        ],
        providers: [HttpService, HotelService]
    }).compileComponents();
  }));

  it('should create the hotelregistration', async(() => {
    const fixture = TestBed.createComponent(HotelComponent);
    const hotel = fixture.debugElement.componentInstance;
    expect(hotel).toBeTruthy();
  }));

  it(`should have as title 'Add Hotel'`, async(() => {
    const fixture = TestBed.createComponent(HotelComponent);
    const hotel = fixture.debugElement.componentInstance;
    expect(hotel.title).toEqual('Add Hotel');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(HotelComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Add Hotel');
  }));
});
