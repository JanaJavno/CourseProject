import {Component, OnInit} from '@angular/core';
import {ManualService} from '../services/manual.service';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-manual-factory',
  templateUrl: './manual-factory.component.html',
  styleUrls: ['./manual-factory.component.css']
})
export class ManualFactoryComponent implements OnInit {
  public allowCustom = true;
  public listItems;
  public mainFile: UploadFile[] = [];
  public allFiles: UploadFile[] = [];
  public files: UploadFile[] = [];
  public steps = [];
  public combobox;
  public stepFormControl;
  manualFormControl: FormGroup;

  constructor(private manualService: ManualService, private http: HttpClient, private fb: FormBuilder) {
    this.manualService.getAllCategories().subscribe(response => this.listItems = response);
    this.manualFormControl = new FormGroup({
      manual_name: new FormControl('', Validators.required),
      manual_description: new FormControl('', ),
      manual_category: new FormControl('', )
    });
  }

  ngOnInit() {
  }

  public mainDropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        this.mainFile = [];
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
        });
        this.mainFile.push(this.files[this.files.length - 1]);
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }


  public fileOver(event) {
  }

  public fileLeave(event) {
  }

  public addStep() {
    this.steps.push({id: this.steps.length + 1});
  }

  public validateManual(value) {
    console.log(value);
  }
}
