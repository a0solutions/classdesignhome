/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonalAreaComponent } from './personal-area.component';

describe('PersonalAreaComponent', () => {
  let component: PersonalAreaComponent;
  let fixture: ComponentFixture<PersonalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
