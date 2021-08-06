import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietorshipToOnePersonCompanyComponent } from './proprietorship-to-one-person-company.component';

describe('ProprietorshipToOnePersonCompanyComponent', () => {
  let component: ProprietorshipToOnePersonCompanyComponent;
  let fixture: ComponentFixture<ProprietorshipToOnePersonCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietorshipToOnePersonCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietorshipToOnePersonCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
