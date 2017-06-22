import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HotelregistrationService } from './hotelregistration.service';
import { Router } from '@angular/router';
import { HotelService } from './hotel.service';
import { AttributesComponent } from './attributes/attributes.component';

@Component({
    selector: 'addhotel-page',
    templateUrl: './hotelregistration.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [HotelregistrationService, HotelService]
    
})

export class HotelComponent {
    title = 'Add Hotel';
    loading = false;
    hotelDetails;

    constructor (
        private hotelregistrationservice: HotelregistrationService,
        public hotelservice: HotelService,
        public router: Router) {  }

    onRegistration() {
        this.loading = true;
        this.hotelregistrationservice.addHotels(this.hotelservice.hotel)
            .subscribe(
                response => {
                    // this.hotelDetails = response;
                    console.log(response)
                },
                error => alert(error),
                () => {
                this.loading = false;
                }
            );
    }
}
