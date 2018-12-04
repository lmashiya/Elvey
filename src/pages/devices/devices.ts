import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  devices: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.devices = [
      {name: "CCTV/Surveillence", code: 1},
      {name: "Intrusion Detection", code: 2},
      {name: "Fire Detection", code: 3},
      {name: "Access Control", code: 4},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');
  }

}
