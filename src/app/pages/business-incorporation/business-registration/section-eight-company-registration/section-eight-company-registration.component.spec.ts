import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEightCompanyRegistrationComponent } from './section-eight-company-registration.component';

describe('SectionEightCompanyRegistrationComponent', () => {
  let component: SectionEightCompanyRegistrationComponent;
  let fixture: ComponentFixture<SectionEightCompanyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEightCompanyRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEightCompanyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
