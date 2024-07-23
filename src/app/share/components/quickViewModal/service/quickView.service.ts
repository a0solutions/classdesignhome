import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuickViewService {
  show$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  reference: Subject<string> = new Subject();
}
