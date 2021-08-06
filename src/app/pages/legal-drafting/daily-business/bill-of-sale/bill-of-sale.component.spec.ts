import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOfSaleComponent } from './bill-of-sale.component';

describe('BillOfSaleComponent', () => {
  let component: BillOfSaleComponent;
  let fixture: ComponentFixture<BillOfSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillOfSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOfSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
