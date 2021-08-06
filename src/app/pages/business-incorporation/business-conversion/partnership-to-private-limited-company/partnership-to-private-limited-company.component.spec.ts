import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipToPrivateLimitedCompanyComponent } from './partnership-to-private-limited-company.component';

describe('PartnershipToPrivateLimitedCompanyComponent', () => {
  let component: PartnershipToPrivateLimitedCompanyComponent;
  let fixture: ComponentFixture<PartnershipToPrivateLimitedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipToPrivateLimitedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipToPrivateLimitedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
