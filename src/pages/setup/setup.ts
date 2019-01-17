import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SharedService } from '../../models/sharedservice';

/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {

  public item: any;
  public addedItems: any[] = [];

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public app: App, public sharedService: SharedService) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('data');
    console.log(this.item);
  }

  addToDeviceList() {
    this.sharedService.devices.push(this.item);
    this.navCtrl.push(HomePage, {'deviceList': this.sharedService.devices});
  }
}
