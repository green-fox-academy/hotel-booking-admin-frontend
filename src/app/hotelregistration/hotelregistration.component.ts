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
    providers: [HttpService, HotelService],
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
        const endpoint = 'https://cake-cup.glitch.me/api/hotels';
        this.hotelregistrationservice.httpRequest(this.hotelservice.hotel, endpoint, 'post')
            .subscribe(
                response => {
                    console.log(response)
                    this.loading = false;
                    this.getHotels()
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
        const endpoint = 'https://cake-cup.glitch.me/api/hotels/'+id;
        this.hotelregistrationservice.httpRequest(this.hotelservice.hotel, endpoint, 'get')
            .subscribe(
                response => {
                    this.hotelservice.hotel.hotelwithID2 = response;
                    this.router.navigate(['hotels/1'])
                    console.log(this.hotelservice.hotel.hotelwithID2)
                },
                error => {
                    console.error(error)
                });
    }

    response() {
        return this.hotelservice.hotel.hotelwithID2
    }

    changeShowStatus() {
        this.showHide = !this.showHide;
    }
}
