import { Component, OnInit } from '@angular/core';
import { NavManage } from '../share/components/nav/services/navManage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  constructor(private nav: NavManage, private loader: LoaderService) {}
  ngOnInit(): void {
    this.nav.dark.next(true);
    this.loader.show.next(false);
  }
}
