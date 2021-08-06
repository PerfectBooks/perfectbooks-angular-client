import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightToInformationComponent } from './right-to-information.component';

describe('RightToInformationComponent', () => {
  let component: RightToInformationComponent;
  let fixture: ComponentFixture<RightToInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightToInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightToInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
