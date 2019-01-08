import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DevicesPage } from '../devices/devices';

/**
 * Generated class for the FirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fire',
  templateUrl: 'fire.html',
})
export class FirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirePage');
  }
  BackButton()
  {
      this.navCtrl.push(DevicesPage); 
  }

}
