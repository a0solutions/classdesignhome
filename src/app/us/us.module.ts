import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsComponent } from './us.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/Modules/share.module';

@NgModule({
  imports: [CommonModule, FormsModule, ShareModule],
  declarations: [UsComponent],
})
export class UsModule {}
