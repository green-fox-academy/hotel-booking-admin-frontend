import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RoutingService } from './routing.service';
import { HotelComponent} from './hotels/hotelregistration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleHotelComponent } from './hotels/single-hotel/single-hotel.component';
import { RoomRegisterComponent } from './hotels/single-hotel/room-register/room-register.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'hotels', component: HotelComponent, canActivate: [RoutingService] },
    { path: '', component: HomeComponent, canActivate: [RoutingService] },
    { path: 'hotels/1', component: SingleHotelComponent, canActivate: [RoutingService] },
    { path: 'hotels/1/rooms', component: RoomRegisterComponent },
    { path: '**', redirectTo: 'login' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
