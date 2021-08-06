import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTerminationNoticeComponent } from './employee-termination-notice.component';

describe('EmployeeTerminationNoticeComponent', () => {
  let component: EmployeeTerminationNoticeComponent;
  let fixture: ComponentFixture<EmployeeTerminationNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTerminationNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTerminationNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
