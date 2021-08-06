import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DissolvePartnershipFirmComponent } from './dissolve-partnership-firm.component';

describe('DissolvePartnershipFirmComponent', () => {
  let component: DissolvePartnershipFirmComponent;
  let fixture: ComponentFixture<DissolvePartnershipFirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DissolvePartnershipFirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DissolvePartnershipFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
