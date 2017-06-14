import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
