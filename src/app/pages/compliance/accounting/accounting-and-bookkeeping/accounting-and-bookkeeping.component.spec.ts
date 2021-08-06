import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingAndBookkeepingComponent } from './accounting-and-bookkeeping.component';

describe('AccountingAndBookkeepingComponent', () => {
  let component: AccountingAndBookkeepingComponent;
  let fixture: ComponentFixture<AccountingAndBookkeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingAndBookkeepingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingAndBookkeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
