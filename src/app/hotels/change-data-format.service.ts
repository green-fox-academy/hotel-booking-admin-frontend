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
        this.hotelAttributes.hotelFeatures.attributes.forEach ((attr) => {
            this.hotelservice.hotel.data.attributes[this.setKeyFormatObject(attr.key)] = attr.value;
        })
        return(this.hotelservice.hotel.data)
    }

    convertHotelAttributesID(hotelWithId) {
        this.hotelAttributes.hotelFeatures.attributes.forEach ((attr) => {
            hotelWithId.attributes[this.setKeyFormatObject(attr.key)] = attr.value;
        })
        return(hotelWithId.attributes)
    }

    convertResponse(response) {
        // this.hotelAttributes.data.attributes.forEach ((attr, index) => {
        //
        // })
        this.hotelAttributes.hotelFeatures.attributes[0].value = response.data.attributes.has_wifi;
        this.hotelAttributes.hotelFeatures.attributes[1].value = response.data.attributes.has_parking;
        this.hotelAttributes.hotelFeatures.attributes[2].value = response.data.attributes.has_pets;
        this.hotelAttributes.hotelFeatures.attributes[3].value = response.data.attributes.has_restaurant;
        this.hotelAttributes.hotelFeatures.attributes[4].value = response.data.attributes.has_bar;
        this.hotelAttributes.hotelFeatures.attributes[5].value = response.data.attributes.has_swimming_pool;
        this.hotelAttributes.hotelFeatures.attributes[6].value = response.data.attributes.has_air_conditioning;
        this.hotelAttributes.hotelFeatures.attributes[7].value = response.data.attributes.has_gym
    }
}
