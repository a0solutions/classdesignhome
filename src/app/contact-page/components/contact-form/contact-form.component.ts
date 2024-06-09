/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Output } from '@angular/core';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { Contactform } from 'src/app/share/services/contactform.service';
import { allSubSubjects } from './subjects';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  message: any = '';
  show = false;
  subSubjects: string[] = [];
  processingContact = false;
  @Output() hideForm: EventEmitter<boolean> = new EventEmitter();
  constructor(private contact: Contactform, private alert: AlertManage) {}

  selectSubSubject(subject: string): void {
    allSubSubjects
      .filter((x) => x.subject == subject)
      .forEach((x) => {
        this.subSubjects = x.subSubject;
      });
  }

  submit(data: NgForm): void {
    this.processingContact = true;
    this.contact.postContact(data.value).subscribe({
      next: this.responseManage.bind(this, data),
      error: console.log.bind(this),
    });
  }
  responseManage(data: NgForm): void {
    this.processingContact = false;
    data.reset();
    this.hideForm.emit(true);
    this.setAlert('contact');
  }
  setAlert(code: string): void {
    this.alert.setAlertMessage(code);
    this.alert.show.next(true);
    this.processingContact = false;
  }
}
