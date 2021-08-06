import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietorshipToPartnershipComponent } from './proprietorship-to-partnership.component';

describe('ProprietorshipToPartnershipComponent', () => {
  let component: ProprietorshipToPartnershipComponent;
  let fixture: ComponentFixture<ProprietorshipToPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietorshipToPartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietorshipToPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
