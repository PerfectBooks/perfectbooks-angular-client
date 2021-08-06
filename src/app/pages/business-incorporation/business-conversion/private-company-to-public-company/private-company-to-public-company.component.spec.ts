import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCompanyToPublicCompanyComponent } from './private-company-to-public-company.component';

describe('PrivateCompanyToPublicCompanyComponent', () => {
  let component: PrivateCompanyToPublicCompanyComponent;
  let fixture: ComponentFixture<PrivateCompanyToPublicCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCompanyToPublicCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCompanyToPublicCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
