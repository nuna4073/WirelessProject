import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { Home2 } from '../pages/home2/home2';
import { Cart } from '../pages/cart/cart';
import { SuccessfulPage } from '../pages/successful/successful';
import { Add } from '../pages/add/add';
import { AddTechnology } from '../pages/technology/technology';
import { AddtoCart } from '../pages/addtocart/addtocart';
import { OrderdetailPage } from '../pages/orderdetail/orderdetail';
import { MapPage } from '../pages/map/map';
import { Thankyou } from '../pages/thankyou/thankyou';
import { Download } from '../pages/download/download';
import { PaymentMethodPage} from '../pages/payment-method/payment-method';

@NgModule({
  declarations: [
    MyApp,
    Home2,
	AddTechnology,
	Cart,
	SuccessfulPage,
	Add,
	AddtoCart,
	OrderdetailPage,
	Download,
	Thankyou,
	PaymentMethodPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	Home2,
	AddTechnology,
	Cart,
	SuccessfulPage,
	Add,
	AddtoCart,
	OrderdetailPage,
	Download,
	Thankyou,
	PaymentMethodPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}