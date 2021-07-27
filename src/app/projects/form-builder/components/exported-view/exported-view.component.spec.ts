import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportedViewComponent } from './exported-view.component';

describe('ExportedViewComponent', () => {
  let component: ExportedViewComponent;
  let fixture: ComponentFixture<ExportedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
