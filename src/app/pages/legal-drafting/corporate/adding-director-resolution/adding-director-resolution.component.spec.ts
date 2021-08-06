import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingDirectorResolutionComponent } from './adding-director-resolution.component';

describe('AddingDirectorResolutionComponent', () => {
  let component: AddingDirectorResolutionComponent;
  let fixture: ComponentFixture<AddingDirectorResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingDirectorResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingDirectorResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
