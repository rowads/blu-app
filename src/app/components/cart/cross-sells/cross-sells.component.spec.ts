import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossSellsComponent } from './cross-sells.component';

describe('CrossSellsComponent', () => {
  let component: CrossSellsComponent;
  let fixture: ComponentFixture<CrossSellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossSellsComponent]
    });
    fixture = TestBed.createComponent(CrossSellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
