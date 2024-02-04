import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CatalogCardComponent } from './catalog-page/components/catalog-card/catalog-card.component';
import { LoaderComponent } from './share/components/loader/loader.component';
import { AuthGuard } from './share/services/auth/auth-guard.service';
import { CheckoutModule } from './checkout-page/Checkout.module';
import { ProductsModule } from './products/products.module';
import { SignUserModule } from './signin/SignUser.module';
import { ProductDetailModule } from './product-detail/PorpductDatail.module';
import { ShareModule } from './share/coreModules/core/share.module';
import { PipesModule } from './share/coreModules/core/pipes.module';
import { TemplateModule } from './share/components/nav/Template.module';
import { ContactModule } from './contact-page/Contact.module';
import { HomeModule } from './home/home.module';
import { PersonalModule } from './personal-area/personal.module';
@NgModule({
  declarations: [AppComponent, CatalogPageComponent, CatalogCardComponent],
  imports: [
    PipesModule,
    ShareModule,
    TemplateModule,
    HomeModule,
    CheckoutModule,
    ProductsModule,
    SignUserModule,
    ProductDetailModule,
    PersonalModule,
    ContactModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoaderComponent, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
