import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { NavManage } from '../share/components/nav/services/navManage.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css'],
})
export class UsComponent implements OnInit {
  constructor(private loader: LoaderService, private nav: NavManage) {}

  ngOnInit() {
    this.loader.show.next(false);
    this.nav.dark.next(true);
  }
}
