import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIconComponent } from './video-icon.component';

describe('VideoIconComponent', () => {
  let component: VideoIconComponent;
  let fixture: ComponentFixture<VideoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
