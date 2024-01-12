import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { SigninComponent } from './signin/signin.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:category/:subcategory', component: ProductsComponent },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'product/:id/:name', component: ProductDetailComponent },
  { path: 'collections', component: CatalogPageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'checkout', component: ContactPageComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
