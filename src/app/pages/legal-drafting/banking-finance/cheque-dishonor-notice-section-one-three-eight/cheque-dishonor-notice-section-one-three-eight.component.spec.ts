import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeDishonorNoticeSectionOneThreeEightComponent } from './cheque-dishonor-notice-section-one-three-eight.component';

describe('ChequeDishonorNoticeSectionOneThreeEightComponent', () => {
  let component: ChequeDishonorNoticeSectionOneThreeEightComponent;
  let fixture: ComponentFixture<ChequeDishonorNoticeSectionOneThreeEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeDishonorNoticeSectionOneThreeEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeDishonorNoticeSectionOneThreeEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
