import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader/services/loader.service';
import { NavManage } from '../nav/services/navManage.service';
import { fadeUp, fadeUp1, fadeUp2 } from '../../services/animations';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.css'],
  animations: [fadeUp, fadeUp1, fadeUp2],
})
export class Component404 implements OnInit {
  constructor(private loader: LoaderService, private nav: NavManage) {}

  ngOnInit(): void {
    this.loader.show.next(false);
    this.nav.dark.next(true);
  }
}
