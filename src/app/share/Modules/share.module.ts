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
import { RouterModule } from '@angular/router';
import { ShowroomCardComponent } from '../components/popup/showroomCard/showroom-card.component';
import { CategorySubstrPipe } from '../pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from '../pipes/spacesDelete.pipe';
import { FullCarrouselComponent } from '../components/full-carrousel/full-carrousel.component';
import { CarouselService } from '../components/full-carrousel/service/carousel.service';
import { ProductGalery } from 'src/app/product-detail/components/productGalery/productGalery.component';

@NgModule({
  imports: [CommonModule, FormsModule, PipesModule, RouterModule],
  declarations: [
    CartItemComponent,
    ListedComponent,
    CounterComponent,
    OffersComponent,
    OfferCardComponent,
    HeadersComponent,
    PopupComponent,
    ShowroomCardComponent,
    ProductCardComponent,
    ColorSelectComponent,
    FullCarrouselComponent,
    ProductGalery,
  ],
  providers: [
    AlertManage,
    headerManage,
    CategorySubstrPipe,
    SpacesDeletePipe,
    CarouselService,
  ],
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
    FullCarrouselComponent,
    ProductGalery,
  ],
})
export class ShareModule {}
