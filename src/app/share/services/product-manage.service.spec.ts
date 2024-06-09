import { TestBed } from '@angular/core/testing';

import { ProductManage } from './product-manage.service';

describe('ProductManageService', () => {
  let service: ProductManage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductManage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
