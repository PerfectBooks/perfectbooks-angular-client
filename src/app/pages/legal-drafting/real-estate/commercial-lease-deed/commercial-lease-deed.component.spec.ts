import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialLeaseDeedComponent } from './commercial-lease-deed.component';

describe('CommercialLeaseDeedComponent', () => {
  let component: CommercialLeaseDeedComponent;
  let fixture: ComponentFixture<CommercialLeaseDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialLeaseDeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialLeaseDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
