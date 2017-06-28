import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

import { HttpService } from '../httprequest.service';
import { HotelService } from './hotel.service';
import { AttributesComponent } from './attributes/attributes.component';

import 'rxjs/add/operator/map';

@Component({
    selector: 'addhotel-page',
    templateUrl: './hotelregistration.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [HttpService, HotelService]
})

export class HotelComponent {
    title = 'Hotels';
    hotelWithId;
    loading = false;
    hotelDetails;
    showHide: boolean;

    constructor (
        private hotelregistrationservice: HttpService,
        public hotelservice: HotelService,
        public router: Router) {
            this.getHotels();
        }

    onRegistration() {
        this.loading = true;
        const endpoint = 'https://cake-cup.glitch.me/hotels';
        this.hotelregistrationservice.httpRequest(this.hotelservice.hotel, endpoint, 'post')
            .subscribe(
                response => {
                    this.loading = false;
                },
                error => {
                    console.error(error)
                    this.loading = false;
                });
    }

    getHotels() {
        const endpoint = 'https://cake-cup.glitch.me/api/hotels'
        this.hotelregistrationservice.httpRequest(this.hotelservice.hotel, endpoint, 'get')
            .subscribe(
                response => {
                    this.hotelservice.hotel.hotelList = response;
                },
                error => {
                    console.error(error)
                });
    }

    getHotelId(id) {
        const endpoint = 'https://cake-cup.glitch.me/api/hotels/1'
        this.hotelregistrationservice.httpRequest(this.hotelservice.hotel, endpoint, 'get')
            .subscribe(
                response => {
                    this.hotelWithId = response;
                    console.log(this.hotelWithId)
                },
                error => {
                    console.error(error)
                });
    }

    deleteHotelId(id) {
        const endpoint = 'https://cake-cup.glitch.me/api/hotels/' + id;
        console.log(id)
        this.hotelregistrationservice.httpRequest(this.hotelservice.hotel, endpoint, 'delete')
            .subscribe(
                response => {
                    console.log('removed')
                    console.log(response)
                    this.getHotels();
                },
                error => {
                    console.error(error)
                });
    }

    changeShowStatus() {
        this.showHide = !this.showHide;
    }
}
