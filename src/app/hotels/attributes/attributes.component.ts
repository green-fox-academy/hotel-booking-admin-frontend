import { Component, Input } from '@angular/core';

import { HotelComponent } from '../hotelregistration.component'

@Component({
    selector: 'hotel-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['../../assets/app.component.scss'],
})
export class AttributesComponent {
    @Input() attributes;

    constructor() { }
}
