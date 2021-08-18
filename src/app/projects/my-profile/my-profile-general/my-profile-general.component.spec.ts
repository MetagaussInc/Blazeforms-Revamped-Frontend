import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileGeneralComponent } from './my-profile-general.component';

describe('MyProfileGeneralComponent', () => {
  let component: MyProfileGeneralComponent;
  let fixture: ComponentFixture<MyProfileGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
