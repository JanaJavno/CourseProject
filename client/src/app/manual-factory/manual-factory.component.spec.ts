import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualFactoryComponent } from './manual-factory.component';

describe('ManualFactoryComponent', () => {
  let component: ManualFactoryComponent;
  let fixture: ComponentFixture<ManualFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
