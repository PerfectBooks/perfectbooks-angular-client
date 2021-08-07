import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDraftingMegamenuComponent } from './legal-drafting-megamenu.component';

describe('LegalDraftingMegamenuComponent', () => {
  let component: LegalDraftingMegamenuComponent;
  let fixture: ComponentFixture<LegalDraftingMegamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalDraftingMegamenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDraftingMegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
