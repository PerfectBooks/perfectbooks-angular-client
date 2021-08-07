import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsAndServiceTaxNavbarComponent } from './goods-and-service-tax-navbar.component';

describe('GoodsAndServiceTaxNavbarComponent', () => {
  let component: GoodsAndServiceTaxNavbarComponent;
  let fixture: ComponentFixture<GoodsAndServiceTaxNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsAndServiceTaxNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsAndServiceTaxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
