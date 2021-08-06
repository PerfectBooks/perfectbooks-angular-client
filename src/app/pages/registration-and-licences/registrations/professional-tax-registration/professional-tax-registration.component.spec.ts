import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTaxRegistrationComponent } from './professional-tax-registration.component';

describe('ProfessionalTaxRegistrationComponent', () => {
  let component: ProfessionalTaxRegistrationComponent;
  let fixture: ComponentFixture<ProfessionalTaxRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalTaxRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalTaxRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
