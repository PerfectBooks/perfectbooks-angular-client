import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareHolderAgreementComponent } from './share-holder-agreement.component';

describe('ShareHolderAgreementComponent', () => {
  let component: ShareHolderAgreementComponent;
  let fixture: ComponentFixture<ShareHolderAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareHolderAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareHolderAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
