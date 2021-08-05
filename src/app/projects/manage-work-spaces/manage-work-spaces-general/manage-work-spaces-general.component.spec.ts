import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesGeneralComponent } from './manage-work-spaces-general.component';

describe('ManageWorkSpacesGeneralComponent', () => {
  let component: ManageWorkSpacesGeneralComponent;
  let fixture: ComponentFixture<ManageWorkSpacesGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
