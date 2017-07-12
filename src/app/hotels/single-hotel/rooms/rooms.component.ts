import { Component, OnInit } from '@angular/core';

import { RoomService } from '../room-register/room-service';
import { HttpService } from '../../../httprequest.service';
import { HotelService } from '../../hotel.service';
import { GetroomsService } from '../rooms/getrooms.service';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['../../../../app/assets/app.component.scss'],
    providers: [HttpService]
})
export class RoomsComponent implements OnInit {
    undoHidden = false

    constructor(
        public roomservice: RoomService,
        private httpservice: HttpService,
        public hotelservice: HotelService,
        public getroomsservice: GetroomsService
    ) { }

    deleteRoomId(hotelId, roomId) {
        const endpoint = 'api/hotels/' + hotelId + '/relationships/rooms/' + roomId;
        console.log(endpoint)
        this.httpservice.httpRequest(this.roomservice.room.roomList.data.id, endpoint, 'delete')
            .subscribe(
                response => {
                    this.getroomsservice.getRooms(hotelId);
                    this.undoHidden = true;
                },
                error => console.error(error)
            );
                
    }

    ngOnInit() {
    }

}
