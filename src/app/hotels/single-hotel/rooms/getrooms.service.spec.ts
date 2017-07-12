import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { GetroomsService } from './getrooms.service';
import { HttpService } from '../../../httprequest.service';
import { RoomService } from '../room-register/room-service';

describe('GetroomsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
                GetroomsService,
                HttpService,
                RoomService
            ]
        });
    });

    it('should be created', inject([GetroomsService], (service: GetroomsService) => {
        expect(service).toBeTruthy();
    }));
});
