import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpacesHeaderComponent } from './work-spaces-header.component';

describe('WorkSpacesHeaderComponent', () => {
  let component: WorkSpacesHeaderComponent;
  let fixture: ComponentFixture<WorkSpacesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkSpacesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSpacesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
