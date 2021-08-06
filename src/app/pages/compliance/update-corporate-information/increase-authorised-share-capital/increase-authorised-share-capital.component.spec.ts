import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseAuthorisedShareCapitalComponent } from './increase-authorised-share-capital.component';

describe('IncreaseAuthorisedShareCapitalComponent', () => {
  let component: IncreaseAuthorisedShareCapitalComponent;
  let fixture: ComponentFixture<IncreaseAuthorisedShareCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseAuthorisedShareCapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseAuthorisedShareCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
