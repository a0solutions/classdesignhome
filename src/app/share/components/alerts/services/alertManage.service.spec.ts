/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertManageService } from './alertManage.service';

describe('Service: AlertManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertManageService]
    });
  });

  it('should ...', inject([AlertManageService], (service: AlertManageService) => {
    expect(service).toBeTruthy();
  }));
});
