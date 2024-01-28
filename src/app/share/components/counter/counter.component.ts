import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input() card: boolean = false;
  @Input() number: number = 1;
  @Output() numberCount = new EventEmitter<number>();
  constructor() {}

  add(): void {
    this.number++;
    this.numberCount.emit(this.number);
  }
  less(): void {
    this.number--;
    this.numberCount.emit(this.number);
  }
}
