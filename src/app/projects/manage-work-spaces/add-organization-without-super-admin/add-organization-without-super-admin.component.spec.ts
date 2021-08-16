import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationWithoutSuperAdminComponent } from './add-organization-without-super-admin.component';

describe('AddOrganizationWithoutSuperAdminComponent', () => {
  let component: AddOrganizationWithoutSuperAdminComponent;
  let fixture: ComponentFixture<AddOrganizationWithoutSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrganizationWithoutSuperAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizationWithoutSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
