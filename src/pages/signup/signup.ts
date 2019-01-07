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
    passwordType: string = 'password';
    passwordShown: boolean = false;
    public PASSWORD_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})"
  
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
      if(user.password == this.PASSWORD_REGEX){
        const userObj = await this.aFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
        if(userObj){
            this.alert('You have successfully signed up!');
          if(this.sendVerification()){
            this.navCtrl.push(LoginPage);
            if(this.isVerified()){
              console.log("have to redirect")
            }
              
            }
          }
       
      }
      else
      {
        alert("Password must contain one lowercase, one uppercase, one number, one unique character such as !@#$%^&? and be at least 6 characters long.");
      }
    }
    catch(err){
      this.error = err;
      this.alert(err);
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
