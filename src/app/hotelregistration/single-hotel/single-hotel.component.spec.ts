import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHotelComponent } from './single-hotel.component';

describe('SingleHotelComponent', () => {
  let component: SingleHotelComponent;
  let fixture: ComponentFixture<SingleHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleHotelComponent ]
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
