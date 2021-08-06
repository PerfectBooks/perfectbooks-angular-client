import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerComplaintLetterComponent } from './consumer-complaint-letter.component';

describe('ConsumerComplaintLetterComponent', () => {
  let component: ConsumerComplaintLetterComponent;
  let fixture: ComponentFixture<ConsumerComplaintLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerComplaintLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerComplaintLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
