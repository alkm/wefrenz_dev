import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNavComponent } from './private-nav.component';

describe('PrivateNavComponent', () => {
  let component: PrivateNavComponent;
  let fixture: ComponentFixture<PrivateNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
