import { Component } from '@angular/core';
import { NavController,App, Platform, NavParams} from 'ionic-angular';
import {DevicesPage} from '../devices/devices';
import * as firebase from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
import {Geolocation} from '@ionic-native/geolocation';
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject, FileUploadOptions } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera, DestinationType } from '@ionic-native/camera';
import { ActionSheetController, ToastController, LoadingController, Loading } from 'ionic-angular';
import {LoginPage} from '../login/login';

 

declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public recd = "";
 
  constructor(private fire: AngularFireAuth,public navCtrl: NavController,public app: App,
     public geo: Geolocation,public coder: NativeGeocoder, public navParams: NavParams, public toast: ToastController)
  {
     //receiving data from LoginPage
     this.recd = this.navParams.get('data');
     console.log(this.recd);
  }

  

  logout(){
      this.toast.create({
        message: 'Logout successful',
        duration: 3000,
        position: 'top'
      }).present();
      this.navCtrl.setRoot(LoginPage);
  }

  add_device(){
    this.navCtrl.push(DevicesPage);
  }
}
