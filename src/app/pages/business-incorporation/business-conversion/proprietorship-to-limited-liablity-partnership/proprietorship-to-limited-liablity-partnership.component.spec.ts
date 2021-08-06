import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietorshipToLimitedLiablityPartnershipComponent } from './proprietorship-to-limited-liablity-partnership.component';

describe('ProprietorshipToLimitedLiablityPartnershipComponent', () => {
  let component: ProprietorshipToLimitedLiablityPartnershipComponent;
  let fixture: ComponentFixture<ProprietorshipToLimitedLiablityPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietorshipToLimitedLiablityPartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietorshipToLimitedLiablityPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
