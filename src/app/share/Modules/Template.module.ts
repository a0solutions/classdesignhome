import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../components/nav/nav.component';
import { NavManage } from '../components/nav/services/navManage.service';
import { PipesModule } from './pipes.module';
import { CartListComponent } from '../components/cart-list/cart-list.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CounterComponent } from '../components/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { ShareModule } from './share.module';
import { AlertsComponent } from '../components/alerts/alerts.component';
import { AlertManage } from '../components/alerts/services/alertManage.service';
import { RouterModule } from '@angular/router';
import { ModalAskComponent } from '../components/modal-ask/modal-ask.component';
import { ModalAskManage } from '../components/modal-ask/services/modalAskManage.service';
import { LoaderComponent } from '../components/loader/loader.component';
import { LoaderService } from '../components/loader/services/loader.service';
import { SidebarComponent } from '../components/nav/components/sidebar/sidebar.component';
import { UserManage } from 'src/app/share/services/user-manage.service';
import { The404Component } from '../components/404/404.component';
import { GoUpComponent } from '../components/goUp/goUp.component';
import { PoliciesComponent } from '../components/policies/policies.component';
import { SeoService } from '../services/seo.service';

@NgModule({
  imports: [CommonModule, FormsModule, PipesModule, ShareModule, RouterModule],
  declarations: [
    NavComponent,
    CartListComponent,
    FooterComponent,
    AlertsComponent,
    ModalAskComponent,
    LoaderComponent,
    SidebarComponent,
    The404Component,
    GoUpComponent,
    PoliciesComponent,
  ],
  providers: [
    NavManage,
    CategoriesService,
    AlertManage,
    ModalAskManage,
    LoaderService,
    UserManage,
    SeoService,
  ],
  exports: [
    NavComponent,
    CartListComponent,
    FooterComponent,
    CounterComponent,
    AlertsComponent,
    ModalAskComponent,
    LoaderComponent,
    The404Component,
    GoUpComponent,
    PoliciesComponent,
  ],
})
export class TemplateModule {}
