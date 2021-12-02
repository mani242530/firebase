(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["src_app_it-select-language_it-select-language_module_ts"],{

/***/ 431:
/*!*****************************************************************!*\
  !*** ./src/app/it-select-language/it-select-language.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLanguagePageModule": () => (/* binding */ SelectLanguagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-select-language.page.component */ 7658);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5002);
/* harmony import */ var _it_select_language_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-select-language.page.routing.module */ 1241);









const routes = [
    {
        path: "",
        component: _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_0__.SelectLanguagePageComponent,
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
    _it_select_language_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.SelectLanguagePageRoutingModule, // SelectLanguagePageRoutingModule
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_0__.SelectLanguagePageComponent, // SelectLanguagePageComponent
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let SelectLanguagePageModule = class SelectLanguagePageModule {
};
SelectLanguagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], SelectLanguagePageModule);



/***/ }),

/***/ 7658:
/*!*************************************************************************!*\
  !*** ./src/app/it-select-language/it-select-language.page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLanguagePageComponent": () => (/* binding */ SelectLanguagePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_it_select_language_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./it-select-language.page.component.html */ 9542);
/* harmony import */ var _it_select_language_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-select-language.page.component.scss */ 2056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SelectLanguagePageComponent = class SelectLanguagePageComponent {
    constructor() {
        this.languages = [
            "ENGLISH",
            "HINDI",
            "TAMIL",
            "TELUGU",
            "GUJARATI",
            "MARATI",
            "KANADA",
            "MALAYALAM",
        ];
    }
    ngOnInit() { }
};
SelectLanguagePageComponent.ctorParameters = () => [];
SelectLanguagePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-select-language",
        template: _raw_loader_it_select_language_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_it_select_language_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectLanguagePageComponent);



/***/ }),

/***/ 1241:
/*!******************************************************************************!*\
  !*** ./src/app/it-select-language/it-select-language.page.routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLanguagePageRoutingModule": () => (/* binding */ SelectLanguagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-select-language.page.component */ 7658);

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_select_language_page_component__WEBPACK_IMPORTED_MODULE_0__.SelectLanguagePageComponent, // component
    },
];
/**
 * Ng module
 */
let SelectLanguagePageRoutingModule = class SelectLanguagePageRoutingModule {
};
SelectLanguagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], // exports
    })
    /**
     * SelectLanguagePageRoutingModule
     */
], SelectLanguagePageRoutingModule);



/***/ }),

/***/ 2056:
/*!***************************************************************************!*\
  !*** ./src/app/it-select-language/it-select-language.page.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0LXNlbGVjdC1sYW5ndWFnZS5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFBQSxXQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUFHRiIsImZpbGUiOiJpdC1zZWxlY3QtbGFuZ3VhZ2UucGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1dHRvbiBTdHlsZXMgKi9cclxuLmdvb2dsZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTA3Y2MwO1xyXG4gIGNvbG9yOiAjNTA3Y2MwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZiLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICNkZjQ5MzA7XHJcbiAgY29sb3I6ICNkZjQ5MzAgIWltcG9ydGFudDtcclxufVxyXG4vKiBTaWduaW4gKi9cclxuLnNpZ24tb3IgaHIge1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 9542:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-select-language/it-select-language.page.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div\r\n      class=\"\r\n        osahan-header-nav\r\n        shadow-sm\r\n        p-3\r\n        d-flex\r\n        align-items-center\r\n        bg-purple\r\n      \"\r\n    >\r\n      <h5 class=\"font-weight-normal mb-0 text-white\">\r\n        <a class=\"text-purple\" routerLink=\"/get-started\"\r\n          ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n        ></a>\r\n        <ion-title>Language</ion-title>\r\n      </h5>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <div class=\"osahan-listing p-0 m-0 row border-top\">\r\n    <div class=\"p-3 border-bottom w-100 text-center\">\r\n      <div class=\"bg-white border border-warning rounded-1 shadow-sm p-2\">\r\n        <div class=\"row mx-0 px-1\">\r\n          <div class=\"col-12 p-0\">\r\n            <p class=\"small mb-0\">CHOOSE YOUR LANGUAGE</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col\r\n          size=\"6\"\r\n          margin\r\n          routerLink=\"/signup\"\r\n          class=\"text-dark px-0\"\r\n          *ngFor=\"let language of languages\"\r\n        >\r\n          <div\r\n            class=\"\r\n              list_item_gird\r\n              m-0\r\n              bg-white\r\n              shadow-sm\r\n              listing-item\r\n              border-bottom border-right\r\n            \"\r\n          >\r\n            <div class=\"px-3 pt-3 tic-div\">\r\n              <div class=\"list-item-img\">\r\n                <img src=\"assets/img/listing/item1.png\" class=\"img-fluid\" />\r\n              </div>\r\n              <p class=\"mb-0 l-hght-10 text-center text-orange mb-2\">\r\n                {{ language }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_it-select-language_it-select-language_module_ts.js.map