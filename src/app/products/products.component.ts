/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavManage } from '../share/components/nav/services/navManage.service';
import {
  product,
  ProductManage,
} from '../share/services/product-manage.service';
import { LoaderService } from '../share/components/loader/services/loader.service';
import {
  fade,
  fadeLeft,
  fadeUp,
  fadeUp1,
  fadeUp2,
} from '../share/services/animations';
import { SeoService } from '../share/services/seo.service';
import { CategoriesService } from '../share/services/categories.service';
import { FilterManage } from '../share/services/filterManage.service';
import { QuickViewService } from '../share/components/quickViewModal/service/quickView.service';
import { urls } from 'src/environments/environment';
import { ShowroomsService } from '../share/services/showrooms.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [fadeUp, fadeLeft, fadeUp1, fadeUp2, fade],
})
export class ProductsComponent implements OnInit {
  category = '';
  subcategory = '';
  categoryTitle: string;
  categoryText: string;
  urlsWeb: string = urls.url;
  open = false;
  allOffers: product[] = [];
  categoriesContainer = 510;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allCategories: any[] = [];
  width: any;
  showrooms: any;
  constructor(
    private url: ActivatedRoute,
    private nav: NavManage,
    private allProducts: ProductManage,
    private loader: LoaderService,
    private seo: SeoService,
    private categories: CategoriesService,
    private filter: FilterManage,
    private quick: QuickViewService,
    private showrommsService: ShowroomsService
  ) {}
  ngOnInit(): void {
    this.width = window.innerWidth;
    this.quick.show$.next(false);
    this.url.paramMap.subscribe({
      next: this.getCategory.bind(this),
      error: console.log.bind(this),
    });
    this.filter.isInFilter.subscribe((x) => {
      x ? (this.open = true) : (this.open = false);
    });
    this.categories.getCategories().subscribe((x: any) => {
      x.forEach((element: any) => {
        if (element.category == this.category) {
          this.allCategories.push({ category: element.category, active: true });
        } else {
          this.allCategories.push({
            category: element.category,
            active: false,
          });
        }
      });
    });
    this.nav.dark.next(true);
  }
  @HostListener('window:resize', ['$event'])
  handleKeyDown(event: any): void {
    this.width = event.target.innerWidth;
  }
  getCategory(param: ParamMap): void {
    this.allProducts.setAllProducts().then(() => {
      this.allOffers = this.allProducts.allProducts.filter((x) => x.offer != 0);

      this.category = <string>param.get('category');
      this.subcategory = <string>param.get('subcategory');
      this.category == 'all' || this.category == 'like'
        ? (this.categoryTitle = 'Shop Designs')
        : (this.categoryTitle = this.category);
      let urlImage: string;
      this.category == 'like' ? (urlImage = 'all') : (urlImage = this.category);
      this.categoryText = this.getText(this.category);
      this.seo.setSeo(
        this.category,
        this.categoryText,
        this.urlsWeb +
          'classapi/images/' +
          urlImage +
          '/showroom/showroom-' +
          urlImage +
          '-1.png'
      );
      this.loader.show.next(false);
      this.showrommsService.getShowrooms(this.category).subscribe((x) => {
        this.showrooms = x;
      });
    });
  }

  getText(category: string): string {
    if (category == 'all' || category == 'like')
      return 'Discover the essence of luxury home furnishings with Class Design. Our eclectic selection—ranging from minimalist furniture to contemporary statement pieces—ensures that every home can find its perfect match. Explore our expertly crafted designs, perfect for enhancing modern living spaces with elegance and sophistication.';
    if (category == 'Bedroom')
      return "Revitalize your sanctuary with Class Design's versatile bedroom furniture collection. Whether seeking the clean elegance of minimalist design or the bold flair of contemporary beds and dressers, our offerings cater to every style, promising to elevate your bedroom decor to a realm of luxurious comfort and high-end design.";
    if (category == 'Living Room')
      return "Transform your living area with Class Design's diverse living room furniture, where quality meets the latest trends. From minimalist sofas to contemporary coffee tables, our pieces are designed to transform your living space into an epitome of comfort and style, making them ideal for those looking to create an impactful home aesthetic.";
    if (category == 'Bathroom')
      return "Upgrade your bathroom with Class Design's elegant fixtures and vanities, where modern meets minimalism. Our bathroom collection blends functionality with luxury, perfect for those in search of contemporary designs that promise to turn daily routines into lavish experiences.";
    if (category == 'Outdoor')
      return "Class Design's outdoor furniture selection brings style and resilience to your exterior living spaces. From minimalist outdoor seating to contemporary dining sets, our durable and stylish pieces are tailored to enhance patios and gardens, providing an ideal solution for luxurious and functional outdoor living.";
    if (category == 'Dining Space')
      return 'Welcome to Class Design’s Dining Spaces, where crafting a perfectly coordinated dining room is both effortless and inspiring. Here, you’ll discover entire dining sets that reflect the natural beauty and timeless elegance of Mediterranean living. Every element, from the table to the chairs, is thoughtfully designed to create a cohesive and refined atmosphere, evoking the warmth of the ocean breeze and the enduring appeal of nature. Our collections are created with both style and family in mind, combining modern sophistication with organic textures and serene influences. Crafted by our talented designers and artisans, each piece is a testament to their expertise and passion for blending natural inspiration with innovative design.';
    return '';
  }
}
