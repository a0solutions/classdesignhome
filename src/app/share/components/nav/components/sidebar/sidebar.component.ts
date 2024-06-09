import { Component, OnInit } from '@angular/core';
import {
  CategoriesService,
  categories,
} from 'src/app/share/services/categories.service';
import { ProductManage } from 'src/app/share/services/product-manage.service';

@Component({
  selector: 'app-sidebar',
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCategories(categories: any): void {
    this.allCategories = <categories[]>categories;
  }
  getAllProductsBySub(sub: string): number {
    return this.products.getNumberBySub(sub);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expandAccordion(accordion: any): void {
    const id = accordion.target.id;
    if (document.getElementById(id)?.classList.contains('collapsed')) {
      document.getElementById(id + 'subcategories')?.classList.add('show');
      document.getElementById(id)?.classList.remove('collapsed');
    } else {
      document.getElementById(id + 'subcategories')?.classList.remove('show');
      document.getElementById(id)?.classList.add('collapsed');
    }
  }
}
