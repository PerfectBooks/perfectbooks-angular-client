import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EWayBillComponent } from './e-way-bill.component';

describe('EWayBillComponent', () => {
  let component: EWayBillComponent;
  let fixture: ComponentFixture<EWayBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EWayBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EWayBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
