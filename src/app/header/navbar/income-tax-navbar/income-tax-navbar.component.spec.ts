import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxNavbarComponent } from './income-tax-navbar.component';

describe('IncomeTaxNavbarComponent', () => {
  let component: IncomeTaxNavbarComponent;
  let fixture: ComponentFixture<IncomeTaxNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeTaxNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTaxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
