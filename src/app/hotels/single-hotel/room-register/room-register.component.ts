import { Component, OnInit } from '@angular/core';

import { RoomService } from './room-service';
import { HttpService } from '../../../httprequest.service';
import { GetroomsService } from '../rooms/getrooms.service';

@Component({
    selector: 'app-room-register',
    templateUrl: './room-register.component.html',
    styleUrls: ['../../../../app/assets/app.component.scss'],
    providers: [HttpService]
})
export class RoomRegisterComponent implements OnInit {
    loading = false;
    timeoutId;
    timeRestarter;
    messageActive = true;
    messageInactive = false;
    saving = false;
    emptyAutosave = true;
    emptyMessage = true;

  constructor(
    public roomservice: RoomService,
    private registerservice: HttpService,
    public getroomsservice: GetroomsService
    ) { }

    registerRoom(hotelId) {
        this.loading = true;
        this.saving = true;
        const messageFirst = { type: 'hotels', id: this.roomservice.room.data.id };
        const attr = { attributes: this.roomservice.room.data.attributes }
        const message = Object.assign(messageFirst, attr)
        const endpoint = 'api/hotels/' + hotelId + '/relationships/rooms';
        this.registerservice.httpRequest(message, endpoint, 'post')
            .subscribe(
                response => {
                    this.loading = false;
                    this.saving = false;
                    this.getroomsservice.getRooms(hotelId);
                },
                error => console.error(error)
            );
        }

    autoSave(id) {
        this.timeRestarter = clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => this.registerRoom(id), 1000);
    }

    fadeOutMessageTimer() {
        setTimeout(() => this.fadeOutMessage(), 4000)
    }

    fadeOutMessage() {
        this.messageActive = false;
        this.messageInactive = true;
    }

    ngOnInit() {
    }

}
