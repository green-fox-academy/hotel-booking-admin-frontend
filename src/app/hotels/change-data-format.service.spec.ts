import { TestBed, inject } from '@angular/core/testing';

import { ChangeDataFormatService } from './change-data-format.service';

describe('ChangeDataFormatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeDataFormatService]
    });
  });

  it('should be created', inject([ChangeDataFormatService], (service: ChangeDataFormatService) => {
    expect(service).toBeTruthy();
  }));
});
