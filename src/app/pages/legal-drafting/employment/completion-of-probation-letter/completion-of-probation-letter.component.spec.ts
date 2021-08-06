import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionOfProbationLetterComponent } from './completion-of-probation-letter.component';

describe('CompletionOfProbationLetterComponent', () => {
  let component: CompletionOfProbationLetterComponent;
  let fixture: ComponentFixture<CompletionOfProbationLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionOfProbationLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionOfProbationLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
