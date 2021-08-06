import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualCompliancePrivateLimitedCompanyComponent } from './annual-compliance-private-limited-company.component';

describe('AnnualCompliancePrivateLimitedCompanyComponent', () => {
  let component: AnnualCompliancePrivateLimitedCompanyComponent;
  let fixture: ComponentFixture<AnnualCompliancePrivateLimitedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualCompliancePrivateLimitedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualCompliancePrivateLimitedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
