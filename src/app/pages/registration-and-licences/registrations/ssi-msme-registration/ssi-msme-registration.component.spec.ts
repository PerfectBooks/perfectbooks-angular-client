import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsiMsmeRegistrationComponent } from './ssi-msme-registration.component';

describe('SsiMsmeRegistrationComponent', () => {
  let component: SsiMsmeRegistrationComponent;
  let fixture: ComponentFixture<SsiMsmeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsiMsmeRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsiMsmeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
