import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesReferralProgramComponent } from './manage-work-spaces-referral-program.component';

describe('ManageWorkSpacesReferralProgramComponent', () => {
  let component: ManageWorkSpacesReferralProgramComponent;
  let fixture: ComponentFixture<ManageWorkSpacesReferralProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesReferralProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesReferralProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
