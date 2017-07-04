import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HotelService } from '../hotel.service';
import { HttpService } from '../../httprequest.service';
import { GetHotelsService } from '../get-hotels.service';
import { HotelAttributesService } from '../attributes/hotel-attributes.service'
import { ChangeDataFormatService } from '../change-data-format.service';

@Component({
    selector: 'app-single-hotel',
    templateUrl: './single-hotel.component.html',
    styleUrls: ['../../assets/app.component.scss'],
    providers: [HttpService, ChangeDataFormatService],
})
export class SingleHotelComponent implements OnInit {
    timeoutId;
    timeRestarter;
    messageActive = true;
    messageInactive = false;
    saving = false;
    emptyAutosave = true;
    emptyMessage = true;
    timeAgo = 1;
    counter = setInterval(this.setTimeAgo.bind(this), 1000);

    constructor(
        private updateservice: HttpService,
        public hotelservice: HotelService,
        public gethotelservice: GetHotelsService,
        public router: Router,
        public hotelAttributes: HotelAttributesService,
        public changer: ChangeDataFormatService
    ) { }


    updateHotel(id) {
        this.emptyAutosave = false;
        this.emptyMessage = false
        this.saving = true;
        this.messageActive = true;
        const endpoint = 'api/hotels/' + id;
        const messageFirst = {type: 'hotels', id: this.hotelservice.hotel.hotelWithId.data.id};
        const attr = { attributes: this.changer.convertHotelAttributesID(this.hotelservice.hotel.hotelWithId.data) }
        const message = Object.assign(messageFirst, attr)
        this.updateservice.httpRequest(message, endpoint, 'patch')
            .subscribe(
                response => {
                    this.gethotelservice.getHotels()
                    this.fadeOutMessageTimer()
                    this.timeAgo = 0;
                    this.saving = false;
                    this.emptyAutosave = true;
                    this.messageInactive = false;
                },
                error => {
                    console.error(error)
                }
            );
        }

    setTimeAgo () {
        this.timeAgo++;
    };

    autoSave(id) {
        this.timeRestarter = clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => this.updateHotel(id), 1000);
    }

    fadeOutMessageTimer() {
        setTimeout(() => this.fadeOutMessage(), 4000)
    }

    fadeOutMessage() {
        this.messageActive = false;
        this.messageInactive = true;
    }

    redirect() {
        this.router.navigate(['hotels'])
    }

    ngOnInit(
    ) { }
}
