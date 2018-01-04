import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvchatComponent } from './avchat.component';

describe('AvchatComponent', () => {
  let component: AvchatComponent;
  let fixture: ComponentFixture<AvchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
