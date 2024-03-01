import { Component } from '@angular/core';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { Contactform } from 'src/app/share/services/contactform.service';
import { allSubSubjects } from './subjects';
interface subjects {
  subject: string;
  subSubject: string[];
}
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  message: any = '';
  show: boolean = false;
  subSubjects: string[] = [];
  constructor(private contact: Contactform, private alert: AlertManage) {}

  selectSubSubject(subject: string): void {
    allSubSubjects
      .filter((x) => x.subject == subject)
      .forEach((x) => {
        this.subSubjects = x.subSubject;
      });
  }

  submit(data: any): void {
    this.contact.postContact(data.value).subscribe({
      next: this.responseManage.bind(this),
      error: this.setAlert.bind(this),
    });
  }
  responseManage(): void {
    this.setAlert('contact');
  }
  setAlert(code: string): void {
    this.alert.setAlertMessage(code);
    this.alert.show.next(true);
  }
}
