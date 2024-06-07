/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Contactform } from './contactform.service';
import { HttpClient } from '@angular/common/http';
describe('Service: Contactform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Contactform],
    });
  });

  it('should ...', inject([Contactform], (service: Contactform) => {
    expect(service).toBeTruthy();
  }));
});
