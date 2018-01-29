import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioAlbumIconComponent } from './audio-album-icon.component';

describe('AudioAlbumIconComponent', () => {
  let component: AudioAlbumIconComponent;
  let fixture: ComponentFixture<AudioAlbumIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioAlbumIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioAlbumIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
