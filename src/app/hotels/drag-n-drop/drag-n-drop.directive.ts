import { Directive, EventEmitter, Output, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appDragNDrop]'
})
export class DragNDropDirective {
    @Input() private allowed_extensions: Array<string> = [];
    @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
    @Output() private filesInvalidEmiter: EventEmitter<File[]> = new EventEmitter();
    @HostBinding('style.background') private background = '#eee';

    constructor() { }

    @HostListener('dragover', ['$event']) public onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#999';
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee'
    }

    @HostListener('drop', ['$event']) public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        evt.dataTransfer.effectAllowed = 'copy'
        console.log(evt.dataTransfer.effectAllowed = 'copy')
        let files = evt.dataTransfer.files;
        let valid_files: Array<File> = [];
        let invalid_files: Array<File> = [];
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                let ext = files[i].name.split('.')[files[i].name.split('.').length - 1];
                if (this.allowed_extensions.lastIndexOf(ext) !== -1) {
                    valid_files.push(files[i]);
                } else {
                    invalid_files.push(files[i]);
                }
            }
            this.filesChangeEmiter.emit(valid_files);
            this.filesInvalidEmiter.emit(invalid_files);
        }
    }
}
