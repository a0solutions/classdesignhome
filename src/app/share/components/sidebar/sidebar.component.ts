import { Component, OnInit, Type } from '@angular/core';
import {
  CategoriesService,
  categories,
} from '../../services/categories.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  allCategories: categories[];
  constructor(private categories: CategoriesService) {}

  ngOnInit() {
    this.categories.getCategories().subscribe((x) => {
      this.allCategories = <categories[]>x;
    });
  }
  expandAccordion(accordion: any) {
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
