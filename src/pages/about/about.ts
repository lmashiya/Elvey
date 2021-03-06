import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import { ToastController } from 'ionic-angular';
import {App} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public toast: ToastController, public app: App) {

  }
    logout(){
        this.toast.create({
            message: 'Logout successful!',
            duration: 3000,
            position: 'top'
        }).present();
        this.app.getRootNav().setRoot(LoginPage);
    }
}
