import { TestBed, inject } from '@angular/core/testing';

import { HotelregistrationService } from './hotelregistration.service';

describe('HotelregistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelregistrationService]
    });
  });

  it('should be created', inject([HotelregistrationService], (service: HotelregistrationService) => {
    expect(service).toBeTruthy();
  }));
});
