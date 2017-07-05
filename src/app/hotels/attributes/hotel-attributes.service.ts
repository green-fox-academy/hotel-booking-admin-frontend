import { Injectable } from '@angular/core';

import { HotelFeatures } from './hotelattributes'

@Injectable()
export class HotelAttributesService {
    hotelFeatures = new HotelFeatures;
}
