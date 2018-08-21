import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualContainerComponent } from './manual-container.component';

describe('ManualContainerComponent', () => {
  let component: ManualContainerComponent;
  let fixture: ComponentFixture<ManualContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
