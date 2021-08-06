import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePrivateLimitedCompanyComponent } from './close-private-limited-company.component';

describe('ClosePrivateLimitedCompanyComponent', () => {
  let component: ClosePrivateLimitedCompanyComponent;
  let fixture: ComponentFixture<ClosePrivateLimitedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosePrivateLimitedCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosePrivateLimitedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
