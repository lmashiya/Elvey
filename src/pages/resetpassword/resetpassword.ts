import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user";
import {AngularFireAuth} from "@angular/fire/auth";
import {LoginPage} from "../login/login";
import {ToastController} from 'ionic-angular';

/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
    user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

  resetpass()
  {
      if (this.user.email == null)
      {
          this.toast.create({
            message: 'Empty Email/Password!',
            duration: 3000,
            position: 'top',
            cssClass: 'texter'
          }).present();
      }
      else {
          this.fire.auth.sendPasswordResetEmail(this.user.email)
              .then(data => {
                  this.toast.create({
                    message: 'Reset password email sent! Please login to your emails to rest your password!',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'texter'
                  }).present();
                  this.navCtrl.push(LoginPage);
              })
              .catch(error => {
                this.toast.create({
                    message: 'Invalid Email!',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'texter'
                  }).present();
              })
      }
  }
}
