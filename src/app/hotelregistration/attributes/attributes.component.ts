import { Component } from '@angular/core';

import { HotelService } from '../hotel.service';
import { HotelComponent } from '../hotelregistration.component'
import { Data } from './hotelattributes'

@Component({
    selector: 'hotel-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['../../assets/app.component.scss'],
})
export class AttributesComponent {
    // data = new Data;
    // hotelattributes = Object.keys(this.hotelservice.hotel.data.attributes);

    constructor(
        public hotelservice: HotelService,
    ) { }
}
