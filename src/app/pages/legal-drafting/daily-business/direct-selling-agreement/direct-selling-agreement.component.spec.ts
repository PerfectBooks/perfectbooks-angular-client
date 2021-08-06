import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSellingAgreementComponent } from './direct-selling-agreement.component';

describe('DirectSellingAgreementComponent', () => {
  let component: DirectSellingAgreementComponent;
  let fixture: ComponentFixture<DirectSellingAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectSellingAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectSellingAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
