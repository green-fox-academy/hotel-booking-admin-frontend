import { Injectable } from '@angular/core';

import { Hotel } from './hotels'

@Injectable()
export class HotelService {
    hotel = new Hotel;
}
