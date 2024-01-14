/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserManage } from './user-manage.service';

describe('Service: UserManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserManage],
    });
  });

  it('should ...', inject([UserManage], (service: UserManage) => {
    expect(service).toBeTruthy();
  }));
});
