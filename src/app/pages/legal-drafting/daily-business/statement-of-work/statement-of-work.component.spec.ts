import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementOfWorkComponent } from './statement-of-work.component';

describe('StatementOfWorkComponent', () => {
  let component: StatementOfWorkComponent;
  let fixture: ComponentFixture<StatementOfWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementOfWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
