import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceMegamenuComponent } from './compliance-megamenu.component';

describe('ComplianceMegamenuComponent', () => {
  let component: ComplianceMegamenuComponent;
  let fixture: ComponentFixture<ComplianceMegamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceMegamenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceMegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
