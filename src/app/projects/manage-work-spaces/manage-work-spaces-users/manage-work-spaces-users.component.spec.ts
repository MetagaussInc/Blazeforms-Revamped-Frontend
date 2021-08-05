import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesUsersComponent } from './manage-work-spaces-users.component';

describe('ManageWorkSpacesUsersComponent', () => {
  let component: ManageWorkSpacesUsersComponent;
  let fixture: ComponentFixture<ManageWorkSpacesUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
