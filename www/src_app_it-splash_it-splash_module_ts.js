(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["src_app_it-splash_it-splash_module_ts"],{

/***/ 1896:
/*!***********************************************!*\
  !*** ./src/app/it-splash/it-splash.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": () => (/* binding */ SplashPageModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _it_splash_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-splash.page.component */ 8504);
/* harmony import */ var _it_splash_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-splash.routing.module */ 1501);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5002);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 830);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 4236);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);













const routes = [
    {
        path: "",
        component: _it_splash_page_component__WEBPACK_IMPORTED_MODULE_0__.SplashPageComponent,
    },
];
/**
 * MODULES
 */
const MODULES = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
    _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
    _it_splash_routing_module__WEBPACK_IMPORTED_MODULE_1__.SplashPageRoutingModule,
    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot({
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient],
        },
    }),
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_splash_page_component__WEBPACK_IMPORTED_MODULE_0__.SplashPageComponent, // SplashPageComponent
];
/**
 * PROVIDERS
 */
const PROVIDERS = [_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService];
/**
 * Ng module
 */
let SplashPageModule = class SplashPageModule {
};
SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], SplashPageModule);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http, "i18n/", ".json");
}


/***/ }),

/***/ 8504:
/*!*******************************************************!*\
  !*** ./src/app/it-splash/it-splash.page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageComponent": () => (/* binding */ SplashPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_it_splash_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./it-splash.page.component.html */ 6646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 4236);





let SplashPageComponent = class SplashPageComponent {
    constructor(router, _translate) {
        this.router = router;
        this._translate = _translate;
    }
    ngOnInit() {
        this.initTranslate();
    }
    initTranslate() {
        // Set the default language for translation strings, and the current language.
        this._translate.setDefaultLang('hi');
        // if (this._translate.getBrowserLang() !== undefined) {
        //   this._translate.use(this._translate.getBrowserLang());
        // } else {
        //   this._translate.use("hi"); // Set your language here
        // }
    }
};
SplashPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService }
];
SplashPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash',
        template: _raw_loader_it_splash_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], SplashPageComponent);



/***/ }),

/***/ 1501:
/*!*******************************************************!*\
  !*** ./src/app/it-splash/it-splash.routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": () => (/* binding */ SplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _it_splash_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-splash.page.component */ 8504);

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_splash_page_component__WEBPACK_IMPORTED_MODULE_0__.SplashPageComponent, // component
    },
];
/**
 * Ng module
 */
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], // exports
    })
    /**
     * SplashPageRoutingModule
     */
], SplashPageRoutingModule);



/***/ }),

/***/ 6646:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-splash/it-splash.page.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <!-- Osahan Index -->\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      d-flex\r\n      align-items-center\r\n      justify-content-center\r\n      vh-100\r\n      index-page\r\n    \"\r\n  >\r\n    <div class=\"text-center\">\r\n      <a routerLink=\"/get-started\">\r\n        <fa-icon\r\n          icon=\"truck\"\r\n          class=\"text-white display-1 bg-purple p-4 rounded-circle\"\r\n        ></fa-icon></a\r\n      ><br />\r\n      <div class=\"spinner\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"osahan-fotter fixed-bottom m-3\">\r\n    <a\r\n      class=\"\r\n        btn btn-block\r\n        px-4\r\n        py-3\r\n        d-flex\r\n        align-items-center\r\n        osahanbus-btlan\r\n        btn-purple\r\n        shadow\r\n      \"\r\n      routerLink=\"/get-started\"\r\n    >\r\n      GET STARTED\r\n      <fa-icon\r\n        icon=\"arrow-right\"\r\n        class=\"text-white splash-arrow-right\"\r\n      ></fa-icon>\r\n    </a>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_it-splash_it-splash_module_ts.js.map