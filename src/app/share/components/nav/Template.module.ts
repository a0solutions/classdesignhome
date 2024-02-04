import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavManage } from './services/navManage.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PipesModule } from '../../Modules/pipes.module';
import { CartListComponent } from '../cart-list/cart-list.component';
import { FooterComponent } from '../footer/footer.component';
import { CounterComponent } from '../counter/counter.component';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { ShareModule } from '../../Modules/share.module';
import { AlertsComponent } from '../alerts/alerts.component';
import { AlertManage } from '../alerts/services/alertManage.service';
import { RouterModule } from '@angular/router';
import { ModalAskComponent } from '../modal-ask/modal-ask.component';
import { ModalAskManage } from '../modal-ask/services/modalAskManage.service';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader/services/loader.service';

@NgModule({
  imports: [CommonModule, FormsModule, PipesModule, ShareModule, RouterModule],
  declarations: [
    NavComponent,
    SidebarComponent,
    CartListComponent,
    FooterComponent,
    AlertsComponent,
    ModalAskComponent,
    LoaderComponent,
  ],
  providers: [
    NavManage,
    CategoriesService,
    AlertManage,
    ModalAskManage,
    LoaderService,
  ],
  exports: [
    NavComponent,
    CartListComponent,
    FooterComponent,
    CounterComponent,
    AlertsComponent,
    ModalAskComponent,
    LoaderComponent,
  ],
})
export class TemplateModule {}
