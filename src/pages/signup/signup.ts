import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth} from '@angular/fire/auth';
import { User } from '../../models/user';
//import firebase from 'firebase/*';
import * as firebase from 'firebase/app';
import {LoginPage} from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private aFauth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  async signup(user : User){
    try{
      const userObj = await this.aFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(userObj){
        if(this.sendVerification()){
          this.navCtrl.push(LoginPage);
          if(this.isVerified()){
            console.log("have to redirect")
          }
        }
      }
    }
    catch(e){
      console.error(e);
    }
  }

  sendVerification(){
    return firebase.auth().currentUser.sendEmailVerification();
  }

  isVerified(){
    console.log("is verified")
    return firebase.auth().currentUser.emailVerified;
  }

}
