import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkIpNavbarComponent } from './trademark-ip-navbar.component';

describe('TrademarkIpNavbarComponent', () => {
  let component: TrademarkIpNavbarComponent;
  let fixture: ComponentFixture<TrademarkIpNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkIpNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkIpNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
