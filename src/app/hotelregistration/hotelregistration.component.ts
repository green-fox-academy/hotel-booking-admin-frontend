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
    providers: [HttpService]
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
        public router: Router) {
        }

    onRegistration() {
        this.loading = true;
        const endpoint = 'api/hotels';
        const message = { data: this.hotelservice.hotel.data }
        this.httpservice.httpRequest(message, endpoint, 'post')
            .subscribe(
                response => {
                    this.loading = false;
                    this.gethotels.getHotels()
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
                    this.router.navigate(['hotels/1'])
                },
                error => {
                    console.error(error);
                });
    }

    deleteHotelId(id) {
        const endpoint = 'api/hotels/' + id;
        this.httpservice.httpRequest(this.hotelservice.hotel, endpoint, 'delete')
            .subscribe(
                response => {
                    this.gethotels.getHotels();
                    this.undoHidden = true;
                },
                error => {
                    console.error(error);
                });
    }

    startDeleteTimeOut(id) {
        this.undoHidden = false;
        console.log(id)
        this.timeout = setTimeout(() => this.deleteHotelId(id), 5000)
    }

    undoDeleteTimeout() {
        clearTimeout(this.timeout)
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
