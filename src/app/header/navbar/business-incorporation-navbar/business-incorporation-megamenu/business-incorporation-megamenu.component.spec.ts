import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessIncorporationMegamenuComponent } from './business-incorporation-megamenu.component';

describe('BusinessIncorporationMegamenuComponent', () => {
  let component: BusinessIncorporationMegamenuComponent;
  let fixture: ComponentFixture<BusinessIncorporationMegamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessIncorporationMegamenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessIncorporationMegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
