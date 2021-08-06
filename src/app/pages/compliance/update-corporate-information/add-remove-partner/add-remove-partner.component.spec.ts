import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemovePartnerComponent } from './add-remove-partner.component';

describe('AddRemovePartnerComponent', () => {
  let component: AddRemovePartnerComponent;
  let fixture: ComponentFixture<AddRemovePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemovePartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemovePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
