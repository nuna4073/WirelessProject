import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';

//import { PaymentMethodPage } from '../payment-method/payment-method';
import { Thankyou } from '../thankyou/thankyou';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-orderdetail',
  templateUrl: 'orderdetail.html'
})
export class OrderdetailPage {
  
 public items : any = [];
	
	
   constructor(public navCtrl: NavController,
               public http   : Http)
			   {}



   ionViewWillEnter()
   {
      this.load();
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()
   {
      this.http.get("http://localhost/deliver.php")
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }

goToMapPage() {
    this.navCtrl.push(MapPage);
  }

goToThankyouPage() {
    this.navCtrl.push(Thankyou);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailPage');
  }

}
