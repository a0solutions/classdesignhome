/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalAskManage } from './modalAskManage.service';

describe('Service: ModalAskManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalAskManage],
    });
  });

  it('should ...', inject([ModalAskManage], (service: ModalAskManage) => {
    expect(service).toBeTruthy();
  }));
});
