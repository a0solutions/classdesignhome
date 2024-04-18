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
      return '<strong>Legal Notice: Reception Procedure and Terms of Order</strong><br><br>Dear Valued Customer,<br>Thank you for choosing Class Design Home for your home furnishing needs. To ensure a smooth and satisfactory experience, please review the following reception procedure and terms of your order:<br><br><strong>Reception Procedure:</strong><br><ol> <li>Delivery Inspection: Upon delivery, carefully inspect the packaging for any signs of damage. If you notice any damage, it is crucial to reject the delivery and note the specific reasons on the Bill of Lading (BOL).</li><li>Unpacking: After accepting the delivery, carefully unpack your items. In the event of discovering any damages, please be aware that these must be communicated to us within the first 48 hours after delivery.</li><li>Defect Reporting: If you identify any defects, please report them immediately to Class Design Home Customer Service at customer.service@classdesignhome.com. Include photographs and a detailed description of the defect for prompt assistance.</li><li>Acceptance: Once you have inspected and are satisfied with the condition of the items, please sign the delivery receipt to confirm acceptance.</li></ol><br><br><strong>Terms of Order:</strong><ol><li>Payment: Full payment is required at the time of purchase. Class Design Home accepts a variety of payment methods for your convenience.</li><li>Cancellation Policy: Orders can be canceled within 24 hours of placement without any charge. Cancellations after this period may be subject to a cancellation fee.</li><li>Return Policy: We offer a 30-day return policy on our products, provided the items are returned in their original condition and packaging. Please note that custom orders are non-returnable and non-refundable.</li><li>Warranty: Our products come with a limited warranty covering manufacturing defects. This warranty does not cover damages resulting from improper use or normal wear and tear.</li><li>Product Variation: Given the unique nature of our materials, there may be slight variations in fabric, color, and finish.</li></ol><br><br> By confirming your order with Class Design Home, you agree to these terms. We are committed to delivering the highest quality and ensuring your complete satisfaction with every piece. Should you have any questions or need further assistance, our customer service team is readily available to help.<br> Thank you for bringing Class Design Home into your life.<br> Class Design Home Team.';
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
