import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { SigninComponent } from './signin/signin.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { AuthGuard } from './share/services/auth/auth-guard.service';
import { UsComponent } from './us/us.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:category/:subcategory', component: ProductsComponent },
  { path: 'products/:category', component: ProductsComponent },
  {
    path: 'product/:id/:name',
    component: ProductDetailComponent,
  },
  { path: 'collections', component: CatalogPageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  {
    path: 'personal',
    component: PersonalAreaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'aboutus',
    component: UsComponent,
  },
  {
    path: 'tracking',
    component: TrackingComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
