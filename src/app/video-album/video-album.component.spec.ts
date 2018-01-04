import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAlbumComponent } from './video-album.component';

describe('VideoAlbumComponent', () => {
  let component: VideoAlbumComponent;
  let fixture: ComponentFixture<VideoAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
