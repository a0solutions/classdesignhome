import { Component, OnInit } from '@angular/core';
import { NavManage } from '../nav/services/navManage.service';
import { LoaderService } from '../loader/services/loader.service';
import {
  fadeUp,
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
  fadeUp5,
  fadeUp6,
  fadeUp7,
} from '../../services/animations';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css'],
  animations: [
    fadeUp,
    fadeUp1,
    fadeUp2,
    fadeUp3,
    fadeUp4,
    fadeUp5,
    fadeUp6,
    fadeUp7,
  ],
})
export class PoliciesComponent implements OnInit {
  constructor(private nav: NavManage, private loader: LoaderService) {}

  ngOnInit(): void {
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
}
