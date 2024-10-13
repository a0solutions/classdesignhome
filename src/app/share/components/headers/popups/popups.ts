import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class headerManage {
  headers = {
    bathroom: [
      {
        top: 5,
        left: 27,
        reference: '10500371003130761903',
      },
      {
        top: 45,
        left: 40,
        reference: '20102001006030793103',
      },
    ],
    bedroom: [
      {
        top: 25,
        left: 55,
        reference: 'DOR 21-BHKG',
      },
      {
        top: 5,
        left: 35,
        reference: 'DOR 21-BHKG2N',
      },
    ],
    living: [
      {
        top: 40,
        left: 20,
        reference: '11130706935390303008',
      },
      {
        top: 48,
        left: 50,
        reference: '11132880888380633003',
      },
      {
        top: 25,
        left: 20,
        reference: '11130815004311163008',
      },
    ],
    products: [
      {
        top: 5,
        left: 25,
        reference: '11130550530331575608',
      },

      {
        top: 50,
        left: 70,
        reference: '11130390881380570103',
      },
    ],
  };

  getPopups(headerName: string) {
    if (headerName == 'Bathroom') {
      return this.headers.bathroom;
    } else if (headerName == 'Bedroom') {
      return this.headers.bedroom;
    } else if (headerName == 'Living Room') {
      return this.headers.living;
    } else if (headerName == 'all') {
      return this.headers.products;
    } else {
      return [{}];
    }
  }
}

export type popup = {
  top: number;
  left: number;
  reference: string;
};
