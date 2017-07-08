import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RoutingService } from './routing.service';
import { HotelComponent } from './hotels/hotelregistration.component';
import { AttributesComponent } from './hotels/attributes/attributes.component';
import { StarratingComponent } from './hotels/starrating/starrating.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleHotelComponent } from './hotels/single-hotel/single-hotel.component';
import { HotelService } from './hotels/hotel.service';
import { GetHotelsService } from './hotels/get-hotels.service';
import { HttpService } from './httprequest.service';
import { HotelAttributesService } from './hotels/attributes/hotel-attributes.service';
import { RoomRegisterComponent } from './hotels/single-hotel/room-register/room-register.component';
import { RoomService } from './hotels/single-hotel/room-register/room-service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HotelComponent,
        AttributesComponent,
        StarratingComponent,
        NavbarComponent,
        SingleHotelComponent,
        RoomRegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        appRouting,
        HttpModule,
        JsonpModule,
        BrowserAnimationsModule
    ],
    providers: [
        RoutingService,
        HotelService,
        GetHotelsService,
        HttpService,
        HotelAttributesService,
        RoomService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
