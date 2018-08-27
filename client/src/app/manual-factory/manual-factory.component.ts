import {Component, OnInit} from '@angular/core';
import {ManualService} from '../services/manual.service';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StepFormComponent} from '../step-form/step-form.component';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

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
  manualFormControl: FormGroup;

  constructor(private manualService: ManualService, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.manualService.getAllCategories().subscribe(response => this.listItems = response);
  }

  ngOnInit() {
    this.manualFormControl = this.fb.group({
      manual_name: new FormControl('', Validators.required),
      manual_description: new FormControl('', ),
      manual_category: new FormControl('', ),
      steps: this.fb.array([
        StepFormComponent.buildStep(''),
        StepFormComponent.buildStep('')
      ])
    });
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

  public createManual(value) {
    console.log(value);
    this.manualService.addManual(value).then(valt => {
      alert('Manual is added');
      this.router.navigate(['manuals', valt.id, valt.category, valt.title]);
    },
        valf => alert('manual is NOT added'));
  }

  get formSteps() {
    return <FormArray>this.manualFormControl.get('steps');
  }
}
