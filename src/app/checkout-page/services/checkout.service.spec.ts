/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Checkout } from './checkout.service';

describe('Service: Checkout', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Checkout],
    });
  });

  it('should ...', inject([Checkout], (service: Checkout) => {
    expect(service).toBeTruthy();
  }));
});
