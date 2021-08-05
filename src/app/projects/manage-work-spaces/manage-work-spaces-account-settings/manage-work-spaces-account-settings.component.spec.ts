import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesAccountSettingsComponent } from './manage-work-spaces-account-settings.component';

describe('ManageWorkSpacesAccountSettingsComponent', () => {
  let component: ManageWorkSpacesAccountSettingsComponent;
  let fixture: ComponentFixture<ManageWorkSpacesAccountSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesAccountSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
