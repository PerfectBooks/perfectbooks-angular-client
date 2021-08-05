import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalbarComponent } from './universalbar.component';

describe('UniversalbarComponent', () => {
  let component: UniversalbarComponent;
  let fixture: ComponentFixture<UniversalbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
