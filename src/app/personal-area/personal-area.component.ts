import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { SeoService } from '../share/services/seo.service';
import { TokenManage } from '../share/services/token-manage.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
})
export class PersonalAreaComponent implements OnInit {
  constructor(
    private nav: NavManage,
    private loader: LoaderService,
    private seo: SeoService,
    private token: TokenManage
  ) {}
  name = 'User';
  ngOnInit() {
    this.seo.setSeo();
    this.nav.dark.next(true);
    this.setName();
  }
  setName() {
    this.name = this.token.getUserName();
  }
}
