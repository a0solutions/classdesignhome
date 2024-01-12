import { Component, EventEmitter, Output } from '@angular/core';
import { Contactform } from 'src/app/share/services/contactform.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  message: any = '';
  show: boolean = false;
  @Output() closeForm = new EventEmitter<boolean>();
  constructor(private contact: Contactform) {}

  submit(data: any) {
    this.contact.postContact(data.value).subscribe(
      (x: any) => {
        this.message = { message: 'contact', data: x.fullname };
        this.closeForm.emit(true);
        data.reset();
      },
      (err) => {
        this.message = this.message = { message: 'err', data: '' };
      }
    );
  }
  offalert(event: boolean) {
    this.show = event;
  }
}
