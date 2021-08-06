import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorandumOfUnderstandingComponent } from './memorandum-of-understanding.component';

describe('MemorandumOfUnderstandingComponent', () => {
  let component: MemorandumOfUnderstandingComponent;
  let fixture: ComponentFixture<MemorandumOfUnderstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemorandumOfUnderstandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorandumOfUnderstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
