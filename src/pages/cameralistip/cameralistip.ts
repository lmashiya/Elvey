import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { HomePage } from '../home/home';
/**
 * Generated class for the CameralistipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cameralistip',
  templateUrl: 'cameralistip.html',
})
export class CameralistipPage {

  public items: any[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.items = [
            {image: 'assets/imgs/2MP IR Mini-Bullet Network Camera.jpg', name: '2MP IR Mini-Bullet Network Camera'},
            {image: 'assets/imgs/2MP WDR IR Dome Network Vandal Dome Camera.jpg', name: '2MP WDR IR Dome Network Vandal Dome Camera'},
            {image: 'assets/imgs/4MP WDR IR Eyeball Network Camera.jpg', name: '4MP WDR IR Eyeball Network Camera'},
            {image: 'assets/imgs/4MP Motorized WDR IR Eyeball Network Camera.jpg', name: '4MP Motorized WDR IR Eyeball Network Camera'},
            {image: 'assets/imgs/2MP Starlight IR Eyeball Network Camera With Audio.jpg', name: '2MP Starlight IR Eyeball Network Camera With Audio'},
            {image: 'assets/imgs/2MP Starlight IR Eyeball Network Camera With Audio.jpg', name: '4MP IR Eyeball Network Camera With Audio'},
            {image: 'assets/imgs/2MP WDR IR Mini Bullet Network Camera.jpg', name: '2MP WDR IR Mini Bullet Network Camera'},
            {image: 'assets/imgs/2MP IR Eyeball Network Camera.png', name: '2MP IR Eyeball Network Camera'},
            {image: 'assets/imgs/2MP Motorized IR Eyeball Network Camera.jpg', name: '2MP Motorized IR Eyeball Network Camera'},
            {image: 'assets/imgs/2MP 30x Starlight IR PTZ Network Camera.jpg', name: '2MP 30x Starlight IR PTZ Network Camera'},
            {image: 'assets/imgs/4MP 30x IR PTZ Network Camera.jpg', name: '14MP 30x IR PTZ Network Camera'},
            {image: 'assets/imgs/2MP 20x IR PTZ Network Camera.jpg', name: '2MP 20x IR PTZ Network Camera'},
            {image: 'assets/imgs/2MP 20x IR PTZ Network Camera.jpg', name: '4MP 20x IR PTZ Network Camera'},
            {image: 'assets/imgs/4MP IR Eyeball Network Camera.jpg', name: '4MP IR Eyeball Network Camera'},
            {image: 'assets/imgs/4MP IR Eyeball Network Camera.jpg', name: '2MP IR Eyeball Network Camera'},
            {image: 'assets/imgs/4MP IR Vandal Dome Network Camera.jpg', name: '4MP IR Vandal Dome Network Camera'},
            {image: 'assets/imgs/4MP IR Vandal Dome Network Camera.jpg', name: '2MP IR Vandal Dome Network Camera'},
            {image: 'assets/imgs/2MP Fixed IR Bullet Network Camera.jpg', name: '2MP Fixed IR Bullet Network Camera'},
            {image: 'assets/imgs/2MP Fixed IR Bullet Network Camera.jpg', name: '4MP Fixed IR Bullet Network Camera'},
            {image: 'assets/imgs/2MP Motorized IR Bullet Network Camera.jpg', name: '2MP Motorized IR Bullet Network Camera'},
            {image: 'assets/imgs/2MP Motorized IR Bullet Network Camera.jpg', name: '4MP Motorized IR Bullet Network Camera'},


        ];
        //this.navCtrl.push(HomePage, {'data': this.items});
        console.log(this.items)
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameralistipPage');
  }
  BackButton()
  {
    this.navCtrl.push(CameraPage)
  }
  goToHome(item: any)
  {
    this.navCtrl.push(HomePage)
    this.navCtrl.push(HomePage, {'data': item})
  }

}
