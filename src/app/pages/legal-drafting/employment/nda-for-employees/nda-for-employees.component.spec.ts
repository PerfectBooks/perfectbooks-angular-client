import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdaForEmployeesComponent } from './nda-for-employees.component';

describe('NdaForEmployeesComponent', () => {
  let component: NdaForEmployeesComponent;
  let fixture: ComponentFixture<NdaForEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdaForEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdaForEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
