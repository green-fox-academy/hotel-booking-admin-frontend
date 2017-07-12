import { Injectable } from '@angular/core';

import { HttpService } from '../../../httprequest.service';
import { RoomService } from '../room-register/room-service';

@Injectable()
export class GetroomsService {

  constructor(
    public httpservice: HttpService,
    public roomservice: RoomService
  ) { }

    getRooms(hotelId) {
      const endpoint = 'api/hotels/' + hotelId + '/relationships/rooms';
      this.httpservice.httpRequest('', endpoint, 'get')
          .subscribe(
              response => {
                  this.roomservice.room.roomList = response
                  console.log(this.roomservice.room.roomList)
              },
              error => console.error(error)
          );
      }

}
