import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseOnePersonCompanyComponent } from './close-one-person-company.component';

describe('CloseOnePersonCompanyComponent', () => {
  let component: CloseOnePersonCompanyComponent;
  let fixture: ComponentFixture<CloseOnePersonCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseOnePersonCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseOnePersonCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
