import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DevicesPage } from '../devices/devices';
import {CameralistPage} from '../cameralist/cameralist';
import {CameralistipPage} from '../cameralistip/cameralistip';


/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
}


  BackButton()
  {
      this.navCtrl.push(DevicesPage);
  }

  goToCameraList(){
    this.navCtrl.push(CameralistPage)
  }

  goToCameraListIp(){
    this.navCtrl.push(CameralistipPage)
  }

}
