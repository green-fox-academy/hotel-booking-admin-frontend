import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel.service';
import { HttpService } from '../../../httprequest.service';

@Component({
  selector: 'app-room-register',
  templateUrl: './room-register.component.html',
  styleUrls: ['../../../../app/assets/app.component.scss'],
  providers: [HttpService]
})
export class RoomRegisterComponent implements OnInit {
    loading = false;

  constructor(
    public hotelservice: HotelService,
    private updateservice: HttpService
    ) { }

    roomlister(id) {
        this.loading = true;
        const endpoint = 'api/hotels/' + id + 'relationships/rooms';
        this.updateservice.httpRequest('', endpoint, 'get')
            .subscribe(
                response => {
                    this.loading = false;
                },
                error => {
                    console.error(error)
                }
            );
        }

  ngOnInit() {
  }

}