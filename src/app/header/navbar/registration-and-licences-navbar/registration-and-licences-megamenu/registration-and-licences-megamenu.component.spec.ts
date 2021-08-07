import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAndLicencesMegamenuComponent } from './registration-and-licences-megamenu.component';

describe('RegistrationAndLicencesMegamenuComponent', () => {
  let component: RegistrationAndLicencesMegamenuComponent;
  let fixture: ComponentFixture<RegistrationAndLicencesMegamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationAndLicencesMegamenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAndLicencesMegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
