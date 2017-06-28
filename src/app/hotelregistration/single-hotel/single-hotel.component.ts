import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['../../assets/app.component.scss'],
})
export class SingleHotelComponent implements OnInit {

  constructor(
    public hotelservice: HotelService,
  ) { console.log(hotelservice.hotel.hotelwithID2)}

  ngOnInit(
  ) { }

}
