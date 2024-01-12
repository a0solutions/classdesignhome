/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactformService } from './contactform.service';

describe('Service: Contactform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactformService]
    });
  });

  it('should ...', inject([ContactformService], (service: ContactformService) => {
    expect(service).toBeTruthy();
  }));
});
