import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDraftingNavbarComponent } from './legal-drafting-navbar.component';

describe('LegalDraftingNavbarComponent', () => {
  let component: LegalDraftingNavbarComponent;
  let fixture: ComponentFixture<LegalDraftingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalDraftingNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDraftingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
