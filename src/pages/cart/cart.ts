import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController , LoadingController , AlertController } from 'ionic-angular';

import { PaymentMethodPage } from '../payment-method/payment-method';

import { Http} from '@angular/http';
//import LoadingController , AlertController เพื่อให้ใช้ หน้าแสดงข้อความรอ และขึ้นกล่องข้อความ
//แจ้งเตือนได้


import { AddTechnology } from '../technology/technology';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class Cart {
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
      this.http.get("http://localhost/retreive.php")
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }


   // Allow navigation to the AddTechnology page for creating a new entry
   addEntry()
   {
      this.navCtrl.push(AddTechnology);
   }


   // Allow navigation to the AddTechnology page for amending an existing entry
   // (We supply the actual record to be amended, as this method's parameter,
   // to the AddTechnology page
   
   viewEntry(param)
   {
      this.navCtrl.push(AddTechnology, param);
   }

	
	
	itemTapped() {
  
	this.navCtrl.push(PaymentMethodPage); 
	}

}

