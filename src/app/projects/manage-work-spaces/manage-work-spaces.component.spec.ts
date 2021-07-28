import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesComponent } from './manage-work-spaces.component';

describe('ManageWorkSpacesComponent', () => {
  let component: ManageWorkSpacesComponent;
  let fixture: ComponentFixture<ManageWorkSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
