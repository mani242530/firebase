(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["src_app_it-home_it-home_module_ts"],{

/***/ 4806:
/*!*******************************************!*\
  !*** ./src/app/it-home/it-home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _it_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-home.page.component */ 3142);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5002);
/* harmony import */ var _it_home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-home.routing.module */ 9235);









const routes = [
    {
        path: "",
        component: _it_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent,
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
    _it_home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent, // HomePageComponent
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], HomePageModule);



/***/ }),

/***/ 3142:
/*!***************************************************!*\
  !*** ./src/app/it-home/it-home.page.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_it_home_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./it-home.page.component.html */ 8954);
/* harmony import */ var _it_home_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-home.page.component.scss */ 1381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePageComponent = class HomePageComponent {
    constructor() { }
    ngOnInit() { }
};
HomePageComponent.ctorParameters = () => [];
HomePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-home",
        template: _raw_loader_it_home_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_it_home_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageComponent);



/***/ }),

/***/ 9235:
/*!***************************************************!*\
  !*** ./src/app/it-home/it-home.routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _it_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-home.page.component */ 3142);

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent, // component
    },
];
/**
 * Ng module
 */
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], // exports
    })
    /**
     * HomePageRoutingModule
     */
], HomePageRoutingModule);



/***/ }),

/***/ 1381:
/*!*****************************************************!*\
  !*** ./src/app/it-home/it-home.page.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0LWhvbWUucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQUEsV0FBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBR0YiLCJmaWxlIjoiaXQtaG9tZS5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnV0dG9uIFN0eWxlcyAqL1xyXG4uZ29vZ2xlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICM1MDdjYzA7XHJcbiAgY29sb3I6ICM1MDdjYzAgIWltcG9ydGFudDtcclxufVxyXG4uZmItYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2RmNDkzMDtcclxuICBjb2xvcjogI2RmNDkzMCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIFNpZ25pbiAqL1xyXG4uc2lnbi1vciBociB7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 8954:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-home/it-home.page.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\"\r\n        ><fa-icon\r\n          icon=\"bus\"\r\n          class=\"icofont-truck text-white h2 bg-purple p-2 rounded-circle\"\r\n        ></fa-icon\r\n      ></a>\r\n    </h5>\r\n    <div class=\"ml-auto d-flex align-items-center\">\r\n      <img src=\"assets/img/user1.jpg\" class=\"img-fluid rounded-circle\" />\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button\r\n          ><fa-icon icon=\"bars\" class=\"icofont-navigation-menu\"></fa-icon\r\n        ></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <div class=\"px-3 pb-3 pt-3\">\r\n    <div class=\"bg-white p-3 home-search-form\">\r\n      <form>\r\n        <div class=\"form-group border-bottom pb-2\">\r\n          <fa-icon icon=\"search-location\" class=\"search-location\"></fa-icon>\r\n          <label for=\"exampleFormControlSelect1\" class=\"mb-2\"\r\n            ><span class=\"icofont-search-map text-purple\"></span> From</label\r\n          ><br />\r\n          <select class=\"js-example-basic-single form-control\" name=\"state\">\r\n            <option value=\"Amritsar\">Amritsar</option>\r\n            <option value=\"Agra\">Agra</option>\r\n            <option value=\"Ahmedabad\">Ahmedabad</option>\r\n            <option value=\"Bareilly\">Bareilly</option>\r\n            <option value=\"Bathinda\">Bathinda</option>\r\n            <option value=\"Bhiwani\">Bhiwani</option>\r\n            <option value=\"Chandigarh\">Chandigarh</option>\r\n            <option value=\"Delhi\">Delhi</option>\r\n            <option value=\"Fatehabad\">Fatehabad</option>\r\n            <option value=\"Gurgaon\">Gurgaon</option>\r\n            <option value=\"Hissar\">Hissar</option>\r\n            <option value=\"Jajpur\">Jajpur</option>\r\n            <option value=\"Jodhpur\">Jodhpur</option>\r\n            <option value=\"Mumbai\">Mumbai</option>\r\n            <option value=\"Nanded\">Nanded</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group border-bottom pb-2\">\r\n          <fa-icon icon=\"map-marker-alt\" class=\"map-marker-alt\"></fa-icon>\r\n          <label for=\"exampleFormControlSelect1\" class=\"mb-2\"\r\n            ><span class=\"icofont-google-map text-purple\"></span> To</label\r\n          ><br />\r\n          <select class=\"js-example-basic-single form-control\" name=\"state\">\r\n            <option value=\"Amritsar\">Amritsar</option>\r\n            <option value=\"Agra\">Agra</option>\r\n            <option value=\"Ahmedabad\">Ahmedabad</option>\r\n            <option value=\"Bareilly\">Bareilly</option>\r\n            <option value=\"Bathinda\">Bathinda</option>\r\n            <option value=\"Bhiwani\">Bhiwani</option>\r\n            <option value=\"Chandigarh\" selected>Chandigarh</option>\r\n            <option value=\"Delhi\">Delhi</option>\r\n            <option value=\"Fatehabad\">Fatehabad</option>\r\n            <option value=\"Gurgaon\">Gurgaon</option>\r\n            <option value=\"Hissar\">Hissar</option>\r\n            <option value=\"Jajpur\">Jajpur</option>\r\n            <option value=\"Jodhpur\">Jodhpur</option>\r\n            <option value=\"Mumbai\">Mumbai</option>\r\n            <option value=\"Nanded\">Nanded</option>\r\n          </select>\r\n        </div>\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-purple btn-block osahanbus-btn rounded-1 mt-2\"\r\n          routerLink=\"/listing\"\r\n        >\r\n          Search\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"p-3 bg-warning\">\r\n    <div class=\"row m-0\">\r\n      <div class=\"col-6 py-1 pr-1 pl-0\">\r\n        <div class=\"p-3 bg-white shadow-sm rounded-1\">\r\n          <img class=\"img-fluid\" src=\"assets/img/safe-vehicles.svg\" alt=\"\" />\r\n          <p class=\"mb-0 mt-4 font-weight-bold\">\r\n            Safe and Hygenic<br />Vehicles\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 py-1 pl-1 pr-0\">\r\n        <div class=\"p-3 bg-white shadow-sm rounded-1\">\r\n          <img class=\"img-fluid\" src=\"assets/img/customer-support.svg\" alt=\"\" />\r\n          <p class=\"mb-0 mt-4 font-weight-bold\">\r\n            Best Customer<br />Care and Support\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 py-1 pr-1 pl-0\">\r\n        <div class=\"p-3 bg-white shadow-sm rounded-1\">\r\n          <img class=\"img-fluid\" src=\"assets/img/live-tracking.svg\" alt=\"\" />\r\n          <p class=\"mb-0 mt-4 font-weight-bold\">Live Track your<br />Journey</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 py-1 pl-1 pr-0\">\r\n        <div class=\"p-3 bg-white shadow-sm rounded-1\">\r\n          <img class=\"img-fluid\" src=\"assets/img/verified-drivers.svg\" alt=\"\" />\r\n          <p class=\"mb-0 mt-4 font-weight-bold\">\r\n            Verified Drivers<br />and Vehicles\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_it-home_it-home_module_ts.js.map