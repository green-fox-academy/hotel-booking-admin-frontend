import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HotelService } from '../hotel.service';
import { HttpService } from '../../httprequest.service';
import { GetHotelsService } from '../get-hotels.service';

@Component({
    selector: 'app-single-hotel',
    templateUrl: './single-hotel.component.html',
    styleUrls: ['../../assets/app.component.scss'],
    providers: [HttpService],
})
export class SingleHotelComponent implements OnInit {
    timeoutId;
    timeRestarter;
    autosaveVisible = true;
    timeAgo = 1;
    counter = setInterval(this.setTimeAgo.bind(this), 1000);

    constructor(
        private updateservice: HttpService,
        public hotelservice: HotelService,
        public gethotelservice: GetHotelsService,
        public router: Router,
    ) { }


    updateHotel(id) {
        const endpoint = 'api/hotels/' + id;
        this.autosaveVisible = false;
        console.log(this.hotelservice.hotel.hotelWithId.data)
        this.updateservice.httpRequest(this.hotelservice.hotel.hotelWithId.data, endpoint, 'patch')
            .subscribe(
                response => {
                    this.gethotelservice.getHotels()
                    this.timeAgo = 0;
                },
                error => {
                    console.error(error)
                }
            );
        }

    setTimeAgo () {
        this.timeAgo++;
    };

    autoSave(id) {
        this.timeRestarter = clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => this.updateHotel(id), 1000);
    }

    redirect() {
        this.router.navigate(['hotels'])
    }

    ngOnInit(
    ) { }
}
