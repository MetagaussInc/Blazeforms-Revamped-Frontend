import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileFingerprintComponent } from './my-profile-fingerprint.component';

describe('MyProfileFingerprintComponent', () => {
  let component: MyProfileFingerprintComponent;
  let fixture: ComponentFixture<MyProfileFingerprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileFingerprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileFingerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
