import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverpicComponent } from './coverpic.component';

describe('CoverpicComponent', () => {
  let component: CoverpicComponent;
  let fixture: ComponentFixture<CoverpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
