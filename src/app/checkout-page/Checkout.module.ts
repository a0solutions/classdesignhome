import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './checkout-page.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { FormsModule } from '@angular/forms';
import { ProductCheckoutComponent } from './components/product-checkout/product-checkout.component';
import { ShareModule } from '../share/Modules/share.module';
import { RouterModule } from '@angular/router';
import { NgxPayPalModule } from 'ngx-paypal';
import { CouponsInputComponent } from './components/coupons-input/coupons-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    RouterModule,
    NgxPayPalModule,
  ],
  declarations: [
    CheckoutPageComponent,
    CheckoutFormComponent,
    ProductCheckoutComponent,
    CouponsInputComponent,
  ],
  providers: [CheckoutModule],
})
export class CheckoutModule {}
