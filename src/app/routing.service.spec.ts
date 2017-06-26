// import { TestBed, inject } from '@angular/core/testing';
// import { Router, RouterModule } from '@angular/router';

// import { RoutingService } from './routing.service';

// class Routing {
//     public routermodule: RouterModule
//     }

// describe('RoutingService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//         providers: [
//             RoutingService,
//             {provide: Router, useClass: Routing}
//         ],
        
//     });
//   });

//   it('should be created', inject([RoutingService], (service: RoutingService) => {
//     expect(service).toBeTruthy();
//   }));
// });

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TestBed, inject, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { RouterModule } from '@angular/router';
import { RoutingService } from './routing.service';

class Routing {
    public routermodule: RouterModule
    }

describe('Logged in guard should', () => {
    let routingService: RoutingService;
    let canActivate : CanActivate;
    let router = {
        navigate: jasmine.createSpy('navigate')
    };

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, CommonModule, HttpModule],
            providers: [RoutingService,
                {provide: Router, useValue: router}
            ]
        })
    }));

    // synchronous beforeEach
    beforeEach(() => {
        routingService = TestBed.get(RoutingService);
    });

    it('be able to hit route when user is logged in', () => {
        expect(routingService.canActivate()).toBe(true);
    });

    it('not be able to hit route when user is not logged in', () => {
        expect(routingService.canActivate()).toBe(false);
    });
});
