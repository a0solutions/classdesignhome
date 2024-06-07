/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component404 } from './404.component';

describe('404Component', () => {
  let component: Component404;
  let fixture: ComponentFixture<Component404>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component404],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
