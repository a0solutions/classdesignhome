import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { NavManage } from '../share/components/nav/services/navManage.service';
import {
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';
import { urls } from 'src/environments/environment';
import { ShowroomsService } from '../share/services/showrooms.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeLeft],
})
export class UsComponent implements OnInit {
  constructor(
    private loader: LoaderService,
    private nav: NavManage,
    private seo: SeoService,
    private showroomService: ShowroomsService
  ) {}
  url: string = urls.url;
  ngOnInit() {
    this.seo.setSeo();
    this.loader.show.next(false);
    this.nav.dark.next(true);
    this.showroomService.categoryActive.next('all');
  }
}
