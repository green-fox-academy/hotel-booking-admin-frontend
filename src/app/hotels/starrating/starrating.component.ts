import { Component } from '@angular/core';

import { HotelService } from '../hotel.service';
import { HotelComponent } from '../hotelregistration.component';
import { Starrates } from './starrates';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['../../assets/app.component.scss']
})

export class StarratingComponent {
   starMaker: number;
   starrates = new Starrates;

  constructor(
    public hotelservice: HotelService,
  ) { }

  starAdder(value: number) {
    if (this.starMaker === value) {
      this.starMaker = 0;
    } else {
      this.starMaker = value;
    }
  }

}
