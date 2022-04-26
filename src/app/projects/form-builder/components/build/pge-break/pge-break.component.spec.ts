import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgeBreakComponent } from './pge-break.component';

describe('PgeBreakComponent', () => {
  let component: PgeBreakComponent;
  let fixture: ComponentFixture<PgeBreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgeBreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgeBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
