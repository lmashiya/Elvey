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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBgB8GwKV_KG87G6FxmuhhYsJWiSMCB_6U",
    authDomain: "fir-auth-3c10d.firebaseapp.com",
    databaseURL: "https://fir-auth-3c10d.firebaseio.com",
    projectId: "fir-auth-3c10d",
    storageBucket: "fir-auth-3c10d.appspot.com",
    messagingSenderId: "523649393350"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    LoginPage,
    SignupPage,
    ContactPage,
    HomePage,
    TabsPage
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
    TabsPage
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
