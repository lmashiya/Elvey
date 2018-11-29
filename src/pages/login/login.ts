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

        this.fire.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
            .then( data =>
                {
                    console.log('Got data', this.fire.auth.currentUser);
                    console.log(firebase.auth().currentUser.emailVerified);
                    if(firebase.auth().currentUser.emailVerified == false){
                        this.alert('Verify email first!');
                    }
                    else
                    {
                        this.alert('You have been logged in!');
                        this.navCtrl.setRoot(TabsPage);
                    }
                    //this.alert('Success You\'re logged in!');

                    //logged in
                }
            )
            .catch( error =>
            {
                console.log('Got an error', error);
                this.alert('Invalid Email/Password!');
                //error
            })
    }


}
