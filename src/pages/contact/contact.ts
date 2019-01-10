import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goToWebsite()
  {
    window.open('http://www.elvey.co.za', '_blank', 'location=yes')
  }
  goToFacebook()
  {
    window.open('https://www.facebook.com/officialelvey', '_blank', 'location=yes')
  }
  goToTwitter()
  {
    window.open('https://twitter.com/ElveySecurity', '_blank', 'location=yes')
  }
  goToLinkedIn()
  {
    window.open('https://www.linkedin.com/company/elvey-security-technologies/about', '_blank', 'location=yes')
  }
  goToYouTube()
  {
    window.open('https://www.youtube.com/channel/UCfRUAzsHARqDnSmiYyUCYag?view_as=subscriber', '_blank', 'location=yes')
  }

}
