import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HotelregistrationService } from './hotelregistration.service';
import { Router } from '@angular/router';
import { Hotel } from './hotels'

@Component({
    selector: 'addhotel-page',
    templateUrl: './hotelregistration.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [HotelregistrationService]
})

export class HotelComponent {
    title = 'Add Hotel';
    hotel = new Hotel;
    constructor (
        private hotelregistrationservice: HotelregistrationService,
        public router: Router) { }


    onRegistration() {
        this.hotelregistrationservice.addHotels(this.hotel)
            .subscribe(
                response => {
                    this.hotel.attributes
                },
                error => alert(error),
                () => {
                }
            );
    }
}
