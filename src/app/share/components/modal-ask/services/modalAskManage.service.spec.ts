/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalAskManageService } from './modalAskManage.service';

describe('Service: ModalAskManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalAskManageService]
    });
  });

  it('should ...', inject([ModalAskManageService], (service: ModalAskManageService) => {
    expect(service).toBeTruthy();
  }));
});
