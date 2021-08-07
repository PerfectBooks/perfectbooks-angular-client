import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsAndServiceTaxMegamenuComponent } from './goods-and-service-tax-megamenu.component';

describe('GoodsAndServiceTaxMegamenuComponent', () => {
  let component: GoodsAndServiceTaxMegamenuComponent;
  let fixture: ComponentFixture<GoodsAndServiceTaxMegamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsAndServiceTaxMegamenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsAndServiceTaxMegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
