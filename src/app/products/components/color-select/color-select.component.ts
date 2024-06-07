import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pantone } from './colors';
import { urls } from 'src/app/share/services/apiurl';
@Component({
  selector: 'color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css'],
})
export class ColorSelectComponent implements OnInit {
  @Input() background: string = 'red';
  colorName: string = '';
  @Input() activeColor: boolean = false;
  @Output() selectedColor = new EventEmitter<Object>();
  url: string = urls.url;
  selected: boolean = false;
  check: string = '';
  constructor() {}
  ngOnInit(): void {
    let fullColor = pantone.find((x) => x.color == this.background);
    this.colorName = <string>fullColor?.color;
    this.background = <string>fullColor?.hex;
    this.activeColor
      ? (this.check = this.url + 'classapi/images/app/check.png')
      : (this.check = '');
  }
  selectColor(color: string): void {
    this.selected = !this.selected;
    this.selected
      ? (this.check = this.url + 'classapi/images/app/check.png')
      : (this.check = '');
    this.selectedColor.emit({ color: color, create: this.selected });
  }
}
