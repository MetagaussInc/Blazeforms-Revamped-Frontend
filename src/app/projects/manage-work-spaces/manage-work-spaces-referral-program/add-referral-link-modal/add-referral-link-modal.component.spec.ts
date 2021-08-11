import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReferralLinkModalComponent } from './add-referral-link-modal.component';

describe('AddReferralLinkModalComponent', () => {
  let component: AddReferralLinkModalComponent;
  let fixture: ComponentFixture<AddReferralLinkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReferralLinkModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReferralLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
