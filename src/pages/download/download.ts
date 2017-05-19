import { Component } from '@angular/core';
import { Http} from '@angular/http';
import { NavController } from 'ionic-angular';
import { Thankyou } from '../thankyou/thankyou';
import { OrderdetailPage } from '../orderdetail/orderdetail';

//WirelessProject/myApp3/src/pages/successful


@Component({
  selector: 'page-download',
  templateUrl: 'download.html'
})
export class Download {
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
      this.http.get("http://localhost/download.php")
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }
	
	itemTapped() {
	this.navCtrl.push(Thankyou); 
	}
	
	itemTappedO() {
	this.navCtrl.push(OrderdetailPage); 
	}
	

}

