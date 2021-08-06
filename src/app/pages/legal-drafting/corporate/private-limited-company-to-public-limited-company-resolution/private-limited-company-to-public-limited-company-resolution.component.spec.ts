import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLimitedCompanyToPublicLimitedCompanyResolutionComponent } from './private-limited-company-to-public-limited-company-resolution.component';

describe('PrivateLimitedCompanyToPublicLimitedCompanyResolutionComponent', () => {
  let component: PrivateLimitedCompanyToPublicLimitedCompanyResolutionComponent;
  let fixture: ComponentFixture<PrivateLimitedCompanyToPublicLimitedCompanyResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateLimitedCompanyToPublicLimitedCompanyResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLimitedCompanyToPublicLimitedCompanyResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
