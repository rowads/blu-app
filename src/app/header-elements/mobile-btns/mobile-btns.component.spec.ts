import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBtnsComponent } from './mobile-btns.component';

describe('MobileBtnsComponent', () => {
  let component: MobileBtnsComponent;
  let fixture: ComponentFixture<MobileBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBtnsComponent]
    });
    fixture = TestBed.createComponent(MobileBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
