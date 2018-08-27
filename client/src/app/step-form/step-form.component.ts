import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FileSystemDirectoryEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import {ControlValueAccessor, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css'],
})
export class StepFormComponent implements OnInit {
  @Input()
  public stepId;
  @Input()
  public step: FormGroup;
  @Output()
  public removed: EventEmitter<number> = new EventEmitter<number>();
  public allFiles: UploadFile[] = [];
  public files: UploadFile[] = [];
  public maxLength = false;

  constructor() { }

  static buildStep(val: string) {
    return new FormGroup({
      step_name: new FormControl(val, Validators.required),
      step_instruction: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      this.maxLength = this.allFiles.length >= 3;
      // Is it a file?
      if (droppedFile.fileEntry.isFile && !this.maxLength) {
        this.allFiles.push(droppedFile);
        /*const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

        });*/
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  public fileOver(event) {
  }

  public fileLeave(event) {
  }

  public deleteFile(file) {
    this.allFiles.splice(this.allFiles.indexOf(file), 1);
    this.maxLength = this.allFiles.length >= 3;
  }
}
