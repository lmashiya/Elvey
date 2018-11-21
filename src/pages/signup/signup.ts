import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth} from '@angular/fire/auth';
import { User } from '../../models/user';
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
      const result = await this.aFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        console.log("Signed up");
        this.navCtrl.push(TabsPage);
      }
    }
    catch(e){
      console.error(e);
    }
  }

}
