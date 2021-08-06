import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEstablishmentRegistrationComponent } from './shop-establishment-registration.component';

describe('ShopEstablishmentRegistrationComponent', () => {
  let component: ShopEstablishmentRegistrationComponent;
  let fixture: ComponentFixture<ShopEstablishmentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopEstablishmentRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopEstablishmentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
