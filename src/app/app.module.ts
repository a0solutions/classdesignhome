import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './share/components/nav/nav.component';
import { BathComponent } from './home/components/bath/bath.component';
import { BedComponent } from './home/components/bed/bed.component';
import { LivingComponent } from './home/components/living/living.component';
import { PopupComponent } from './share/components/popup/popup.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { CartListComponent } from './share/components/cart-list/cart-list.component';
import { CartItemComponent } from './share/components/cart-list/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { HeadersComponent } from './share/components/headers/headers.component';
import { ProductCardComponent } from './products/components/product-card/product-card.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { ProductsFilterComponent } from './products/components/products-filter/products-filter.component';
import { ColorSelectComponent } from './products/components/color-select/color-select.component';
import { SidebarComponent } from './share/components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from './share/services/categories.service';
import { ProductListComponent } from './products/components/productList/productList.component';
import { ProductManage } from './products/services/product-manage.service';
import { FilterManage } from './products/services/filterManage.service';
import { ProductGalery } from './product-detail/components/productGalery/productGalery.component';
import { ProductDescriptionComponent } from './product-detail/components/productDescription/productDescription.component';
import { StockPipe } from './share/pipes/stock.pipe';
import { CapitalizePipe } from './share/pipes/capitalize.pipe';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CatalogCardComponent } from './catalog-page/components/catalog-card/catalog-card.component';
import { OffersComponent } from './products/components/offers/offers.component';
import { OfferCardComponent } from './products/components/offers/offer-card/offer-card.component';
import { SigninComponent } from './signin/signin.component';
import { SigninFormComponent } from './signin/components/signin-form/signin-form.component';
import { SignupFormComponent } from './signin/components/signup-form/signup-form.component';
import { UserManage } from './signin/services/user-manage.service';
import { AlertsComponent } from './share/components/alerts/alerts.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-page/components/contact-form/contact-form.component';
import { ContactChatComponent } from './share/components/contact-chat/contact-chat.component';
import { Contactform } from './share/services/contactform.service';
import { LoaderComponent } from './share/components/loader/loader.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { Checkout } from './checkout-page/services/checkout.service';
import { ModalAskComponent } from './share/components/modal-ask/modal-ask.component';
import { ProductCheckoutComponent } from './checkout-page/components/product-checkout/product-checkout.component';
import { CheckoutFormComponent } from './checkout-page/components/checkout-form/checkout-form.component';
import { ListedComponent } from './share/components/cart-list/listed/listed.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { PersonalInfoComponent } from './personal-area/components/personal-info/personal-info.component';
import { PersonalFormComponent } from './personal-area/components/personal-form/personal-form.component';
import { TokenManage } from './personal-area/services/token-manage.service';
import { PersonalCardComponent } from './personal-area/components/personal-card/personal-card.component';
import { CounterComponent } from './share/components/counter/counter.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { AlertManage } from './share/components/alerts/services/alertManage.service';
import { NavManage } from './share/components/nav/services/navManage.service';
import { ModalAskManage } from './share/components/modal-ask/services/modalAskManage.service';
import { SpacesPipe } from './share/pipes/spaces.pipe';
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
    SigninComponent,
    SigninFormComponent,
    SignupFormComponent,
    AlertsComponent,
    ContactPageComponent,
    ContactFormComponent,
    ContactChatComponent,
    LoaderComponent,
    CheckoutPageComponent,
    ModalAskComponent,
    ProductCheckoutComponent,
    CheckoutFormComponent,
    ListedComponent,
    PersonalAreaComponent,
    PersonalInfoComponent,
    PersonalFormComponent,
    PersonalCardComponent,
    CounterComponent,
    MainTemplateComponent,
    SpacesPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    CategoriesService,
    ProductManage,
    FilterManage,
    UserManage,
    Contactform,
    Checkout,
    TokenManage,
    AlertManage,
    NavManage,
    ModalAskManage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
