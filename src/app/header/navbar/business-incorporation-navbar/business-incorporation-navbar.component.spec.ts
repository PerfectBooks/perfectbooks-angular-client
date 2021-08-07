import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessIncorporationNavbarComponent } from './business-incorporation-navbar.component';

describe('BusinessIncorporationNavbarComponent', () => {
  let component: BusinessIncorporationNavbarComponent;
  let fixture: ComponentFixture<BusinessIncorporationNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessIncorporationNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessIncorporationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
