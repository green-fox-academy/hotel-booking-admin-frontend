import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HotelService } from '../hotel.service';
import { HttpService } from '../../httprequest.service';


@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['../../assets/app.component.scss'],
  providers: [HttpService],
})
export class SingleHotelComponent implements OnInit {

  constructor(
    private updateservice: HttpService,
    public hotelservice: HotelService,
  ) { }

  updateHotel(id) {
        const endpoint = 'https://cake-cup.glitch.me/api/hotels/'+ id;
        this.updateservice.httpRequest(this.hotelservice.hotel.data.attributes, endpoint, 'patch')
            .subscribe(
                response => {

                },
                error => {
                    console.error(error)
                });
  }

  ngOnInit(
  ) { }

}
