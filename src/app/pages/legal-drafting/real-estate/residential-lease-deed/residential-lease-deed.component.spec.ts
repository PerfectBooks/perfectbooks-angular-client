import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialLeaseDeedComponent } from './residential-lease-deed.component';

describe('ResidentialLeaseDeedComponent', () => {
  let component: ResidentialLeaseDeedComponent;
  let fixture: ComponentFixture<ResidentialLeaseDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialLeaseDeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialLeaseDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
