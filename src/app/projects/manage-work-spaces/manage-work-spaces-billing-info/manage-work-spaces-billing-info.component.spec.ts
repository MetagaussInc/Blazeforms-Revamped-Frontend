import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesBillingInfoComponent } from './manage-work-spaces-billing-info.component';

describe('ManageWorkSpacesBillingInfoComponent', () => {
  let component: ManageWorkSpacesBillingInfoComponent;
  let fixture: ComponentFixture<ManageWorkSpacesBillingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesBillingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesBillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
