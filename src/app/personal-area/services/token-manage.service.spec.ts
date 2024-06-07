/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenManage } from './token-manage.service';

describe('Service: TokenManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenManage],
    });
  });

  it('should ...', inject([TokenManage], (service: TokenManage) => {
    expect(service).toBeTruthy();
  }));
});
