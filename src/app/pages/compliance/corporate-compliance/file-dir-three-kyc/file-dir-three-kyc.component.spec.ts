import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDirThreeKycComponent } from './file-dir-three-kyc.component';

describe('FileDirThreeKycComponent', () => {
  let component: FileDirThreeKycComponent;
  let fixture: ComponentFixture<FileDirThreeKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDirThreeKycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDirThreeKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
