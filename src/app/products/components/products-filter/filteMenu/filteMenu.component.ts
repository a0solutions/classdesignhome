import { Component, Input } from '@angular/core';
import { FilterManage } from 'src/app/share/services/filterManage.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filteMenu.component.html',
  styleUrls: ['./filteMenu.component.css'],
})
export class FilterMenuComponent {
  open = false;
  @Input() categorySelected = '';
  @Input() subcategorySelected = '';
  constructor(private filter: FilterManage) {}

  showHideFilters() {
    this.filter.isInFilter.next(!this.filter.isInFilter.value);
    this.open = !this.open;
  }
}
