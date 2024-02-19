/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertManage } from './alertManage.service';

describe('Service: AlertManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertManage],
    });
  });

  it('should ...', inject([AlertManage], (service: AlertManage) => {
    expect(service).toBeTruthy();
  }));
});
