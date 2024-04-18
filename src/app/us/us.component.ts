import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { urls } from '../share/services/apiurl';
import {
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
} from '../share/services/animations';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3, fadeLeft],
})
export class UsComponent implements OnInit {
  constructor(private loader: LoaderService, private nav: NavManage) {}
  url: string = urls.url;
  ngOnInit() {
    this.loader.show.next(false);
    this.nav.dark.next(true);
  }
}
