import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-drag-n-drop',
    templateUrl: './drag-n-drop.component.html',
    styleUrls: ['../../assets/app.component.scss']
})
export class DragNDropComponent implements OnInit {
    // currentStatus: number;
    // uploadFieldName = 'photos';

    // readonly STATUS_INITIAL = 0;
    // readonly STATUS_SAVING = 1;
    // readonly STATUS_SUCCESS = 2;
    // readonly STATUS_FAILED = 3;
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
