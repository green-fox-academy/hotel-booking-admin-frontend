import { TestBed, inject } from '@angular/core/testing';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpModule } from "@angular/http";

import { GetHotelsService } from './get-hotels.service';
import { HttpService } from '../httprequest.service';
import { HotelService } from '../hotels/hotel.service';

describe('GetHotelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        GetHotelsService,
        HttpService,
        Http,
        ConnectionBackend,
        HotelService
        ]
    });
  });

  it('should be created', inject([GetHotelsService], (service: GetHotelsService) => {
    expect(service).toBeTruthy();
  }));
});
