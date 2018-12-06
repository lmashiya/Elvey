import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth} from '@angular/fire/auth';
import {TabsPage} from '../tabs/tabs';
import {SignupPage} from "../signup/signup";
import * as firebase from 'firebase/app';
import {HomePage} from "../home/home";
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
    resetpass()
    {
        this.fire.auth.sendPasswordResetEmail(this.user.email)
            .then(data => {
                this.alert('Reset password email sent!');
            })
            .catch(error => {
                this.alert('Invalid Email!');
            })
    }
    signupPush()
    {
        this.navCtrl.setRoot(SignupPage);
    }
    provider = {
        loggedin: false,
        email: '',
        name: '',
        profilePicture: ''

    }

    loginWithFacebook()
    {
        this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then( res => {
                this.provider.loggedin = true;
                this.provider.email = res.user.email;
                this.provider.name = res.user.displayName;
                this.provider.profilePicture = res.user.photoURL;
                //passing data to HomePage
                this.navCtrl.push(HomePage, {'data': res});
            })
    }

    loginWithGmail()
    {
        this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then( res => {
                this.provider.loggedin = true;
                    this.provider.email = res.user.email;
                    this.provider.name = res.user.displayName;
                    this.provider.profilePicture = res.user.photoURL;
                this.navCtrl.push(HomePage, {'data': res});
            })
    }
    loginWithTwitter()
    {
        this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
            .then( res => {
                this.provider.loggedin = true;
                this.provider.email = res.user.email;
                this.provider.name = res.user.displayName;
                this.provider.profilePicture = res.user.photoURL;
                this.navCtrl.push(HomePage, {'data': res});
            })

    }

}
