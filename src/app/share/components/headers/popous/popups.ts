import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class headerManage {
  headers = {
    bathroom: [
      {
        top: '13%',
        left: '27%',
        id: '12',
      },
      {
        top: '35%',
        left: '53%',
        id: '10',
      },
      {
        top: '27%',
        left: '37%',
        id: '2',
      },
    ],
    bedroom: [
      {
        top: '23%',
        left: '25%',
        id: '27',
      },
      {
        top: '5%',
        left: '65%',
        id: '26',
      },
      {
        top: '50%',
        left: '85%',
        id: '25',
      },
      {
        top: '35%',
        left: '45%',
        id: '24',
      },
    ],
    living: [
      {
        top: '5%',
        left: '20%',
        id: '23',
      },
      {
        top: '40%',
        left: '45%',
        id: '22',
      },
      {
        top: '40%',
        left: '75%',
        id: '20',
      },
    ],
    products: [
      {
        top: '5%',
        left: '20%',
        id: '9',
      },
      {
        top: '40%',
        left: '45%',
        id: '1',
      },
      {
        top: '40%',
        left: '75%',
        id: '2',
      },
    ],
  };

  getPopups(headerName: string) {
    if (headerName == 'bathroom') {
      return this.headers.bathroom;
    } else if (headerName == 'bedroom') {
      return this.headers.bedroom;
    } else if (headerName == 'living') {
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
  id: string;
};
