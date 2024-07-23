import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/Modules/share.module';
import { ProductManage } from '../share/services/product-manage.service';
import { DescripptionAccordionComponent } from './components/productDescription/descripption-accordion/descripption-accordion.component';
import { PipesModule } from '../share/Modules/pipes.module';
import { RouterModule } from '@angular/router';
import { CategorySubstrPipe } from '../share/pipes/categorySubstr.pipe';
import { SpacesDeletePipe } from '../share/pipes/spacesDelete.pipe';

@NgModule({
  imports: [CommonModule, ShareModule, PipesModule, RouterModule],
  declarations: [ProductDetailComponent, DescripptionAccordionComponent],
  providers: [ProductManage, CategorySubstrPipe, SpacesDeletePipe],
})
export class ProductDetailModule {}
