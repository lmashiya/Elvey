import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DevicesPage } from '../devices/devices';

/**
 * Generated class for the IntrusionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intrusion',
  templateUrl: 'intrusion.html',
})
export class IntrusionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntrusionPage');
  }
  BackButton()
  {
      this.navCtrl.push(DevicesPage); 
  }

}
