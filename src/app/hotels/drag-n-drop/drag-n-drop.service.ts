import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DragNDropService {

  constructor() {
  }

  upload(formData: any) {
        const photos: any[] = formData.getAll('photos');
        const promises = photos.map((x: File) => this.getImage(x)
            .then(img => {
                console.log(img, '1')
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
                console.log(img.width, img.height, 'file loaded');
            }
            fReader.readAsDataURL(file);
        })
        
        const readImg = new Promise((resolve, reject) => {
            img.onload = () => {
                console.log(img, img.width, img.height, 'img loaded');
                // const imgArr = [img, img.width, img.height]
                resolve(img)
            }
        })

        return Promise.all([readFile, readImg]).then(img => {
            console.log(img, 'alma')
            this.getBase64Image(img)
        })
    }

    private getBase64Image(img) {
        console.log(img, "3")
        console.log(img[1].width)
        console.log(img[1].height)
        const canvas = document.createElement('canvas');
        canvas.width = img[1].width;
        canvas.height = img[1].height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const dataURL = canvas.toDataURL('image/png');
        console.log(img)
        console.log(dataURL)
        return dataURL;
    }

}
