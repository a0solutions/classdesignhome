import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import {
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeUp4],
})
export class SigninComponent implements OnInit {
  constructor(
    private nav: NavManage,
    private seo: SeoService,
    private route: ActivatedRoute
  ) {}
  moduleActive = true;
  ngOnInit(): void {
    this.route.paramMap.subscribe((x) => {
      x.get('register') == 'register' ? (this.moduleActive = false) : null;
    });
    this.seo.setSeo();
    this.nav.dark.next(true);
  }
}
