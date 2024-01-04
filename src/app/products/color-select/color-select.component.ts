import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css'],
})
export class ColorSelectComponent implements OnInit {
  @Input() background: string = 'red';
  @Output() selectedColor = new EventEmitter<Object>();
  selected: boolean = false;
  constructor() {}

  ngOnInit() {}
  selectColor(color: string) {
    this.selected = !this.selected;
    this.selectedColor.emit({ color: color, create: this.selected });
  }
}
