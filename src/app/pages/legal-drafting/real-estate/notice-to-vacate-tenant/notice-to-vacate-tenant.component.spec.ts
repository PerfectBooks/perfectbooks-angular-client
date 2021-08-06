import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeToVacateTenantComponent } from './notice-to-vacate-tenant.component';

describe('NoticeToVacateTenantComponent', () => {
  let component: NoticeToVacateTenantComponent;
  let fixture: ComponentFixture<NoticeToVacateTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeToVacateTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeToVacateTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
