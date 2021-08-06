import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileIncTwentyTwoAComponent } from './file-inc-twenty-two-a.component';

describe('FileIncTwentyTwoAComponent', () => {
  let component: FileIncTwentyTwoAComponent;
  let fixture: ComponentFixture<FileIncTwentyTwoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileIncTwentyTwoAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileIncTwentyTwoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
