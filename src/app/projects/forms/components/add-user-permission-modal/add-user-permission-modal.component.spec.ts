import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPermissionModalComponent } from './add-user-permission-modal.component';

describe('AddUserPermissionModalComponent', () => {
  let component: AddUserPermissionModalComponent;
  let fixture: ComponentFixture<AddUserPermissionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserPermissionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserPermissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
