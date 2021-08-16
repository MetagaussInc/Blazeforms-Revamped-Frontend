import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStripeAccountComponent } from './add-stripe-account.component';

describe('AddStripeAccountComponent', () => {
  let component: AddStripeAccountComponent;
  let fixture: ComponentFixture<AddStripeAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStripeAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStripeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
