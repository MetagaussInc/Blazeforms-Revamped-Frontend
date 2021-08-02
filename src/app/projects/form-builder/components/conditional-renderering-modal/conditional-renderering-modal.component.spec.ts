import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalRendereringModalComponent } from './conditional-renderering-modal.component';

describe('ConditionalRendereringModalComponent', () => {
  let component: ConditionalRendereringModalComponent;
  let fixture: ComponentFixture<ConditionalRendereringModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalRendereringModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalRendereringModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
