import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePartnershipDeedComponent } from './change-partnership-deed.component';

describe('ChangePartnershipDeedComponent', () => {
  let component: ChangePartnershipDeedComponent;
  let fixture: ComponentFixture<ChangePartnershipDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePartnershipDeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePartnershipDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
