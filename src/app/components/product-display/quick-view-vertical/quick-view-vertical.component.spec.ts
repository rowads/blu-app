import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewVerticalComponent } from './quick-view-vertical.component';

describe('QuickViewVerticalComponent', () => {
  let component: QuickViewVerticalComponent;
  let fixture: ComponentFixture<QuickViewVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickViewVerticalComponent]
    });
    fixture = TestBed.createComponent(QuickViewVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
