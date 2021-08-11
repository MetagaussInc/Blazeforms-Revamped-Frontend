import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountsModalComponent } from './add-accounts-modal.component';

describe('AddAccountsModalComponent', () => {
  let component: AddAccountsModalComponent;
  let fixture: ComponentFixture<AddAccountsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccountsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
