(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["src_app_it-listing-detail_it-listing-detail_module_ts"],{

/***/ 6010:
/*!***************************************************************!*\
  !*** ./src/app/it-listing-detail/it-listing-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingDetailPageModule": () => (/* binding */ ListingDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-listing-detail.page.component */ 8841);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5002);
/* harmony import */ var _it_listing_detail_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-listing-detail.page.routing.module */ 2756);









const routes = [
    {
        path: ":id",
        component: _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_0__.ListingDetailPageComponent,
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
    _it_listing_detail_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.ListingDetailPageRoutingModule, // ListingDetailPageRoutingModule
];
/**
 * COMPONENTS
 */
const COMPONENTS = [
    _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_0__.ListingDetailPageComponent, // ListingDetailPageComponent
];
/**
 * PROVIDERS
 */
const PROVIDERS = [];
/**
 * Ng module
 */
let ListingDetailPageModule = class ListingDetailPageModule {
};
ListingDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: MODULES,
        exports: COMPONENTS,
        declarations: COMPONENTS,
        providers: PROVIDERS,
    })
], ListingDetailPageModule);



/***/ }),

/***/ 8841:
/*!***********************************************************************!*\
  !*** ./src/app/it-listing-detail/it-listing-detail.page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingDetailPageComponent": () => (/* binding */ ListingDetailPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_it_listing_detail_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./it-listing-detail.page.component.html */ 2322);
/* harmony import */ var _it_listing_detail_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./it-listing-detail.page.component.scss */ 6283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);






let ListingDetailPageComponent = class ListingDetailPageComponent {
    constructor(dataService, activatedRoute, router) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.sub1 = this.dataService.getContactById(id).subscribe((data) => {
            // if the contact doesn't exists, return to home page
            if (!data) {
                this.router.navigate(['/listing']);
            }
            else {
                this.company = data;
            }
        });
    }
    ngOnDestroy() { }
};
ListingDetailPageComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ListingDetailPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-listing',
        template: _raw_loader_it_listing_detail_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_it_listing_detail_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListingDetailPageComponent);



/***/ }),

/***/ 2756:
/*!****************************************************************************!*\
  !*** ./src/app/it-listing-detail/it-listing-detail.page.routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingDetailPageRoutingModule": () => (/* binding */ ListingDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./it-listing-detail.page.component */ 8841);

/***********************************
 * Copyright Fedex 1995 - 2021
 ***********************************/



/**
 * Routes
 */
const routes = [
    {
        path: "",
        component: _it_listing_detail_page_component__WEBPACK_IMPORTED_MODULE_0__.ListingDetailPageComponent, // component
    },
];
/**
 * Ng module
 */
let ListingDetailPageRoutingModule = class ListingDetailPageRoutingModule {
};
ListingDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], // exports
    })
    /**
     * ListingDetailPageRoutingModule
     */
], ListingDetailPageRoutingModule);



/***/ }),

/***/ 6283:
/*!*************************************************************************!*\
  !*** ./src/app/it-listing-detail/it-listing-detail.page.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Button Styles */\n.google-btn {\n  background-color: #ffffff;\n  border-color: #507cc0;\n  color: #507cc0 !important;\n}\n.fb-btn {\n  background-color: #ffffff;\n  border-color: #df4930;\n  color: #df4930 !important;\n}\n/* Signin */\n.sign-or hr {\n  width: 130px;\n  border-top: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0LWxpc3RpbmctZGV0YWlsLnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUFBLFdBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQUdGIiwiZmlsZSI6Iml0LWxpc3RpbmctZGV0YWlsLnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdXR0b24gU3R5bGVzICovXHJcbi5nb29nbGUtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzUwN2NjMDtcclxuICBjb2xvcjogIzUwN2NjMCAhaW1wb3J0YW50O1xyXG59XHJcbi5mYi1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGY0OTMwO1xyXG4gIGNvbG9yOiAjZGY0OTMwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogU2lnbmluICovXHJcbi5zaWduLW9yIGhyIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 2322:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/it-listing-detail/it-listing-detail.page.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div\r\n      class=\"\r\n        osahan-header-nav\r\n        shadow-sm\r\n        p-3\r\n        d-flex\r\n        align-items-center\r\n        bg-purple\r\n      \"\r\n    >\r\n      <h5 class=\"font-weight-normal mb-0 text-white\">\r\n        <a class=\"text-purple\" routerLink=\"/listing\"\r\n          ><fa-icon icon=\"arrow-left\" class=\"icofont-rounded-left\"></fa-icon\r\n        ></a>\r\n        <ion-title>Company Details</ion-title>\r\n      </h5>\r\n      <div class=\"ml-auto d-flex align-items-center\">\r\n        <ion-buttons slot=\"end\">\r\n          <ion-menu-button\r\n            ><fa-icon icon=\"bars\" class=\"icofont-navigation-menu\"></fa-icon\r\n          ></ion-menu-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content\" fullscreen>\r\n  <!-- <cdk-virtual-scroll-viewport\r\n    class=\"scroll-viewport\"\r\n    #scroll\r\n    itemSize=\"80\"\r\n    minBufferPx=\"900\"\r\n    maxBufferPx=\"1350\"\r\n  > -->\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" *ngIf=\"company\">\r\n        <div class=\"Bus-Details padding-bt\">\r\n          <div class=\"list_item m-0 bg-white\">\r\n            <div class=\"px-2 py-3 tic-div border-bottom d-flex\">\r\n              <img\r\n                src=\"assets/img/listing/item1.png\"\r\n                class=\"img-fluid border rounded p-1 shape-img mr-3\"\r\n              />\r\n              <div class=\"w-100\">\r\n                <ion-label>\r\n                  <h3 class=\"my-1 l-hght-18 font-weight-bold\">\r\n                    {{ company.firstName }} {{ company.lastName }}\r\n                  </h3>\r\n                </ion-label>\r\n\r\n                <div class=\"start-rating f-10\">\r\n                  <fa-icon\r\n                    icon=\"star\"\r\n                    class=\"icofont-star text-orange\"\r\n                  ></fa-icon>\r\n                  <fa-icon\r\n                    icon=\"star\"\r\n                    class=\"icofont-star text-orange\"\r\n                  ></fa-icon>\r\n                  <fa-icon\r\n                    icon=\"star\"\r\n                    class=\"icofont-star text-orange\"\r\n                  ></fa-icon>\r\n                  <fa-icon\r\n                    icon=\"star\"\r\n                    class=\"icofont-star text-orange\"\r\n                  ></fa-icon>\r\n                  <fa-icon\r\n                    icon=\"star\"\r\n                    class=\"icofont-star text-muted\"\r\n                  ></fa-icon>\r\n                  <span class=\"text-dark\">4.0</span>\r\n                  <div class=\"d-flex mt-2\">\r\n                    <p class=\"m-0\">\r\n                      <i class=\"icofont-google-map mr-1 text-danger\"></i\r\n                      ><span class=\"small\">{{ company.location }}</span>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"bus-details pt-2 pb-0 px-2\">\r\n              <div class=\"info\" id=\"info\">\r\n                <ion-label>\r\n                  <h3 class=\"font-weight-normal mb-3\">\r\n                    About {{ company.companyName }}\r\n                  </h3>\r\n                </ion-label>\r\n\r\n                <p class=\"text-muted small\">\r\n                  Lorem Ipsum is simply dummy text of the printing and\r\n                  typesetting industry. Lorem Ipsum has been the industry's\r\n                  standard dummy text ever since the 1500s, when an unknown\r\n                  printer took a galley of type and scrambled it to make a type\r\n                  specimen book. Lorem Ipsum is simply dummy text of the\r\n                  printing and typesetting industry.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"top-border-line\">\r\n            <div class=\"bus-details\">\r\n              <!-- Pick Up Point -->\r\n              <div class=\"pickpoint\" id=\"pick\">\r\n                <div class=\"bg-white rounded-1 mb-3 px-2\">\r\n                  <h6 class=\"border-bottom text-purple\">\r\n                    Company LandLine Number\r\n                  </h6>\r\n\r\n                  <div class=\"custom-control-label d-flex\">\r\n                    <p class=\"m-2 l-hght-10\">\r\n                      <b> {{ company.landlineNumber }}</b>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"bg-white rounded-1 mb-3 px-2\">\r\n                  <h6 class=\"border-bottom text-purple\">Mobile Number</h6>\r\n\r\n                  <div class=\"custom-control-label d-flex\">\r\n                    <p class=\"m-2 l-hght-10\">\r\n                      <b>{{ company.mobileNumber }}</b>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"bg-white rounded-1 mb-3 px-2\">\r\n                  <h6 class=\"border-bottom text-purple\">Address</h6>\r\n\r\n                  <div class=\"custom-control-label d-flex\">\r\n                    <p class=\"m-2 l-hght-10\">\r\n                      <b>{{ company.location }}</b>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Button -->\r\n          <div class=\"osahan-fotter fixed-bottom m-3\">\r\n            <a class=\"btn btn-purple btn-block osahanbus-btn rounded-1\"\r\n              >Call Now</a\r\n            >\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_it-listing-detail_it-listing-detail_module_ts.js.map