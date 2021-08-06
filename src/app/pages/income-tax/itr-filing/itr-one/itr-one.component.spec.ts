import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItrOneComponent } from './itr-one.component';

describe('ItrOneComponent', () => {
  let component: ItrOneComponent;
  let fixture: ComponentFixture<ItrOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItrOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItrOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
