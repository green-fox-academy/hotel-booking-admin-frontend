import { TestBed, inject } from '@angular/core/testing';

import { GetroomsService } from './getrooms.service';

describe('GetroomsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetroomsService]
    });
  });

  it('should be created', inject([GetroomsService], (service: GetroomsService) => {
    expect(service).toBeTruthy();
  }));
});
