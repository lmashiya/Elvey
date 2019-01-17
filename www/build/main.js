webpackJsonp([12],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameralistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_camera__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setup_setup__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_datafinder__ = __webpack_require__(289);
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
    function CameralistPage(navCtrl, navParams, dataFinder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataFinder = dataFinder;
    }
    CameralistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataFinder.getJSONDataAsync("./assets/data/data.json").then(function (data) {
            _this.SetQueryOptionsData(data);
        });
    };
    /* Sets data with returned JSON array */
    CameralistPage.prototype.SetQueryOptionsData = function (data) {
        this.items = data.items;
    };
    CameralistPage.prototype.BackButtonCamera = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__camera_camera__["a" /* CameraPage */]);
    };
    // goToHome(item: any)
    // {
    //   this.navCtrl.push(HomePage)
    //   this.navCtrl.push(HomePage, {'data': item})
    // }
    CameralistPage.prototype.redirectToSetup = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__setup_setup__["a" /* SetupPage */], { 'data': item });
    };
    CameralistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cameralist',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/cameralist/cameralist.html"*/'<!--\n  Generated template for the CameralistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar >\n       <!-- <ion-buttons left>\n           <button ion-button (click)="BackButtonCamera()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons> -->\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center class="tester">\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">Choose device</div>\n\n  <ion-list *ngFor="let item of items" no-lines text-center >\n    \n      <ion-item class = "texter">\n          <img src="{{item.image}}" style="width:50px;height:50px;">\n          <p>{{ item.name }}</p>\n          <button ion-button round outline item-end (click) = "redirectToSetup(item)">Select</button>\n        </ion-item>\n  </ion-list>\n  </ion-content>\n  \n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/cameralist/cameralist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_datafinder__["a" /* DatafinderProvider */]])
    ], CameralistPage);
    return CameralistPage;
}());

//# sourceMappingURL=cameralist.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_sharedservice__ = __webpack_require__(169);
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
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetupPage = /** @class */ (function () {
    function SetupPage(navCtrl, navParams, app, sharedService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.sharedService = sharedService;
        this.addedItems = [];
    }
    SetupPage.prototype.ionViewDidLoad = function () {
        this.item = this.navParams.get('data');
        console.log(this.item);
    };
    SetupPage.prototype.addToDeviceList = function () {
        this.sharedService.devices.push(this.item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { 'deviceList': this.sharedService.devices });
    };
    var _a, _b, _c, _d;
    SetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setup',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/setup/setup.html"*/'<!--\n  Generated template for the SetupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Setup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center>\n    <div class="">\n        <div *ngIf="item" style="margin-top: 50px; margin-bottom: 50px;">\n            <img src="{{item.image}}" style="width:50px;height:50px;">\n          </div>\n          <div *ngIf="item">\n            <ion-item>\n              <ion-label text-center>IP Address: </ion-label>\n              <ion-input type="text" [(ngModel)]="item.params.ip"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label text-center>Camera Username: </ion-label>\n                <ion-input type="text" [(ngModel)]="item.params.username"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label text-center>Camera Password: </ion-label>\n                <ion-input type="password" [(ngModel)]="item.params.password"></ion-input>\n              </ion-item>\n          </div>\n\n          <div text-center>\n              <button ion-button round outline (click) = "addToDeviceList()">Finish</button>\n          </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/setup/setup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__models_sharedservice__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_sharedservice__["a" /* SharedService */]) === "function" ? _d : Object])
    ], SetupPage);
    return SetupPage;
}());

//# sourceMappingURL=setup.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameralistipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_camera__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(61);
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
        this.items = [
            { image: 'assets/imgs/2MP IR Mini-Bullet Network Camera.jpg', name: '2MP IR Mini-Bullet Network Camera' },
            { image: 'assets/imgs/2MP WDR IR Dome Network Vandal Dome Camera.jpg', name: '2MP WDR IR Dome Network Vandal Dome Camera' },
            { image: 'assets/imgs/4MP WDR IR Eyeball Network Camera.jpg', name: '4MP WDR IR Eyeball Network Camera' },
            { image: 'assets/imgs/4MP Motorized WDR IR Eyeball Network Camera.jpg', name: '4MP Motorized WDR IR Eyeball Network Camera' },
            { image: 'assets/imgs/2MP Starlight IR Eyeball Network Camera With Audio.jpg', name: '2MP Starlight IR Eyeball Network Camera With Audio' },
            { image: 'assets/imgs/2MP Starlight IR Eyeball Network Camera With Audio.jpg', name: '4MP IR Eyeball Network Camera With Audio' },
            { image: 'assets/imgs/2MP WDR IR Mini Bullet Network Camera.jpg', name: '2MP WDR IR Mini Bullet Network Camera' },
            { image: 'assets/imgs/2MP IR Eyeball Network Camera.png', name: '2MP IR Eyeball Network Camera' },
            { image: 'assets/imgs/2MP Motorized IR Eyeball Network Camera.jpg', name: '2MP Motorized IR Eyeball Network Camera' },
            { image: 'assets/imgs/2MP 30x Starlight IR PTZ Network Camera.jpg', name: '2MP 30x Starlight IR PTZ Network Camera' },
            { image: 'assets/imgs/4MP 30x IR PTZ Network Camera.jpg', name: '14MP 30x IR PTZ Network Camera' },
            { image: 'assets/imgs/2MP 20x IR PTZ Network Camera.jpg', name: '2MP 20x IR PTZ Network Camera' },
            { image: 'assets/imgs/2MP 20x IR PTZ Network Camera.jpg', name: '4MP 20x IR PTZ Network Camera' },
            { image: 'assets/imgs/4MP IR Eyeball Network Camera.jpg', name: '4MP IR Eyeball Network Camera' },
            { image: 'assets/imgs/4MP IR Eyeball Network Camera.jpg', name: '2MP IR Eyeball Network Camera' },
            { image: 'assets/imgs/4MP IR Vandal Dome Network Camera.jpg', name: '4MP IR Vandal Dome Network Camera' },
            { image: 'assets/imgs/4MP IR Vandal Dome Network Camera.jpg', name: '2MP IR Vandal Dome Network Camera' },
            { image: 'assets/imgs/2MP Fixed IR Bullet Network Camera.jpg', name: '2MP Fixed IR Bullet Network Camera' },
            { image: 'assets/imgs/2MP Fixed IR Bullet Network Camera.jpg', name: '4MP Fixed IR Bullet Network Camera' },
            { image: 'assets/imgs/2MP Motorized IR Bullet Network Camera.jpg', name: '2MP Motorized IR Bullet Network Camera' },
            { image: 'assets/imgs/2MP Motorized IR Bullet Network Camera.jpg', name: '4MP Motorized IR Bullet Network Camera' },
        ];
        //this.navCtrl.push(HomePage, {'data': this.items});
        console.log(this.items);
    }
    CameralistipPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameralistipPage');
    };
    CameralistipPage.prototype.BackButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__camera_camera__["a" /* CameraPage */]);
    };
    CameralistipPage.prototype.goToHome = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { 'data': item });
    };
    CameralistipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cameralistip',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/cameralistip/cameralistip.html"*/'<!--\n  Generated template for the CameralistipPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button round outline (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">IP Cameras</div>\n\n  <ion-list *ngFor="let item of items" no-lines text-center >\n    \n      <ion-item class = "texter">\n          <ion-img src="{{item.image}}" style="width:50px;height:50px;"></ion-img>\n          <p>{{ item.name }}</p>\n          <button ion-button round outline item-end (click) = "goToHome(item)">Add</button>\n        </ion-item>\n  </ion-list>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/cameralistip/cameralistip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CameralistipPage);
    return CameralistipPage;
}());

//# sourceMappingURL=cameralistip.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.devices = [];
    }
    return SharedService;
}());

//# sourceMappingURL=sharedservice.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(54);
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
            selector: 'page-access',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/access/access.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n    </ion-navbar>\n   </ion-header>\n   <ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">ACCESS CONTROL</div>\n\n  <ion-list no-lines text-center>\n        <ion-item class = "texter">\n          Boom Gates\n          <button ion-button outline item-end (click) = "goToDetection()">Add Device</button>\n        </ion-item>\n        <ion-item class = "texter">\n        Door Closers\n          <button ion-button outline item-end (click) = "goToAccess()">Add Device</button>\n        </ion-item>\n        <ion-item class = "texter">\n         Intercoms\n          <button ion-button outline item-end (click) = "goToDetection()">Add Device</button>\n        </ion-item>\n            <ion-item class = "texter">\n         Remotes and Receivers\n          <button ion-button outline item-end (click) = "goToCamera()">Add Device</button>\n        </ion-item>\n        <ion-item class = "texter">\n         Gate Motors and Accessories\n          <button ion-button outline item-end (click) = "goToFire()">Add Device</button>\n        </ion-item>\n        <ion-item class = "texter">\n          Request to Exit Buttons & Manual Call Points\n          <button ion-button outline item-end (click) = "goToFire()">Add Device</button>\n        </ion-item>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/access/access.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AccessPage);
    return AccessPage;
}());

//# sourceMappingURL=access.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(46);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */])
    ], SignupPage.prototype, "navBar", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar hideBackButton>\n     <ion-buttons left>\n         <button ion-button (click)="BackButton()">\n             <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n         </button>\n     </ion-buttons>\n  </ion-navbar>\n </ion-header>\n\n<ion-content padding text-center>\n\n  <img src="assets/imgs/elvey-extra-txt.png">\n    <h3 class="texter">"Providing Complete Peace of Mind"</h3>\n  <ion-list class="texter">\n\n    <ion-item >\n      <ion-label floating text-center>Email</ion-label>\n      <ion-input text-center type="text" [(ngModel)] = "user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating text-center>Password(enter at least 6 characters)</ion-label>\n      <ion-input\n\n     [(ngModel)]="user.password"\n      name="password"\n      type="password"\n      #password="ngModel"\n      [minlength]="6"\n      required\n     text-center>\n    </ion-input>\n    </ion-item>\n    <div class="signupButton" text-center>\n      <button ion-button round outline (click) = "signup(user)">Signup</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(46);
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
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/resetpassword/resetpassword.html"*/'<!--\n  Generated template for the ResetpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center padding>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating text-center>Email</ion-label>\n      <ion-input text-center type="text" [(ngModel)] = "user.email"></ion-input>\n    </ion-item>\n\n    <div class="resetButton" text-center style="margin-top: 10px;">\n      <button ion-button round outline (click) = "resetpass()">Reset Password</button>\n    </div>\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/resetpassword/resetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StreamPage = /** @class */ (function () {
    function StreamPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StreamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StreamPage');
    };
    StreamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stream',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/stream/stream.html"*/'<!--\n  Generated template for the StreamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Preview</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <div id="video"> -->\n    <!-- <p> <video id="video" src="http://192.168.0.120:554" autoplay="autoplay" width="740" height="480">  </video> </p> -->\n  <!-- </div> -->\n  <img src="./assets/imgs/censored.png" alt="Stream Not Found" style="margin-top: 100px;">\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/stream/stream.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StreamPage);
    return StreamPage;
}());

//# sourceMappingURL=stream.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntrusionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(54);
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
            selector: 'page-intrusion',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/intrusion/intrusion.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">INTRUSION DETECTION</div>\n  <ion-list no-lines text-center>\n        <ion-item class = "texter">\n              Detectors\n              <button ion-button outline item-end (click) = "goToFire()">Add Device</button>\n            </ion-item>\n          </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/intrusion/intrusion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], IntrusionPage);
    return IntrusionPage;
}());

//# sourceMappingURL=intrusion.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(54);
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
            selector: 'page-fire',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/fire/fire.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">FIRE INTRUSION</div>\n  <ion-list no-lines text-center>\n  <ion-item class = "texter">\n        Detectors\n        <button ion-button outline item-end (click) = "goToCamera()">Add Device</button>\n      </ion-item>\n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/fire/fire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FirePage);
    return FirePage;
}());

//# sourceMappingURL=fire.js.map

/***/ }),

/***/ 231:
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
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/access/access.module": [
		578,
		11
	],
	"../pages/camera/camera.module": [
		579,
		10
	],
	"../pages/cameralist/cameralist.module": [
		580,
		9
	],
	"../pages/cameralistip/cameralistip.module": [
		581,
		8
	],
	"../pages/devices/devices.module": [
		583,
		7
	],
	"../pages/fire/fire.module": [
		582,
		6
	],
	"../pages/intrusion/intrusion.module": [
		584,
		5
	],
	"../pages/login/login.module": [
		585,
		4
	],
	"../pages/resetpassword/resetpassword.module": [
		586,
		3
	],
	"../pages/setup/setup.module": [
		587,
		2
	],
	"../pages/signup/signup.module": [
		588,
		1
	],
	"../pages/stream/stream.module": [
		589,
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
webpackAsyncContext.id = 273;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(61);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
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
    function AboutPage(navCtrl, toast, app) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.app = app;
    }
    AboutPage.prototype.logout = function () {
        this.toast.create({
            message: 'Logout successful!',
            duration: 3000,
            position: 'top'
        }).present();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      About Elvey\n    </ion-title>\n      <div class="button-bottom" text-center>\n          <!--<button ion-button small round outline (click) = "logout()">LogOut</button>-->\n          <ion-icon style="float:right" height="40px" width="auto" ios="ios-log-out" md="md-log-out" (click) = "logout()" >LogOut</ion-icon>\n      </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p class="texter">\n    Elvey Security Technologies was established in 1946 \n    and is proud to be one of the leading distributors of \n    electronic security equipment in Africa. Our vision is \n    to assist in the protection of people and property by \n    providing quality innovative products and solutions to \n    the electronic security industry, thereby ensuring a \n    safe and secure future for all.\n\n</p>\n<p class="texter"><b> Industry: </b></p>\n<p class="texter">Security and Investigations</p>\n<p class="texter"><b>Company size:</b></p>\n<p class="texter"> 201-500 employees</p>\n<p class="texter"><b>Headquarters:</b></p>\n<p class="texter">Johannesburg, Gauteng</p>\n<p class="texter"><b>Type:</b></p>\n<p class="texter"> Public Company</p>\n<p class="texter"><b>Founded:</b></p>\n<p class="texter">1946</p>\n<p class="texter"><b>Specialities:</b></p>\n<p class="texter">\n  Intruder Detection, Outdoor & Perimeter detectors, Wireless/ Hardwired \n  and Hybrid Alarm Systems, Alarm Communicators, \n  Control Room Equipment, Analog & IP Cameras, Access Control Equipment,\n   Digital Video Recorders, Network Video redcorders, and Fire Control panels.\n  </p>\n  <p class="texter">To find More about the company, please go the the contact Page and follow links provided.</p>\n  <p class="texter"><b><i>ELVEY<br />Prividing Complete Peace of Mind!</i></b></p>\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
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
    function ContactPage(navCtrl, toast, app) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.app = app;
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
    ContactPage.prototype.logout = function () {
        this.toast.create({
            message: 'Logout successful!',
            duration: 3000,
            position: 'top'
        }).present();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Contact Us\n    </ion-title>\n      <div class="button-bottom" text-center>\n          <!--<button ion-button small round outline (click) = "logout()">LogOut</button>-->\n          <ion-icon style="float:right" height="40px" width="auto" ios="ios-log-out" md="md-log-out" (click) = "logout()" >LogOut</ion-icon>\n      </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tester">\n  <ion-list>\n    <ion-list-header class="texter">Follow us on the following platforms:</ion-list-header>\n    <ion-item class="tester">\n      <ion-icon name="ionic" item-start></ion-icon>\n      <b class="texter">Our Official Website:</b>\n      <p><a href=\'#\' (click)="goToWebsite()">http://www.elvey.co.za</a></p>\n    </ion-item>\n    <ion-item class="tester">\n        <ion-icon name="ionic" item-start></ion-icon>\n        <b class="texter">Our Address:</b>\n        <p class="texter">27 GreenStone PI</p>\n        <p class="texter">Modderfontein</p>\n        <p class="texter">Lethabong</p>\n        <p class="texter">1609</p>\n      </ion-item>\n      <ion-item class="tester">\n          <ion-icon name="ionic" item-start></ion-icon>\n         <b class="texter">Or Contact Us On:</b>\n          <p class="texter">(011) 401 6700</p>\n        </ion-item>\n        <ion-item class="tester">\n            <ion-icon name="ionic" item-start></ion-icon>\n          <b class="texter">Follow us on:</b>\n\n          <p>\n              <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                        <button ion-button clear (click)="goToTwitter()"><img src="assets/imgs/twt.png"></button>\n                      </ion-col>\n                      <ion-col>\n      \n                        <button ion-button clear (click)="goToFacebook()"><img src="assets/imgs/fbbtn.png"></button>\n                      </ion-col>\n                      <ion-col>\n                        <button ion-button clear (click)="goToLinkedIn()"><img src="assets/imgs/li.png"></button>\n                      </ion-col>\n                      <ion-col>\n                        <button ion-button clear (click)="goToYouTube()"> <img src="assets/imgs/ut.png"></button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n          </p>\n          </ion-item>\n          \n          \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatafinderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the DatafinderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatafinderProvider = /** @class */ (function () {
    function DatafinderProvider(http) {
        this.http = http;
    }
    DatafinderProvider.prototype.getJSONDataAsync = function (filePath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(filePath)
                .subscribe(function (result) {
                if (!result.ok) {
                    reject("Failed with status: " + result.status + "\nTrying to find file at " + filePath);
                }
                var jsonResult = result.json();
                resolve(jsonResult);
            });
        }).catch(function (reason) { return _this.handleError(reason); });
    };
    DatafinderProvider.prototype.handleError = function (error) {
        var errorMessage;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = JSON.stringify(body);
            errorMessage = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    DatafinderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DatafinderProvider);
    return DatafinderProvider;
}());

//# sourceMappingURL=datafinder.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(453);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_resetpassword_resetpassword__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_devices_devices__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_camera_camera__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_fire_fire__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_access_access__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_intrusion_intrusion__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cameralist_cameralist__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cameralistip_cameralistip__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_transfer__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_setup_setup__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_datafinder__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__models_sharedservice__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_stream_stream__ = __webpack_require__(196);
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
                __WEBPACK_IMPORTED_MODULE_29__pages_setup_setup__["a" /* SetupPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_stream_stream__["a" /* StreamPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/access/access.module#AccessPageModule', name: 'AccessPage', segment: 'access', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cameralist/cameralist.module#CameralistPageModule', name: 'CameralistPage', segment: 'cameralist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cameralistip/cameralistip.module#CameralistipPageModule', name: 'CameralistipPage', segment: 'cameralistip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fire/fire.module#FirePageModule', name: 'FirePage', segment: 'fire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/devices/devices.module#DevicesPageModule', name: 'DevicesPage', segment: 'devices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intrusion/intrusion.module#IntrusionPageModule', name: 'IntrusionPage', segment: 'intrusion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setup/setup.module#SetupPageModule', name: 'SetupPage', segment: 'setup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stream/stream.module#StreamPageModule', name: 'StreamPage', segment: 'stream', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_fire__["a" /* AngularFireModule */].initializeApp(FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_http__["b" /* HttpModule */]
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
                __WEBPACK_IMPORTED_MODULE_29__pages_setup_setup__["a" /* SetupPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_stream_stream__["a" /* StreamPage */]
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_datafinder__["a" /* DatafinderProvider */],
                __WEBPACK_IMPORTED_MODULE_32__models_sharedservice__["a" /* SharedService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__ = __webpack_require__(195);
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], { 'data': data });
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title text-center>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <h3 class="texter">"Providing Complete Peace of Mind"</h3>\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input text-center type="text" placeholder="Email" name="email" [(ngModel)] = "user.email" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input text-center type="password" placeholder="Password" name="password" [(ngModel)] = "user.password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n        <ion-grid>\n            <ion-row>\n                <ion-col text-center>\n                    <button ion-button round outline (click) = "login(user)">Login</button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col text-center>\n                      <button ion-button round outline (click) = "resetpass(user)">Reset Password</button>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col text-center>\n                        <button ion-button round outline class="register-btn" (click) = "signupPush()" >Create New Account</button>\n                    </ion-col>\n                  </ion-row>\n        </ion-grid>\n    </form>\n  </div>\n\n  </ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_camera__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intrusion_intrusion__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fire_fire__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__access_access__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(61);
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
    DevicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-devices',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/devices/devices.html"*/'<!--\n  Generated template for the DevicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar >\n        <!-- <ion-buttons left>\n          hideBackButton\n            <button ion-button (click)="BackButton()">\n                <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons> -->\n      </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <!-- <div id="welcome_text" class="after_logo">Select system</div> -->\n  <br>\n\n  <ion-list no-lines text-center>\n    <ion-item class = "texter">\n      CCTV/Surveillance\n      <button ion-button round outline item-end (click) = "goToCamera()">Add Device</button>\n    </ion-item>\n    <ion-item class = "texter">\n      Fire Detection\n      <button ion-button round outline item-end (click) = "goToFire()" disabled>Add Device</button>\n    </ion-item>\n    <ion-item class = "texter">\n      Access Control\n      <button ion-button round outline item-end (click) = "goToAccess()" disabled>Add Device</button>\n    </ion-item>\n    <ion-item class = "texter">\n      Intrusion Detection\n      <button ion-button round outline item-end (click) = "goToDetection()" disabled>Add Device</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/devices/devices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DevicesPage);
    return DevicesPage;
}());

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cameralist_cameralist__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cameralistip_cameralistip__ = __webpack_require__(114);
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
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pages =
                [
                    { title: 'Devices', component: __WEBPACK_IMPORTED_MODULE_5__pages_cameralist_cameralist__["a" /* CameralistPage */] },
                    { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_6__pages_cameralistip_cameralistip__["a" /* CameralistipPage */] },
                    { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__pages_cameralistip_cameralistip__["a" /* CameralistipPage */] },
                    { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_6__pages_cameralistip_cameralistip__["a" /* CameralistipPage */] },
                ];
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/app/app.html"*/'\n<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuclose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_sharedservice__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setup_setup__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stream_stream__ = __webpack_require__(196);
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
    function HomePage(fire, navCtrl, navParams, toast, app, sharedService) {
        //receiving data from other pages
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.app = app;
        this.sharedService = sharedService;
        //Device list has to be pulled from database
        this.deviceList = this.navParams.get('deviceList');
        if (!this.deviceList) {
            this.deviceList = sharedService.devices;
        }
        //  console.log(this.deviceList);
    }
    HomePage.prototype.logout = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.add_device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__devices_devices__["a" /* DevicesPage */]);
    };
    HomePage.prototype.configureDevice = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__setup_setup__["a" /* SetupPage */], { 'data': item });
        console.log("Configure");
    };
    HomePage.prototype.streamFromDevice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__stream_stream__["a" /* StreamPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n      <ion-title text-center>\n        Home\n      </ion-title>\n        <div class="button-bottom">\n            <!--<button ion-button small round outline (click) = "logout()">LogOut</button>-->\n            <!-- <ion-icon ios="ios-log-out" md="md-log-out" (click) = "logout()" >LogOut</ion-icon> -->\n            <ion-icon name="log-out" (click) = "logout()" style="margin-right: 20px;"></ion-icon>\n        </div>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">WELCOME</div>\n<ng-container text-center>\n    <ion-row justify-content-center align-items-center >\n<!-- <ion-card style="width:100px;height:100px;" align-items-center justify-content-center>\n      <img src="assets/imgs/placeholder.png" />\n      <p>{{recd}}</p>\n</ion-card> -->\n\n    </ion-row>\n</ng-container>\n    <!-- <div *ngIf="recd">\n        <ion-img src="{{recd.image}}" style="width:50px;height:50px;"></ion-img>\n        <p>{{recd.name}}</p>\n        <button ion-button (click) = "Feed()">Access Device</button>\n    </div> -->\n\n    <ion-list *ngFor="let item of deviceList" no-lines text-center >\n        <ion-item class = "texter">\n            <img src="{{item.image}}" style="width:50px;height:50px;">\n            <ion-icon name="construct" style="margin-top: 10px;" (click)="configureDevice(item)"></ion-icon>\n            <ion-icon name="play" style="margin-top: 10px; margin-right: 10px;" (click)="streamFromDevice()"></ion-icon>\n            <p>{{ item.name }}</p>\n            <!-- <button ion-button outline item-end (click) = "redirectToSetup(item)">Add Device</button> -->\n        </ion-item>\n    </ion-list>\n\n    <div *ngIf="deviceList.length == 0;">\n        <p text-center>\n            <b> Hello, <br>\n            Welcome to Elvey Central Control Panel. <br>\n            Get started by connecting your system.\n        </b>\n        </p>\n    </div>\n    <div text-center style="margin-top: 50px;">\n        <button ion-button round outline (click) = "add_device()">Add System</button>\n    </div>\n  </ion-content>\n  \n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5__models_sharedservice__["a" /* SharedService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cameralist_cameralist__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cameralistip_cameralistip__ = __webpack_require__(114);
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
    function CameraPage(navCtrl, navParams, toast, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.app = app;
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
            selector: 'page-camera',template:/*ion-inline-start:"/goinfre/wphokomp/Documents/Elvey/src/pages/camera/camera.html"*/'\n<ion-header>\n    <ion-navbar hideBackButton>\n       <ion-buttons left>\n           <button ion-button (click)="BackButton()">\n               <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n           </button>\n       </ion-buttons>\n    </ion-navbar>\n   </ion-header>\n<ion-content padding text-center>\n  <img src="assets/imgs/elvey-extra-txt.png">\n  <div id="welcome_text" class="after_logo">CCTV/SURVEILLANCE</div>\n\n  <ion-list no-lines text-center>\n    <ion-item class = "texter">\n      HD Analogue Cameras\n      <button ion-button round outline item-end (click) = "goToCameraListIp()" disabled>Select</button>\n    </ion-item>\n    <ion-item class = "texter">\n      IP Cameras\n      <button ion-button round outline item-end (click) = "goToCameraList()">Select</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/goinfre/wphokomp/Documents/Elvey/src/pages/camera/camera.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ })

},[339]);
//# sourceMappingURL=main.js.map