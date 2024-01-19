import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavManage {
  dark: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}
}
