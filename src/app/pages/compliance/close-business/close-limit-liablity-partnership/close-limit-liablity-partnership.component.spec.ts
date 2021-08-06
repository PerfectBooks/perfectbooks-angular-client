import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseLimitLiablityPartnershipComponent } from './close-limit-liablity-partnership.component';

describe('CloseLimitLiablityPartnershipComponent', () => {
  let component: CloseLimitLiablityPartnershipComponent;
  let fixture: ComponentFixture<CloseLimitLiablityPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseLimitLiablityPartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseLimitLiablityPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
