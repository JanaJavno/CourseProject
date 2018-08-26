import {Component, Input, OnInit} from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css']
})
export class StepFormComponent implements OnInit {
  @Input()
  public stepId;
  public allFiles: UploadFile[] = [];
  public files: UploadFile[] = [];
  public maxLength = false;
  constructor() { }

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
