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

import {Geolocation } from '@ionic-native/geolocation';
import {NativeGeocoder} from '@ionic-native/native-geocoder';
import { Device } from '@ionic-native/device';


import {ResetpasswordPage} from "../pages/resetpassword/resetpassword";
import {DevicesPage} from '../pages/devices/devices';
import {CameraPage} from '../pages/camera/camera';
import {FirePage} from '../pages/fire/fire';
import {AccessPage} from '../pages/access/access';
import {IntrusionPage} from '../pages/intrusion/intrusion';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBqYOyccGOFdplohm76JuRGpEkMmB5PZVI",
  authDomain: "zaas-dc462.firebaseapp.com",
  databaseURL: "https://zaas-dc462.firebaseio.com",
  projectId: "zaas-dc462",
  storageBucket: "zaas-dc462.appspot.com",
  messagingSenderId: "694656193266"
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
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
