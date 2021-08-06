import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualFilingLimitedLiablityPartnershipComponent } from './annual-filing-limited-liablity-partnership.component';

describe('AnnualFilingLimitedLiablityPartnershipComponent', () => {
  let component: AnnualFilingLimitedLiablityPartnershipComponent;
  let fixture: ComponentFixture<AnnualFilingLimitedLiablityPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualFilingLimitedLiablityPartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualFilingLimitedLiablityPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
