import { Component, OnInit } from '@angular/core';

import { RoomService } from '../room-register/room-service';
import { HttpService } from '../../../httprequest.service';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['../../../../app/assets/app.component.scss'],
    providers: [HttpService]
})
export class RoomsComponent implements OnInit {

    constructor(
        public roomservice: RoomService,
        private getroomsservice: HttpService
    ) { }

    getRooms(id) {
        const endpoint = 'api/hotels/' + id + '/relationships/rooms';
        this.getroomsservice.httpRequest('', endpoint, 'get')
            .subscribe(
                response => {
                    this.roomservice.room.roomList = response
                    console.log(this.roomservice.room.roomList)
                },
                error => {
                    console.error(error);
                });
    }

    ngOnInit() {
    }

}
