import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRequestPendingListComponent } from './friend-request-pending-list.component';

describe('FriendRequestPendingListComponent', () => {
  let component: FriendRequestPendingListComponent;
  let fixture: ComponentFixture<FriendRequestPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendRequestPendingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendRequestPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
