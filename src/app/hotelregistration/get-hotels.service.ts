import { Injectable } from '@angular/core';
import { HotelService } from '../hotelregistration/hotel.service';
import { HttpService } from '../httprequest.service';

@Injectable()
export class GetHotelsService {

  constructor(
    public httpservice: HttpService,
    public hotelservice: HotelService
    ) { }

  getHotels() {
    const endpoint = 'https://two-ferns.glitch.me/api/hotels'
    this.httpservice.httpRequest(this.hotelservice.hotel, endpoint, 'get')
        .subscribe(
            response => {
                this.hotelservice.hotel.hotelList = response;
            },
            error => {
                console.error(error)
            });
  }
}
