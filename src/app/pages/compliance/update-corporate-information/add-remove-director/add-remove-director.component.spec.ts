import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveDirectorComponent } from './add-remove-director.component';

describe('AddRemoveDirectorComponent', () => {
  let component: AddRemoveDirectorComponent;
  let fixture: ComponentFixture<AddRemoveDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
