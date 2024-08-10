import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './resetPassword.component';
import { ShareModule } from '../share/Modules/share.module';
import { TemplateModule } from '../share/Modules/Template.module';

@NgModule({
  imports: [CommonModule, ShareModule, TemplateModule],
  declarations: [ResetPasswordComponent],
})
export class ResetPasswordModule {}
