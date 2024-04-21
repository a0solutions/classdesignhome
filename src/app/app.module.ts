import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CatalogCardComponent } from './catalog-page/components/catalog-card/catalog-card.component';
import { AuthGuard } from './share/services/auth/auth-guard.service';
import { CheckoutModule } from './checkout-page/Checkout.module';
import { ProductsModule } from './products/products.module';
import { SignUserModule } from './signin/signin.module';
import { ShareModule } from './share/Modules/share.module';
import { PipesModule } from './share/Modules/pipes.module';
import { TemplateModule } from './share/Modules/Template.module';
import { ContactModule } from './contact-page/Contact.module';
import { HomeModule } from './home/home.module';
import { PersonalModule } from './personal-area/personal.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { UsModule } from './us/us.module';
import { TrackingModule } from './tracking/tracking.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HttpClientModule,
    UsModule,
    TrackingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
