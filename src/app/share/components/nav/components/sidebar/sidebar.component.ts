import { Component, OnInit } from '@angular/core';
import {
  CategoriesService,
  categories,
} from 'src/app/share/services/categories.service';
import { ProductManage } from 'src/app/products/services/product-manage.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  allCategories: categories[];
  constructor(
    private categories: CategoriesService,
    private products: ProductManage
  ) {}

  ngOnInit(): void {
    this.categories.getCategories().subscribe({
      next: this.setCategories.bind(this),
      error: console.log.bind(this),
    });
  }
  setCategories(categories: any): void {
    this.allCategories = <categories[]>categories;
  }
  getAllProductsBySub(sub: string): number {
    return this.products.getNumberBySub(sub);
  }
  expandAccordion(accordion: any): void {
    let id = accordion.target.id;
    if (document.getElementById(id)?.classList.contains('collapsed')) {
      document.getElementById(id + 'subcategories')?.classList.add('show');
      document.getElementById(id)?.classList.remove('collapsed');
    } else {
      document.getElementById(id + 'subcategories')?.classList.remove('show');
      document.getElementById(id)?.classList.add('collapsed');
    }
  }
}
