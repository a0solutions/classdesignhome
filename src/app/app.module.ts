import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './share/components/nav/nav.component';
import { BathComponent } from './home/bath/bath.component';
import { BedComponent } from './home/bed/bed.component';
import { LivingComponent } from './home/living/living.component';
import { PopupComponent } from './share/components/popup/popup.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { CartListComponent } from './share/components/cart-list/cart-list.component';
import { CartItemComponent } from './share/components/cart-list/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { HeadersComponent } from './share/components/headers/headers.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { ProductsFilterComponent } from './products/products-filter/products-filter.component';
import { ColorSelectComponent } from './products/color-select/color-select.component';
import { SidebarComponent } from './share/components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from './share/services/categories.service';
import { ProductListComponent } from './products/productList/productList.component';
import { ProductManage } from './products/services/product-manage.service';
import { FilterManage } from './products/services/filterManage.service';
import { ProductGalery } from './product-detail/productGalery/productGalery.component';
import { ProductDescriptionComponent } from './product-detail/productDescription/productDescription.component';
import { StockPipe } from './share/pipes/stock.pipe';
import { CapitalizePipe } from './share/pipes/capitalize.pipe';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CatalogCardComponent } from './catalog-page/catalog-card/catalog-card.component';
import { OffersComponent } from './products/offers/offers.component';
import { OfferCardComponent } from './products/offers/offer-card/offer-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BathComponent,
    BedComponent,
    LivingComponent,
    PopupComponent,
    ProductDetailComponent,
    ProductsComponent,
    CartListComponent,
    CartItemComponent,
    HeadersComponent,
    ProductCardComponent,
    FooterComponent,
    ProductsFilterComponent,
    ColorSelectComponent,
    SidebarComponent,
    ProductListComponent,
    ProductGalery,
    ProductDescriptionComponent,
    StockPipe,
    CapitalizePipe,
    CatalogPageComponent,
    CatalogCardComponent,
    OffersComponent,
    OfferCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CategoriesService, ProductManage, FilterManage],
  bootstrap: [AppComponent],
})
export class AppModule {}
