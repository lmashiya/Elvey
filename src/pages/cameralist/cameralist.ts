import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { HomePage } from '../home/home';
import { SetupPage } from '../setup/setup';
import { DatafinderProvider } from '../../providers/datafinder';

/**
 * Generated class for the CameralistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cameralist',
  templateUrl: 'cameralist.html',
})
export class CameralistPage {

  public items: [];

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private dataFinder : DatafinderProvider) {
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/data.json").then(data => {
      this.SetQueryOptionsData(data);
    });
  }

  /* Sets data with returned JSON array */
  SetQueryOptionsData(data : any) {
    this.items = data.items;
  }

  BackButtonCamera(){
    this.navCtrl.push(CameraPage)
  }

  // goToHome(item: any)
  // {
  //   this.navCtrl.push(HomePage)
  //   this.navCtrl.push(HomePage, {'data': item})
  // }

  redirectToSetup(item: any) {
    this.navCtrl.push(SetupPage, {'data': item});
  }

}
