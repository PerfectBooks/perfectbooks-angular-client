import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanApplicationComponent } from './tan-application.component';

describe('TanApplicationComponent', () => {
  let component: TanApplicationComponent;
  let fixture: ComponentFixture<TanApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
