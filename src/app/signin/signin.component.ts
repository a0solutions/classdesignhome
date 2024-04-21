import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import {
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeUp4],
})
export class SigninComponent implements OnInit {
  constructor(
    private nav: NavManage,
    private loader: LoaderService,
    private seo: SeoService
  ) {}
  moduleActive: boolean = true;
  ngOnInit(): void {
    this.seo.setSeo();
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
  signInActive() {}
}
