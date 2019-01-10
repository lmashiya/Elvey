import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { DevicesPage } from '../devices/devices';
import { AngularFireAuth} from '@angular/fire/auth';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {App} from 'ionic-angular';

 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public recd = "";
 
  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, public app: App)
  {
     //receiving data from LoginPage
     this.recd = this.navParams.get('data');
     console.log(this.recd);
  }

  

  logout(){
      this.toast.create({
        message: 'Logout successful!',
        duration: 3000,
        position: 'top'
      }).present();
      this.app.getRootNav().setRoot(LoginPage);
  }

  add_device(){
    this.navCtrl.push(DevicesPage);
  }
}
