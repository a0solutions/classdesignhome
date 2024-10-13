import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertManage } from '../components/alerts/services/alertManage.service';
import { CartItemComponent } from '../components/cart-list/cart-item/cart-item.component';
import { ListedComponent } from '../components/cart-list/listed/listed.component';
import { CounterComponent } from '../components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { OffersComponent } from 'src/app/products/components/offers/offers.component';
import { HeadersComponent } from '../components/headers/headers.component';
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
import { ProductGaleryComponent } from 'src/app/product-detail/components/productGalery/productGalery.component';
import { ProductDescriptionComponent } from 'src/app/product-detail/components/productDescription/productDescription.component';
import { QuickViewService } from '../components/quickViewModal/service/quickView.service';
import { AlertsComponent } from '../components/alerts/alerts.component';
import { QuickViewModalComponent } from '../components/quickViewModal/quickViewModal.component';
import { OfferCardComponent } from 'src/app/products/components/offers/offer-card/offer-card.component';
import { RelatedCardComponent } from 'src/app/products/components/related/related-card/related-card.component';
import { RelatedComponent } from 'src/app/products/components/related/related.component';
import { ShowroomCarouselComponent } from 'src/app/products/components/showroom-carousel/showroom-carousel.component';
@NgModule({
  imports: [CommonModule, FormsModule, PipesModule, RouterModule],
  declarations: [
    CartItemComponent,
    ListedComponent,
    CounterComponent,
    OffersComponent,
    OfferCardComponent,
    RelatedCardComponent,
    RelatedComponent,
    HeadersComponent,
    PopupComponent,
    ShowroomCardComponent,
    ProductCardComponent,
    ColorSelectComponent,
    FullCarrouselComponent,
    ProductGaleryComponent,
    ProductDescriptionComponent,
    AlertsComponent,
    ShowroomCarouselComponent,
    QuickViewModalComponent,
  ],
  providers: [
    AlertManage,
    CategorySubstrPipe,
    SpacesDeletePipe,
    CarouselService,
    QuickViewService,
  ],
  exports: [
    CartItemComponent,
    ListedComponent,
    CounterComponent,
    OffersComponent,
    OfferCardComponent,
    RelatedCardComponent,
    RelatedComponent,
    HeadersComponent,
    PopupComponent,
    ProductCardComponent,
    ColorSelectComponent,
    FullCarrouselComponent,
    ProductGaleryComponent,
    ProductDescriptionComponent,
    RouterModule,
    FormsModule,
    AlertsComponent,
    QuickViewModalComponent,
    ShowroomCarouselComponent,
  ],
})
export class ShareModule {}
