import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private nav: NavManage, private loader: LoaderService) {}

  ngOnInit(): void {
    this.nav.dark.next(false);
    this.loader.show.next(false);
  }
}
