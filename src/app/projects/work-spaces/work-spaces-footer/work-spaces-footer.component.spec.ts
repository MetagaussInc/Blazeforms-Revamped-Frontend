import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpacesFooterComponent } from './work-spaces-footer.component';

describe('WorkSpacesFooterComponent', () => {
  let component: WorkSpacesFooterComponent;
  let fixture: ComponentFixture<WorkSpacesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkSpacesFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSpacesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
