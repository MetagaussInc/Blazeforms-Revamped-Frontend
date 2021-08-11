import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesRolesComponent } from './manage-work-spaces-roles.component';

describe('ManageWorkSpacesRolesComponent', () => {
  let component: ManageWorkSpacesRolesComponent;
  let fixture: ComponentFixture<ManageWorkSpacesRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
