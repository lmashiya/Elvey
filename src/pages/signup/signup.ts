import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Navbar} from 'ionic-angular';
import { AngularFireAuth} from '@angular/fire/auth';
import { User } from '../../models/user';
import * as firebase from 'firebase/app';
import {LoginPage} from '../login/login';
import {ToastController} from 'ionic-angular';

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
    passwordType: string = 'password';
    passwordShown: boolean = false;
  
    @ViewChild(Navbar) navBar: Navbar;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private aFauth: AngularFireAuth, public toast: ToastController) {
  }


  ionViewDidLoad() {
      this.navBar.backButtonClick = (e:UIEvent)=>{
          // todo something
          this.navCtrl.pop();
      }
    console.log('ionViewDidLoad SignupPage');
  }
    
  async signup(user : User){
    try{

      if(user.password.length < 6){
        this.toast.create({
          message: 'Password must at least be 6 characters long!',
          duration: 3000,
          position: 'top',
          cssClass: 'texter'
        }).present();
        }

        const userObj = await this.aFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
        if(userObj){
          this.toast.create({
            message: 'You have successfully signed up! \nPlease log into your email for verification before attempting to login!',
            duration: 3000,
            position: 'top',
            cssClass: 'texter'
          }).present();

          if(this.sendVerification()){
            this.navCtrl.push(LoginPage);
            if(this.isVerified()){
            }
              
            }
          }
       
      }
    catch(err){
      this.error = err;
      this.toast.create({
        message: (err),
        duration: 3000,
        position: 'top',
        cssClass: 'texter'
      }).present();
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
