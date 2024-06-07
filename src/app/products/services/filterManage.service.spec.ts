/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilterManage } from './filterManage.service';

describe('Service: FilterManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterManage],
    });
  });

  it('should ...', inject([FilterManage], (service: FilterManage) => {
    expect(service).toBeTruthy();
  }));
});
