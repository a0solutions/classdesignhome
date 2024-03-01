import { Component, OnInit } from '@angular/core';
import {
  CategoriesService,
  categories,
} from '../../services/categories.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserManage } from 'src/app/signin/services/user-manage.service';
import { AlertManage } from '../alerts/services/alertManage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  allcategories: categories[] = [];
  constructor(
    private categories: CategoriesService,
    private route: Router,
    private user: UserManage,
    private alert: AlertManage
  ) {}

  ngOnInit(): void {
    this.categories.getCategories().subscribe({
      next: this.setCategories.bind(this),
      error: console.log.bind(this),
    });
  }
  setCategories(arrCategories: object): void {
    this.allcategories = <categories[]>arrCategories;
  }
  setRoute(category: string): void {
    this.route.navigate(['products/' + category]);
  }
  sendNewsLetter(form: NgForm): void {
    this.user.addNewsLetter(form.value).subscribe({
      next: this.responseManageOk.bind(this),
      error: console.log.bind(this), //this.responseManageKo.bind(this)
    });
    form.reset();
  }
  responseManageOk(response: object): void {
    response
      ? this.alert.setAlertMessage('newsletterOk')
      : this.alert.setAlertMessage('newsletterExist');
  }
  responseManageKo(code: string): void {
    this.alert.setAlertMessage('');
  }
}
