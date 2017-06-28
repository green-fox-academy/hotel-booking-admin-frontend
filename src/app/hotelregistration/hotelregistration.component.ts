import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

import { HttpService } from '../httprequest.service';
import { HotelService } from './hotel.service';
import { AttributesComponent } from './attributes/attributes.component';

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
                    console.log(response)
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
                    console.log(error)
                });
    }

    getHotelId(id) {
        const endpoint = 'https://cake-cup.glitch.me/api/hotels/1'
        this.hotelregistrationservice.httpRequest(this.hotelservice.hotel, endpoint, 'get')
            .subscribe(
                response => {
                    this.hotelservice.hotel.hotelwithID2 = response;
                    this.router.navigate(['hotels/1'])
                    console.log(this.hotelservice.hotel.hotelwithID2)
                },
                error => {
                    console.log(error)
                });
    }

    changeShowStatus() {
        this.showHide = !this.showHide;
    }

    logging() {
        console.log(this.hotelservice.hotel.hotelList);
    }
}
