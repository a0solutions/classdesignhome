/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavManageService } from './navManage.service';

describe('Service: NavManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavManageService]
    });
  });

  it('should ...', inject([NavManageService], (service: NavManageService) => {
    expect(service).toBeTruthy();
  }));
});
