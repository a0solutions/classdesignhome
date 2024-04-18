import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import {
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
} from '../share/services/animations';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2, fadeUp3],
})
export class SigninComponent implements OnInit {
  constructor(private nav: NavManage, private loader: LoaderService) {}
  ngOnInit(): void {
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
}
