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
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
      },
      {
        top: '35%',
        left: '53%',
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
      },
      {
        top: '27%',
        left: '37%',
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
      },
    ],
    bedroom: [
      {
        top: '23%',
        left: '25%',
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
      },
      {
        top: '5%',
        left: '65%',
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
      },
      {
        top: '50%',
        left: '85%',
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
      },
      {
        top: '35%',
        left: '45%',
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
      },
    ],
    living: [
      {
        top: '5%',
        left: '20%',
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
      },
      {
        top: '40%',
        left: '45%',
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
      },
      {
        top: '40%',
        left: '75%',
        name: 'Sink',
        description:
          'This prodcut is made with the strongest mirror in the world.',
        price: 250,
        category: 'bath',
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
    } else {
      return [{}];
    }
  }
}

export type popup = {
  top: string;
  left: string;
  name: string;
  description: string;
  price: number;
  category: string;
};
