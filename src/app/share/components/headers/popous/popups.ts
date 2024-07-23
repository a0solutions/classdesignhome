import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class headerManage {
  headers = {
    bathroom: [
      {
        top: '5%',
        left: '27%',
        reference: '10500371003130761903',
      },
      {
        top: '45%',
        left: '40%',
        reference: '20102001006030793103',
      },
    ],
    bedroom: [
      {
        top: '23%',
        left: '25%',
        reference: 'DOR 03-BHQM2N',
      },
      {
        top: '5%',
        left: '65%',
        reference: 'DOR 03-BHQM2N',
      },
      {
        top: '50%',
        left: '85%',
        reference: 'DOR 03-BHQM2N',
      },
      {
        top: '35%',
        left: '45%',
        reference: 'DOR 03-BHQM2N',
      },
    ],
    living: [
      {
        top: '40%',
        left: '20%',
        reference: '11130706935390303008',
      },
      {
        top: '48%',
        left: '50%',
        reference: '11132880888380633003',
      },
      {
        top: '25%',
        left: '70%',
        reference: '11130815004311163008',
      },
    ],
    products: [
      {
        top: '5%',
        left: '20%',
        reference: 'DOR 03-BHQM2N',
      },
      {
        top: '40%',
        left: '45%',
        reference: 'DOR 03-BHQM2N',
      },
      {
        top: '40%',
        left: '75%',
        reference: 'DOR 03-BHQM2N',
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
    } else if (headerName == 'products') {
      return this.headers.products;
    } else {
      return [{}];
    }
  }
}

export type popup = {
  top: string;
  left: string;
  reference: string;
};
