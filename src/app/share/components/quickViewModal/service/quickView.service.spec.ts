/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuickViewService } from './quickView.service';

describe('Service: QuickView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickViewService]
    });
  });

  it('should ...', inject([QuickViewService], (service: QuickViewService) => {
    expect(service).toBeTruthy();
  }));
});
