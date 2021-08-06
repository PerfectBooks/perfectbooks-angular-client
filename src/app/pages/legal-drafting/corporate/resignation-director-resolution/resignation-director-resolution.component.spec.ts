import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationDirectorResolutionComponent } from './resignation-director-resolution.component';

describe('ResignationDirectorResolutionComponent', () => {
  let component: ResignationDirectorResolutionComponent;
  let fixture: ComponentFixture<ResignationDirectorResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResignationDirectorResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResignationDirectorResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
