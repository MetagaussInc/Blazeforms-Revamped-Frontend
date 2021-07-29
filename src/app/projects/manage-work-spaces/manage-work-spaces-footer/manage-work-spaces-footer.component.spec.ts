import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkSpacesFooterComponent } from './manage-work-spaces-footer.component';

describe('ManageWorkSpacesFooterComponent', () => {
  let component: ManageWorkSpacesFooterComponent;
  let fixture: ComponentFixture<ManageWorkSpacesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWorkSpacesFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkSpacesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
