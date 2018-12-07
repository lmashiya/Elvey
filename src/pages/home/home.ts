import { Component } from '@angular/core';
import { NavController,App, Platform, NavParams} from 'ionic-angular';
import {DevicesPage} from '../devices/devices';
import * as firebase from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
import {Geolocation} from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public recd = "";
 
  constructor(private fire: AngularFireAuth,public navCtrl: NavController,public app: App,
     public geo: Geolocation, private plat: Platform, public coder: NativeGeocoder, public device: Device, public navParams: NavParams)
  {
     //receiving data from LoginPage
     this.recd = this.navParams.get('data')
     console.log(this.recd);
  }
  

  logout(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  add_device(){
    this.navCtrl.push(DevicesPage);
  }
}
