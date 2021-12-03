(self["webpackChunkfirebase_database_tutorial"] = self["webpackChunkfirebase_database_tutorial"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   {
//     path: 'home',
//     loadChildren: () =>
//       import('./home/home.module').then((m) => m.HomePageModule),
//   },
//   {
//     path: 'contact-details/:id',
//     loadChildren: () =>
//       import('./contact-details/contact-details.module').then(
//         (m) => m.ContactDetailsPageModule
//       ),
//   },
//   {
//     path: 'update-contact/:id',
//     loadChildren: () =>
//       import('./update-contact/update-contact.module').then(
//         (m) => m.UpdateContactPageModule
//       ),
//   },
// ];
const routes = [
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    {
        path: 'splash',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-splash_it-splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-splash/it-splash.module */ 1896)).then((m) => m.SplashPageModule),
    },
    {
        path: 'get-started',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-get-started_it-get-started_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-get-started/it-get-started.module */ 427)).then((m) => m.GetStartedPageModule),
    },
    {
        path: 'select-language',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-select-language_it-select-language_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-select-language/it-select-language.module */ 431)).then((m) => m.SelectLanguagePageModule),
    },
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-signin_it-signin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-signin/it-signin.module */ 4206)).then((m) => m.SignInPageModule),
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-signup_it-signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-signup/it-signup.module */ 7785)).then((m) => m.SignUpPageModule),
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-verification_it-verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-verification/it-verification.module */ 1472)).then((m) => m.VerificationPageModule),
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-payment_it-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-payment/it-payment.module */ 8047)).then((m) => m.PaymentPageModule),
    },
    {
        path: 'select-vehicle',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-select-vehicle_it-select-vehicle_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-select-vehicle/it-select-vehicle.module */ 6453)).then((m) => m.SelectVehiclePageModule),
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-home_it-home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-home/it-home.module */ 4806)).then((m) => m.HomePageModule),
    },
    {
        path: 'listing',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-listing_it-listing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-listing/it-listing.module */ 7321)).then((m) => m.ListingPageModule),
    },
    {
        path: 'listing-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_it-listing-detail_it-listing-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./it-listing-detail/it-listing-detail.module */ 6010)).then((m) => m.ListingDetailPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 4236);






let AppComponent = class AppComponent {
    constructor(router, translateService) {
        this.router = router;
        this.translateService = translateService;
        this.initTranslate();
    }
    initTranslate() {
        // Set the default language for translation strings, and the current language.
        this.translateService.setDefaultLang('hi');
        // if (this.translateService.getBrowserLang() !== undefined) {
        //   this.translateService.use(this.translateService.getBrowserLang());
        // } else {
        //   this.translateService.use("en"); // Set your language here
        // }
    }
    signOut() {
        this.router.navigate(['/get-started']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/app */ 127);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ 630);
/* harmony import */ var _new_contact_new_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-contact/new-contact.page */ 2417);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 4236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/http-loader */ 830);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5002);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 1903);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 5115);
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-avatar */ 9110);




















let AppModule = class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.fas, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.fab, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.far);
    }
};
AppModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconLibrary }
];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _new_contact_new_contact_page__WEBPACK_IMPORTED_MODULE_3__.NewContactPage],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            ngx_avatar__WEBPACK_IMPORTED_MODULE_14__.AvatarModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient],
                },
            }),
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_17__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_17__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__.getFirestore)()),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__.TranslateHttpLoader(http, '/i18n/', '.json');
}


/***/ }),

/***/ 2417:
/*!*************************************************!*\
  !*** ./src/app/new-contact/new-contact.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewContactPage": () => (/* binding */ NewContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_new_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-contact.page.html */ 7539);
/* harmony import */ var _new_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-contact.page.scss */ 5201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);







let NewContactPage = class NewContactPage {
    constructor(modalController, dataService) {
        this.modalController = modalController;
        this.dataService = dataService;
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    ngOnInit() {
        this.createContactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            firmActivity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            serviceProviding: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            landlineNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
        });
    }
    submitForm() {
        this.createForm.onSubmit(undefined);
    }
    createContact(values) {
        // copy all the form values into the new contact
        let newContact = Object.assign({}, values);
        this.dataService.createContact(newContact);
        this.dismissModal();
    }
};
NewContactPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
NewContactPage.propDecorators = {
    createForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['createForm',] }]
};
NewContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-new-contact',
        template: _raw_loader_new_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewContactPage);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 630);




let DataService = class DataService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getContacts() {
        const contactsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(this.firestore, 'companys');
        // this method returns a stream of documents mapped to their payload and id
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.collectionData)(contactsCollection, { idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((companys) => companys));
    }
    getContactById(id) {
        const document = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, `companys/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.docSnapshots)(document).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((doc) => {
            const id = doc.id;
            const data = doc.data();
            return Object.assign({ id }, data);
        }));
    }
    createContact(contact) {
        const document = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(this.firestore, 'companys'));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(document, contact);
    }
    updateContact(contact) {
        const document = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'contacts', contact === null || contact === void 0 ? void 0 : contact.id);
        const { id } = contact, data = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(contact, ["id"]); // we don't want to save the id inside the document
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(document, data);
    }
    deleteContact(id) {
        const document = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'contacts', id);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(document);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], DataService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        // apiKey: "AIzaSyCH5i2BjvyXkIpF-NsyYDZK3TVx-ifvoQA",
        // authDomain: "ionic-contacts-app.firebaseapp.com",
        // projectId: "ionic-contacts-app",
        // storageBucket: "ionic-contacts-app.appspot.com",
        // messagingSenderId: "38298401556",
        // appId: "1:38298401556:web:3a7d8eba7b11c5aa74a001"
        apiKey: 'AIzaSyD52OG3ARjNi92BFLTvabyoGzFQG9zEA',
        authDomain: 'indiantransport-7e63f.firebaseapp.com',
        projectId: 'indiantransport-7e63f',
        storageBucket: 'indiantransport-7e63f.appspot.com',
        messagingSenderId: '175158590445',
        appId: '1:175158590445:web:d2d4f6b0ae7545285e4',
        measurementId: 'G-YFDPH8RTKJ',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		4028,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4804,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 5201:
/*!***************************************************!*\
  !*** ./src/app/new-contact/new-contact.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 16px;\n}\nion-content .add-photo-wrapper {\n  justify-content: center;\n}\nion-content .user-image {\n  --size: 100px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLHVCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoibmV3LWNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuXG4gIC5hZGQtcGhvdG8td3JhcHBlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAudXNlci1pbWFnZSB7XG4gICAgLS1zaXplOiAxMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-menu side=\"start\" contentId=\"app-content\">\n    <ion-content>\n      <a\n        href=\"#\"\n        class=\"\n          bg-purple\n          sidebar-user\n          d-flex\n          align-items-center\n          py-4\n          px-3\n          border-0\n          mb-0\n        \"\n        [routerDirection]=\"'root'\"\n        routerLink=\"/\"\n      >\n        <!-- <img\n          src=\"../assets/img/user1.jpg\"\n          class=\"img-fluid rounded-pill mr-3\"\n        /> -->\n        <ngx-avatar\n          name=\"Indian Transport\"\n          (clickOnAvatar)=\"avatarClicked($event)\"\n          size=\"50\"\n        ></ngx-avatar>\n        <div class=\"text-white ml-2\">\n          <h6 class=\"mb-0\">I Am Osahan</h6>\n          <small>+91 12345-67890</small><br />\n          <span class=\"f-10 text-white-50\">Version 1.32</span>\n        </div>\n      </a>\n      <ion-list>\n        <ion-item detail=\"false\" [routerDirection]=\"'root'\" routerLink=\"/\">\n          <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n          <ion-label>Inbox</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"paper-plane\" slot=\"start\"></ion-icon>\n          <ion-label>Outbox</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n          <ion-label>Favorites</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"archive\" slot=\"start\"></ion-icon>\n          <ion-label>Archived</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n          <ion-label>Trash</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n          <ion-label>Spam</ion-label>\n        </ion-item>\n      </ion-list>\n      <a\n        href=\"#\"\n        class=\"\n          bg-purple\n          sidebar-user\n          py-2\n          px-2border-0\n          mb-0\n          fixed-bottom\n          text-align-center\n        \"\n        [routerDirection]=\"'root'\"\n        routerLink=\"/\"\n      >\n        <div class=\"text-white\">\n          <h6 class=\"mb-0\">Logout</h6>\n        </div>\n      </a>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet\n    id=\"app-content\"\n    overflow-scroll=\"true\"\n  ></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 7539:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-contact/new-contact.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>New Contact</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"dismissModal()\"> Cancel </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        color=\"primary\"\n        [disabled]=\"!createContactForm.valid\"\n        (click)=\"submitForm()\"\n      >\n        Done\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-thumbnail class=\"user-image\">\n    <img src=\"/assets/avatar.png\" />\n  </ion-thumbnail>\n\n  <ion-row class=\"add-photo-wrapper\">\n    <ion-button fill=\"clear\">Add Photo</ion-button>\n  </ion-row>\n\n  <form\n    [formGroup]=\"createContactForm\"\n    #createForm=\"ngForm\"\n    (ngSubmit)=\"createContact(createContactForm.value)\"\n  >\n    <ion-list>\n      <ion-item>\n        <ion-input\n          placeholder=\"First name\"\n          inputMode=\"text\"\n          clearInput=\"true\"\n          formControlName=\"firstName\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder=\"Last name\"\n          inputMode=\"text\"\n          clearInput=\"true\"\n          formControlName=\"lastName\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder=\"Company Name\"\n          inputMode=\"text\"\n          clearInput=\"true\"\n          formControlName=\"companyName\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder=\"Firm Activity\"\n          inputMode=\"text\"\n          clearInput=\"true\"\n          formControlName=\"firmActivity\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder=\"Service Providing\"\n          inputMode=\"text\"\n          clearInput=\"true\"\n          formControlName=\"serviceProviding\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder=\"Landline Number\"\n          inputMode=\"tel\"\n          clearInput=\"true\"\n          formControlName=\"landlineNumber\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder=\"Mobile Number\"\n          inputMode=\"tel\"\n          clearInput=\"true\"\n          formControlName=\"mobileNumber\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder=\"Location\"\n          inputMode=\"text\"\n          clearInput=\"true\"\n          formControlName=\"location\"\n          required\n        ></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map