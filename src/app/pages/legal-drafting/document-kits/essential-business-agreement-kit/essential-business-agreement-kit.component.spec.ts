import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialBusinessAgreementKitComponent } from './essential-business-agreement-kit.component';

describe('EssentialBusinessAgreementKitComponent', () => {
  let component: EssentialBusinessAgreementKitComponent;
  let fixture: ComponentFixture<EssentialBusinessAgreementKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssentialBusinessAgreementKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialBusinessAgreementKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
