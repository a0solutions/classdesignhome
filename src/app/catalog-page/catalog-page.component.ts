import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';

@Component({
  selector: 'catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css'],
})
export class CatalogPageComponent implements OnInit {
  constructor(private nav: NavManage, private loader: LoaderService) {}
  ngOnInit(): void {
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
}
