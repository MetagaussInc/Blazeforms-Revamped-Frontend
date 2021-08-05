import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesSubscriptionComponent } from './manage-work-spaces-subscription.component';

describe('ManageWorkSpacesSubscriptionComponent', () => {
  let component: ManageWorkSpacesSubscriptionComponent;
  let fixture: ComponentFixture<ManageWorkSpacesSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
