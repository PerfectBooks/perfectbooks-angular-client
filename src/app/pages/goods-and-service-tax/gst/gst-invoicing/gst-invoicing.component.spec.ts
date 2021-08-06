import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstInvoicingComponent } from './gst-invoicing.component';

describe('GstInvoicingComponent', () => {
  let component: GstInvoicingComponent;
  let fixture: ComponentFixture<GstInvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstInvoicingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
