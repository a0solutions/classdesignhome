/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { NavManage } from './navManage.service';

describe('Service: NavManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavManage],
    });
  });

  it('should ...', inject([NavManage], (service: NavManage) => {
    expect(service).toBeTruthy();
  }));
});
