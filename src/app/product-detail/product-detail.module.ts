import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGalery } from './components/productGalery/productGalery.component';
import { ProductDescriptionComponent } from './components/productDescription/productDescription.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/Modules/share.module';
import { ProductManage } from '../products/services/product-manage.service';
import { DescripptionAccordionComponent } from './components/productDescription/descripption-accordion/descripption-accordion.component';
import { PipesModule } from '../share/Modules/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ShareModule, PipesModule, RouterModule],
  declarations: [
    ProductDetailComponent,
    ProductGalery,
    ProductDescriptionComponent,
    DescripptionAccordionComponent,
  ],
  providers: [ProductManage],
})
export class ProductDetailModule {}
