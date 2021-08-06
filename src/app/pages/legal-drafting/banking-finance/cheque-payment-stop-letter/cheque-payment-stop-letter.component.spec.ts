import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePaymentStopLetterComponent } from './cheque-payment-stop-letter.component';

describe('ChequePaymentStopLetterComponent', () => {
  let component: ChequePaymentStopLetterComponent;
  let fixture: ComponentFixture<ChequePaymentStopLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequePaymentStopLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequePaymentStopLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
