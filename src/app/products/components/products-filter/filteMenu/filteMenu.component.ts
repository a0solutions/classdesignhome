import { Component, Input } from '@angular/core';
import { FilterManage } from 'src/app/share/services/filterManage.service';
import { SortService } from 'src/app/share/services/sort-service.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filteMenu.component.html',
  styleUrls: ['./filteMenu.component.css'],
})
export class FilterMenuComponent {
  open = false;
  @Input() categorySelected = '';
  @Input() subcategorySelected = '';
  constructor(private filter: FilterManage, private sortService: SortService) {}

  showHideFilters() {
    this.filter.isInFilter.next(!this.filter.isInFilter.value);
    this.open = !this.open;
  }
  sortProductList(sortSelected: string) {
    this.sortService.sortList.next(sortSelected);
  }
}
