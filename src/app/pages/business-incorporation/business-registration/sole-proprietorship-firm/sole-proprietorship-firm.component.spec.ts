import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleProprietorshipFirmComponent } from './sole-proprietorship-firm.component';

describe('SoleProprietorshipFirmComponent', () => {
  let component: SoleProprietorshipFirmComponent;
  let fixture: ComponentFixture<SoleProprietorshipFirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoleProprietorshipFirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleProprietorshipFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
