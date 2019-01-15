import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from '@angular/fire/auth';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from "../signup/signup";
import * as firebase from 'firebase/app';
import {HomePage} from "../home/home";
import {ResetpasswordPage} from "../resetpassword/resetpassword";
import { ToastController } from 'ionic-angular';
//import {Details} from '../models/details';

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

  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams ,private fire: AngularFireAuth, public toast: ToastController) {

  }

    login(){

      if (this.user.email == null || this.user.password == null)
      {
          this.toast.create({
            message: 'Empty Email/Password!',
            duration: 3000,
            position: 'top',
            cssClass: 'texter'
          }).present();
      }
      else {
          this.fire.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
              .then(data => {
                      console.log('Got data', this.fire.auth.currentUser);
                      console.log(firebase.auth().currentUser.emailVerified);
                      if (firebase.auth().currentUser.emailVerified == false) {
                          this.toast.create({
                            message: 'Please Verify email first!',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'texter'
                          }).present();
                      }
                      else {
                        this.toast.create({
                            message: 'Login successful!',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'texter'
                          }).present();
                          this.navCtrl.push(HomePage, {'data': data});
                          this.navCtrl.setRoot(TabsPage);
                      }
                     
                      //logged in
                  }
              )
              .catch(error => {
                  console.log('Got an error', error);
                  this.toast.create({
                    message: 'Invalid Email/Password!',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'texter'
                  }).present();
                  //error
              })
      }
    }

    togglePassword()
    {
        if(this.passwordShown)
        {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else
            {
                this.passwordShown = true;
                this.passwordType = 'text';
        }
    }
    resetpass()
    {
        this.navCtrl.push(ResetpasswordPage);
    }
    signupPush()
    {
        this.navCtrl.setRoot(SignupPage);
    }


}
