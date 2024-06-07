import { Component, Input } from '@angular/core';
import { UserManage } from '../../services/user-manage.service';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { NgForm } from '@angular/forms';
import { fadeUp } from 'src/app/share/services/animations';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  animations: [fadeUp],
})
export class SignupFormComponent {
  actualform: NgForm;
  processingSignUp: boolean = false;
  formNew1: string = '';
  formnew2: string = '';
  constructor(private users: UserManage, private alert: AlertManage) {}
  submit(form: NgForm): void {
    this.processingSignUp = true;
    this.actualform = form;
    this.users.postUser(form.value).subscribe({
      next: this.manageResponse.bind(this),
      error: this.setAlert.bind('error'),
    });
  }
  manageResponse(response: boolean): void {
    response == false
      ? this.setAlert('email-exist')
      : this.setAlert('registered');
  }
  setAlert(code: string): void {
    this.processingSignUp = false;
    code == 'registered' ? this.actualform.reset() : null;
    this.alert.setAlertMessage(code);
  }
}
