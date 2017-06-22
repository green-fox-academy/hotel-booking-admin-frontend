import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Router } from '@angular/router';

import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RoutingService } from './routing.service';
import { HotelComponent } from './hotelregistration/hotelregistration.component';
import { AttributesComponent } from './hotelregistration/attributes/attributes.component';
import { StarratingComponent } from './hotelregistration/starrating/starrating.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HotelComponent,
        AttributesComponent,
        StarratingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        appRouting,
        HttpModule,
        JsonpModule
    ],
    providers: [RoutingService],
    bootstrap: [AppComponent]
})
export class AppModule { }
