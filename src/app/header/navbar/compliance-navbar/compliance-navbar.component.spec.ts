import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceNavbarComponent } from './compliance-navbar.component';

describe('ComplianceNavbarComponent', () => {
  let component: ComplianceNavbarComponent;
  let fixture: ComponentFixture<ComplianceNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
