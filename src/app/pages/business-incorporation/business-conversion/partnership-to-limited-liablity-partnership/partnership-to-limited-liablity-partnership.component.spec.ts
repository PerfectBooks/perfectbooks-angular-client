import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipToLimitedLiablityPartnershipComponent } from './partnership-to-limited-liablity-partnership.component';

describe('PartnershipToLimitedLiablityPartnershipComponent', () => {
  let component: PartnershipToLimitedLiablityPartnershipComponent;
  let fixture: ComponentFixture<PartnershipToLimitedLiablityPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipToLimitedLiablityPartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipToLimitedLiablityPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
