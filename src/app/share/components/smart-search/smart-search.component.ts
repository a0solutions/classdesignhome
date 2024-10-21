import { Component, OnInit } from '@angular/core';
import { product, ProductManage } from '../../services/product-manage.service';
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
  searhList: string[] = [];
  showSearchList = false;
  actualSearch: string;
  constructor(
    private productService: ProductManage,
    private searchService: SearchService
  ) {}
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
    this.actualSearch = value;
    this.showSearchList = false;
    this.searchService.storeSearch(value);
    const splitValue = value.toLowerCase().split(' ');
    splitValue.forEach((x: string) => {
      this.allFinded = this.productService.products.value.filter(
        (y) =>
          y.name.toLowerCase().includes(x) ||
          y.description?.toLowerCase().includes(x) ||
          y.category?.toLowerCase().includes(x) ||
          y.color?.toLowerCase().includes(x) ||
          y.subcategory?.toLowerCase().includes(x) ||
          y.sets?.toLowerCase().includes(x) ||
          y.materialDetail?.toLowerCase().includes(x) ||
          y.frameMaterial?.toLowerCase().includes(x) ||
          y.counterMaterial?.toLowerCase().includes(x) ||
          y.upholsteryMaterial?.toLowerCase().includes(x) ||
          y.upholsteryFillMaterial?.toLowerCase().includes(x) ||
          y.price?.toString().toLowerCase().includes(x) ||
          y.featureBullet?.toLowerCase().includes(x)
      );
    });
  }
  getSearchList() {
    this.showSearchList = true;
    this.searhList = this.searchService.getSearchList();
  }
}
