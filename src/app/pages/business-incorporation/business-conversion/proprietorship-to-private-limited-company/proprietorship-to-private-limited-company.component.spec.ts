import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietorshipToPrivateLimitedCompanyComponent } from './proprietorship-to-private-limited-company.component';

describe('ProprietorshipToPrivateLimitedCompanyComponent', () => {
  let component: ProprietorshipToPrivateLimitedCompanyComponent;
  let fixture: ComponentFixture<ProprietorshipToPrivateLimitedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietorshipToPrivateLimitedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietorshipToPrivateLimitedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
