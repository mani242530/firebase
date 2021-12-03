(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["src_app_it-select-vehicle_it-select-vehicle_module_ts"],{

/***/ 6453:
/*!***************************************************************!*\
  !*** ./src/app/it-select-vehicle/it-select-vehicle.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectVehiclePageModule": () => (/* binding */ SelectVehiclePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-select-vehicle.page.component */ 1819);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5002);
/* harmony import */ var _it_select_vehicle_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-select-vehicle.page.routing.module */ 9610);









const routes = [
    {
        path: '',
        component: _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_0__.SelectVehiclePageComponent,
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
    _it_select_vehicle_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.SelectVehiclePageRoutingModule, // SelectVehiclePageRoutingModule
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_0__.SelectVehiclePageComponent, // SelectVehiclePageComponent
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let SelectVehiclePageModule = class SelectVehiclePageModule {
};
SelectVehiclePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], SelectVehiclePageModule);



/***/ }),

/***/ 1819:
/*!***********************************************************************!*\
  !*** ./src/app/it-select-vehicle/it-select-vehicle.page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectVehiclePageComponent": () => (/* binding */ SelectVehiclePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_it_select_vehicle_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./it-select-vehicle.page.component.html */ 5780);
/* harmony import */ var _it_select_vehicle_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-select-vehicle.page.component.scss */ 9038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SelectVehiclePageComponent = class SelectVehiclePageComponent {
    constructor() {
        this.vehicleTypes = [
            'LCV',
            'Trailer',
            'Truck (Taurus)',
            'Open Trucks',
            '20ft Container (CBT and Open)',
            '32ft Container Single Excel',
            '20ft Container (Import and Export)',
            '40ft Container (Import and Export)',
            '32ft Container Multi Axle Excel',
        ];
    }
    ngOnInit() { }
};
SelectVehiclePageComponent.ctorParameters = () => [];
SelectVehiclePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-select-vehicle',
        template: _raw_loader_it_select_vehicle_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_it_select_vehicle_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectVehiclePageComponent);



/***/ }),

/***/ 9610:
/*!****************************************************************************!*\
  !*** ./src/app/it-select-vehicle/it-select-vehicle.page.routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectVehiclePageRoutingModule": () => (/* binding */ SelectVehiclePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-select-vehicle.page.component */ 1819);

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: '',
        component: _it_select_vehicle_page_component__WEBPACK_IMPORTED_MODULE_0__.SelectVehiclePageComponent, // component
    },
];
/**
 * Ng module
 */
let SelectVehiclePageRoutingModule = class SelectVehiclePageRoutingModule {
};
SelectVehiclePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], // exports
    })
    /**
     * SelectVehiclePageRoutingModule
     */
], SelectVehiclePageRoutingModule);



/***/ }),

/***/ 9038:
/*!*************************************************************************!*\
  !*** ./src/app/it-select-vehicle/it-select-vehicle.page.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdC1zZWxlY3QtdmVoaWNsZS5wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 5780:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-select-vehicle/it-select-vehicle.page.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\"\r\n        ><fa-icon\r\n          icon=\"bus\"\r\n          class=\"icofont-truck text-white h2 bg-purple p-2 rounded-circle\"\r\n        ></fa-icon\r\n      ></a>\r\n    </h5>\r\n    <div class=\"ml-auto d-flex align-items-center\">\r\n      <img src=\"assets/img/user1.jpg\" class=\"img-fluid rounded-circle\" />\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button\r\n          ><fa-icon icon=\"bars\" class=\"icofont-navigation-menu\"></fa-icon\r\n        ></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <div class=\"osahan-listing container d-flex h-100\">\r\n    <div class=\"osahan-listing row border-top pt2\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"4\"\r\n            margin\r\n            routerLink=\"/home\"\r\n            class=\"text-dark text-center\"\r\n            *ngFor=\"let vehicleType of vehicleTypes\"\r\n          >\r\n            <div\r\n              class=\"\r\n                list-item-img\r\n                language-item-list\r\n                align-items-center\r\n                d-inline-flex\r\n                justify-content-center\r\n                mb-2\r\n              \"\r\n            >\r\n              <img src=\"assets/img/listing/item1.png\" class=\"img-fluid\" />\r\n            </div>\r\n            <p class=\"l-hght-10 text-center text-black mb-2\">\r\n              {{ vehicleType }}\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_it-select-vehicle_it-select-vehicle_module_ts.js.map