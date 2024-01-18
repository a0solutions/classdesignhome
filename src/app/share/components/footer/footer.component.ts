import { Component, OnInit } from '@angular/core';
import {
  CategoriesService,
  categories,
} from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  allcategories: categories[] = [];
  constructor(private categories: CategoriesService, private route: Router) {}

  ngOnInit() {
    this.categories.getCategories().subscribe({
      next: this.setCategories.bind(this),
      error: console.log.bind(this),
    });
  }
  setCategories(arrCategories: object) {
    this.allcategories = <categories[]>arrCategories;
  }
  setRoute(category: string) {
    this.route.navigate(['products/' + category]);
  }
}
