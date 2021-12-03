(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["src_app_it-listing_it-listing_module_ts"],{

/***/ 7321:
/*!*************************************************!*\
  !*** ./src/app/it-listing/it-listing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingPageModule": () => (/* binding */ ListingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _it_listing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-listing.page.component */ 5466);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5002);
/* harmony import */ var _it_listing_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-listing.page.routing.module */ 3307);









// import { ScrollingModule } from "@angular/cdk/scrolling/public-api";
const routes = [
    {
        path: "",
        component: _it_listing_page_component__WEBPACK_IMPORTED_MODULE_0__.ListingPageComponent,
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
    // ScrollingModule,
    _it_listing_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.ListingPageRoutingModule, // ListingPageRoutingModule
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_listing_page_component__WEBPACK_IMPORTED_MODULE_0__.ListingPageComponent, // ListingPageComponent
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let ListingPageModule = class ListingPageModule {
};
ListingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], ListingPageModule);



/***/ }),

/***/ 5466:
/*!*********************************************************!*\
  !*** ./src/app/it-listing/it-listing.page.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingPageComponent": () => (/* binding */ ListingPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_it_listing_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./it-listing.page.component.html */ 6596);
/* harmony import */ var _it_listing_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-listing.page.component.scss */ 7752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);






let ListingPageComponent = class ListingPageComponent {
    // @ViewChild(CdkVirtualScrollViewport, { static: true })
    // viewport: CdkVirtualScrollViewport;
    constructor(modalController, routerOutlet, dataService) {
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.dataService = dataService;
        this.showLoading = true;
        this.showLoading = true;
        this.dataService.getContacts().subscribe((data) => {
            this.showLoading = false;
            this.companys = data;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () { });
    }
    trackByFn(_, item) {
        return item.id;
    }
};
ListingPageComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRouterOutlet },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ListingPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-listing',
        template: _raw_loader_it_listing_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_it_listing_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListingPageComponent);



/***/ }),

/***/ 3307:
/*!**************************************************************!*\
  !*** ./src/app/it-listing/it-listing.page.routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingPageRoutingModule": () => (/* binding */ ListingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _it_listing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-listing.page.component */ 5466);

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_listing_page_component__WEBPACK_IMPORTED_MODULE_0__.ListingPageComponent, // component
    },
];
/**
 * Ng module
 */
let ListingPageRoutingModule = class ListingPageRoutingModule {
};
ListingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], // exports
    })
    /**
     * ListingPageRoutingModule
     */
], ListingPageRoutingModule);



/***/ }),

/***/ 7752:
/*!***********************************************************!*\
  !*** ./src/app/it-listing/it-listing.page.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0LWxpc3RpbmcucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQUEsV0FBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBR0YiLCJmaWxlIjoiaXQtbGlzdGluZy5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnV0dG9uIFN0eWxlcyAqL1xyXG4uZ29vZ2xlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICM1MDdjYzA7XHJcbiAgY29sb3I6ICM1MDdjYzAgIWltcG9ydGFudDtcclxufVxyXG4uZmItYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2RmNDkzMDtcclxuICBjb2xvcjogI2RmNDkzMCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIFNpZ25pbiAqL1xyXG4uc2lnbi1vciBociB7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 6596:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-listing/it-listing.page.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <!-- <ion-toolbar> -->\r\n  <div\r\n    class=\"osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-purple\"\r\n  >\r\n    <h5 class=\"font-weight-normal mb-0 text-white\">\r\n      <a class=\"text-purple\" routerLink=\"/home\"\r\n        ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n      ></a>\r\n      <ion-title>Search</ion-title>\r\n    </h5>\r\n    <div class=\"ml-auto d-flex align-items-center\">\r\n      <!-- <a class=\"text-white h6 mb-0\" routerLink=\"/home\"\r\n          ><fa-icon icon=\"search\" class=\"icofont-search-1\"></fa-icon\r\n        ></a>\r\n        <a\r\n          href=\"#\"\r\n          class=\"mx-4 text-white h6 mb-0\"\r\n          data-toggle=\"modal\"\r\n          data-target=\"#filterModal\"\r\n          ><fa-icon icon=\"filter\" class=\"icofont-filter\"></fa-icon\r\n        ></a> -->\r\n      <img src=\"assets/img/user1.jpg\" class=\"img-fluid rounded-circle\" />\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button\r\n          ><fa-icon icon=\"bars\" class=\"icofont-navigation-menu\"></fa-icon\r\n        ></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </div>\r\n  <!-- </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n  <div class=\"osahan-listing p-0 m-0 row border-top\">\r\n    <div class=\"p-2 w-100\">\r\n      <div class=\"bg-white border border-warning rounded-1 shadow-sm p-2\">\r\n        <div class=\"row mx-0 px-1\">\r\n          <div class=\"col-6 p-0\">\r\n            <small class=\"text-muted mb-1 f-10 pr-1\">GOING FROM</small>\r\n            <p class=\"small mb-0\">LUDHIANA</p>\r\n          </div>\r\n          <div class=\"col-6 p-0\">\r\n            <small class=\"text-muted mb-1 f-10 pr-1\">GOING TO</small>\r\n            <p class=\"small mb-0\">GOA</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col\r\n        size=\"12\"\r\n        margin\r\n        *ngFor=\"let company of companys; trackBy: trackByFn\"\r\n        routerLink=\"/listing-detail/{{ company.id }}\"\r\n        class=\"text-dark px-0 py-0\"\r\n      >\r\n        <div\r\n          class=\"\r\n            list_item_gird\r\n            m-1\r\n            bg-white\r\n            shadow-sm\r\n            listing-item\r\n            border-right\r\n            p-3\r\n          \"\r\n        >\r\n          <div class=\"tic-div mb-2\">\r\n            <p class=\"mb-0 l-hght-10\">{{ company.companyName }}</p>\r\n            <span class=\"text-purple small text-small\"\r\n              >{{ company.firstName }} {{ company.lastName }}</span\r\n            >\r\n          </div>\r\n          <div class=\"d-flex\">\r\n            <div class=\"bus_details w-100\">\r\n              <div class=\"d-flex l-hght-10\">\r\n                <div>\r\n                  <small class=\"text-muted d-block\">Firm Activity</small>\r\n                  <p class=\"l-hght-10\">{{ company.firmActivity }}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex l-hght-10\">\r\n                <div>\r\n                  <small class=\"text-muted d-block\"\r\n                    >Service Providing / vehicle Type</small\r\n                  >\r\n                  <p class=\"l-hght-20\">{{ company.serviceProviding }}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex l-hght-10\">\r\n                <div>\r\n                  <small class=\"text-muted d-block\">Location</small>\r\n                  <p class=\"l-hght-10\">{{ company.location }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <fa-icon\r\n              icon=\"angle-double-right\"\r\n              class=\"angle-double-right\"\r\n            ></fa-icon>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"d-flex justify-content-center\">\r\n    <div\r\n      class=\"spinner-grow d-flex justify-content-center\"\r\n      role=\"status\"\r\n      *ngIf=\"showLoading\"\r\n    >\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- </cdk-virtual-scroll-viewport> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_it-listing_it-listing_module_ts.js.map