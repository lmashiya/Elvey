import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Navbar} from 'ionic-angular';
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

error: any;
user = {} as User;

    @ViewChild(Navbar) navBar: Navbar;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private aFauth: AngularFireAuth) {
  }


  ionViewDidLoad() {
      this.navBar.backButtonClick = (e:UIEvent)=>{
          // todo something
          this.navCtrl.pop();
      }
    console.log('ionViewDidLoad SignupPage');
  }
    alert(message: string)
    {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    }
  async signup(user : User){
    try{
      if(user.password.length < 6){
        alert("password has to be at least 6 characters");
      }
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
    catch(err){
      this.error = err;
      //this.alert(err);
    }
  }

  sendVerification(){
    return firebase.auth().currentUser.sendEmailVerification();
  }

  isVerified(){
    console.log("is verified")
    return firebase.auth().currentUser.emailVerified;
  }
  BackButton()
  {
      this.navCtrl.push(LoginPage); 
  }
  
}
