import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRolesHeaderComponent } from './manage-roles-header.component';

describe('ManageRolesHeaderComponent', () => {
  let component: ManageRolesHeaderComponent;
  let fixture: ComponentFixture<ManageRolesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRolesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRolesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
