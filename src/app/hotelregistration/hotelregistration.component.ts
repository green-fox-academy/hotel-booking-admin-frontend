import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

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
    animations: [
        trigger('activateMenu', [
            state('inactive', style({
                transform: 'translateY(-100%)'
            })),
            state('active', style({
                transform: 'translateY(0)'
            })),
            transition('inactive => active', animate('1s ease-out')),
            transition('active => inactive', animate('1s ease-out')),
        ]),
        trigger('moveHotels', [
            state('inactive', style({
                transform: 'translateY(-11%)'
            })),
            state('active', style({
                margin: '0',
            })),
            transition('inactive => active', animate('1s ease-out')),
            transition('active => inactive', animate('1s ease-out')),
        ])
    ]
})

export class HotelComponent {
    title = 'Hotels';
    hotelWithId;
    loading = false;
    hotelDetails;
    showHide: boolean;
    state = 'inactive';

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
        const endpoint = 'api/hotels/'+id;
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
                },
                error => {
                    console.error(error);
                });
    }

    changeShowStatus() {
        this.showHide = !this.showHide;
    }

    dropMenu() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        this.showHide = (this.showHide === true ? false : true);
    }

    moveHotel() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        // this.showHide = (this.showHide === true ? false : true);
    }
}
