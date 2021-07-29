import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesHeaderComponent } from './manage-work-spaces-header.component';

describe('ManageWorkSpacesHeaderComponent', () => {
  let component: ManageWorkSpacesHeaderComponent;
  let fixture: ComponentFixture<ManageWorkSpacesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
