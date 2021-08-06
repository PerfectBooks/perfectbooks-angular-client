import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileIncTwentyAComponent } from './file-inc-twenty-a.component';

describe('FileIncTwentyAComponent', () => {
  let component: FileIncTwentyAComponent;
  let fixture: ComponentFixture<FileIncTwentyAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileIncTwentyAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileIncTwentyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
