import { Injectable } from '@angular/core';

import { HotelService } from './hotel.service';
import { HotelAttributesService } from './attributes/hotel-attributes.service';

@Injectable()
export class ChangeDataFormatService {

    constructor(
        public hotelservice: HotelService,
        public hotelAttributes: HotelAttributesService
    ) { }

    setKeyFormatObject(key) {
        return 'has_' + key.toLowerCase().replace(/ /g, '_');
    }

    convertHotelAttributes() {
        this.hotelAttributes.data.attributes.forEach ((attr) => {
            this.hotelservice.hotel.data.attributes[this.setKeyFormatObject(attr.key)] = attr.value;
        })
        return(this.hotelservice.hotel.data)
    }
}
