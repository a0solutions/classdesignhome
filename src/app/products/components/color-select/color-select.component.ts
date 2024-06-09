import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { pantone } from './colors';
import { urls } from 'src/app/share/services/apiurl';
@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css'],
})
export class ColorSelectComponent implements OnInit, OnChanges {
  @Input() background = 'red';
  colorName = '';
  @Input() activeColor = false;
  @Input() reset = false;
  @Output() selectedColor = new EventEmitter<object>();
  url: string = urls.url;
  selected = false;
  check = '';

  ngOnChanges(): void {
    this.selected = true;
    this.selectColor(this.colorName);
  }

  ngOnInit(): void {
    const fullColor = pantone.find((x) => x.color == this.background);
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
