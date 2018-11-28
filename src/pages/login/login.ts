import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from '@angular/fire/auth';
import {TabsPage} from '../tabs/tabs';
import * as firebase from 'firebase/app';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams ,private aFauth: AngularFireAuth) {

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
    console.log('ionViewDidLoad LoginPage');
  }
  async login(user: User){

    try{
        const result = this.aFauth.auth.signInWithEmailAndPassword(user.email, user.password);
        console.log("This is the result " + result);
        console.log(firebase.auth().currentUser.emailVerified);
        if(firebase.auth().currentUser.emailVerified){
        this.navCtrl.push(TabsPage);
        }
    }
    catch(e){
      this.alert(e.message);
    }
  }


}
