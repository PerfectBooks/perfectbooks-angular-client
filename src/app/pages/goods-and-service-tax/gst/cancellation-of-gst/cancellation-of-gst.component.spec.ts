import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationOfGstComponent } from './cancellation-of-gst.component';

describe('CancellationOfGstComponent', () => {
  let component: CancellationOfGstComponent;
  let fixture: ComponentFixture<CancellationOfGstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellationOfGstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationOfGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
