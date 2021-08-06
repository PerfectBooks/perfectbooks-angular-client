import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLimitedCompanyToLimitedLiablityPartnershipComponent } from './private-limited-company-to-limited-liablity-partnership.component';

describe('PrivateLimitedCompanyToLimitedLiablityPartnershipComponent', () => {
  let component: PrivateLimitedCompanyToLimitedLiablityPartnershipComponent;
  let fixture: ComponentFixture<PrivateLimitedCompanyToLimitedLiablityPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateLimitedCompanyToLimitedLiablityPartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLimitedCompanyToLimitedLiablityPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
