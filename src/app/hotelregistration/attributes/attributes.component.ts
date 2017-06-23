import { Component, Input } from '@angular/core';

import { HotelService } from '../hotel.service';
import { HotelComponent } from '../hotelregistration.component'
import { Data } from './hotelattributes'

@Component({
    selector: 'hotel-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['../../assets/app.component.scss'],
})
export class AttributesComponent {
    attributes = new Data;

    // @Input() attributes;

    constructor(
        public hotelservice: HotelService,
    ) {
        // console.log(Object.keys(this.attributes.attributes[0]))
        // console.log(this.attributes.attributes[0]['Wifi'])
    }

}
