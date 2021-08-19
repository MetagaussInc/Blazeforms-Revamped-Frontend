import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazeformsComponent } from './blazeforms.component';

describe('BlazeformsComponent', () => {
  let component: BlazeformsComponent;
  let fixture: ComponentFixture<BlazeformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazeformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazeformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
