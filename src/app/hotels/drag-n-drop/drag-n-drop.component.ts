import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-drag-n-drop',
    templateUrl: './drag-n-drop.component.html',
    styleUrls: ['../../assets/app.component.scss']
})
export class DragNDropComponent implements OnInit {
    private fileList: any = [];
    private invalidFiles: any = [];

    constructor() { }

    onFilesChange(fileList: Array<File>) {
        this.fileList = fileList;
    }

    onFilesInvalids(fileList: Array<File>) {
        this.invalidFiles = fileList;
    }

    ngOnInit() {
    }

}
