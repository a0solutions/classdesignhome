import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './components/productList/productList.component';
import { PipesModule } from '../share/Modules/pipes.module';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { FilterManage } from './services/filterManage.service';
import { ProductManage } from './services/product-manage.service';
import { CategoriesService } from '../share/services/categories.service';
import { ShareModule } from '../share/Modules/share.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, PipesModule, ShareModule, FormsModule, RouterModule],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductsFilterComponent,
  ],
  providers: [FilterManage, ProductManage, CategoriesService],
})
export class ProductsModule {}
