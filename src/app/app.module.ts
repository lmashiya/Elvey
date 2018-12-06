import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import {FIREBASE_CONFIG} from './app.firebase.config';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD
import {Geolocation } from '@ionic-native/geolocation';
import {NativeGeocoder} from '@ionic-native/native-geocoder';
import { Device } from '@ionic-native/device';

=======
import {ResetpasswordPage} from "../pages/resetpassword/resetpassword";
import {DevicesPage} from '../pages/devices/devices';
import {CameraPage} from '../pages/camera/camera';
import {FirePage} from '../pages/fire/fire';
import {AccessPage} from '../pages/access/access';
import {IntrusionPage} from '../pages/intrusion/intrusion';
>>>>>>> 9d711b5447bb59abff7abf8126dd19c1158a237d

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBh-bIhgu56St2nBNBqv8ULJ2Ci246VXn0",
    authDomain: "elveyapp.firebaseapp.com",
    databaseURL: "https://elveyapp.firebaseio.com",
    projectId: "elveyapp",
    storageBucket: "elveyapp.appspot.com",
    messagingSenderId: "611172371578"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    LoginPage,
    SignupPage,
    ContactPage,
    HomePage,
    TabsPage,
    DevicesPage,
    IntrusionPage,
    CameraPage,
    AccessPage,
    FirePage,
      ResetpasswordPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    LoginPage,
    SignupPage,
    ContactPage,
    HomePage,
    TabsPage,
    DevicesPage,
    IntrusionPage,
    CameraPage,
    AccessPage,
    FirePage,
      ResetpasswordPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
