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
        id: '538',
      },
      {
        top: '35%',
        left: '53%',
        id: '538',
      },
      {
        top: '27%',
        left: '37%',
        id: '537',
      },
    ],
    bedroom: [
      {
        top: '23%',
        left: '25%',
        id: '536',
      },
      {
        top: '5%',
        left: '65%',
        id: '535',
      },
      {
        top: '50%',
        left: '85%',
        id: '534',
      },
      {
        top: '35%',
        left: '45%',
        id: '533',
      },
    ],
    living: [
      {
        top: '5%',
        left: '20%',
        id: '532',
      },
      {
        top: '40%',
        left: '45%',
        id: '531',
      },
      {
        top: '40%',
        left: '75%',
        id: '530',
      },
    ],
    products: [
      {
        top: '5%',
        left: '20%',
        id: '529',
      },
      {
        top: '40%',
        left: '45%',
        id: '528',
      },
      {
        top: '40%',
        left: '75%',
        id: '527',
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
