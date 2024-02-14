/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ShowroomCardComponent } from './showroom-card.component';

describe('ProductCardComponent', () => {
  let component: ShowroomCardComponent;
  let fixture: ComponentFixture<ShowroomCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowroomCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
