import { Component, OnInit } from '@angular/core';

import { HotelService } from '../hotel.service';
import { HotelComponent } from '../hotelregistration.component'

@Component({
  selector: 'hotel-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['../../assets/app.component.scss']
})
export class AttributesComponent implements OnInit {

  constructor(
    public hotelservice: HotelService,
  ) {  }

  ngOnInit() {
  }
}
