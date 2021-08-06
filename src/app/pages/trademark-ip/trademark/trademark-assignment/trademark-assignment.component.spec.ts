import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkAssignmentComponent } from './trademark-assignment.component';

describe('TrademarkAssignmentComponent', () => {
  let component: TrademarkAssignmentComponent;
  let fixture: ComponentFixture<TrademarkAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
