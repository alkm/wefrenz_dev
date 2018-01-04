import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturePicComponent } from './capture-pic.component';

describe('CapturePicComponent', () => {
  let component: CapturePicComponent;
  let fixture: ComponentFixture<CapturePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
