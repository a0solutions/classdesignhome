import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { SeoService } from '../share/services/seo.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
})
export class PersonalAreaComponent implements OnInit {
  constructor(
    private nav: NavManage,
    private loader: LoaderService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.setSeo();
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
}
