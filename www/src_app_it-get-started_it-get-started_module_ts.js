(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["src_app_it-get-started_it-get-started_module_ts"],{

/***/ 427:
/*!*********************************************************!*\
  !*** ./src/app/it-get-started/it-get-started.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedPageModule": () => (/* binding */ GetStartedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-get-started.page.component */ 8408);
/* harmony import */ var _it_get_started_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-get-started.routing.module */ 5957);








const routes = [
    {
        path: "",
        component: _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_0__.GetStartedPageComponent,
    },
];
/**
 * MODULES
 */
const MODULES = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
    _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
    _it_get_started_routing_module__WEBPACK_IMPORTED_MODULE_1__.GetStartedPageRoutingModule, // MANIFEST CHECK ROUTING MODULE
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_0__.GetStartedPageComponent, // MANIFEST CHECK COMPONENT
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let GetStartedPageModule = class GetStartedPageModule {
};
GetStartedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], GetStartedPageModule);



/***/ }),

/***/ 8408:
/*!*****************************************************************!*\
  !*** ./src/app/it-get-started/it-get-started.page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedPageComponent": () => (/* binding */ GetStartedPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_it_get_started_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./it-get-started.page.component.html */ 9331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let GetStartedPageComponent = class GetStartedPageComponent {
    constructor() { }
    ngOnInit() { }
};
GetStartedPageComponent.ctorParameters = () => [];
GetStartedPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-get-started',
        template: _raw_loader_it_get_started_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
    })
], GetStartedPageComponent);



/***/ }),

/***/ 5957:
/*!*****************************************************************!*\
  !*** ./src/app/it-get-started/it-get-started.routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedPageRoutingModule": () => (/* binding */ GetStartedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-get-started.page.component */ 8408);

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_get_started_page_component__WEBPACK_IMPORTED_MODULE_0__.GetStartedPageComponent, // component
    },
];
/**
 * Ng module
 */
let GetStartedPageRoutingModule = class GetStartedPageRoutingModule {
};
GetStartedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], // exports
    })
    /**
     * GetStartedPageRoutingModule
     */
], GetStartedPageRoutingModule);



/***/ }),

/***/ 9331:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-get-started/it-get-started.page.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <!-- Osahan Started -->\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      d-flex\r\n      align-items-center\r\n      justify-content-center\r\n      vh-100\r\n      index-page\r\n    \"\r\n  >\r\n    <div class=\"py-4 d-flex align-items-center justify-content-center\">\r\n      <div class=\"osahan-started pt-2 text-center\">\r\n        <img\r\n          src=\"assets/img/sign-in-pana.svg\"\r\n          class=\"img-fluid mb-2 col-9 mx-auto\"\r\n        />\r\n        <div class=\"head py-4 px-4 text-center\">\r\n          <h5 class=\"font-weight-bold mb-4\">Start by creating an account.</h5>\r\n          <p class=\"text-muted\">\r\n            I'm an early bird and I'm night owl so I'm<br />wise and I have\r\n            worms.\r\n          </p>\r\n        </div>\r\n        <div class=\"fixed-bottom p-4\">\r\n          <a\r\n            routerLink=\"/select-language\"\r\n            class=\"btn btn-block mb-3 osahanbus-btn btn-purple\"\r\n            >CREATE AN ACCOUNT</a\r\n          >\r\n          <a routerLink=\"/signin\" class=\"btn btn-block btn-white osahanbus-btn\"\r\n            >SIGN IN</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_it-get-started_it-get-started_module_ts.js.map