import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRolesFooterComponent } from './manage-roles-footer.component';

describe('ManageRolesFooterComponent', () => {
  let component: ManageRolesFooterComponent;
  let fixture: ComponentFixture<ManageRolesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRolesFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRolesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
