import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsHeaderComponent } from './forms-header.component';

describe('FormsHeaderComponent', () => {
  let component: FormsHeaderComponent;
  let fixture: ComponentFixture<FormsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
