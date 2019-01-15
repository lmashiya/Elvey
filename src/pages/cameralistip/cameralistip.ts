import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { HomePage } from '../home/home';
/**
 * Generated class for the CameralistipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cameralistip',
  templateUrl: 'cameralistip.html',
})
export class CameralistipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameralistipPage');
  }
  BackButton()
  {
    this.navCtrl.push(CameraPage)
  }
  goToHome()
  {
    this.navCtrl.push(HomePage)
    console.log("I am in IP List")
  }

}
