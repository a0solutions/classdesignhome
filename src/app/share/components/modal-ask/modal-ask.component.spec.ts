/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalAskComponent } from './modal-ask.component';

describe('ModalAskComponent', () => {
  let component: ModalAskComponent;
  let fixture: ComponentFixture<ModalAskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
