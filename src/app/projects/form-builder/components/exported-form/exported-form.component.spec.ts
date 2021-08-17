import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportedFormComponent } from './exported-form.component';

describe('ExportedFormComponent', () => {
  let component: ExportedFormComponent;
  let fixture: ComponentFixture<ExportedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
