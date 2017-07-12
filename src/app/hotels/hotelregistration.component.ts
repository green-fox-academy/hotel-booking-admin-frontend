import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

import { HttpService } from '../httprequest.service';
import { HotelService } from './hotel.service';
import { AttributesComponent } from './attributes/attributes.component';
import { GetHotelsService } from './get-hotels.service';
import { HotelAttributesService } from './attributes/hotel-attributes.service'
import { ChangeDataFormatService } from './change-data-format.service';
import { RoomService } from './single-hotel/room-register/room-service';

import 'rxjs/add/operator/map';

@Component({
    selector: 'addhotel-page',
    templateUrl: './hotelregistration.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [HttpService, ChangeDataFormatService]
})

export class HotelComponent {
    title = 'Hotels';
    hotelWithId;
    loading = false;
    hotelDetails;
    showHide: boolean;
    formIn = false;
    formOut = true;
    hotelsUp = false;
    hotelsDown = true;
    undoHidden = true;
    timeout;

    constructor (
        public httpservice: HttpService,
        public hotelservice: HotelService,
        public gethotels: GetHotelsService,
        public router: Router,
        public hotelAttributes: HotelAttributesService,
        public changer: ChangeDataFormatService,
        public roomservice: RoomService
    ) { }

    onRegistration() {
        this.loading = true;
        const endpoint = 'api/hotels';
        const message = { data: this.changer.convertHotelAttributes() };
        this.httpservice.httpRequest(message, endpoint, 'post')
            .subscribe(
                response => {
                    this.loading = false;
                    this.gethotels.getHotels();
                },
                error => {
                    console.error(error);
                    this.loading = false;
                });
    }

    getHotelId(id) {
        const endpoint = 'api/hotels/' + id;
        this.httpservice.httpRequest(this.hotelservice.hotel, endpoint, 'get')
            .subscribe(
                response => {
                    this.hotelservice.hotel.hotelWithId = response;
                    this.changer.convertResponse(response);
                    this.router.navigate(['hotels/1']);
                },
                error => console.error(error));
    }

    deleteHotelId(id) {
        const endpoint = 'api/hotels/' + id;
        this.httpservice.httpRequest(this.hotelservice.hotel, endpoint, 'delete')
            .subscribe(
                response => {
                    this.gethotels.getHotels();
                    this.undoHidden = true;
                },
                error => console.error(error));
    }

    startDeleteTimeOut(id) {
        this.undoHidden = false;
        this.timeout = setTimeout(() => this.deleteHotelId(id), 5000);
    }

    undoDeleteTimeout() {
        clearTimeout(this.timeout);
        this.undoHidden = true;
    }

    changeShowStatus() {
        this.showHide = !this.showHide;
    }

    dropForm() {
        this.changeShowStatus()
        if (this.formOut) {
            this.formIn = true;
            this.formOut = false;
            this.hotelsUp = true;
            this.hotelsDown = false;
        } else {
            this.formIn = false;
            this.formOut = true;
            this.hotelsUp = false;
            this.hotelsDown = true;
        }
    }
}
