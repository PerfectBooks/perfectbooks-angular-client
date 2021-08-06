import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementExtensionComponent } from './agreement-extension.component';

describe('AgreementExtensionComponent', () => {
  let component: AgreementExtensionComponent;
  let fixture: ComponentFixture<AgreementExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
