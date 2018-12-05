import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import {DevicesPage} from '../devices/devices';
import {LoginPage} from "../login/login";
import * as firebase from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private fire: AngularFireAuth,public navCtrl: NavController,public app: App) {

  }

  logout(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

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

}
