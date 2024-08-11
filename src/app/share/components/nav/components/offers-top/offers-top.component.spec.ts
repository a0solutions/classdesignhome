/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersTopComponent } from './offers-top.component';

describe('OffersTopComponent', () => {
  let component: OffersTopComponent;
  let fixture: ComponentFixture<OffersTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OffersTopComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
