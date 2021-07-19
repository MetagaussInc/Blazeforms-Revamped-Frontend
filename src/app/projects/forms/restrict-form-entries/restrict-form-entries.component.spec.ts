import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictFormEntriesComponent } from './restrict-form-entries.component';

describe('RestrictFormEntriesComponent', () => {
  let component: RestrictFormEntriesComponent;
  let fixture: ComponentFixture<RestrictFormEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictFormEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictFormEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
