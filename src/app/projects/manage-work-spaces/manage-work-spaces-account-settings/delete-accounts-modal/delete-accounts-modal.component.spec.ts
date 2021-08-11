import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountsModalComponent } from './delete-accounts-modal.component';

describe('DeleteAccountsModalComponent', () => {
  let component: DeleteAccountsModalComponent;
  let fixture: ComponentFixture<DeleteAccountsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAccountsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccountsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
