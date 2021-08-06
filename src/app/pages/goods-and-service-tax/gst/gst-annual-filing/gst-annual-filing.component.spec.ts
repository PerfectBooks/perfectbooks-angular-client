import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstAnnualFilingComponent } from './gst-annual-filing.component';

describe('GstAnnualFilingComponent', () => {
  let component: GstAnnualFilingComponent;
  let fixture: ComponentFixture<GstAnnualFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstAnnualFilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstAnnualFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
