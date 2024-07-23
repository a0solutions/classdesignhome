import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './components/productList/productList.component';
import { PipesModule } from '../share/Modules/pipes.module';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { FilterManage } from '../share/services/filterManage.service';
import { ProductManage } from '../share/services/product-manage.service';
import { CategoriesService } from '../share/services/categories.service';
import { ShareModule } from '../share/Modules/share.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategorySubstrPipe } from '../share/pipes/categorySubstr.pipe';
import { FilterMenuComponent } from './components/products-filter/filteMenu/filteMenu.component';
import { QuickViewModalComponent } from '../share/components/quickViewModal/quickViewModal.component';
import { QuickViewService } from '../share/components/quickViewModal/service/quickView.service';

@NgModule({
  imports: [CommonModule, PipesModule, ShareModule, FormsModule, RouterModule],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductsFilterComponent,
    FilterMenuComponent,
    QuickViewModalComponent,
  ],
  providers: [
    FilterManage,
    ProductManage,
    CategoriesService,
    CategorySubstrPipe,
    QuickViewService,
  ],
})
export class ProductsModule {}
