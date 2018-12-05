import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user";
import {TabsPage} from "../tabs/tabs";
import * as firebase from 'firebase/app';
import {AngularFireAuth} from "@angular/fire/auth";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";

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

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }
    alert(message: string)
    {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

  resetpass()
  {
      if (this.user.email == null)
      {
          this.alert('Empty Email/Password!');
      }
      else {
          this.fire.auth.sendPasswordResetEmail(this.user.email)
              .then(data => {
                  this.alert('Reset password email sent!');
                  this.navCtrl.push(LoginPage);
              })
              .catch(error => {
                  this.alert('Invalid Email!');
              })
      }
  }
}
