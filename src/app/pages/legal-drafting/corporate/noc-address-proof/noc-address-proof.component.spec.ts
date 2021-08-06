import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocAddressProofComponent } from './noc-address-proof.component';

describe('NocAddressProofComponent', () => {
  let component: NocAddressProofComponent;
  let fixture: ComponentFixture<NocAddressProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocAddressProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NocAddressProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
