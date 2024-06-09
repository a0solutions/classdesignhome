import { NgModule } from '@angular/core';
import { SigninComponent } from './signin.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/Modules/share.module';
import { UserManage } from '../share/services/user-manage.service';

@NgModule({
  imports: [CommonModule, FormsModule, ShareModule],
  declarations: [SigninComponent, SigninFormComponent, SignupFormComponent],
  providers: [UserManage],
})
export class SignUserModule {}
