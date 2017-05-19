import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Add } from '../add/add';

//WirelessProject/myApp3/src/pages/successful


@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html'
})
export class Thankyou {
    
	constructor(public navCtrl: NavController) {
	}
	
	itemTapped() {
		this.navCtrl.popToRoot(Add); 
	}
	

}

