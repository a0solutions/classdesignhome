import { Component, HostListener, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import { SeoService } from '../share/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private nav: NavManage,
    private loader: LoaderService,
    private seo: SeoService
  ) {}

  @HostListener('window:load', ['$event'])
  ngOnInit(): void {
    this.nav.dark.next(false);
    this.seo.setSeo('home');
    setTimeout(() => [this.loader.show.next(false)], 2000);
  }
}
