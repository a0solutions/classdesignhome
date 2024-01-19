import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loader: boolean = true;
  constructor(private nav: NavManage) {}
  ngOnInit(): void {
    this.nav.dark.next(false);
  }
}
