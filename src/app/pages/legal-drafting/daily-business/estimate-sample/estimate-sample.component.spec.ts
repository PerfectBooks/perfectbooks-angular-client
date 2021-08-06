import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateSampleComponent } from './estimate-sample.component';

describe('EstimateSampleComponent', () => {
  let component: EstimateSampleComponent;
  let fixture: ComponentFixture<EstimateSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
