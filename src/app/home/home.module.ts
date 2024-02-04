import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BathComponent } from './components/bath/bath.component';
import { BedComponent } from './components/bed/bed.component';
import { LivingComponent } from './components/living/living.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/coreModules/core/share.module';

@NgModule({
  imports: [CommonModule, ShareModule],
  declarations: [HomeComponent, BathComponent, BedComponent, LivingComponent],
  providers: [],
  exports: [HomeComponent, BathComponent, BedComponent, LivingComponent],
})
export class HomeModule {}
