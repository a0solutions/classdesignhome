/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilterManageService } from './filterManage.service';

describe('Service: FilterManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterManageService]
    });
  });

  it('should ...', inject([FilterManageService], (service: FilterManageService) => {
    expect(service).toBeTruthy();
  }));
});
