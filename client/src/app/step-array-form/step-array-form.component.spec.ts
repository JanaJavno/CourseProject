import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepArrayFormComponent } from './step-array-form.component';

describe('StepArrayFormComponent', () => {
  let component: StepArrayFormComponent;
  let fixture: ComponentFixture<StepArrayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepArrayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepArrayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
