import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpeningResolutionComponent } from './account-opening-resolution.component';

describe('AccountOpeningResolutionComponent', () => {
  let component: AccountOpeningResolutionComponent;
  let fixture: ComponentFixture<AccountOpeningResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountOpeningResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOpeningResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
