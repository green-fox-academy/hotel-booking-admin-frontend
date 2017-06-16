import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoutingService } from './routing.service';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [RoutingService] },
    { path: 'home', component: HomeComponent}
];

// @Component({
//     providers: [RoutingService]
// })

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
