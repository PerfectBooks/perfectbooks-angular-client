import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkRenewalComponent } from './trademark-renewal.component';

describe('TrademarkRenewalComponent', () => {
  let component: TrademarkRenewalComponent;
  let fixture: ComponentFixture<TrademarkRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkRenewalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
