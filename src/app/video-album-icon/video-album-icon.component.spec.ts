import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAlbumIconComponent } from './video-album-icon.component';

describe('VideoAlbumIconComponent', () => {
  let component: VideoAlbumIconComponent;
  let fixture: ComponentFixture<VideoAlbumIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAlbumIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAlbumIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
