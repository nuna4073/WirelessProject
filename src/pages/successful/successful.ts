import { Component } from '@angular/core';
import { Http} from '@angular/http';
import { NavController } from 'ionic-angular';
import { Download } from '../download/download';

import { OrderdetailPage } from '../orderdetail/orderdetail';

@Component({
  selector: 'page-successful',
  templateUrl: 'successful.html'
})
export class SuccessfulPage {
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
    
	itemTappedD() {
		this.navCtrl.push(Download); 
	}
	itemTappedO() {
		this.navCtrl.push(OrderdetailPage); 
	}
 
}

