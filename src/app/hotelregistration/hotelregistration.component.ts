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
    loading = false;

    constructor (
        private hotelregistrationservice: HotelregistrationService,
        public router: Router) { 
        console.log(this.hotel);
        console.log(this.hotel.data.attributes);
        
        }


    onRegistration() {
        this.loading = true;
        this.hotelregistrationservice.addHotels(this.hotel)
            .subscribe(
                response => {
                    this.hotel.data = response
                },
                error => alert(error),
                () => {
                this.loading = false;
                }
            );
    }
}
