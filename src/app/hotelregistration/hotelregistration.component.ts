import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HotelregistrationService } from './hotelregistration.service';
import { Router } from '@angular/router';
import { Hotel } from './hotels';
import { AttributesComponent } from './attributes/attributes.component';

@Component({
    selector: 'addhotel-page',
    templateUrl: './hotelregistration.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [HotelregistrationService, AttributesComponent]
    
})

export class HotelComponent {
    title = 'Add Hotel';
    hotel = new Hotel;
    loading = false;
    hotelDetails;

    constructor (
        private hotelregistrationservice: HotelregistrationService,
        public router: Router) {     
        }


    onRegistration() {
        this.loading = true;
        this.hotelregistrationservice.addHotels(this.hotel)
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
