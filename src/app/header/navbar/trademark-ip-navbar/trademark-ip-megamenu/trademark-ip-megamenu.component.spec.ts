import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkIpMegamenuComponent } from './trademark-ip-megamenu.component';

describe('TrademarkIpMegamenuComponent', () => {
  let component: TrademarkIpMegamenuComponent;
  let fixture: ComponentFixture<TrademarkIpMegamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkIpMegamenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkIpMegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
