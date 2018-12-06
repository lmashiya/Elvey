import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController,App, Platform, NavParams} from 'ionic-angular';
=======
import { NavController,App } from 'ionic-angular';
<<<<<<< HEAD
//import {WelcomePage} from '../welcome/welcome';
=======
>>>>>>> 8b76b2f72fc0d862c300fe2d642f1c43273432eb
import {DevicesPage} from '../devices/devices';
import {LoginPage} from "../login/login";
import * as firebase from 'firebase/app';
>>>>>>> 9d711b5447bb59abff7abf8126dd19c1158a237d
import { AngularFireAuth} from '@angular/fire/auth';
import {Geolocation} from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any = {};
  loading: any;
  public recd = "";
  public lat:number;
  public lng:number;
  constructor(private fire: AngularFireAuth,public navCtrl: NavController,public app: App,
     public geo: Geolocation, private plat: Platform, public coder: NativeGeocoder, public device: Device, public navParams: NavParams)
   {
     //receiving data from LoginPage
     this.recd = this.navParams.get('data')
     console.log(this.recd);
     alert(this.recd);
  }
  

  logout(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }
<<<<<<< HEAD
=======

  add_device(){
    this.navCtrl.push(DevicesPage);
  }
//   provider = {
//     loggedin: false,
//     email: '',
//     name: '',
//     profilePicture: ''

// }

//   loginWithFacebook()
//   {
//       this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
//           .then( res => {
//               this.provider.loggedin = true;
//               this.provider.email = res.user.email;
//               this.provider.name = res.user.displayName;
//               this.provider.profilePicture = res.user.photoURL;
//               console.log(res);
//               this.navCtrl.push(HomePage);
//           })
//   }

//   loginWithGmail()
//   {
//       this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
//           .then( res => {
//               this.provider.loggedin = true;
//               this.provider.email = res.user.email;
//               this.provider.name = res.user.displayName;
//               this.provider.profilePicture = res.user.photoURL;
//               console.log(res);
//               this.navCtrl.push(HomePage);
//           })
//   }
//   loginWithTwitter()
//   {
//       this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
//           .then( res => {
//               this.provider.loggedin = true;
//               this.provider.email = res.user.email;
//               this.provider.name = res.user.displayName;
//               this.provider.profilePicture = res.user.photoURL;
//               console.log(res);
//               this.navCtrl.push(HomePage);
//           })

//   }

>>>>>>> 9d711b5447bb59abff7abf8126dd19c1158a237d
}
