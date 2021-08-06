import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminationOfAgreementComponent } from './termination-of-agreement.component';

describe('TerminationOfAgreementComponent', () => {
  let component: TerminationOfAgreementComponent;
  let fixture: ComponentFixture<TerminationOfAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminationOfAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminationOfAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
