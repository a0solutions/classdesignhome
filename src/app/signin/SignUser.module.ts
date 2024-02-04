import { NgModule } from '@angular/core';
import { SigninComponent } from './signin.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/coreModules/core/share.module';

@NgModule({
  imports: [CommonModule, FormsModule, ShareModule],
  declarations: [SigninComponent, SigninFormComponent, SignupFormComponent],
  providers: [],
  exports: [SigninComponent, SigninFormComponent, SignupFormComponent],
})
export class SignUserModule {}
