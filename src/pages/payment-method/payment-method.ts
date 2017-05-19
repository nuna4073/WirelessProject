import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SuccessfulPage } from '../successful/successful';


@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html'
})
export class PaymentMethodPage {
 

  constructor(public navCtrl: NavController) {}

goToOrderDetailPage() {
    this.navCtrl.push(SuccessfulPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodPage');
  }

  
  
}
