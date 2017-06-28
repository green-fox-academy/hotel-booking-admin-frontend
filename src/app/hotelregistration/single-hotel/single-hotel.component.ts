import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../../httprequest.service';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['../../assets/app.component.scss'],
  providers: [HotelService]
})
export class SingleHotelComponent implements OnInit {

  constructor(
    public hotelservice: HotelService,
  ) { console.log(hotelservice.hotel.hotelwithID)}

  ngOnInit() {
  }

}
