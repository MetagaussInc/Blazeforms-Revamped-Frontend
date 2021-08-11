import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesBrandingComponent } from './manage-work-spaces-branding.component';

describe('ManageWorkSpacesBrandingComponent', () => {
  let component: ManageWorkSpacesBrandingComponent;
  let fixture: ComponentFixture<ManageWorkSpacesBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesBrandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
