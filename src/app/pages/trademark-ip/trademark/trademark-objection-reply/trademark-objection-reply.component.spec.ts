import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkObjectionReplyComponent } from './trademark-objection-reply.component';

describe('TrademarkObjectionReplyComponent', () => {
  let component: TrademarkObjectionReplyComponent;
  let fixture: ComponentFixture<TrademarkObjectionReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkObjectionReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkObjectionReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
