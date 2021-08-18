import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileChangePasswordComponent } from './my-profile-change-password.component';

describe('MyProfileChangePasswordComponent', () => {
  let component: MyProfileChangePasswordComponent;
  let fixture: ComponentFixture<MyProfileChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
