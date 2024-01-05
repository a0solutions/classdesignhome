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
        id: '34',
      },
      {
        top: '35%',
        left: '53%',
        id: '35',
      },
      {
        top: '27%',
        left: '37%',
        id: '36',
      },
    ],
    bedroom: [
      {
        top: '23%',
        left: '25%',
        id: '36',
      },
      {
        top: '5%',
        left: '65%',
        id: '38',
      },
      {
        top: '50%',
        left: '85%',
        id: '36',
      },
      {
        top: '35%',
        left: '45%',
        id: '37',
      },
    ],
    living: [
      {
        top: '5%',
        left: '20%',
        id: '40',
      },
      {
        top: '40%',
        left: '45%',
        id: '41',
      },
      {
        top: '40%',
        left: '75%',
        id: '40',
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
  id: string;
};
