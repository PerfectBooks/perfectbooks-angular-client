import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentAgreementComponent } from './employment-agreement.component';

describe('EmploymentAgreementComponent', () => {
  let component: EmploymentAgreementComponent;
  let fixture: ComponentFixture<EmploymentAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
