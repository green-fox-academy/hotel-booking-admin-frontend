import { TestBed, inject } from '@angular/core/testing';

import { DragNDropService } from './drag-n-drop.service';
import { HotelService } from '../hotel.service';

describe('DragNDropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragNDropService, HotelService]
    });
  });

  it('should be created', inject([DragNDropService], (service: DragNDropService) => {
    expect(service).toBeTruthy();
  }));
});
