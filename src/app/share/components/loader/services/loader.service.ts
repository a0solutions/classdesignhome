import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  show: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}
}
