/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenManageService } from './token-manage.service';

describe('Service: TokenManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenManageService]
    });
  });

  it('should ...', inject([TokenManageService], (service: TokenManageService) => {
    expect(service).toBeTruthy();
  }));
});
