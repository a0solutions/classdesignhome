import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import {
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';

@Component({
  selector: 'catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css'],
  animations: [fadeLeft, fadeUp, fadeUp1, fadeUp2, fadeUp3],
})
export class CatalogPageComponent implements OnInit {
  constructor(
    private nav: NavManage,
    private loader: LoaderService,
    private seo: SeoService
  ) {}
  ngOnInit(): void {
    this.seo.setSeo();
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
}
