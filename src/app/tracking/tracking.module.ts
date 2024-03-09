import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingComponent } from './tracking.component';
import { PipesModule } from '../share/Modules/pipes.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/Modules/share.module';
import { Checkout } from '../checkout-page/services/checkout.service';
import { ModalAskManage } from '../share/components/modal-ask/services/modalAskManage.service';

@NgModule({
  imports: [CommonModule, PipesModule, FormsModule, RouterModule, ShareModule],
  providers: [Checkout, ModalAskManage],
  declarations: [TrackingComponent],
})
export class TrackingModule {}
