import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel.service';

@Component({
  selector: 'app-room-register',
  templateUrl: './room-register.component.html',
  styleUrls: ['../../../../app/assets/app.component.scss']
})
export class RoomRegisterComponent implements OnInit {

  constructor(public hotelservice: HotelService) { }

  ngOnInit() {
  }

}
