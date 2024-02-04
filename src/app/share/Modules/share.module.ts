import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertManage } from '../components/alerts/services/alertManage.service';
import { CartItemComponent } from '../components/cart-list/cart-item/cart-item.component';
import { ListedComponent } from '../components/cart-list/listed/listed.component';
import { CounterComponent } from '../components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { OffersComponent } from 'src/app/products/components/offers/offers.component';
import { OfferCardComponent } from 'src/app/products/components/offers/offer-card/offer-card.component';
import { HeadersComponent } from '../components/headers/headers.component';
import { headerManage } from '../components/headers/popous/popups';
import { PopupComponent } from '../components/popup/popup.component';
import { ProductCardComponent } from 'src/app/products/components/product-card/product-card.component';
import { PipesModule } from './pipes.module';
import { ColorSelectComponent } from 'src/app/products/components/color-select/color-select.component';

@NgModule({
  imports: [CommonModule, FormsModule, PipesModule],
  declarations: [
    CartItemComponent,
    ListedComponent,
    CounterComponent,
    OffersComponent,
    OfferCardComponent,
    HeadersComponent,
    PopupComponent,
    ProductCardComponent,
    ColorSelectComponent,
  ],
  providers: [AlertManage, headerManage],
  exports: [
    CartItemComponent,
    ListedComponent,
    CounterComponent,
    OffersComponent,
    OfferCardComponent,
    HeadersComponent,
    PopupComponent,
    ProductCardComponent,
    ColorSelectComponent,
  ],
})
export class ShareModule {}
