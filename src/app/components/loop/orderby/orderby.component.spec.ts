import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbyComponent } from './orderby.component';

describe('OrderbyComponent', () => {
  let component: OrderbyComponent;
  let fixture: ComponentFixture<OrderbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderbyComponent]
    });
    fixture = TestBed.createComponent(OrderbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
