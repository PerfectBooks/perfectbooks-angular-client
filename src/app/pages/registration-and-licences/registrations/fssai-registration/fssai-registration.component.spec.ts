import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FssaiRegistrationComponent } from './fssai-registration.component';

describe('FssaiRegistrationComponent', () => {
  let component: FssaiRegistrationComponent;
  let fixture: ComponentFixture<FssaiRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FssaiRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FssaiRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
