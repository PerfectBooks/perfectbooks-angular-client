import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLimitedLiablityPartnershipAgreementComponent } from './change-limited-liablity-partnership-agreement.component';

describe('ChangeLimitedLiablityPartnershipAgreementComponent', () => {
  let component: ChangeLimitedLiablityPartnershipAgreementComponent;
  let fixture: ComponentFixture<ChangeLimitedLiablityPartnershipAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLimitedLiablityPartnershipAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLimitedLiablityPartnershipAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
