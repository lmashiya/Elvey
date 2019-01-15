import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemOptions, ItemContent } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { HomePage } from '../home/home';

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

  public items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.items = [
    {image: 'assets/imgs/starlight_resized.jpg', name: '2MP 25x Starlight IR PTZ HDCVI Camera'},
    {image: 'assets/imgs/vari_focal.png', name: '2MP Vari-Focal HDCVI IR Vandal Dome Camera'},
    {image: 'assets/imgs/plastic_indoor.jpg', name: '1MP Plastic Indoor IR Eyeball Camera'},
    {image: 'assets/imgs/metal_ir.jpg', name: '1MP Metal IR Eyeball Camera'},
    {image: 'assets/imgs/eyeball.jpg', name: '1MP IR Eyeball Camera With Audio'},
    {image: 'assets/imgs/1MP Vari-Focal IR Eyeball Camera.jpg', name: ' 1MP Vari-Focal IR Eyeball Camera'},
    {image: 'assets/imgs/2MP Metal IR Eyeball Camera.jpg', name: '2MP Metal IR Eyeball Camera'},
    {image: 'assets/imgs/2MP 30x Starlight IR PTZ HDCVI Camera.jpg', name: '2MP 30x Starlight IR PTZ HDCVI Camera'},
    {image: 'assets/imgs/2MP Starlight HDCVI Pinhole Camera.jpg', name: '2MP Starlight HDCVI Pinhole Camera'},
    {image: 'assets/imgs/2MP HDCVI PIR Camera.jpg', name: '2MP HDCVI PIR Camera'}
   
    ];
    console.log(this.items)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameralistPage');
  }

  BackButtonCamera(){
    this.navCtrl.push(CameraPage)
  }
  goToHome(item: any)
  {
    this.navCtrl.push(HomePage)
    this.navCtrl.push(HomePage, {'data': item})
  }

}
