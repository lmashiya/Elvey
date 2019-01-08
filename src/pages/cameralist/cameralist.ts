import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

/**
 * Generated class for the CameralistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cameralist',
  templateUrl: 'cameralist.html',
})
export class CameralistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameralistPage');
  }

  BackButtonCamera(){
    this.navCtrl.push(CameraPage)
  }

}
