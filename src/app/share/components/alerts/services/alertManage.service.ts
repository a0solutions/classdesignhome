import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertManage {
  show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  message: BehaviorSubject<string> = new BehaviorSubject<string>('');
  title: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setAlertMessage(code: string): void {
    console.log(code);
    this.selectMessage(code);
    this.show.next(true);
  }

  private selectMessage(code: string): void {
    if (code == 'user-pass') {
      this.message.next(
        'The credentials you entered do not match our records. Please try again or reset your password for a seamless experience.'
      );
      this.title.next('Login Error');
    } else if (code == 'email-exist') {
      this.message.next(
        'It appears there is already an account associated with this email address. Please use a different email or log in to your existing account.'
      );
      this.title.next('Email Already Used for Account Creation');
    } else if (code == 'registered') {
      this.message.next(
        'Welcome to Class Design Home! Your sign-up was successful. You will soon receive an email with further details to enrich your journey with us.'
      );
      this.title.next('Successful User Registration');
    } else if (code == 'personalUpdate') {
      this.message.next(
        'Your account information has been updated successfully. Thank you for curating your experience with Class Design Home.'
      );
      this.title.next('Successful Information Update');
    } else if (code == 'contact') {
      this.message.next(
        'Thank you for reaching out to us. Your message is important, and we will be in contact shortly.'
      );
      this.title.next('Contact Form Submission');
    } else if (code == 'dataCartList') {
      this.message.next(
        'Please ensure all fields are filled and your cart is not empty before proceeding to checkout. Every detail matters in crafting your experience.'
      );
      this.title.next('Incomplete Billing/Shipping Details or Empty Cart');
    } else if (code == 'badPayment') {
      this.message.next(
        'We encountered an issue when processing your payment. Please attempt again, and should the problem persist, contact our support team for assistance.'
      );
      this.title.next('Payment Gateway Error');
    } else if (code == 'newsletterOk') {
      this.message.next(
        'You are now subscribed to the Class Design Home newsletter. Welcome to an exclusive realm of updates and insights, where the art of furniture meets timeless design. Discover the latest trends, innovations, and inspirations that define luxury living."'
      );
      this.title.next('Newsletter Signup Confirmation');
    } else if (code == 'newsletterExist') {
      this.message.next(
        "This email address is already subscribed to our newsletter. We're delighted to keep you informed with our latest news."
      );
      this.title.next('Existing Email in Newsletter Database');
    } else if (code == 'noTracking') {
      this.message.next(
        'This tracking number is wrong or does not exist any more. Please try again or quet in touch with us to help you.'
      );
      this.title.next('Wrong Tracking Number');
    } else if (code == 'orderCanceled') {
      this.message.next(
        'Sorry but it seems that this order has been canceled, please get in touch with us.'
      );
      this.title.next('Order Canceled');
    } else if (code == 'CanceledOK') {
      this.message.next('The order has been canceled successfully.');
      this.title.next('Order Canceled');
    } else {
      this.message.next(
        'An unexpected error occurred. Please try again later, and thank you for your patience.'
      );
      this.title.next('Unidentified Error');
    }
  }
}
