import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanApplicationComponent } from './pan-application.component';

describe('PanApplicationComponent', () => {
  let component: PanApplicationComponent;
  let fixture: ComponentFixture<PanApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
