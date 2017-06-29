import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

import { HttpService } from '../httprequest.service';
import { HotelService } from './hotel.service';
import { AttributesComponent } from './attributes/attributes.component';
import { GetHotelsService } from './get-hotels.service';

import 'rxjs/add/operator/map';

@Component({
    selector: 'addhotel-page',
    templateUrl: './hotelregistration.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [HttpService],
})

export class HotelComponent {
    title = 'Hotels';
    hotelWithId;
    loading = false;
    hotelDetails;
    showHide: boolean;

    constructor (
        public httpservice: HttpService,
        public hotelservice: HotelService,
        public gethotels: GetHotelsService,
        public router: Router) {
        }

    onRegistration() {
        this.loading = true;
        const endpoint = 'api/hotels';
        const message = { data: this.hotelservice.hotel.data }
        this.httpservice.httpRequest(message, endpoint, 'post')
            .subscribe(
                response => {
                    console.log(response)
                    this.loading = false;
                    this.gethotels.getHotels()
                },
                error => {
                    console.error(error);
                    this.loading = false;
                });
    }

    getHotelId(id) {
        const endpoint = 'https://two-ferns.glitch.me/api/hotels/'+id;
        this.httpservice.httpRequest(this.hotelservice.hotel, endpoint, 'get')
            .subscribe(
                response => {
                    this.hotelservice.hotel.hotelWithId = response;
                    console.log(this.hotelservice.hotel.hotelWithId)
                    this.router.navigate(['hotels/1'])
                },
                error => {
                    console.error(error);
                });
    }

    deleteHotelId(id) {
        const endpoint = 'api/hotels/' + id;
        console.log(this.hotelservice.hotel.hotelList)
        this.httpservice.httpRequest(this.hotelservice.hotel, endpoint, 'delete')
            .subscribe(
                response => {
                    this.gethotels.getHotels();
                },
                error => {
                    console.error(error);
                });
    }

    changeShowStatus() {
        this.showHide = !this.showHide;
    }
}
