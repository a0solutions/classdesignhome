import { NgModule } from '@angular/core';
import { PersonalAreaComponent } from './personal-area.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/Modules/share.module';
import { UserManage } from '../share/services/user-manage.service';
import { FormsModule } from '@angular/forms';
import { TokenManage } from '../share/services/token-manage.service';
import { CategoriesService } from '../share/services/categories.service';
import { TemplateModule } from '../share/Modules/Template.module';

@NgModule({
  imports: [CommonModule, ShareModule, FormsModule, TemplateModule],
  declarations: [
    PersonalAreaComponent,
    PersonalCardComponent,
    PersonalFormComponent,
    PersonalInfoComponent,
  ],
  providers: [UserManage, TokenManage, CategoriesService],
})
export class PersonalModule {}
