import { Injectable } from '@angular/core';
import { HotelService } from '../hotels/hotel.service';
import { HttpService } from '../httprequest.service';

@Injectable()
export class GetHotelsService {

  constructor(
    public httpservice: HttpService,
    public hotelservice: HotelService
    ) { }

  getHotels() {
    const endpoint = 'api/hotels';
    this.httpservice.httpRequest(this.hotelservice.hotel, endpoint, 'get')
        .subscribe(
            response => {
                console.log(this.hotelservice.hotel.hotelList)
                this.hotelservice.hotel.hotelList = response;
                console.log(this.hotelservice.hotel.hotelList)
            },
            error => {
                console.error(error)
            });
  }
}
