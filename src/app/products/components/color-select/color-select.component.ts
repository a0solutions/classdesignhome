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
  selected: boolean = false;
  constructor() {}
  ngOnInit(): void {
    let fullColor = pantone.find((x) => x.color == this.background);
    this.colorName = <string>fullColor?.color;
    this.background = <string>fullColor?.hex;
  }
  ngOnChanges(changes: { [key: string]: SimpleChange }): void {
    if (changes.hasOwnProperty('activeColor')) {
      this.selected = this.activeColor;
    }
  }
  selectColor(color: string): void {
    this.selected = !this.selected;
    this.selectedColor.emit({ color: color, create: this.selected });
  }
}
