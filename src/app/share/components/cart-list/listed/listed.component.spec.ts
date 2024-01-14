/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListedComponent } from './listed.component';

describe('ListedComponent', () => {
  let component: ListedComponent;
  let fixture: ComponentFixture<ListedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
