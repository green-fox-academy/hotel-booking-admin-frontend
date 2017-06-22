import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

import { PostService } from '../postrequest.service';
import { HotelService } from './hotel.service';
import { AttributesComponent } from './attributes/attributes.component';

@Component({
    selector: 'addhotel-page',
    templateUrl: './hotelregistration.component.html',
    styleUrls: ['../assets/app.component.scss'],
    providers: [PostService, HotelService]
})

export class HotelComponent {
    title = 'Add Hotel';
    loading = false;
    hotelDetails;
    endpoint = 'http://localhost:8080/hotels';

    constructor (
        private hotelregistrationservice: PostService,
        public hotelservice: HotelService,
        public router: Router) {  }

    onRegistration() {
        this.loading = true;
        this.hotelregistrationservice.postRequest(this.hotelservice.hotel, this.endpoint)
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
