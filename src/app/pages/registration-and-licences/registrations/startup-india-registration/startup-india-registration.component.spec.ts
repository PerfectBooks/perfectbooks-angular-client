import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupIndiaRegistrationComponent } from './startup-india-registration.component';

describe('StartupIndiaRegistrationComponent', () => {
  let component: StartupIndiaRegistrationComponent;
  let fixture: ComponentFixture<StartupIndiaRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupIndiaRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupIndiaRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
