import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RoutingService } from './routing.service';

describe('RoutingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                Router,
                RoutingService
            ]
        });
    });

    it('should be created', inject([RoutingService], (service: RoutingService) => {
        expect(service).toBeTruthy();
    }));
});
