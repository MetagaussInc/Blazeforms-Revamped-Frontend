import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWorkSpacesComponent } from './delete-work-spaces.component';

describe('DeleteWorkSpacesComponent', () => {
  let component: DeleteWorkSpacesComponent;
  let fixture: ComponentFixture<DeleteWorkSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWorkSpacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWorkSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
