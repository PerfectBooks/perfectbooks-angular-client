import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfRegistrationComponent } from './pf-registration.component';

describe('PfRegistrationComponent', () => {
  let component: PfRegistrationComponent;
  let fixture: ComponentFixture<PfRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
