
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

////////////////////////////////////////////////////
////////////////////////////////////////////////////
import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  

////////////////////////////////////////////////////

import { Cart } from '../cart/cart';
import { AddtoCart } from '../addtocart/addtocart';


@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class Add {
	
//	WishlistPg = WishlistPage;
//	MapPg = MapPage;
 public items : any = [];
   constructor(public navCtrl: NavController,
               public http   : Http)
   {

   }


   ionViewWillEnter()
   {
      this.load();
   }

   // Retrieve the JSON encoded data from the remote server
   // Using Angular's Http class and an Observable - then
   // assign this to the items array for rendering to the HTML template
   load()
   {
      this.http.get("http://localhost/retreive2.php")
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }


   // Allow navigation to the AddTechnology page for creating a new entry
   addEntry()
   {
      this.navCtrl.push(AddtoCart);
   }


   // Allow navigation to the AddTechnology page for amending an existing entry
   // (We supply the actual record to be amended, as this method's parameter,
   // to the AddTechnology page
   
   viewEntry(param)
   {
      this.navCtrl.push(AddtoCart, param);
   }

  
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  
  
  

    dismiss() {
        //this.viewCtrl.dismiss(this.game);
		//this.navCtrl.push(Cart);
    }
  ////////////////////////////////////////////////////
  
  
  slides_1 = [
    {
      //title: "Welcome to the Docs!",
      //description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "img/NewR/dead_by_daylight.jpg",
    },
    {
      //title: "What is Ionic?",
      //description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "img/NewR/drunk_or_dead.jpg",
    },
    {
      //title: "What is Ionic Cloud?",
      //description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "img/NewR/ghost_recon.jpg",
    }
  ];
  
  slides_2 = [
    { image: "img/Pop/araya.jpg", },
    { image: "img/Pop/csgo.jpg", },
    { image: "img/Pop/deceit.jpg", }
  ];
  
  slides_3 = [
    { image: "img/UpComing/Toukiden.jpg", },
    { image: "img/UpComing/GodOfWar.jpg", },
    { image: "img/UpComing/LittleNightmares.jpg", }
  ];
  
  itemTapped() {
	this.navCtrl.push(Cart); 
  }
  
}
