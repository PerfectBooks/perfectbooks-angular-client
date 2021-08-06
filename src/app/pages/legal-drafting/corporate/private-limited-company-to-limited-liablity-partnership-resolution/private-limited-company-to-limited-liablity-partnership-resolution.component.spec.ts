import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLimitedCompanyToLimitedLiablityPartnershipResolutionComponent } from './private-limited-company-to-limited-liablity-partnership-resolution.component';

describe('PrivateLimitedCompanyToLimitedLiablityPartnershipResolutionComponent', () => {
  let component: PrivateLimitedCompanyToLimitedLiablityPartnershipResolutionComponent;
  let fixture: ComponentFixture<PrivateLimitedCompanyToLimitedLiablityPartnershipResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateLimitedCompanyToLimitedLiablityPartnershipResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLimitedCompanyToLimitedLiablityPartnershipResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
