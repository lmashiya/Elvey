import { Component } from '@angular/core';
import { NavController, NavParams, Item} from 'ionic-angular';
import { DevicesPage } from '../devices/devices';
import { AngularFireAuth} from '@angular/fire/auth';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {App} from 'ionic-angular';
import { SharedService } from '../../models/sharedservice';
import { SetupPage } from '../setup/setup';
import { StreamPage } from '../stream/stream';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public deviceList: any[];

  constructor(private fire: AngularFireAuth,public navCtrl: NavController
    , public navParams: NavParams, public toast: ToastController
    , public app: App, public sharedService: SharedService) {
     //receiving data from other pages

     //Device list has to be pulled from database
     this.deviceList = this.navParams.get('deviceList');
     if (!this.deviceList) {
       this.deviceList = sharedService.devices;
     }
    //  console.log(this.deviceList);
  }

  logout(){
      this.app.getRootNav().setRoot(LoginPage);
  }

  add_device(){
    this.navCtrl.push(DevicesPage);
  }

  configureDevice(item: any) {
    this.navCtrl.push(SetupPage, {'data': item});
    console.log("Configure");
  }

  streamFromDevice(){
    this.navCtrl.push(StreamPage);
  }
}
