import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiRegistrationComponent } from './esi-registration.component';

describe('EsiRegistrationComponent', () => {
  let component: EsiRegistrationComponent;
  let fixture: ComponentFixture<EsiRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsiRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
