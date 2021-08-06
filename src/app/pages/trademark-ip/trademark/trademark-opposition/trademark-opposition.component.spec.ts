import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkOppositionComponent } from './trademark-opposition.component';

describe('TrademarkOppositionComponent', () => {
  let component: TrademarkOppositionComponent;
  let fixture: ComponentFixture<TrademarkOppositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkOppositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkOppositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
