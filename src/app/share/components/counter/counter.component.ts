import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() card: boolean = false;
  @Input() number: number = 1;
  @Output() numberCount = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  add() {
    this.number == 10 ? '' : this.number++;
    this.numberCount.emit(this.number);
  }
  less() {
    this.number == 1 ? '' : this.number--;
    this.numberCount.emit(this.number);
  }
}
