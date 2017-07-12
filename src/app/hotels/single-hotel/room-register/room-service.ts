import { Injectable } from '@angular/core';

import { Room } from './rooms'
import { HttpService } from '../../../httprequest.service';

@Injectable()
export class RoomService {
    constructor(
    public httpservice: HttpService
    ) { }

    room = new Room;

    getRooms(hotelId) {
    const endpoint = 'api/hotels/' + hotelId + '/relationships/rooms';
    this.httpservice.httpRequest('', endpoint, 'get')
        .subscribe(
            response => {
                this.room.roomList = response
                console.log(this.room.roomList)
            },
            error => console.error(error)
        );
    }
}
