import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdaThirdPartyComponent } from './nda-third-party.component';

describe('NdaThirdPartyComponent', () => {
  let component: NdaThirdPartyComponent;
  let fixture: ComponentFixture<NdaThirdPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdaThirdPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdaThirdPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
