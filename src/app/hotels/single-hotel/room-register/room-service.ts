import { Injectable } from '@angular/core';

import { Room } from './rooms'
import { HttpService } from '../../../httprequest.service';

@Injectable()
export class RoomService {
    constructor(
    public httpservice: HttpService
    ) { }

    room = new Room;

}
