import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { HotelService } from '../hotel.service';

@Injectable()
export class DragNDropService {

    constructor(
        public hotelservice: HotelService,
    ) {}

  upload(formData: any) {
        const photos: any[] = formData.getAll('photos');
        const promises = photos.map((x: File) => this.getImage(x)
            .then(img => {
                return({
                id: img,
                originalName: x.name,
                fileName: x.name,
                url: img
            })}));
        return Observable.fromPromise(Promise.all(promises));
    }

    private getImage(file: File) {
        const fReader = new FileReader();
        const img = document.createElement('img');

        const readFile = new Promise((resolve, reject) => {
            fReader.onload = () => {
                resolve(img.src = fReader.result);
            }
            fReader.readAsDataURL(file);
        })

        const readImg = new Promise((resolve, reject) => {
            img.onload = () => {
                resolve(img)
            }
        })
        return Promise.all([readFile, readImg]).then(img => this.getBase64Image(img))
    }

    private getBase64Image(img) {
        const canvas = document.createElement('canvas');
        this.hotelservice.hotel.data.attributes.main_image_src = img[1].src

        canvas.width = img[1].width;
        canvas.height = img[1].height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img[1], 0, 0);

        const dataURL = canvas.toDataURL('image/png');
        return dataURL;
    }

}
