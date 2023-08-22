import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNavigationComponent } from './sticky-navigation.component';

describe('StickyNavigationComponent', () => {
  let component: StickyNavigationComponent;
  let fixture: ComponentFixture<StickyNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyNavigationComponent]
    });
    fixture = TestBed.createComponent(StickyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
