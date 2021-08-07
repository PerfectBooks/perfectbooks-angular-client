import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAndLicencesNavbarComponent } from './registration-and-licences-navbar.component';

describe('RegistrationAndLicencesNavbarComponent', () => {
  let component: RegistrationAndLicencesNavbarComponent;
  let fixture: ComponentFixture<RegistrationAndLicencesNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationAndLicencesNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationAndLicencesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
