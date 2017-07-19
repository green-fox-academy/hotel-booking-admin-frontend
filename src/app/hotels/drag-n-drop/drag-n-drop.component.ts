import { Component, OnInit } from '@angular/core';

import { DragNDropService } from './drag-n-drop.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HotelService } from '../hotel.service';

@Component({
    selector: 'app-drag-n-drop',
    templateUrl: './drag-n-drop.component.html',
    styleUrls: ['../../assets/app.component.scss'],
    providers: [DragNDropService]
})
export class DragNDropComponent implements OnInit {
    uploadedFiles = [];
    uploadError;
    currentStatus: number;
    uploadFieldName = 'photos';
    imgUploaded;

    readonly STATUS_INITIAL = 0;
    readonly STATUS_SAVING = 1;
    readonly STATUS_SUCCESS = 2;
    readonly STATUS_FAILED = 3;

    constructor(
        public _DomSanitizer: DomSanitizer,
        private dndservice: DragNDropService,
        public hotelservice: HotelService
    ) {
        this.reset();
    }

    onfilesChange(fieldName: string, fileList: FileList) {
        const formData = new FormData();
        Array
            .from(Array(fileList.length).keys())
            .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
            });

        this.save(formData);
    }

    reset() {
        this.currentStatus = this.STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
    }

    save(formData: FormData) {
        this.currentStatus = this.STATUS_SAVING;
        this.dndservice.upload(formData)
            .take(1)
            .subscribe(x => {
                this.removeBackgroundImg();
                this.uploadedFiles = [].concat(x);
                this.currentStatus = this.STATUS_SUCCESS;
            }, err => {
                this.uploadError = err;
                this.currentStatus = this.STATUS_FAILED;
            })
    }

    removeBackgroundImg() {
        this.imgUploaded = {'background-image': 'none', 'padding': '0'}
    }

    ngOnInit() {
    }

}
