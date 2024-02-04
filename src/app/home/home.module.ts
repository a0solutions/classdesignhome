import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BathComponent } from './components/bath/bath.component';
import { BedComponent } from './components/bed/bed.component';
import { LivingComponent } from './components/living/living.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/Modules/share.module';

@NgModule({
  imports: [CommonModule, ShareModule],
  declarations: [HomeComponent, BathComponent, BedComponent, LivingComponent],
  providers: [],
})
export class HomeModule {}
