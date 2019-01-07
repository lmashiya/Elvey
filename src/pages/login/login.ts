import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from '@angular/fire/auth';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from "../signup/signup";
import * as firebase from 'firebase/app';
import {HomePage} from "../home/home";
import {ResetpasswordPage} from "../resetpassword/resetpassword";
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

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams ,private fire: AngularFireAuth) {

  }

  alert(message: string)
  {
      this.alertCtrl.create(
          {title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    }
    login(){

      if (this.user.email == null || this.user.password == null)
      {
          this.alert('Empty Email/Password!');
      }
      else {
          this.fire.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
              .then(data => {
                      console.log('Got data', this.fire.auth.currentUser);
                      console.log(firebase.auth().currentUser.emailVerified);
                      if (firebase.auth().currentUser.emailVerified == false) {
                          this.alert('Verify email first!');
                      }
                      else {
                          this.alert('You have been logged in!');
                          this.navCtrl.push(HomePage, {'data': this.user});
                          this.navCtrl.setRoot(TabsPage);
                      }
                      //logged in
                  }
              )
              .catch(error => {
                  console.log('Got an error', error);
                  this.alert('Invalid Email/Password!');
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
