import { TestBed, inject } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';

import { RoutingService } from './routing.service';

class Routing {
    public routermodule: RouterModule
    }

describe('RoutingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            RoutingService,
            {provide: Router, useClass: Routing}
        ],
        
    });
  });

  it('should be created', inject([RoutingService], (service: RoutingService) => {
    expect(service).toBeTruthy();
  }));
});
