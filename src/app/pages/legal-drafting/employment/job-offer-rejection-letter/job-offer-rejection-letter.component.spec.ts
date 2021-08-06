import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferRejectionLetterComponent } from './job-offer-rejection-letter.component';

describe('JobOfferRejectionLetterComponent', () => {
  let component: JobOfferRejectionLetterComponent;
  let fixture: ComponentFixture<JobOfferRejectionLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferRejectionLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferRejectionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
