import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertManage {
  show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  message: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() {}

  setAlertMessage(code: string): void {
    this.message.next(this.selectMessage(code));
    this.show.next(true);
  }

  private selectMessage(code: string): string {
    if (code == 'user-pass') {
      return "Sorry, user and password don't match, try again or change your password.";
    } else if (code == 'email-exist') {
      return 'There is another account using this email.';
    } else if (code == 'registered') {
      return 'Congratulations. Your sign up was successful. You are about to receive an email with more details.';
    } else if (code == 'personalUpdate') {
      return 'Congratulations your update has been set successfully.';
    } else if (code == 'contact') {
      return 'Thank you for writing to us, we will get in touch with you as soon as possible.';
    } else if (code == 'dataCartList') {
      return 'You must fill all fields or add some products to your cart list.';
    } else if (code == 'badPayment') {
      return 'Sorry, something went wrong with the payment process, try again and if this error persists get in touch with us.';
    } else if (code == 'newsletterOk') {
      return 'Your email has been  successfully added to our newsletter.';
    } else if (code == 'newsletterExist') {
      return 'Your email already exist.';
    } else if (code == 'policy-checkout') {
      return '<strong>Important Legal Notice: Delivery Timeframe and Cancellation Policy</strong><br><br> We would like to inform you of our delivery timeframe and cancellation policy for all orders placed with Class Design Home.<br><br><strong>Delivery Timeframe:</strong><br>Please be advised that our standard delivery timeframe for all orders is between 6 to 8 weeks from the date of purchase. This timeframe is necessary to ensure the highest quality of products and services. We strive to expedite orders whenever possible, and any delays will be communicated promptly to affected customers.<br><br><strong>Cancellation Policy:</strong><br>You have the right to cancel your order within 7 days of payment, provided that the cancellation request is submitted within this timeframe. If you wish to cancel your order after this period, please contact our customer support team for further assistance. Please note that cancellations made after the 7-day window may be subject to additional terms and conditions.<br><br> We value transparency and strive to provide the best possible customer experience. If you have any questions or concerns regarding our delivery timeframe or cancellation policy, please do not hesitate to contact us.';
    } else if (code == 'noTracking') {
      return 'This tracking number is wrong or does not exist any more. Please try again or quet in touch with us to help you.';
    } else if (code == 'orderCanceled') {
      return 'Sorry but it seems that this order has been canceled, please get in touch with us.';
    } else if (code == 'CanceledOK') {
      return 'The order has been canceled successfully.';
    } else {
      return 'Somthing went wrong tray again later.';
    }
  }
}
