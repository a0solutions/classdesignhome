import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css'],
})
export class ColorSelectComponent implements OnInit, OnChanges {
  @Input() background: string = 'red';
  @Input() activeColor: boolean = false;
  @Output() selectedColor = new EventEmitter<Object>();
  selected: boolean = false;
  constructor() {}
  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('activeColor')) {
      this.selected = this.activeColor;
    }
  }

  ngOnInit() {}
  selectColor(color: string) {
    this.selected = !this.selected;
    this.selectedColor.emit({ color: color, create: this.selected });
  }
}
