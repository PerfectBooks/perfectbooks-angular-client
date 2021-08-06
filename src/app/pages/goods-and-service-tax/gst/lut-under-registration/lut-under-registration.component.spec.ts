import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutUnderRegistrationComponent } from './lut-under-registration.component';

describe('LutUnderRegistrationComponent', () => {
  let component: LutUnderRegistrationComponent;
  let fixture: ComponentFixture<LutUnderRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LutUnderRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LutUnderRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
