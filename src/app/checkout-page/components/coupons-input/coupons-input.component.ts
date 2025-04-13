import { Component, OnInit } from '@angular/core';
import { AlertManage } from 'src/app/share/components/alerts/services/alertManage.service';
import { fadeUp3 } from 'src/app/share/services/animations';
import { Checkout, discount } from 'src/app/share/services/checkout.service';

@Component({
  selector: 'app-coupons-input',
  templateUrl: './coupons-input.component.html',
  styleUrls: ['./coupons-input.component.css'],
  animations: [fadeUp3],
})
export class CouponsInputComponent implements OnInit {
  ngOnInit() {
    this.checkoutManage.couponUser.subscribe((x) => {
      this.user = x;
    });
  }
  user: string;
  coupon: discount;
  show = true;
  constructor(private checkoutManage: Checkout, private alerts: AlertManage) {}

  listenCoupon(coupon: string) {
    this.checkoutManage.getDiscountByCoupon(coupon).subscribe((x: any) => {
      if (x) {
        this.coupon = x;
        if (
          this.user.toLocaleLowerCase() == x.user.toLowerCase() &&
          x.used == 0 &&
          x.used != undefined
        ) {
          this.couponVerifaied();
        } else {
          console.log(x.used);
          x.used == 0 || x.used == undefined
            ? this.alerts.setAlertMessage('couponNotUser')
            : this.alerts.setAlertMessage('couponUsed');
        }
      } else {
        this.alerts.setAlertMessage('couponInvalid');
      }
    });
  }

  couponVerifaied() {
    this.checkoutManage.coupon.next(this.coupon);
    this.show = false;
  }
}
