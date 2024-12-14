import { Component, OnInit } from '@angular/core';
import { product } from '../../services/product-manage.service';
import {
  fade,
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
} from '../../services/animations';
import { SearchService } from '../../services/search.service';
import { urls } from 'src/environments/environment';
import { LoaderService } from '../loader/services/loader.service';

@Component({
  selector: 'app-smart-search',
  templateUrl: './smart-search.component.html',
  styleUrls: ['./smart-search.component.css'],
  animations: [fadeLeft, fadeUp, fadeUp1, fadeUp2, fadeUp3, fade],
})
export class SmartSearchComponent implements OnInit {
  allFinded: product[] = [];
  show: boolean;
  url = urls.url;
  size = false;
  searchList: string[] = [];
  showSearchList = false;
  actualSearch: string;
  loading = false;
  constructor(private searchService: SearchService) {}
  ngOnInit() {
    this.searchService.showSearch.subscribe((x) => {
      this.show = x;
    });
  }
  convertURI(url: string) {
    return encodeURI(url);
  }
  closeSearch() {
    this.searchService.showSearch.next(false);
  }
  applySearch(value: string) {
    if (value != '' && value != undefined) {
      this.loading = true;
      this.searchService.keyword.next(value);
      this.showSearchList = false;
      this.searchService.storeSearch(value);
      this.closeSearch();
    }
  }
  getSearchList() {
    this.searchList = this.searchService.getSearchList();
    if (this.searchList.length != 0) {
      this.showSearchList = true;
    }
  }
}
