import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {CameralistPage} from "../pages/cameralist/cameralist";
import {CameralistipPage} from "../pages/cameralistip/cameralistip";
import {DevicesPage} from "../pages/devices/devices";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  //activePage: any;

  pages: Array<{title: string, component: any}>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen)
  {
    platform.ready().then(() =>
    {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages =
          [
              {title: 'Devices', component: CameralistPage},
              {title: 'Notifications', component: CameralistipPage},
              {title: 'Settings', component: CameralistipPage},
              {title: 'Help', component: CameralistipPage},
        ];
    });
  }

}
