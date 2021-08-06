import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBusinessActivityComponent } from './change-business-activity.component';

describe('ChangeBusinessActivityComponent', () => {
  let component: ChangeBusinessActivityComponent;
  let fixture: ComponentFixture<ChangeBusinessActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBusinessActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBusinessActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
