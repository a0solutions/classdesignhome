import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.css'],
})
export class ContactChatComponent {
  hideForm = true;
  constructor() {}
  closeChat(event: boolean) {
    this.hideForm = event;
  }
}
