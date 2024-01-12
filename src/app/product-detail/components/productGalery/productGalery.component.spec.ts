/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductGalery } from './productGalery.component';

describe('ProductGaleryComponent', () => {
  let component: ProductGalery;
  let fixture: ComponentFixture<ProductGalery>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGalery],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGalery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
