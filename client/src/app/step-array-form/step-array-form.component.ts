import {Component, Input, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {StepFormComponent} from '../step-form/step-form.component';

@Component({
  selector: 'app-step-array-form',
  templateUrl: './step-array-form.component.html',
  styleUrls: ['./step-array-form.component.css']
})
export class StepArrayFormComponent implements OnInit {

  @Input()
  public stepsFormArray: FormArray;
  constructor() { }

  static buildItems() {
    return new FormArray([
      StepFormComponent.buildStep('aaa'),
      StepFormComponent.buildStep('')], );
  }

  ngOnInit() {
  }

  addStep() {
    this.stepsFormArray.push(StepFormComponent.buildStep(''));
  }

}
