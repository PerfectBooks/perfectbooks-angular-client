import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentPatentComponent } from './permanent-patent.component';

describe('PermanentPatentComponent', () => {
  let component: PermanentPatentComponent;
  let fixture: ComponentFixture<PermanentPatentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentPatentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentPatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
