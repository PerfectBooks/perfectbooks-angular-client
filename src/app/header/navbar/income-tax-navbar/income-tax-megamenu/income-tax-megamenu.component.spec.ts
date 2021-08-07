import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxMegamenuComponent } from './income-tax-megamenu.component';

describe('IncomeTaxMegamenuComponent', () => {
  let component: IncomeTaxMegamenuComponent;
  let fixture: ComponentFixture<IncomeTaxMegamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeTaxMegamenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTaxMegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
