import { NgModule } from '@angular/core';
import { ContactChatComponent } from '../share/components/contact-chat/contact-chat.component';
import { ContactPageComponent } from './contact-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { Contactform } from '../share/services/contactform.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/Modules/share.module';

@NgModule({
  imports: [CommonModule, FormsModule, ShareModule],
  declarations: [
    ContactChatComponent,
    ContactPageComponent,
    ContactFormComponent,
  ],
  providers: [Contactform],
  exports: [ContactChatComponent],
})
export class ContactModule {}
