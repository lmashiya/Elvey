import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome';
import {DevicesPage} from '../devices/devices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public app: App) {

  }
  logout(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  add_device(){
    this.navCtrl.push(DevicesPage);
  }
}
