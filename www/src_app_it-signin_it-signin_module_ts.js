(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["src_app_it-signin_it-signin_module_ts"],{

/***/ 4206:
/*!***********************************************!*\
  !*** ./src/app/it-signin/it-signin.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageModule": () => (/* binding */ SignInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _it_signin_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-signin.page.component */ 4724);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5002);
/* harmony import */ var _it_signin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-signin.routing.module */ 5567);









const routes = [
    {
        path: "",
        component: _it_signin_page_component__WEBPACK_IMPORTED_MODULE_0__.SignInPageComponent,
    },
];
/**
 * MODULES
 */
const MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule,
    _it_signin_routing_module__WEBPACK_IMPORTED_MODULE_1__.SignInPageRoutingModule, // SignInPageRoutingModule
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_signin_page_component__WEBPACK_IMPORTED_MODULE_0__.SignInPageComponent, // SignInPageComponent
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let SignInPageModule = class SignInPageModule {
};
SignInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], SignInPageModule);



/***/ }),

/***/ 4724:
/*!*******************************************************!*\
  !*** ./src/app/it-signin/it-signin.page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageComponent": () => (/* binding */ SignInPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_it_signin_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./it-signin.page.component.html */ 4787);
/* harmony import */ var _it_signin_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-signin.page.component.scss */ 3610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let SignInPageComponent = class SignInPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    signIn() {
        this.router.navigate(["/verification"]);
    }
};
SignInPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SignInPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-signin",
        template: _raw_loader_it_signin_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_it_signin_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignInPageComponent);



/***/ }),

/***/ 5567:
/*!*******************************************************!*\
  !*** ./src/app/it-signin/it-signin.routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageRoutingModule": () => (/* binding */ SignInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _it_signin_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-signin.page.component */ 4724);

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_signin_page_component__WEBPACK_IMPORTED_MODULE_0__.SignInPageComponent, // component
    },
];
/**
 * Ng module
 */
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], // exports
    })
    /**
     * SignInPageRoutingModule
     */
], SignInPageRoutingModule);



/***/ }),

/***/ 3610:
/*!*********************************************************!*\
  !*** ./src/app/it-signin/it-signin.page.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0LXNpZ25pbi5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFBQSxXQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFHRiIsImZpbGUiOiJpdC1zaWduaW4ucGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1dHRvbiBTdHlsZXMgKi9cclxuLmdvb2dsZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTA3Y2MwO1xyXG4gIGNvbG9yOiAjNTA3Y2MwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZiLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICNkZjQ5MzA7XHJcbiAgY29sb3I6ICNkZjQ5MzAgIWltcG9ydGFudDtcclxufVxyXG4vKiBTaWduaW4gKi9cclxuLnNpZ24tb3IgaHIge1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 4787:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-signin/it-signin.page.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\" routerLink=\"/get-started\"\r\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n      ></a>\r\n      <ion-title>Sign In</ion-title>\r\n    </h5>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <!-- <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <div\r\n        class=\"\r\n          osahan-header-nav\r\n          shadow-sm\r\n          p-3\r\n          d-flex\r\n          align-items-center\r\n          bg-purple\r\n        \"\r\n      >\r\n        <h5 class=\"font-weight-normal mb-0 text-white\">\r\n          <a class=\"text-purple\" routerLink=\"/get-started\"\r\n            ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n          ></a>\r\n          <ion-title>Sign In</ion-title>\r\n        </h5>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      d-flex\r\n      align-items-center\r\n      justify-content-center\r\n      vh-80\r\n      index-page\r\n    \"\r\n  >\r\n    <div class=\"osahan-form px-3\">\r\n      <ion-list>\r\n        <div class=\"form-group mb-2\">\r\n          <ion-label class=\"text-muted mb-1\">Mobile Number</ion-label>\r\n          <ion-input\r\n            class=\"form-control rc-form-control mt-2\"\r\n            name=\"mobileNumber\"\r\n          ></ion-input>\r\n        </div>\r\n      </ion-list>\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-purple btn-block osahanbus-btn mb-3 rounded-1 mt-3\"\r\n        slot=\"end\"\r\n        fill=\"clear\"\r\n        (click)=\"signIn()\"\r\n      >\r\n        SIGN IN\r\n      </button>\r\n      <div\r\n        class=\"sign-or d-flex align-items-center justify-content-center mb-4\"\r\n      >\r\n        <hr class=\"mr-4\" />\r\n        <p class=\"text-muted text-center py-2 m-0\">OR</p>\r\n        <hr class=\"ml-4\" />\r\n      </div>\r\n      <div class=\"osahan-signin text-center text-purple p-1\">\r\n        <p class=\"m-0\">\r\n          Not a member ?\r\n          <a routerLink=\"/signup\" class=\"text-orange ml-2\">Sign Up</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_it-signin_it-signin_module_ts.js.map