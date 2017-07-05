import { Injectable } from '@angular/core';

import { HotelService } from './hotel.service';
import { HotelAttributesService } from './attributes/hotel-attributes.service';

@Injectable()
export class ChangeDataFormatService {
    keyMapping = {
        has_wifi: 'Wifi',
        has_parking: 'Parking',
        has_pets: 'Pets',
        has_restaurant: 'Restaurant',
        has_bar: 'Bar',
        has_swimming_pool: 'Swimming pool',
        has_air_conditioning: 'Air conditioning',
        has_gym: 'Gym'
    }

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
        Object.keys(response.data.attributes).forEach((resEl) => {
            Object.keys(this.keyMapping).forEach((keyEl, index) => {
                if (resEl === keyEl) {
                    if (this.keyMapping[keyEl] === this.hotelAttributes.hotelFeatures.attributes[index].key) {
                        this.hotelAttributes.hotelFeatures.attributes[index].value = response.data.attributes[resEl]
                    }
                }
            })
        })
    }
}
