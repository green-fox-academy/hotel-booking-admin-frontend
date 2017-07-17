import { Component, OnInit } from '@angular/core';
import { DragNDropService } from './drag-n-drop.service';
import { DomSanitizer } from '@angular/platform-browser';

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

    readonly STATUS_INITIAL = 0;
    readonly STATUS_SAVING = 1;
    readonly STATUS_SUCCESS = 2;
    readonly STATUS_FAILED = 3;

    constructor(
        public _DomSanitizer: DomSanitizer,
        private _svc: DragNDropService
    ) {
    this.reset(); // set initial state
    }

    onfilesChange(fieldName: string, fileList: FileList) {
    // handle file changes
    const formData = new FormData();

    if (!fileList.length) return;

    // append the files to FormData
    Array
        .from(Array(fileList.length).keys())
        .map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
        // console.log(fileList)
        });

    // save it
    this.save(formData);
    }

    reset() {
    this.currentStatus = this.STATUS_INITIAL;
    this.uploadedFiles = [];
    this.uploadError = null;
    }

    save(formData: FormData) {
    // upload data to the server
    this.currentStatus = this.STATUS_SAVING;
    this._svc.upload(formData)
        .take(1)
        .delay(1500) // DEV ONLY: delay 1.5s to see the changes
        .subscribe(x => {
        this.uploadedFiles = [].concat(x);
        this.currentStatus = this.STATUS_SUCCESS;
        console.log(this.uploadedFiles)
        }, err => {
        this.uploadError = err;
        this.currentStatus = this.STATUS_FAILED;
        })
    }

    ngOnInit() {
    }

}
