import { Directive, EventEmitter, Output, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appDragNDrop]'
})
export class DragNDropDirective {
    @Input () private allowed_extensions: Array<string> = [];
    @Output() private filesChangeEmiter: EventEmitter<FileList> = new EventEmitter();
    @Output() private filesInvalidEmiter: EventEmitter<FileList> = new EventEmitter();
    @HostBinding('style.background') private background = '#eee';

    constructor() { }

    @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
        this.filesChangeEmiter.emit(files);
        }
    }
}
