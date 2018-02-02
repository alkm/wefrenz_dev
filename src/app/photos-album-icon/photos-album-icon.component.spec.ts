import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosAlbumIconComponent } from './photos-album-icon.component';

describe('PhotosAlbumIconComponent', () => {
  let component: PhotosAlbumIconComponent;
  let fixture: ComponentFixture<PhotosAlbumIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosAlbumIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosAlbumIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
