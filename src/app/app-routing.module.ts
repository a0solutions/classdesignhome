import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:category/:subcategory', component: ProductsComponent },
  { path: 'products/:category', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
