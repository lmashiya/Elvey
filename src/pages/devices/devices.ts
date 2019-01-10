import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CameraPage} from '../camera/camera';
import {IntrusionPage} from '../intrusion/intrusion';
import {FirePage} from '../fire/fire';
import {AccessPage} from '../access/access';
import { HomePage } from '../home/home';


/**
 * Generated class for the DevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');
  }

  goToCamera(){
    this.navCtrl.push(CameraPage);
    }
  goToAccess(){
    this.navCtrl.push(AccessPage);
  }
  goToDetection(){
    this.navCtrl.push(IntrusionPage);
  }
  goToFire(){
    this.navCtrl.push(FirePage);
  }
  BackButton()
  {
      this.navCtrl.push(HomePage);
  }
}
