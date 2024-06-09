import { Component } from '@angular/core';
import { fadeUp } from '../../services/animations';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.css'],
  animations: [fadeUp],
})
export class ContactChatComponent {
  hideForm = true;

  closeChat(event: boolean) {
    this.hideForm = event;
  }
}
