(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["src_app_it-verification_it-verification_module_ts"],{

/***/ 1472:
/*!***********************************************************!*\
  !*** ./src/app/it-verification/it-verification.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageModule": () => (/* binding */ VerificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _it_verification_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-verification.page.component */ 2782);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5002);
/* harmony import */ var _it_verification_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-verification.routing.module */ 5239);









const routes = [
    {
        path: "",
        component: _it_verification_page_component__WEBPACK_IMPORTED_MODULE_0__.VerificationPageComponent,
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
    _it_verification_routing_module__WEBPACK_IMPORTED_MODULE_1__.VerificationPageRoutingModule, // VerificationPageRoutingModule
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_verification_page_component__WEBPACK_IMPORTED_MODULE_0__.VerificationPageComponent, // VerificationPageComponent
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule,
        ],
        declarations: [_it_verification_page_component__WEBPACK_IMPORTED_MODULE_0__.VerificationPageComponent],
    })
], VerificationPageModule);



/***/ }),

/***/ 2782:
/*!*******************************************************************!*\
  !*** ./src/app/it-verification/it-verification.page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageComponent": () => (/* binding */ VerificationPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_it_verification_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./it-verification.page.component.html */ 4673);
/* harmony import */ var _it_verification_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-verification.page.component.scss */ 9142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let VerificationPageComponent = class VerificationPageComponent {
    constructor() { }
    ngOnInit() { }
};
VerificationPageComponent.ctorParameters = () => [];
VerificationPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-verification",
        template: _raw_loader_it_verification_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_it_verification_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VerificationPageComponent);



/***/ }),

/***/ 5239:
/*!*******************************************************************!*\
  !*** ./src/app/it-verification/it-verification.routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageRoutingModule": () => (/* binding */ VerificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _it_verification_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-verification.page.component */ 2782);

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_verification_page_component__WEBPACK_IMPORTED_MODULE_0__.VerificationPageComponent, // component
    },
];
/**
 * Ng module
 */
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], // exports
    })
    /**
     * VerificationPageRoutingModule
     */
], VerificationPageRoutingModule);



/***/ }),

/***/ 9142:
/*!*********************************************************************!*\
  !*** ./src/app/it-verification/it-verification.page.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Verification */\n.opt {\n  border: 1px solid #dc3545 !important;\n  border-radius: 6px;\n  font-size: 46px;\n  font-weight: 700;\n  padding: 0px;\n}\n#verificationModal img {\n  height: 80px;\n}\nh1.success-icon {\n  font-size: 80px !important;\n  color: #5bc550;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0LXZlcmlmaWNhdGlvbi5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0FBRUY7QUFBQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQUdGIiwiZmlsZSI6Iml0LXZlcmlmaWNhdGlvbi5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVmVyaWZpY2F0aW9uICovXHJcbi5vcHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbiN2ZXJpZmljYXRpb25Nb2RhbCBpbWcge1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5oMS5zdWNjZXNzLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogODBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNWJjNTUwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 4673:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-verification/it-verification.page.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div\r\n      class=\"\r\n        osahan-header-nav\r\n        shadow-sm\r\n        p-3\r\n        d-flex\r\n        align-items-center\r\n        bg-purple\r\n      \"\r\n    >\r\n      <h5 class=\"font-weight-normal mb-0 text-white\">\r\n        <a class=\"text-purple\" routerLink=\"/get-started\"\r\n          ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n        ></a>\r\n        <ion-title>Verification</ion-title>\r\n      </h5>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <!-- <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <div\r\n        class=\"\r\n          osahan-header-nav\r\n          shadow-sm\r\n          p-3\r\n          d-flex\r\n          align-items-center\r\n          bg-purple\r\n        \"\r\n      >\r\n        <h5 class=\"font-weight-normal mb-0 text-white\">\r\n          <a class=\"text-purple\" routerLink=\"/get-started\"\r\n            ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n          ></a>\r\n          <ion-title>Verification</ion-title>\r\n        </h5>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  <div\r\n    class=\"\r\n      osahan-index\r\n      bg-c\r\n      d-flex\r\n      align-items-center\r\n      justify-content-center\r\n      vh-80\r\n      index-page\r\n    \"\r\n  >\r\n    <div class=\"osahan-form px-3 py-5 text-center mb-5\">\r\n      <div class=\"row my-5 px-3 pb-2\">\r\n        <div class=\"col px-1\">\r\n          <input\r\n            type=\"number\"\r\n            value=\"1\"\r\n            class=\"\r\n              form-control\r\n              otp\r\n              text-purple\r\n              form-control-lg\r\n              text-center\r\n              pb-0\r\n              px-0\r\n            \"\r\n          />\r\n        </div>\r\n        <div class=\"col px-1\">\r\n          <input\r\n            type=\"number\"\r\n            value=\"3\"\r\n            class=\"\r\n              form-control\r\n              otp\r\n              text-purple\r\n              form-control-lg\r\n              text-center\r\n              pb-0\r\n              px-0\r\n            \"\r\n          />\r\n        </div>\r\n        <div class=\"col px-1\">\r\n          <input\r\n            type=\"number\"\r\n            value=\"1\"\r\n            class=\"\r\n              form-control\r\n              otp\r\n              text-purple\r\n              form-control-lg\r\n              text-center\r\n              pb-0\r\n              px-0\r\n            \"\r\n          />\r\n        </div>\r\n        <div class=\"col px-1\">\r\n          <input\r\n            type=\"number\"\r\n            value=\"3\"\r\n            class=\"\r\n              form-control\r\n              otp\r\n              text-purple\r\n              form-control-lg\r\n              text-center\r\n              pb-0\r\n              px-0\r\n            \"\r\n          />\r\n        </div>\r\n      </div>\r\n      <button\r\n        type=\"submit\"\r\n        name=\"submit_button\"\r\n        class=\"btn btn-purple btn-block osahanbus-btn mb-4\"\r\n        routerLink=\"/payment\"\r\n      >\r\n        VERIFICATION\r\n      </button>\r\n      <p class=\"text-muted\">\r\n        Didn't receive code?<a href=\"#\" class=\"ml-2 text-orange\">Resend</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_it-verification_it-verification_module_ts.js.map