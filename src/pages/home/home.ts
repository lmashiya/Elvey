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
 

declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public recd = "";
  lastImage: string = null;
  loading: Loading;
 
  constructor(private fire: AngularFireAuth,public navCtrl: NavController,public app: App,
     public geo: Geolocation, private platform: Platform, public coder: NativeGeocoder, public navParams: NavParams, 
     private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, 
     public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController,public loadingCtrl: LoadingController)
  {
     //receiving data from LoginPage
     this.recd = this.navParams.get('data');
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
