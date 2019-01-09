webpackJsonp([10],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(fire, navCtrl, app, geo, coder, navParams, toast) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.app = app;
        this.geo = geo;
        this.coder = coder;
        this.navParams = navParams;
        this.toast = toast;
        this.recd = "";
        //receiving data from LoginPage
        this.recd = this.navParams.get('data');
        console.log(this.recd);
    }
    HomePage.prototype.logout = function () {
        this.toast.create({
            message: 'Logout successful',
            duration: 3000,
            position: 'top'
        }).present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.add_device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__devices_devices__["a" /* DevicesPage */]);
    };
    var _a, _b, _c, _d, _e, _f, _g;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        About\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">WELCOME</div>\n<ng-container text-center>\n  <ion-card>\n      <img src="assets/imgs/placeholder.png" height=\'150\' width=\'80\'/>\n      <p>Name: </p>\n      <p>Email: </p>\n   \n    </ion-card>\n    </ng-container>\n    <div  text-center>\n        <button ion-button (click) = "add_device()">Add Devices</button>\n      </div>\n    <ion-footer>\n         <div class="button-bottom" text-center>\n          <button ion-button small round outline (click) = "logout()">LogOut</button>\n        </div>\n    </ion-footer> \n  </ion-content>\n  '/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" ? _g : Object])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccessPage = /** @class */ (function () {
    function AccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccessPage');
    };
    AccessPage.prototype.BackButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__devices_devices__["a" /* DevicesPage */]);
    };
    AccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-access',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/access/access.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n       <ion-title>Back To Devices</ion-title>\n    </ion-navbar>\n   </ion-header>\n   <ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">ACCESS CONTROL</div>\n\n  <ion-list no-lines text-center>\n        <ion-item class = "texter">\n          Boom Gates\n          <button ion-button outline item-end (click) = "goToDetection()">Add Device</button>\n        </ion-item>\n        <ion-item class = "texter">\n        Door Closers\n          <button ion-button outline item-end (click) = "goToAccess()">Add Device</button>\n        </ion-item>\n        <ion-item class = "texter">\n         Intercoms\n          <button ion-button outline item-end (click) = "goToDetection()">Add Device</button>\n        </ion-item>\n            <ion-item class = "texter">\n         Remotes and Receivers\n          <button ion-button outline item-end (click) = "goToCamera()">Add Device</button>\n        </ion-item>\n        <ion-item class = "texter">\n         Gate Motors and Accessories\n          <button ion-button outline item-end (click) = "goToFire()">Add Device</button>\n        </ion-item>\n        <ion-item class = "texter">\n          Request to Exit Buttons & Manual Call Points\n          <button ion-button outline item-end (click) = "goToFire()">Add Device</button>\n        </ion-item>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/access/access.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AccessPage);
    return AccessPage;
}());

//# sourceMappingURL=access.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameralistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_camera__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CameralistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CameralistPage = /** @class */ (function () {
    function CameralistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CameralistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameralistPage');
    };
    CameralistPage.prototype.BackButtonCamera = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__camera_camera__["a" /* CameraPage */]);
    };
    CameralistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cameralist',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/cameralist/cameralist.html"*/'<!--\n  Generated template for the CameralistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButtonCamera()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n       <ion-title>Back Cameras</ion-title>\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center class="tester">\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">CCTV/SURVEILLANCE</div>\n\n  <ion-list no-lines text-center>\n    <ion-item class = "texter">\n      HD Analogue Cameras\n      <button ion-button outline item-end (click) = "goToCameraList()">Add Device</button>\n    </ion-item>\n    <ion-item class = "texter">\n      IP Cameras\n      <button ion-button outline item-end (click) = "goToCameraListIp()">Add Device</button>\n    </ion-item>\n  </ion-list>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/cameralist/cameralist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CameralistPage);
    return CameralistPage;
}());

//# sourceMappingURL=cameralist.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameralistipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CameralistipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CameralistipPage = /** @class */ (function () {
    function CameralistipPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CameralistipPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameralistipPage');
    };
    CameralistipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cameralistip',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/cameralistip/cameralistip.html"*/'<!--\n  Generated template for the CameralistipPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n       <ion-title>Back To Devices</ion-title>\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">CCTV/SURVEILLANCE</div>\n\n  <ion-list no-lines text-center>\n    <ion-item class = "texter">\n      HD Analogue Cameras\n      <button ion-button outline item-end (click) = "goToCameraList()">Add Device</button>\n    </ion-item>\n    <ion-item class = "texter">\n      IP Cameras\n      <button ion-button outline item-end (click) = "goToCameraListIp()">Add Device</button>\n    </ion-item>\n  </ion-list>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/cameralistip/cameralistip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CameralistipPage);
    return CameralistipPage;
}());

//# sourceMappingURL=cameralistip.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntrusionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IntrusionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntrusionPage = /** @class */ (function () {
    function IntrusionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntrusionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntrusionPage');
    };
    IntrusionPage.prototype.BackButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__devices_devices__["a" /* DevicesPage */]);
    };
    IntrusionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intrusion',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/intrusion/intrusion.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n       <ion-title>Back To Devices</ion-title>\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">INTRUSION DETECTION</div>\n  <ion-list no-lines text-center>\n        <ion-item class = "texter">\n              Detectors\n              <button ion-button outline item-end (click) = "goToFire()">Add Device</button>\n            </ion-item>\n          </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/intrusion/intrusion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], IntrusionPage);
    return IntrusionPage;
}());

//# sourceMappingURL=intrusion.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirePage = /** @class */ (function () {
    function FirePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FirePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirePage');
    };
    FirePage.prototype.BackButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__devices_devices__["a" /* DevicesPage */]);
    };
    FirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fire',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/fire/fire.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n       <ion-title>Back To Devices</ion-title>\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">FIRE INTRUSION</div>\n  <ion-list no-lines text-center>\n  <ion-item class = "texter">\n        Detectors\n        <button ion-button outline item-end (click) = "goToCamera()">Add Device</button>\n      </ion-item>\n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/fire/fire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FirePage);
    return FirePage;
}());

//# sourceMappingURL=fire.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(alertCtrl, navCtrl, navParams, aFauth, toast) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aFauth = aFauth;
        this.toast = toast;
        this.user = {};
        this.passwordType = 'password';
        this.passwordShown = false;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            // todo something
            _this.navCtrl.pop();
        };
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var userObj, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (user.password.length < 6) {
                            this.toast.create({
                                message: 'Password must at least be 6 characters long!',
                                duration: 3000,
                                position: 'top',
                                cssClass: 'texter'
                            }).present();
                        }
                        return [4 /*yield*/, this.aFauth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        userObj = _a.sent();
                        if (userObj) {
                            this.toast.create({
                                message: 'You have successfully signed up! \nPlease log into your email for verification before attempting to login!',
                                duration: 3000,
                                position: 'top',
                                cssClass: 'texter'
                            }).present();
                            if (this.sendVerification()) {
                                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                                if (this.isVerified()) {
                                }
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.error = err_1;
                        this.toast.create({
                            message: (err_1),
                            duration: 3000,
                            position: 'top',
                            cssClass: 'texter'
                        }).present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    };
    SignupPage.prototype.sendVerification = function () {
        return __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.sendEmailVerification();
    };
    SignupPage.prototype.isVerified = function () {
        console.log("is verified");
        return __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.emailVerified;
    };
    SignupPage.prototype.BackButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    var _a, _b, _c, _d, _e, _f;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]) === "function" ? _a : Object)
    ], SignupPage.prototype, "navBar", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar hideBackButton>\n     <ion-buttons left>\n         <button ion-button (click)="BackButton()">\n             <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n         </button>\n     </ion-buttons>\n     <ion-title>Back To Login</ion-title>\n  </ion-navbar>\n </ion-header>\n\n<ion-content padding text-center>\n\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <h1>"Security is everyone\'s concern...but it\'s our business!"</h1>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating text-center>Email</ion-label>\n      <ion-input type="text" [(ngModel)] = "user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating text-center>Password(enter at least 6 characters)</ion-label>\n      <ion-input\n     [(ngModel)]="user.password"\n      name="password"\n      type="password"\n      #password="ngModel"\n      [minlength]="6"\n      required>\n    </ion-input>\n    </ion-item>\n    <div class="signupButton" text-center>\n      <button ion-button round outline (click) = "signup(user)">Signup</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" ? _f : Object])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(navCtrl, navParams, fire, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toast = toast;
        this.user = {};
    }
    ResetpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpasswordPage');
    };
    ResetpasswordPage.prototype.resetpass = function () {
        var _this = this;
        if (this.user.email == null) {
            this.toast.create({
                message: 'Empty Email/Password!',
                duration: 3000,
                position: 'top',
                cssClass: 'texter'
            }).present();
        }
        else {
            this.fire.auth.sendPasswordResetEmail(this.user.email)
                .then(function (data) {
                _this.toast.create({
                    message: 'Reset password email sent! Please login to your emails to rest your password!',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'texter'
                }).present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            })
                .catch(function (error) {
                _this.toast.create({
                    message: 'Invalid Email!',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'texter'
                }).present();
            });
        }
    };
    var _a, _b, _c, _d;
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/resetpassword/resetpassword.html"*/'<!--\n  Generated template for the ResetpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>resetpassword</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center padding>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating text-center>Email</ion-label>\n      <ion-input type="text" [(ngModel)] = "user.email"></ion-input>\n    </ion-item>\n\n    <div class="resetButton" text-center>\n      <button ion-button round outline (click) = "resetpass()">Reset Password</button>\n    </div>\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/resetpassword/resetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" ? _d : Object])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/access/access.module": [
		483,
		9
	],
	"../pages/camera/camera.module": [
		485,
		8
	],
	"../pages/cameralist/cameralist.module": [
		484,
		7
	],
	"../pages/cameralistip/cameralistip.module": [
		486,
		6
	],
	"../pages/devices/devices.module": [
		487,
		5
	],
	"../pages/fire/fire.module": [
		489,
		4
	],
	"../pages/intrusion/intrusion.module": [
		488,
		3
	],
	"../pages/login/login.module": [
		490,
		2
	],
	"../pages/resetpassword/resetpassword.module": [
		491,
		1
	],
	"../pages/signup/signup.module": [
		492,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.goToWebsite = function () {
        window.open('http://www.elvey.co.za', '_blank', 'location=yes');
    };
    ContactPage.prototype.goToFacebook = function () {
        window.open('https://www.facebook.com/officialelvey', '_blank', 'location=yes');
    };
    ContactPage.prototype.goToTwitter = function () {
        window.open('https://twitter.com/ElveySecurity', '_blank', 'location=yes');
    };
    ContactPage.prototype.goToLinkedIn = function () {
        window.open('https://www.linkedin.com/company/elvey-security-technologies/about', '_blank', 'location=yes');
    };
    ContactPage.prototype.goToYouTube = function () {
        window.open('https://www.youtube.com/channel/UCfRUAzsHARqDnSmiYyUCYag?view_as=subscriber', '_blank', 'location=yes');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tester">\n  <ion-list>\n    <ion-list-header>Follow us on the following platforms:</ion-list-header>\n    <ion-item class="tester">\n      <ion-icon name="ionic" item-start></ion-icon>\n      <b>Our Official Website:</b>\n      <p><a href=\'#\' (click)="goToWebsite()">http://www.elvey.co.za</a></p>\n    </ion-item>\n    <ion-item class="tester">\n        <ion-icon name="ionic" item-start></ion-icon>\n        <b>Our Address:</b>\n        <p>27 GreenStone PI</p>\n        <p>Modderfontein</p>\n        <p>Lethabong</p>\n        <p>1609</p>\n      </ion-item>\n      <ion-item class="tester">\n          <ion-icon name="ionic" item-start></ion-icon>\n         <b>Or Contact Us On:</b>\n          <p>(011) 401 6700</p>\n        </ion-item>\n        <ion-item class="tester">\n            <ion-icon name="ionic" item-start></ion-icon>\n          Follow us on:\n\n          <p>\n              <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                        <button ion-button clear (click)="goToTwitter()"><img src="assets/imgs/twt.png"></button>\n                      </ion-col>\n                      <ion-col>\n      \n                        <button ion-button clear (click)="goToFacebook()"><img src="assets/imgs/fbbtn.png"></button>\n                      </ion-col>\n                      <ion-col>\n                        <button ion-button clear (click)="goToLinkedIn()"><img src="assets/imgs/li.png"></button>\n                      </ion-col>\n                      <ion-col>\n                        <button ion-button clear (click)="goToYouTube()"> <img src="assets/imgs/ut.png"></button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n          </p>\n          </ion-item>\n          \n          \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(411);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_resetpassword_resetpassword__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_devices_devices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_camera_camera__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_fire_fire__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_access_access__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_intrusion_intrusion__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cameralist_cameralist__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cameralistip_cameralistip__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_transfer__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {FIREBASE_CONFIG} from './app.firebase.config';

























var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBqYOyccGOFdplohm76JuRGpEkMmB5PZVI",
    authDomain: "zaas-dc462.firebaseapp.com",
    databaseURL: "https://zaas-dc462.firebaseio.com",
    projectId: "zaas-dc462",
    storageBucket: "zaas-dc462.appspot.com",
    messagingSenderId: "694656193266"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_devices_devices__["a" /* DevicesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_intrusion_intrusion__["a" /* IntrusionPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_access_access__["a" /* AccessPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_fire_fire__["a" /* FirePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cameralist_cameralist__["a" /* CameralistPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cameralistip_cameralistip__["a" /* CameralistipPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/access/access.module#AccessPageModule', name: 'AccessPage', segment: 'access', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cameralist/cameralist.module#CameralistPageModule', name: 'CameralistPage', segment: 'cameralist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cameralistip/cameralistip.module#CameralistipPageModule', name: 'CameralistipPage', segment: 'cameralistip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/devices/devices.module#DevicesPageModule', name: 'DevicesPage', segment: 'devices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intrusion/intrusion.module#IntrusionPageModule', name: 'IntrusionPage', segment: 'intrusion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fire/fire.module#FirePageModule', name: 'FirePage', segment: 'fire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_fire__["a" /* AngularFireModule */].initializeApp(FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_devices_devices__["a" /* DevicesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_intrusion_intrusion__["a" /* IntrusionPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_access_access__["a" /* AccessPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_fire_fire__["a" /* FirePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cameralist_cameralist__["a" /* CameralistPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cameralistip_cameralistip__["a" /* CameralistipPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_camera__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intrusion_intrusion__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fire_fire__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__access_access__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevicesPage = /** @class */ (function () {
    function DevicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DevicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevicesPage');
    };
    DevicesPage.prototype.goToCamera = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__camera_camera__["a" /* CameraPage */]);
    };
    DevicesPage.prototype.goToAccess = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__access_access__["a" /* AccessPage */]);
    };
    DevicesPage.prototype.goToDetection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__intrusion_intrusion__["a" /* IntrusionPage */]);
    };
    DevicesPage.prototype.goToFire = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fire_fire__["a" /* FirePage */]);
    };
    DevicesPage.prototype.BackButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    var _a, _b;
    DevicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-devices',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/devices/devices.html"*/'<!--\n  Generated template for the DevicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton>\n        <ion-buttons left>\n            <button ion-button (click)="BackButton()">\n                <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Home</ion-title>\n        </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">Choose Device</div>\n  <br>\n\n  <ion-list no-lines text-center>\n    <ion-item class = "texter">\n      CSS/Surveillence\n      <button ion-button outline item-end (click) = "goToCamera()">Add Device</button>\n    </ion-item>\n    <ion-item class = "texter">\n      Fire Detection\n      <button ion-button outline item-end (click) = "goToFire()">Add Device</button>\n    </ion-item>\n    <ion-item class = "texter">\n      Access Control\n      <button ion-button outline item-end (click) = "goToAccess()">Add Device</button>\n    </ion-item>\n    <ion-item class = "texter">\n      Intrusion Detection\n      <button ion-button outline item-end (click) = "goToDetection()">Add Device</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/devices/devices.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _b : Object])
    ], DevicesPage);
    return DevicesPage;
}());

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import {Details} from '../models/details';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, navCtrl, navParams, fire, toast) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toast = toast;
        this.user = {};
        this.passwordType = 'password';
        this.passwordShown = false;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.user.email == null || this.user.password == null) {
            this.toast.create({
                message: 'Empty Email/Password!',
                duration: 3000,
                position: 'top',
                cssClass: 'texter'
            }).present();
        }
        else {
            this.fire.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
                .then(function (data) {
                console.log('Got data', _this.fire.auth.currentUser);
                console.log(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.emailVerified);
                if (__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.emailVerified == false) {
                    _this.toast.create({
                        message: 'Please Verify email first!',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'texter'
                    }).present();
                }
                else {
                    _this.toast.create({
                        message: 'Login successful!',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'texter'
                    }).present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], { 'data': _this.user });
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                //logged in
            })
                .catch(function (error) {
                console.log('Got an error', error);
                _this.toast.create({
                    message: 'Invalid Email/Password!',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'texter'
                }).present();
                //error
            });
        }
    };
    LoginPage.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    };
    LoginPage.prototype.resetpass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    LoginPage.prototype.signupPush = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    var _a, _b, _c, _d, _e;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center></ion-title>\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="signupPush()">\n        <p>Not A Member?</p>\n        <button default ion-button end round outline class="button2" (click) = "signupPush()" >Signup</button>\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <h1>"Security is everyone\'s concern...but it\'s our business!"</h1>\n  <ion-list>\n\n\n    <ion-item>\n      <ion-label floating text-center>Email</ion-label>\n      <ion-input type="text" [(ngModel)] = "user.email" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating text-center>Password</ion-label>\n      <ion-input [type]="passwordType" [(ngModel)] = "user.password" ></ion-input>\n      <ion-icon name="eye" [color]="grey" (click)="togglePassword()" item-right=""></ion-icon>\n    </ion-item>\n\n\n    <div class="loginButton">\n      <button ion-button round outline (click) = "login(user)">Login</button>\n      <button ion-button round outline (click) = "resetpass(user)">Reset Password</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" ? _e : Object])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cameralist_cameralist__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cameralistip_cameralistip__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CameraPage = /** @class */ (function () {
    function CameraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameraPage');
    };
    CameraPage.prototype.BackButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__devices_devices__["a" /* DevicesPage */]);
    };
    CameraPage.prototype.goToCameraList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cameralist_cameralist__["a" /* CameralistPage */]);
    };
    CameraPage.prototype.goToCameraListIp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cameralistip_cameralistip__["a" /* CameralistipPage */]);
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"/goinfre/ssekese/Desktop/Elvey/src/pages/camera/camera.html"*/'\n<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n       <ion-title>Back To Devices</ion-title>\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">CCTV/SURVEILLANCE</div>\n\n  <ion-list no-lines text-center>\n    <ion-item class = "texter">\n      HD Analogue Cameras\n      <button ion-button outline item-end (click) = "goToCameraList()">Add Device</button>\n    </ion-item>\n    <ion-item class = "texter">\n      IP Cameras\n      <button ion-button outline item-end (click) = "goToCameraListIp()">Add Device</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/ssekese/Desktop/Elvey/src/pages/camera/camera.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ })

},[297]);
//# sourceMappingURL=main.js.map