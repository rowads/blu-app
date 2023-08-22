import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewHorizontalComponent } from './quick-view-horizontal.component';

describe('QuickViewHorizontalComponent', () => {
  let component: QuickViewHorizontalComponent;
  let fixture: ComponentFixture<QuickViewHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickViewHorizontalComponent]
    });
    fixture = TestBed.createComponent(QuickViewHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
