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
import { urls } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface collection {
  name: string;
  description: string;
  urlBanner: string;
  urlLogo: string;
  urlDocument: string;
}
@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css'],
  animations: [fadeLeft, fadeUp, fadeUp1, fadeUp2, fadeUp3],
})
export class CatalogPageComponent implements OnInit {
  url = urls.urlCollections;
  $allCollections: Observable<collection[]>;
  constructor(
    private nav: NavManage,
    private loader: LoaderService,
    private seo: SeoService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.$allCollections = this.http.get<collection[]>(this.url);
    this.seo.setSeo();
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
}
