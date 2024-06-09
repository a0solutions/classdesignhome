import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  show: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
