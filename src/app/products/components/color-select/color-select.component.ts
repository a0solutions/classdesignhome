import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { pantone } from './colors';
import { urls } from 'src/app/share/services/apiurl';
@Component({
  selector: 'color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css'],
})
export class ColorSelectComponent implements OnChanges, OnInit {
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
  }
  ngOnChanges(changes: { [key: string]: SimpleChange }): void {
    if (changes.hasOwnProperty('activeColor')) {
      this.selected = this.activeColor;
      if (this.activeColor == true) {
        this.check = this.url + 'classapi/images/app/check.png';
      } else {
        this.check = '';
      }
    }
  }
  selectColor(color: string): void {
    this.selected = !this.selected;
    this.selectedColor.emit({ color: color, create: this.selected });
  }
}
