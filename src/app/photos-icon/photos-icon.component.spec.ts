import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosIconComponent } from './photos-icon.component';

describe('PhotosIconComponent', () => {
  let component: PhotosIconComponent;
  let fixture: ComponentFixture<PhotosIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
