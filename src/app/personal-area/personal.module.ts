import { NgModule } from '@angular/core';
import { PersonalAreaComponent } from './personal-area.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/Modules/share.module';
import { UserManage } from '../signin/services/user-manage.service';
import { FormsModule } from '@angular/forms';
import { TokenManage } from './services/token-manage.service';
import { CategoriesService } from '../share/services/categories.service';

@NgModule({
  imports: [CommonModule, ShareModule, FormsModule],
  declarations: [
    PersonalAreaComponent,
    PersonalCardComponent,
    PersonalFormComponent,
    PersonalInfoComponent,
  ],
  providers: [UserManage, TokenManage, CategoriesService],
})
export class PersonalModule {}
