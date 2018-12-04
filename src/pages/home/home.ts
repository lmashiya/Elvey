import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
<<<<<<< HEAD
import {WelcomePage} from '../welcome/welcome';
import {DevicesPage} from '../devices/devices';
=======
import {LoginPage} from "../login/login";
import * as firebase from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
>>>>>>> 5feff1b730f35e5af9202930658b2fcf75506eab

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
<<<<<<< HEAD

  add_device(){
    this.navCtrl.push(DevicesPage);
  }
=======
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

>>>>>>> 5feff1b730f35e5af9202930658b2fcf75506eab
}
