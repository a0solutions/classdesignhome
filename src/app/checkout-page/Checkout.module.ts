import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './checkout-page.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { FormsModule } from '@angular/forms';
import { ProductCheckoutComponent } from './components/product-checkout/product-checkout.component';
import { ShareModule } from '../share/Modules/share.module';
import { StripeModule } from 'stripe-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    StripeModule.forRoot('gsdfgsdfg'),
  ],
  declarations: [
    CheckoutPageComponent,
    CheckoutFormComponent,
    ProductCheckoutComponent,
  ],
  providers: [CheckoutModule],
})
export class CheckoutModule {}
