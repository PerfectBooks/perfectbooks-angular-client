import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDisclosureAgreementComponent } from './non-disclosure-agreement.component';

describe('NonDisclosureAgreementComponent', () => {
  let component: NonDisclosureAgreementComponent;
  let fixture: ComponentFixture<NonDisclosureAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonDisclosureAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonDisclosureAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
