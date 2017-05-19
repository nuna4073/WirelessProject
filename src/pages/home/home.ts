import { Component } from '@angular/core';
//ให้สามารถใช้ service http ของ angular ได้
import { Http } from '@angular/http';
//import LoadingController , AlertController เพื่อให้ใช้ หน้าแสดงข้อความรอ และขึ้นกล่องข้อความ
//แจ้งเตือนได้
import { NavController , LoadingController , AlertController} from 'ionic-angular';

import { Home2 } from '../home2/home2';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

//ประกาศ JSON object สำหรับแสดงข้อมูลใน select controller
public data_table: Array<{stock_name: string}>;
//
public stock_name:string;

public table_name : string ; 

public del : string ; 
 
 constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public http: Http,public alertCtrl: AlertController) {
    //กำหนดให้เมื่อเปิดหน้า app มาทำงาน function  load_data() เป็น function  แรกที่ทำงาน
    this.load_data();
	
	/*
    this.data_table = [
        {title: 'item1'},
        {title: 'item2'},
        {title: 'item3'},
        {title: 'item4'},
        {title: 'item5'},
        {title: 'item6'}
    ];
 */
  }

  load_data() {

      // ให้แสดง popup กำลังโหลด
       let loading_popup = this.loadingCtrl.create({
          content: 'กำลังโหลด...'
        });
        loading_popup.present();

        // url ฝั่ง server ที่ดึงข้อมูลจาก mysql
        var link = "http://localhost/index.php";
        var send_data = {};
       
       //เชื่อต่อกับ mysql server โดยส่งข้อมูลแบบ post
        this.http.post(link, send_data)
        .subscribe(response => {

          loading_popup.dismiss();//เมื่อโหลดเสร็จแล้วให้ปิด popup
          // นำข้อมูลจาก mysql มาแสดงในตัวเลือกของ select controller 
		  
          this.data_table=JSON.parse(response["_body"]);

        }, error => {
           
        });

  }
  

  deletedata()
  {
      //สร้างกล่องข้อความแจ้งเตือน
      let alert = this.alertCtrl.create({
        title: 'รายการที่ลบ',
        subTitle: this.stock_name,//แสดงข้อมูลที่เลือกใน select controller
        buttons: ['ตกลง']//ให้ปุ่มแสดง text คำว่า ตกลง
      });
      alert.present();//แสดงกล่องข้อความแจ้งเตือน
  }
  
  
  
  doSomething() {
  let alert = this.alertCtrl.create({
    title: 'Low battery',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();
}

itemTapped() {
  
	this.navCtrl.push(Home2); 
	}
  
  


}

