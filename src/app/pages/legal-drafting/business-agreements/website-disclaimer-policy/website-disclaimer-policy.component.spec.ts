import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDisclaimerPolicyComponent } from './website-disclaimer-policy.component';

describe('WebsiteDisclaimerPolicyComponent', () => {
  let component: WebsiteDisclaimerPolicyComponent;
  let fixture: ComponentFixture<WebsiteDisclaimerPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteDisclaimerPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDisclaimerPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
