import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePersonCompanyToPrivateLimitedCompanyComponent } from './one-person-company-to-private-limited-company.component';

describe('OnePersonCompanyToPrivateLimitedCompanyComponent', () => {
  let component: OnePersonCompanyToPrivateLimitedCompanyComponent;
  let fixture: ComponentFixture<OnePersonCompanyToPrivateLimitedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePersonCompanyToPrivateLimitedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePersonCompanyToPrivateLimitedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
