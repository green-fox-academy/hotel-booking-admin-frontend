import { TestBed, inject } from '@angular/core/testing';

import { GetHotelsService } from './get-hotels.service';

describe('GetHotelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHotelsService]
    });
  });

  it('should be created', inject([GetHotelsService], (service: GetHotelsService) => {
    expect(service).toBeTruthy();
  }));
});
