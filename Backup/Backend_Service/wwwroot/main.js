"use strict";
(self["webpackChunkJSRL"] = self["webpackChunkJSRL"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_signup_admin_signup_admin_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/signup/admin-signup/admin-signup.component */ 8955);
/* harmony import */ var _pages_signup_customer_signup_customer_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/signup/customer-signup/customer-signup.component */ 8463);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _pages_oops_oops_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/oops/oops.component */ 7967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'signup/admin',
  component: _pages_signup_admin_signup_admin_signup_component__WEBPACK_IMPORTED_MODULE_1__.AdminSignupComponent
}, {
  path: 'signup/customer',
  component: _pages_signup_customer_signup_customer_signup_component__WEBPACK_IMPORTED_MODULE_2__.CustomerSignupComponent
}, {
  path: 'admin',
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_menu_mjs"), __webpack_require__.e("src_app_pages_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin/admin.module */ 1496)).then(m => m.AdminModule)
}, {
  path: 'customer',
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_menu_mjs"), __webpack_require__.e("src_app_pages_customer_customer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customer/customer.module */ 6921)).then(m => m.CustomerModule)
}, {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: '**',
  component: _pages_oops_oops_component__WEBPACK_IMPORTED_MODULE_4__.OopsComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'J.S.R.L';
  }
  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: [".toolbar-style[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    height: 50px;\r\n    width: 300px;\r\n    font-weight: 400;\r\n    border-radius: 0px 30px 30px 0px;\r\n    font-size: inherit;\r\n    box-shadow: 0px 10px 20px 2px rgb(0 0 0 / 25%);\r\n}\r\n\r\n.toolbar-logo-img[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n    margin-right: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsaURBQWlEO0lBQ2pELFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXN0eWxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMnB4IHJnYigwIDAgMCAvIDI1JSk7XHJcbn1cclxuXHJcbi50b29sYmFyLWxvZ28taW1nIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _pages_signup_admin_signup_admin_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/signup/admin-signup/admin-signup.component */ 8955);
/* harmony import */ var _pages_signup_customer_signup_customer_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup/customer-signup/customer-signup.component */ 8463);
/* harmony import */ var _pages_data_countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/data/countries */ 4094);
/* harmony import */ var _pages_login_popup_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/popup/popup.component */ 3668);
/* harmony import */ var _pages_signup_popup_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/signup/popup/popup.component */ 9363);
/* harmony import */ var _pages_oops_oops_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/oops/oops.component */ 7967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);



























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'COUNTRIES',
    useValue: _pages_data_countries__WEBPACK_IMPORTED_MODULE_6__.Countries
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__.HashLocationStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrModule.forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__.MatStepperModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _pages_signup_admin_signup_admin_signup_component__WEBPACK_IMPORTED_MODULE_4__.AdminSignupComponent, _pages_signup_customer_signup_customer_signup_component__WEBPACK_IMPORTED_MODULE_5__.CustomerSignupComponent, _pages_login_popup_popup_component__WEBPACK_IMPORTED_MODULE_7__.PopupComponent, _pages_signup_popup_popup_component__WEBPACK_IMPORTED_MODULE_8__.PopupComponent, _pages_oops_oops_component__WEBPACK_IMPORTED_MODULE_9__.OopsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgOptimizedImage, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__.MatStepperModule]
  });
})();

/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AuthGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate(route, state) {
    if (localStorage.getItem('IsLogged') == '1') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4094:
/*!*****************************************!*\
  !*** ./src/app/pages/data/countries.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Countries": () => (/* binding */ Countries)
/* harmony export */ });
const Countries = [{
  countryId: 6,
  countryCode: 376,
  countryCodeString: '+376',
  alpha2: 'AD',
  countryName: 'Andorra',
  countryImage: 'ad.svg'
}, {
  countryId: 237,
  countryCode: 971,
  countryCodeString: '+971',
  alpha2: 'AE',
  countryName: 'United Arab Emirates',
  countryImage: 'ae.svg'
}, {
  countryId: 1,
  countryCode: 93,
  countryCodeString: '+93',
  alpha2: 'AF',
  countryName: 'Afghanistan',
  countryImage: 'af.svg'
}, {
  countryId: 10,
  countryCode: 1268,
  countryCodeString: '+1268',
  alpha2: 'AG',
  countryName: 'Antigua and Barbuda',
  countryImage: 'ag.svg'
}, {
  countryId: 8,
  countryCode: 1264,
  countryCodeString: '+1264',
  alpha2: 'AI',
  countryName: 'Anguilla',
  countryImage: 'ai.svg'
}, {
  countryId: 3,
  countryCode: 355,
  countryCodeString: '+355',
  alpha2: 'AL',
  countryName: 'Albania',
  countryImage: 'al.svg'
}, {
  countryId: 12,
  countryCode: 374,
  countryCodeString: '+374',
  alpha2: 'AM',
  countryName: 'Armenia',
  countryImage: 'am.svg'
}, {
  countryId: 159,
  countryCode: 599,
  countryCodeString: '+599',
  alpha2: 'AN',
  countryName: 'Netherlands Antilles',
  countryImage: 'an.png'
}, {
  countryId: 7,
  countryCode: 244,
  countryCodeString: '+244',
  alpha2: 'AO',
  countryName: 'Angola',
  countryImage: 'ao.svg'
}, {
  countryId: 9,
  countryCode: 672,
  countryCodeString: '+672',
  alpha2: 'AQ',
  countryName: 'Antarctica',
  countryImage: 'aq.svg'
}, {
  countryId: 11,
  countryCode: 54,
  countryCodeString: '+54',
  alpha2: 'AR',
  countryName: 'Argentina',
  countryImage: 'ar.svg'
}, {
  countryId: 5,
  countryCode: 1684,
  countryCodeString: '+1684',
  alpha2: 'AS',
  countryName: 'American Samoa',
  countryImage: 'as.svg'
}, {
  countryId: 15,
  countryCode: 43,
  countryCodeString: '+43',
  alpha2: 'AT',
  countryName: 'Austria',
  countryImage: 'at.svg'
}, {
  countryId: 14,
  countryCode: 61,
  countryCodeString: '+61',
  alpha2: 'AU',
  countryName: 'Australia',
  countryImage: 'au.svg'
}, {
  countryId: 13,
  countryCode: 297,
  countryCodeString: '+297',
  alpha2: 'AW',
  countryName: 'Aruba',
  countryImage: 'aw.svg'
}, {
  countryId: 2,
  countryCode: 358,
  countryCodeString: '+358',
  alpha2: 'AX',
  countryName: 'Aland Islands',
  countryImage: 'ax.svg'
}, {
  countryId: 16,
  countryCode: 994,
  countryCodeString: '+994',
  alpha2: 'AZ',
  countryName: 'Azerbaijan',
  countryImage: 'az.svg'
}, {
  countryId: 29,
  countryCode: 387,
  countryCodeString: '+387',
  alpha2: 'BA',
  countryName: 'Bosnia and Herzegovina',
  countryImage: 'ba.svg'
}, {
  countryId: 20,
  countryCode: 1246,
  countryCodeString: '+1246',
  alpha2: 'BB',
  countryName: 'Barbados',
  countryImage: 'bb.svg'
}, {
  countryId: 19,
  countryCode: 880,
  countryCodeString: '+880',
  alpha2: 'BD',
  countryName: 'Bangladesh',
  countryImage: 'bd.svg'
}, {
  countryId: 22,
  countryCode: 32,
  countryCodeString: '+32',
  alpha2: 'BE',
  countryName: 'Belgium',
  countryImage: 'be.svg'
}, {
  countryId: 36,
  countryCode: 226,
  countryCodeString: '+226',
  alpha2: 'BF',
  countryName: 'Burkina Faso',
  countryImage: 'bf.svg'
}, {
  countryId: 35,
  countryCode: 359,
  countryCodeString: '+359',
  alpha2: 'BG',
  countryName: 'Bulgaria',
  countryImage: 'bg.svg'
}, {
  countryId: 18,
  countryCode: 973,
  countryCodeString: '+973',
  alpha2: 'BH',
  countryName: 'Bahrain',
  countryImage: 'bh.svg'
}, {
  countryId: 37,
  countryCode: 257,
  countryCodeString: '+257',
  alpha2: 'BI',
  countryName: 'Burundi',
  countryImage: 'bi.svg'
}, {
  countryId: 24,
  countryCode: 229,
  countryCodeString: '+229',
  alpha2: 'BJ',
  countryName: 'Benin',
  countryImage: 'bj.svg'
}, {
  countryId: 187,
  countryCode: 590,
  countryCodeString: '+590',
  alpha2: 'BL',
  countryName: 'Saint Barthelemy',
  countryImage: 'bl.svg'
}, {
  countryId: 25,
  countryCode: 1441,
  countryCodeString: '+1441',
  alpha2: 'BM',
  countryName: 'Bermuda',
  countryImage: 'bm.svg'
}, {
  countryId: 34,
  countryCode: 673,
  countryCodeString: '+673',
  alpha2: 'BN',
  countryName: 'Brunei Darussalam',
  countryImage: 'bn.svg'
}, {
  countryId: 27,
  countryCode: 591,
  countryCodeString: '+591',
  alpha2: 'BO',
  countryName: 'Bolivia',
  countryImage: 'bo.svg'
}, {
  countryId: 28,
  countryCode: 599,
  countryCodeString: '+599',
  alpha2: 'BQ',
  countryName: 'Bonaire, Sint Eustatius and Saba',
  countryImage: 'bq.svg'
}, {
  countryId: 32,
  countryCode: 55,
  countryCodeString: '+55',
  alpha2: 'BR',
  countryName: 'Brazil',
  countryImage: 'br.svg'
}, {
  countryId: 17,
  countryCode: 1242,
  countryCodeString: '+1242',
  alpha2: 'BS',
  countryName: 'Bahamas',
  countryImage: 'bs.svg'
}, {
  countryId: 26,
  countryCode: 975,
  countryCodeString: '+975',
  alpha2: 'BT',
  countryName: 'Bhutan',
  countryImage: 'bt.svg'
}, {
  countryId: 31,
  countryCode: 55,
  countryCodeString: '+55',
  alpha2: 'BV',
  countryName: 'Bouvet Island',
  countryImage: 'bv.svg'
}, {
  countryId: 30,
  countryCode: 267,
  countryCodeString: '+267',
  alpha2: 'BW',
  countryName: 'Botswana',
  countryImage: 'bw.svg'
}, {
  countryId: 21,
  countryCode: 375,
  countryCodeString: '+375',
  alpha2: 'BY',
  countryName: 'Belarus',
  countryImage: 'by.svg'
}, {
  countryId: 23,
  countryCode: 501,
  countryCodeString: '+501',
  alpha2: 'BZ',
  countryName: 'Belize',
  countryImage: 'bz.svg'
}, {
  countryId: 40,
  countryCode: 1,
  countryCodeString: '+1',
  alpha2: 'CA',
  countryName: 'Canada',
  countryImage: 'ca.svg'
}, {
  countryId: 48,
  countryCode: 672,
  countryCodeString: '+672',
  alpha2: 'CC',
  countryName: 'Cocos (Keeling) Islands',
  countryImage: 'cc.svg'
}, {
  countryId: 52,
  countryCode: 242,
  countryCodeString: '+242',
  alpha2: 'CD',
  countryName: 'Congo, Democratic Republic of the Congo',
  countryImage: 'cd.svg'
}, {
  countryId: 43,
  countryCode: 236,
  countryCodeString: '+236',
  alpha2: 'CF',
  countryName: 'Central African Republic',
  countryImage: 'cf.svg'
}, {
  countryId: 51,
  countryCode: 242,
  countryCodeString: '+242',
  alpha2: 'CG',
  countryName: 'Congo',
  countryImage: 'cg.svg'
}, {
  countryId: 219,
  countryCode: 41,
  countryCodeString: '+41',
  alpha2: 'CH',
  countryName: 'Switzerland',
  countryImage: 'ch.svg'
}, {
  countryId: 55,
  countryCode: 225,
  countryCodeString: '+225',
  alpha2: 'CI',
  countryName: "Cote D'Ivoire'",
  countryImage: 'ci.svg'
}, {
  countryId: 53,
  countryCode: 682,
  countryCodeString: '+682',
  alpha2: 'CK',
  countryName: 'Cook Islands',
  countryImage: 'ck.svg'
}, {
  countryId: 45,
  countryCode: 56,
  countryCodeString: '+56',
  alpha2: 'CL',
  countryName: 'Chile',
  countryImage: 'cl.svg'
}, {
  countryId: 39,
  countryCode: 237,
  countryCodeString: '+237',
  alpha2: 'CM',
  countryName: 'Cameroon',
  countryImage: 'cm.svg'
}, {
  countryId: 46,
  countryCode: 86,
  countryCodeString: '+86',
  alpha2: 'CN',
  countryName: 'China',
  countryImage: 'cn.svg'
}, {
  countryId: 49,
  countryCode: 57,
  countryCodeString: '+57',
  alpha2: 'CO',
  countryName: 'Colombia',
  countryImage: 'co.svg'
}, {
  countryId: 54,
  countryCode: 506,
  countryCodeString: '+506',
  alpha2: 'CR',
  countryName: 'Costa Rica',
  countryImage: 'cr.svg'
}, {
  countryId: 200,
  countryCode: 381,
  countryCodeString: '+381',
  alpha2: 'CS',
  countryName: 'Serbia and Montenegro',
  countryImage: 'cs.png'
}, {
  countryId: 57,
  countryCode: 53,
  countryCodeString: '+53',
  alpha2: 'CU',
  countryName: 'Cuba',
  countryImage: 'cu.svg'
}, {
  countryId: 41,
  countryCode: 238,
  countryCodeString: '+238',
  alpha2: 'CV',
  countryName: 'Cape Verde',
  countryImage: 'cv.svg'
}, {
  countryId: 58,
  countryCode: 599,
  countryCodeString: '+599',
  alpha2: 'CW',
  countryName: 'Curacao',
  countryImage: 'cw.svg'
}, {
  countryId: 47,
  countryCode: 61,
  countryCodeString: '+61',
  alpha2: 'CX',
  countryName: 'Christmas Island',
  countryImage: 'cx.svg'
}, {
  countryId: 59,
  countryCode: 357,
  countryCodeString: '+357',
  alpha2: 'CY',
  countryName: 'Cyprus',
  countryImage: 'cy.svg'
}, {
  countryId: 60,
  countryCode: 420,
  countryCodeString: '+420',
  alpha2: 'CZ',
  countryName: 'Czech Republic',
  countryImage: 'cz.svg'
}, {
  countryId: 83,
  countryCode: 49,
  countryCodeString: '+49',
  alpha2: 'DE',
  countryName: 'Germany',
  countryImage: 'de.svg'
}, {
  countryId: 62,
  countryCode: 253,
  countryCodeString: '+253',
  alpha2: 'DJ',
  countryName: 'Djibouti',
  countryImage: 'dj.svg'
}, {
  countryId: 61,
  countryCode: 45,
  countryCodeString: '+45',
  alpha2: 'DK',
  countryName: 'Denmark',
  countryImage: 'dk.svg'
}, {
  countryId: 63,
  countryCode: 1767,
  countryCodeString: '+1767',
  alpha2: 'DM',
  countryName: 'Dominica',
  countryImage: 'dm.svg'
}, {
  countryId: 64,
  countryCode: 1809,
  countryCodeString: '+1809',
  alpha2: 'DO',
  countryName: 'Dominican Republic',
  countryImage: 'do.svg'
}, {
  countryId: 4,
  countryCode: 213,
  countryCodeString: '+213',
  alpha2: 'DZ',
  countryName: 'Algeria',
  countryImage: 'dz.svg'
}, {
  countryId: 65,
  countryCode: 593,
  countryCodeString: '+593',
  alpha2: 'EC',
  countryName: 'Ecuador',
  countryImage: 'ec.svg'
}, {
  countryId: 70,
  countryCode: 372,
  countryCodeString: '+372',
  alpha2: 'EE',
  countryName: 'Estonia',
  countryImage: 'ee.svg'
}, {
  countryId: 66,
  countryCode: 20,
  countryCodeString: '+20',
  alpha2: 'EG',
  countryName: 'Egypt',
  countryImage: 'eg.svg'
}, {
  countryId: 249,
  countryCode: 212,
  countryCodeString: '+212',
  alpha2: 'EH',
  countryName: 'Western Sahara',
  countryImage: 'eh.svg'
}, {
  countryId: 69,
  countryCode: 291,
  countryCodeString: '+291',
  alpha2: 'ER',
  countryName: 'Eritrea',
  countryImage: 'er.svg'
}, {
  countryId: 212,
  countryCode: 34,
  countryCodeString: '+34',
  alpha2: 'ES',
  countryName: 'Spain',
  countryImage: 'es.svg'
}, {
  countryId: 71,
  countryCode: 251,
  countryCodeString: '+251',
  alpha2: 'ET',
  countryName: 'Ethiopia',
  countryImage: 'et.svg'
}, {
  countryId: 75,
  countryCode: 358,
  countryCodeString: '+358',
  alpha2: 'FI',
  countryName: 'Finland',
  countryImage: 'fi.svg'
}, {
  countryId: 74,
  countryCode: 679,
  countryCodeString: '+679',
  alpha2: 'FJ',
  countryName: 'Fiji',
  countryImage: 'fj.svg'
}, {
  countryId: 72,
  countryCode: 500,
  countryCodeString: '+500',
  alpha2: 'FK',
  countryName: 'Falkland Islands (Malvinas)',
  countryImage: 'fk.svg'
}, {
  countryId: 146,
  countryCode: 691,
  countryCodeString: '+691',
  alpha2: 'FM',
  countryName: 'Micronesia, Federated States of',
  countryImage: 'fm.svg'
}, {
  countryId: 73,
  countryCode: 298,
  countryCodeString: '+298',
  alpha2: 'FO',
  countryName: 'Faroe Islands',
  countryImage: 'fo.svg'
}, {
  countryId: 76,
  countryCode: 33,
  countryCodeString: '+33',
  alpha2: 'FR',
  countryName: 'France',
  countryImage: 'fr.svg'
}, {
  countryId: 80,
  countryCode: 241,
  countryCodeString: '+241',
  alpha2: 'GA',
  countryName: 'Gabon',
  countryImage: 'ga.svg'
}, {
  countryId: 238,
  countryCode: 44,
  countryCodeString: '+44',
  alpha2: 'GB',
  countryName: 'United Kingdom',
  countryImage: 'gb.svg'
}, {
  countryId: 88,
  countryCode: 1473,
  countryCodeString: '+1473',
  alpha2: 'GD',
  countryName: 'Grenada',
  countryImage: 'gd.svg'
}, {
  countryId: 82,
  countryCode: 995,
  countryCodeString: '+995',
  alpha2: 'GE',
  countryName: 'Georgia',
  countryImage: 'ge.svg'
}, {
  countryId: 77,
  countryCode: 594,
  countryCodeString: '+594',
  alpha2: 'GF',
  countryName: 'French Guiana',
  countryImage: 'gf.svg'
}, {
  countryId: 92,
  countryCode: 44,
  countryCodeString: '+44',
  alpha2: 'GG',
  countryName: 'Guernsey',
  countryImage: 'gg.svg'
}, {
  countryId: 84,
  countryCode: 233,
  countryCodeString: '+233',
  alpha2: 'GH',
  countryName: 'Ghana',
  countryImage: 'gh.svg'
}, {
  countryId: 85,
  countryCode: 350,
  countryCodeString: '+350',
  alpha2: 'GI',
  countryName: 'Gibraltar',
  countryImage: 'gi.svg'
}, {
  countryId: 87,
  countryCode: 299,
  countryCodeString: '+299',
  alpha2: 'GL',
  countryName: 'Greenland',
  countryImage: 'gl.svg'
}, {
  countryId: 81,
  countryCode: 220,
  countryCodeString: '+220',
  alpha2: 'GM',
  countryName: 'Gambia',
  countryImage: 'gm.svg'
}, {
  countryId: 93,
  countryCode: 224,
  countryCodeString: '+224',
  alpha2: 'GN',
  countryName: 'Guinea',
  countryImage: 'gn.svg'
}, {
  countryId: 89,
  countryCode: 590,
  countryCodeString: '+590',
  alpha2: 'GP',
  countryName: 'Guadeloupe',
  countryImage: 'gp.svg'
}, {
  countryId: 68,
  countryCode: 240,
  countryCodeString: '+240',
  alpha2: 'GQ',
  countryName: 'Equatorial Guinea',
  countryImage: 'gq.svg'
}, {
  countryId: 86,
  countryCode: 30,
  countryCodeString: '+30',
  alpha2: 'GR',
  countryName: 'Greece',
  countryImage: 'gr.svg'
}, {
  countryId: 210,
  countryCode: 500,
  countryCodeString: '+500',
  alpha2: 'GS',
  countryName: 'South Georgia and the South SandwichIslands',
  countryImage: 'gs.svg'
}, {
  countryId: 91,
  countryCode: 502,
  countryCodeString: '+502',
  alpha2: 'GT',
  countryName: 'Guatemala',
  countryImage: 'gt.svg'
}, {
  countryId: 90,
  countryCode: 1671,
  countryCodeString: '+1671',
  alpha2: 'GU',
  countryName: 'Guam',
  countryImage: 'gu.svg'
}, {
  countryId: 94,
  countryCode: 245,
  countryCodeString: '+245',
  alpha2: 'GW',
  countryName: 'Guinea-Bissau',
  countryImage: 'gw.svg'
}, {
  countryId: 95,
  countryCode: 592,
  countryCodeString: '+592',
  alpha2: 'GY',
  countryName: 'Guyana',
  countryImage: 'gy.svg'
}, {
  countryId: 100,
  countryCode: 852,
  countryCodeString: '+852',
  alpha2: 'HK',
  countryName: 'Hong Kong',
  countryImage: 'hk.svg'
}, {
  countryId: 97,
  countryCode: 672,
  countryCodeString: '+672',
  alpha2: 'HM',
  countryName: 'Heard Island and Mcdonald Islands',
  countryImage: 'hm.svg'
}, {
  countryId: 99,
  countryCode: 504,
  countryCodeString: '+504',
  alpha2: 'HN',
  countryName: 'Honduras',
  countryImage: 'hn.svg'
}, {
  countryId: 56,
  countryCode: 385,
  countryCodeString: '+385',
  alpha2: 'HR',
  countryName: 'Croatia',
  countryImage: 'hr.svg'
}, {
  countryId: 96,
  countryCode: 509,
  countryCodeString: '+509',
  alpha2: 'HT',
  countryName: 'Haiti',
  countryImage: 'ht.svg'
}, {
  countryId: 101,
  countryCode: 36,
  countryCodeString: '+36',
  alpha2: 'HU',
  countryName: 'Hungary',
  countryImage: 'hu.svg'
}, {
  countryId: 104,
  countryCode: 62,
  countryCodeString: '+62',
  alpha2: 'ID',
  countryName: 'Indonesia',
  countryImage: 'id.svg'
}, {
  countryId: 107,
  countryCode: 353,
  countryCodeString: '+353',
  alpha2: 'IE',
  countryName: 'Ireland',
  countryImage: 'ie.svg'
}, {
  countryId: 109,
  countryCode: 972,
  countryCodeString: '+972',
  alpha2: 'IL',
  countryName: 'Israel',
  countryImage: 'il.svg'
}, {
  countryId: 108,
  countryCode: 44,
  countryCodeString: '+44',
  alpha2: 'IM',
  countryName: 'Isle of Man',
  countryImage: 'im.svg'
}, {
  countryId: 103,
  countryCode: 91,
  countryCodeString: '+91',
  alpha2: 'IN',
  countryName: 'India',
  countryImage: 'in.svg'
}, {
  countryId: 33,
  countryCode: 246,
  countryCodeString: '+246',
  alpha2: 'IO',
  countryName: 'British Indian Ocean Territory',
  countryImage: 'io.svg'
}, {
  countryId: 106,
  countryCode: 964,
  countryCodeString: '+964',
  alpha2: 'IQ',
  countryName: 'Iraq',
  countryImage: 'iq.svg'
}, {
  countryId: 105,
  countryCode: 98,
  countryCodeString: '+98',
  alpha2: 'IR',
  countryName: 'Iran, Islamic Republic of',
  countryImage: 'ir.svg'
}, {
  countryId: 102,
  countryCode: 354,
  countryCodeString: '+354',
  alpha2: 'IS',
  countryName: 'Iceland',
  countryImage: 'is.svg'
}, {
  countryId: 110,
  countryCode: 39,
  countryCodeString: '+39',
  alpha2: 'IT',
  countryName: 'Italy',
  countryImage: 'it.svg'
}, {
  countryId: 113,
  countryCode: 44,
  countryCodeString: '+44',
  alpha2: 'JE',
  countryName: 'Jersey',
  countryImage: 'je.svg'
}, {
  countryId: 111,
  countryCode: 1876,
  countryCodeString: '+1876',
  alpha2: 'JM',
  countryName: 'Jamaica',
  countryImage: 'jm.svg'
}, {
  countryId: 114,
  countryCode: 962,
  countryCodeString: '+962',
  alpha2: 'JO',
  countryName: 'Jordan',
  countryImage: 'jo.svg'
}, {
  countryId: 112,
  countryCode: 81,
  countryCodeString: '+81',
  alpha2: 'JP',
  countryName: 'Japan',
  countryImage: 'jp.svg'
}, {
  countryId: 116,
  countryCode: 254,
  countryCodeString: '+254',
  alpha2: 'KE',
  countryName: 'Kenya',
  countryImage: 'ke.svg'
}, {
  countryId: 122,
  countryCode: 996,
  countryCodeString: '+996',
  alpha2: 'KG',
  countryName: 'Kyrgyzstan',
  countryImage: 'kg.svg'
}, {
  countryId: 38,
  countryCode: 855,
  countryCodeString: '+855',
  alpha2: 'KH',
  countryName: 'Cambodia',
  countryImage: 'kh.svg'
}, {
  countryId: 117,
  countryCode: 686,
  countryCodeString: '+686',
  alpha2: 'KI',
  countryName: 'Kiribati',
  countryImage: 'ki.svg'
}, {
  countryId: 50,
  countryCode: 269,
  countryCodeString: '+269',
  alpha2: 'KM',
  countryName: 'Comoros',
  countryImage: 'km.svg'
}, {
  countryId: 189,
  countryCode: 1869,
  countryCodeString: '+1869',
  alpha2: 'KN',
  countryName: 'Saint Kitts and Nevis',
  countryImage: 'kn.svg'
}, {
  countryId: 118,
  countryCode: 850,
  countryCodeString: '+850',
  alpha2: 'KP',
  countryName: "Korea, Democratic People's Republic of'",
  countryImage: 'kp.svg'
}, {
  countryId: 119,
  countryCode: 82,
  countryCodeString: '+82',
  alpha2: 'KR',
  countryName: 'Korea, Republic of',
  countryImage: 'kr.svg'
}, {
  countryId: 121,
  countryCode: 965,
  countryCodeString: '+965',
  alpha2: 'KW',
  countryName: 'Kuwait',
  countryImage: 'kw.svg'
}, {
  countryId: 42,
  countryCode: 1345,
  countryCodeString: '+1345',
  alpha2: 'KY',
  countryName: 'Cayman Islands',
  countryImage: 'ky.svg'
}, {
  countryId: 115,
  countryCode: 7,
  countryCodeString: '+7',
  alpha2: 'KZ',
  countryName: 'Kazakhstan',
  countryImage: 'kz.svg'
}, {
  countryId: 123,
  countryCode: 856,
  countryCodeString: '+856',
  alpha2: 'LA',
  countryName: "Lao People's Democratic Republic'",
  countryImage: 'la.svg'
}, {
  countryId: 125,
  countryCode: 961,
  countryCodeString: '+961',
  alpha2: 'LB',
  countryName: 'Lebanon',
  countryImage: 'lb.svg'
}, {
  countryId: 190,
  countryCode: 1758,
  countryCodeString: '+1758',
  alpha2: 'LC',
  countryName: 'Saint Lucia',
  countryImage: 'lc.svg'
}, {
  countryId: 129,
  countryCode: 423,
  countryCodeString: '+423',
  alpha2: 'LI',
  countryName: 'Liechtenstein',
  countryImage: 'li.svg'
}, {
  countryId: 213,
  countryCode: 94,
  countryCodeString: '+94',
  alpha2: 'LK',
  countryName: 'Sri Lanka',
  countryImage: 'lk.svg'
}, {
  countryId: 127,
  countryCode: 231,
  countryCodeString: '+231',
  alpha2: 'LR',
  countryName: 'Liberia',
  countryImage: 'lr.svg'
}, {
  countryId: 126,
  countryCode: 266,
  countryCodeString: '+266',
  alpha2: 'LS',
  countryName: 'Lesotho',
  countryImage: 'ls.svg'
}, {
  countryId: 130,
  countryCode: 370,
  countryCodeString: '+370',
  alpha2: 'LT',
  countryName: 'Lithuania',
  countryImage: 'lt.svg'
}, {
  countryId: 131,
  countryCode: 352,
  countryCodeString: '+352',
  alpha2: 'LU',
  countryName: 'Luxembourg',
  countryImage: 'lu.svg'
}, {
  countryId: 124,
  countryCode: 371,
  countryCodeString: '+371',
  alpha2: 'LV',
  countryName: 'Latvia',
  countryImage: 'lv.svg'
}, {
  countryId: 128,
  countryCode: 218,
  countryCodeString: '+218',
  alpha2: 'LY',
  countryName: 'Libyan Arab Jamahiriya',
  countryImage: 'ly.svg'
}, {
  countryId: 152,
  countryCode: 212,
  countryCodeString: '+212',
  alpha2: 'MA',
  countryName: 'Morocco',
  countryImage: 'ma.svg'
}, {
  countryId: 148,
  countryCode: 377,
  countryCodeString: '+377',
  alpha2: 'MC',
  countryName: 'Monaco',
  countryImage: 'mc.svg'
}, {
  countryId: 147,
  countryCode: 373,
  countryCodeString: '+373',
  alpha2: 'MD',
  countryName: 'Moldova, Republic of',
  countryImage: 'md.svg'
}, {
  countryId: 150,
  countryCode: 382,
  countryCodeString: '+382',
  alpha2: 'ME',
  countryName: 'Montenegro',
  countryImage: 'me.svg'
}, {
  countryId: 191,
  countryCode: 590,
  countryCodeString: '+590',
  alpha2: 'MF',
  countryName: 'Saint Martin',
  countryImage: 'mf.svg'
}, {
  countryId: 134,
  countryCode: 261,
  countryCodeString: '+261',
  alpha2: 'MG',
  countryName: 'Madagascar',
  countryImage: 'mg.svg'
}, {
  countryId: 140,
  countryCode: 692,
  countryCodeString: '+692',
  alpha2: 'MH',
  countryName: 'Marshall Islands',
  countryImage: 'mh.svg'
}, {
  countryId: 133,
  countryCode: 389,
  countryCodeString: '+389',
  alpha2: 'MK',
  countryName: 'Macedonia, the Former Yugoslav Republic of',
  countryImage: 'mk.svg'
}, {
  countryId: 138,
  countryCode: 223,
  countryCodeString: '+223',
  alpha2: 'ML',
  countryName: 'Mali',
  countryImage: 'ml.svg'
}, {
  countryId: 154,
  countryCode: 95,
  countryCodeString: '+95',
  alpha2: 'MM',
  countryName: 'Myanmar',
  countryImage: 'mm.svg'
}, {
  countryId: 149,
  countryCode: 976,
  countryCodeString: '+976',
  alpha2: 'MN',
  countryName: 'Mongolia',
  countryImage: 'mn.svg'
}, {
  countryId: 132,
  countryCode: 853,
  countryCodeString: '+853',
  alpha2: 'MO',
  countryName: 'Macao',
  countryImage: 'mo.svg'
}, {
  countryId: 167,
  countryCode: 1670,
  countryCodeString: '+1670',
  alpha2: 'MP',
  countryName: 'Northern Mariana Islands',
  countryImage: 'mp.svg'
}, {
  countryId: 141,
  countryCode: 596,
  countryCodeString: '+596',
  alpha2: 'MQ',
  countryName: 'Martinique',
  countryImage: 'mq.svg'
}, {
  countryId: 142,
  countryCode: 222,
  countryCodeString: '+222',
  alpha2: 'MR',
  countryName: 'Mauritania',
  countryImage: 'mr.svg'
}, {
  countryId: 151,
  countryCode: 1664,
  countryCodeString: '+1664',
  alpha2: 'MS',
  countryName: 'Montserrat',
  countryImage: 'ms.svg'
}, {
  countryId: 139,
  countryCode: 356,
  countryCodeString: '+356',
  alpha2: 'MT',
  countryName: 'Malta',
  countryImage: 'mt.svg'
}, {
  countryId: 143,
  countryCode: 230,
  countryCodeString: '+230',
  alpha2: 'MU',
  countryName: 'Mauritius',
  countryImage: 'mu.svg'
}, {
  countryId: 137,
  countryCode: 960,
  countryCodeString: '+960',
  alpha2: 'MV',
  countryName: 'Maldives',
  countryImage: 'mv.svg'
}, {
  countryId: 135,
  countryCode: 265,
  countryCodeString: '+265',
  alpha2: 'MW',
  countryName: 'Malawi',
  countryImage: 'mw.svg'
}, {
  countryId: 145,
  countryCode: 52,
  countryCodeString: '+52',
  alpha2: 'MX',
  countryName: 'Mexico',
  countryImage: 'mx.svg'
}, {
  countryId: 136,
  countryCode: 60,
  countryCodeString: '+60',
  alpha2: 'MY',
  countryName: 'Malaysia',
  countryImage: 'my.svg'
}, {
  countryId: 153,
  countryCode: 258,
  countryCodeString: '+258',
  alpha2: 'MZ',
  countryName: 'Mozambique',
  countryImage: 'mz.svg'
}, {
  countryId: 155,
  countryCode: 264,
  countryCodeString: '+264',
  alpha2: 'NA',
  countryName: 'Namibia',
  countryImage: 'na.svg'
}, {
  countryId: 160,
  countryCode: 687,
  countryCodeString: '+687',
  alpha2: 'NC',
  countryName: 'New Caledonia',
  countryImage: 'nc.svg'
}, {
  countryId: 163,
  countryCode: 227,
  countryCodeString: '+227',
  alpha2: 'NE',
  countryName: 'Niger',
  countryImage: 'ne.svg'
}, {
  countryId: 166,
  countryCode: 672,
  countryCodeString: '+672',
  alpha2: 'NF',
  countryName: 'Norfolk Island',
  countryImage: 'nf.svg'
}, {
  countryId: 164,
  countryCode: 234,
  countryCodeString: '+234',
  alpha2: 'NG',
  countryName: 'Nigeria',
  countryImage: 'ng.svg'
}, {
  countryId: 162,
  countryCode: 505,
  countryCodeString: '+505',
  alpha2: 'NI',
  countryName: 'Nicaragua',
  countryImage: 'ni.svg'
}, {
  countryId: 158,
  countryCode: 31,
  countryCodeString: '+31',
  alpha2: 'NL',
  countryName: 'Netherlands',
  countryImage: 'nl.svg'
}, {
  countryId: 168,
  countryCode: 47,
  countryCodeString: '+47',
  alpha2: 'NO',
  countryName: 'Norway',
  countryImage: 'no.svg'
}, {
  countryId: 157,
  countryCode: 977,
  countryCodeString: '+977',
  alpha2: 'NP',
  countryName: 'Nepal',
  countryImage: 'np.svg'
}, {
  countryId: 156,
  countryCode: 674,
  countryCodeString: '+674',
  alpha2: 'NR',
  countryName: 'Nauru',
  countryImage: 'nr.svg'
}, {
  countryId: 165,
  countryCode: 683,
  countryCodeString: '+683',
  alpha2: 'NU',
  countryName: 'Niue',
  countryImage: 'nu.svg'
}, {
  countryId: 161,
  countryCode: 64,
  countryCodeString: '+64',
  alpha2: 'NZ',
  countryName: 'New Zealand',
  countryImage: 'nz.svg'
}, {
  countryId: 169,
  countryCode: 968,
  countryCodeString: '+968',
  alpha2: 'OM',
  countryName: 'Oman',
  countryImage: 'om.svg'
}, {
  countryId: 173,
  countryCode: 507,
  countryCodeString: '+507',
  alpha2: 'PA',
  countryName: 'Panama',
  countryImage: 'pa.svg'
}, {
  countryId: 176,
  countryCode: 51,
  countryCodeString: '+51',
  alpha2: 'PE',
  countryName: 'Peru',
  countryImage: 'pe.svg'
}, {
  countryId: 78,
  countryCode: 689,
  countryCodeString: '+689',
  alpha2: 'PF',
  countryName: 'French Polynesia',
  countryImage: 'pf.svg'
}, {
  countryId: 174,
  countryCode: 675,
  countryCodeString: '+675',
  alpha2: 'PG',
  countryName: 'Papua New Guinea',
  countryImage: 'pg.svg'
}, {
  countryId: 177,
  countryCode: 63,
  countryCodeString: '+63',
  alpha2: 'PH',
  countryName: 'Philippines',
  countryImage: 'ph.svg'
}, {
  countryId: 170,
  countryCode: 92,
  countryCodeString: '+92',
  alpha2: 'PK',
  countryName: 'Pakistan',
  countryImage: 'pk.svg'
}, {
  countryId: 179,
  countryCode: 48,
  countryCodeString: '+48',
  alpha2: 'PL',
  countryName: 'Poland',
  countryImage: 'pl.svg'
}, {
  countryId: 192,
  countryCode: 508,
  countryCodeString: '+508',
  alpha2: 'PM',
  countryName: 'Saint Pierre and Miquelon',
  countryImage: 'pm.svg'
}, {
  countryId: 178,
  countryCode: 64,
  countryCodeString: '+64',
  alpha2: 'PN',
  countryName: 'Pitcairn',
  countryImage: 'pn.svg'
}, {
  countryId: 181,
  countryCode: 1787,
  countryCodeString: '+1787',
  alpha2: 'PR',
  countryName: 'Puerto Rico',
  countryImage: 'pr.svg'
}, {
  countryId: 172,
  countryCode: 970,
  countryCodeString: '+970',
  alpha2: 'PS',
  countryName: 'Palestinian Territory, Occupied',
  countryImage: 'ps.svg'
}, {
  countryId: 180,
  countryCode: 351,
  countryCodeString: '+351',
  alpha2: 'PT',
  countryName: 'Portugal',
  countryImage: 'pt.svg'
}, {
  countryId: 171,
  countryCode: 680,
  countryCodeString: '+680',
  alpha2: 'PW',
  countryName: 'Palau',
  countryImage: 'pw.svg'
}, {
  countryId: 175,
  countryCode: 595,
  countryCodeString: '+595',
  alpha2: 'PY',
  countryName: 'Paraguay',
  countryImage: 'py.svg'
}, {
  countryId: 182,
  countryCode: 974,
  countryCodeString: '+974',
  alpha2: 'QA',
  countryName: 'Qatar',
  countryImage: 'qa.svg'
}, {
  countryId: 183,
  countryCode: 262,
  countryCodeString: '+262',
  alpha2: 'RE',
  countryName: 'Reunion',
  countryImage: 're.svg'
}, {
  countryId: 184,
  countryCode: 40,
  countryCodeString: '+40',
  alpha2: 'RO',
  countryName: 'Romania',
  countryImage: 'ro.svg'
}, {
  countryId: 199,
  countryCode: 381,
  countryCodeString: '+381',
  alpha2: 'RS',
  countryName: 'Serbia',
  countryImage: 'rs.svg'
}, {
  countryId: 185,
  countryCode: 70,
  countryCodeString: '+70',
  alpha2: 'RU',
  countryName: 'Russian Federation',
  countryImage: 'ru.svg'
}, {
  countryId: 186,
  countryCode: 250,
  countryCodeString: '+250',
  alpha2: 'RW',
  countryName: 'Rwanda',
  countryImage: 'rw.svg'
}, {
  countryId: 197,
  countryCode: 966,
  countryCodeString: '+966',
  alpha2: 'SA',
  countryName: 'Saudi Arabia',
  countryImage: 'sa.svg'
}, {
  countryId: 207,
  countryCode: 677,
  countryCodeString: '+677',
  alpha2: 'SB',
  countryName: 'Solomon Islands',
  countryImage: 'sb.svg'
}, {
  countryId: 201,
  countryCode: 248,
  countryCodeString: '+248',
  alpha2: 'SC',
  countryName: 'Seychelles',
  countryImage: 'sc.svg'
}, {
  countryId: 214,
  countryCode: 249,
  countryCodeString: '+249',
  alpha2: 'SD',
  countryName: 'Sudan',
  countryImage: 'sd.svg'
}, {
  countryId: 218,
  countryCode: 46,
  countryCodeString: '+46',
  alpha2: 'SE',
  countryName: 'Sweden',
  countryImage: 'se.svg'
}, {
  countryId: 203,
  countryCode: 65,
  countryCodeString: '+65',
  alpha2: 'SG',
  countryName: 'Singapore',
  countryImage: 'sg.svg'
}, {
  countryId: 188,
  countryCode: 290,
  countryCodeString: '+290',
  alpha2: 'SH',
  countryName: 'Saint Helena',
  countryImage: 'sh.svg'
}, {
  countryId: 206,
  countryCode: 386,
  countryCodeString: '+386',
  alpha2: 'SI',
  countryName: 'Slovenia',
  countryImage: 'si.svg'
}, {
  countryId: 216,
  countryCode: 47,
  countryCodeString: '+47',
  alpha2: 'SJ',
  countryName: 'Svalbard and Jan Mayen',
  countryImage: 'sj.svg'
}, {
  countryId: 205,
  countryCode: 421,
  countryCodeString: '+421',
  alpha2: 'SK',
  countryName: 'Slovakia',
  countryImage: 'sk.svg'
}, {
  countryId: 202,
  countryCode: 232,
  countryCodeString: '+232',
  alpha2: 'SL',
  countryName: 'Sierra Leone',
  countryImage: 'sl.svg'
}, {
  countryId: 195,
  countryCode: 378,
  countryCodeString: '+378',
  alpha2: 'SM',
  countryName: 'San Marino',
  countryImage: 'sm.svg'
}, {
  countryId: 198,
  countryCode: 221,
  countryCodeString: '+221',
  alpha2: 'SN',
  countryName: 'Senegal',
  countryImage: 'sn.svg'
}, {
  countryId: 208,
  countryCode: 252,
  countryCodeString: '+252',
  alpha2: 'SO',
  countryName: 'Somalia',
  countryImage: 'so.svg'
}, {
  countryId: 215,
  countryCode: 597,
  countryCodeString: '+597',
  alpha2: 'SR',
  countryName: 'Suriname',
  countryImage: 'sr.svg'
}, {
  countryId: 211,
  countryCode: 211,
  countryCodeString: '+211',
  alpha2: 'SS',
  countryName: 'South Sudan',
  countryImage: 'ss.svg'
}, {
  countryId: 196,
  countryCode: 239,
  countryCodeString: '+239',
  alpha2: 'ST',
  countryName: 'Sao Tome and Principe',
  countryImage: 'st.svg'
}, {
  countryId: 67,
  countryCode: 503,
  countryCodeString: '+503',
  alpha2: 'SV',
  countryName: 'El Salvador',
  countryImage: 'sv.svg'
}, {
  countryId: 204,
  countryCode: 1,
  countryCodeString: '+1',
  alpha2: 'SX',
  countryName: 'Sint Maarten',
  countryImage: 'sx.svg'
}, {
  countryId: 220,
  countryCode: 963,
  countryCodeString: '+963',
  alpha2: 'SY',
  countryName: 'Syrian Arab Republic',
  countryImage: 'sy.svg'
}, {
  countryId: 217,
  countryCode: 268,
  countryCodeString: '+268',
  alpha2: 'SZ',
  countryName: 'Swaziland',
  countryImage: 'sz.svg'
}, {
  countryId: 233,
  countryCode: 1649,
  countryCodeString: '+1649',
  alpha2: 'TC',
  countryName: 'Turks and Caicos Islands',
  countryImage: 'tc.svg'
}, {
  countryId: 44,
  countryCode: 235,
  countryCodeString: '+235',
  alpha2: 'TD',
  countryName: 'Chad',
  countryImage: 'td.svg'
}, {
  countryId: 79,
  countryCode: 262,
  countryCodeString: '+262',
  alpha2: 'TF',
  countryName: 'French Southern Territories',
  countryImage: 'tf.svg'
}, {
  countryId: 226,
  countryCode: 228,
  countryCodeString: '+228',
  alpha2: 'TG',
  countryName: 'Togo',
  countryImage: 'tg.svg'
}, {
  countryId: 224,
  countryCode: 66,
  countryCodeString: '+66',
  alpha2: 'TH',
  countryName: 'Thailand',
  countryImage: 'th.svg'
}, {
  countryId: 222,
  countryCode: 992,
  countryCodeString: '+992',
  alpha2: 'TJ',
  countryName: 'Tajikistan',
  countryImage: 'tj.svg'
}, {
  countryId: 227,
  countryCode: 690,
  countryCodeString: '+690',
  alpha2: 'TK',
  countryName: 'Tokelau',
  countryImage: 'tk.svg'
}, {
  countryId: 225,
  countryCode: 670,
  countryCodeString: '+670',
  alpha2: 'TL',
  countryName: 'Timor-Leste',
  countryImage: 'tl.svg'
}, {
  countryId: 232,
  countryCode: 7370,
  countryCodeString: '+7370',
  alpha2: 'TM',
  countryName: 'Turkmenistan',
  countryImage: 'tm.svg'
}, {
  countryId: 230,
  countryCode: 216,
  countryCodeString: '+216',
  alpha2: 'TN',
  countryName: 'Tunisia',
  countryImage: 'tn.svg'
}, {
  countryId: 228,
  countryCode: 676,
  countryCodeString: '+676',
  alpha2: 'TO',
  countryName: 'Tonga',
  countryImage: 'to.svg'
}, {
  countryId: 231,
  countryCode: 90,
  countryCodeString: '+90',
  alpha2: 'TR',
  countryName: 'Turkey',
  countryImage: 'tr.svg'
}, {
  countryId: 229,
  countryCode: 1868,
  countryCodeString: '+1868',
  alpha2: 'TT',
  countryName: 'Trinidad and Tobago',
  countryImage: 'tt.svg'
}, {
  countryId: 234,
  countryCode: 688,
  countryCodeString: '+688',
  alpha2: 'TV',
  countryName: 'Tuvalu',
  countryImage: 'tv.svg'
}, {
  countryId: 221,
  countryCode: 886,
  countryCodeString: '+886',
  alpha2: 'TW',
  countryName: 'Taiwan, Province of China',
  countryImage: 'tw.svg'
}, {
  countryId: 223,
  countryCode: 255,
  countryCodeString: '+255',
  alpha2: 'TZ',
  countryName: 'Tanzania, United Republic of',
  countryImage: 'tz.svg'
}, {
  countryId: 236,
  countryCode: 380,
  countryCodeString: '+380',
  alpha2: 'UA',
  countryName: 'Ukraine',
  countryImage: 'ua.svg'
}, {
  countryId: 235,
  countryCode: 256,
  countryCodeString: '+256',
  alpha2: 'UG',
  countryName: 'Uganda',
  countryImage: 'ug.svg'
}, {
  countryId: 240,
  countryCode: 1,
  countryCodeString: '+1',
  alpha2: 'UM',
  countryName: 'United States Minor Outlying Islands',
  countryImage: 'um.svg'
}, {
  countryId: 239,
  countryCode: 1,
  countryCodeString: '+1',
  alpha2: 'US',
  countryName: 'United States',
  countryImage: 'us.svg'
}, {
  countryId: 241,
  countryCode: 598,
  countryCodeString: '+598',
  alpha2: 'UY',
  countryName: 'Uruguay',
  countryImage: 'uy.svg'
}, {
  countryId: 242,
  countryCode: 998,
  countryCodeString: '+998',
  alpha2: 'UZ',
  countryName: 'Uzbekistan',
  countryImage: 'uz.svg'
}, {
  countryId: 98,
  countryCode: 39,
  countryCodeString: '+39',
  alpha2: 'VA',
  countryName: 'Holy See (Vatican City State)',
  countryImage: 'va.svg'
}, {
  countryId: 193,
  countryCode: 1784,
  countryCodeString: '+1784',
  alpha2: 'VC',
  countryName: 'Saint Vincent and the Grenadines',
  countryImage: 'vc.svg'
}, {
  countryId: 244,
  countryCode: 58,
  countryCodeString: '+58',
  alpha2: 'VE',
  countryName: 'Venezuela',
  countryImage: 've.svg'
}, {
  countryId: 246,
  countryCode: 1284,
  countryCodeString: '+1284',
  alpha2: 'VG',
  countryName: 'Virgin Islands, British',
  countryImage: 'vg.svg'
}, {
  countryId: 247,
  countryCode: 1340,
  countryCodeString: '+1340',
  alpha2: 'VI',
  countryName: 'Virgin Islands, U.s.',
  countryImage: 'vi.svg'
}, {
  countryId: 245,
  countryCode: 84,
  countryCodeString: '+84',
  alpha2: 'VN',
  countryName: 'Viet Nam',
  countryImage: 'vn.svg'
}, {
  countryId: 243,
  countryCode: 678,
  countryCodeString: '+678',
  alpha2: 'VU',
  countryName: 'Vanuatu',
  countryImage: 'vu.svg'
}, {
  countryId: 248,
  countryCode: 681,
  countryCodeString: '+681',
  alpha2: 'WF',
  countryName: 'Wallis and Futuna',
  countryImage: 'wf.svg'
}, {
  countryId: 194,
  countryCode: 684,
  countryCodeString: '+684',
  alpha2: 'WS',
  countryName: 'Samoa',
  countryImage: 'ws.svg'
}, {
  countryId: 120,
  countryCode: 381,
  countryCodeString: '+381',
  alpha2: 'XK',
  countryName: 'Kosovo',
  countryImage: 'xk.png'
}, {
  countryId: 250,
  countryCode: 967,
  countryCodeString: '+967',
  alpha2: 'YE',
  countryName: 'Yemen',
  countryImage: 'ye.svg'
}, {
  countryId: 144,
  countryCode: 269,
  countryCodeString: '+269',
  alpha2: 'YT',
  countryName: 'Mayotte',
  countryImage: 'yt.svg'
}, {
  countryId: 209,
  countryCode: 27,
  countryCodeString: '+27',
  alpha2: 'ZA',
  countryName: 'South Africa',
  countryImage: 'za.svg'
}, {
  countryId: 251,
  countryCode: 260,
  countryCodeString: '+260',
  alpha2: 'ZM',
  countryName: 'Zambia',
  countryImage: 'zm.svg'
}, {
  countryId: 252,
  countryCode: 263,
  countryCodeString: '+263',
  alpha2: 'ZW',
  countryName: 'Zimbabwe',
  countryImage: 'zw.svg'
}];

/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup/popup.component */ 3668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);













function LoginComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.invalidMessage);
  }
}
function LoginComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Checking...!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function LoginComponent_a_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_a_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_33_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.Login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_33_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.SelectAccountType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_34_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.Login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_34_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.SelectAccountType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class LoginComponent {
  constructor(router, formbuilder, dialog, http, toastr) {
    this.router = router;
    this.formbuilder = formbuilder;
    this.dialog = dialog;
    this.http = http;
    this.toastr = toastr;
    this.loginStatus = true;
    this.isLogged = false;
    this.loginSpinner = false;
    this.GetLoginStatusResponse = '';
  }
  ngOnInit() {
    this.LoginForm();
  }
  LoginForm() {
    this.LoginAcceptForm = this.formbuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
  }
  Login() {
    this.GetLoginStatusResponse = '';
    if (this.LoginAcceptForm.get('username')?.valid && this.LoginAcceptForm.get('password')?.valid) {
      this.loginSpinner = true;
      const userName = this.LoginAcceptForm.controls['username'].value;
      const password = this.LoginAcceptForm.controls['password'].value;
      this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl + '/api/Login/GetLoginStatus' + '?UserName=' + userName + '&Password=' + password).subscribe({
        next: response => {
          this.GetLoginStatusResponse = response.status;
          if (response.status == 'Success') {
            this.loginSpinner = false;
            this.loginStatus = response.data;
            this.isLogged = response.data;
            if (this.loginStatus == true && this.isLogged == true) {
              localStorage.setItem('IsLogged', '1');
              this.router.navigate(['admin/home']);
            } else {
              this.invalidMessage = 'Invalid username or password';
            }
          } else {
            this.loginSpinner = false;
            this.toastr.warning('Something went wrong, please try again..!', '', {
              timeOut: 5000
            });
          }
        },
        error: e => {
          this.loginSpinner = false;
          this.toastr.error('Something went wrong, please try again later', '', {
            timeOut: 5000
          });
        }
      });
    } else {
      this.invalidMessage = 'All fields required..! Please try again';
      this.loginStatus = false;
    }
  }
  SelectAccountType() {
    const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, {
      disableClose: true,
      autoFocus: false,
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        Module: 'Select Account Type'
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 35,
  vars: 7,
  consts: [[1, "toolbal-style"], ["src", "assets/img/logo_black.png", 1, "toolbar-logo-img"], [1, "main-container"], [1, "login-card-container"], ["src", "assets/img/logo_black.png", 1, "top-watermark"], ["src", "assets/img/Default_User.png", 1, "default-user-img"], [3, "formGroup", "keyup.enter"], ["localForm", "ngForm"], [1, "form-group", "input-container"], [1, "input-box"], [1, "input-lbl"], [1, "bi", "bi-person-fill", "input-icon"], ["type", "text", "placeholder", "Type your username", "name", "username", "formControlName", "username", 1, "user-input"], [1, "focus-border"], [1, "bi", "bi-lock-fill", "input-icon"], ["type", "password", "placeholder", "Type your password", "name", "password", "formControlName", "password", 1, "user-input"], [4, "ngIf"], ["href", "#", "class", "lbl-forget", 4, "ngIf"], ["href", "#", "class", "lbl-forget-In", 4, "ngIf"], ["class", "btn-container", 4, "ngIf"], ["class", "btn-container-In", 4, "ngIf"], [1, "lbl-invalid-container"], [1, "invalid-indicate-container"], [1, "invalid-indicate-inner"], [1, "lbl-invalid"], ["src", "assets/gif/spinner.gif", 1, "loader"], [1, "lbl-loading"], ["href", "#", 1, "lbl-forget"], ["href", "#", 1, "lbl-forget-In"], [1, "btn-container"], ["mat-raised-button", "", "type", "button", 1, "login-btn", 3, "click"], ["mat-raised-button", "", "type", "button", 1, "signup-btn", 3, "click"], [1, "btn-container-In"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "body")(3, "mat-toolbar", 0)(4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "J.S.R.L - Shop Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2)(9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 4)(11, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function LoginComponent_Template_form_keyup_enter_12_listener() {
        return ctx.Login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br")(19, "i", 11)(20, "input", 12)(21, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9)(23, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br")(26, "i", 14)(27, "input", 15)(28, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, LoginComponent_div_29_Template, 7, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 7, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, LoginComponent_a_31_Template, 2, 0, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, LoginComponent_a_32_Template, 2, 0, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, LoginComponent_div_33_Template, 5, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, LoginComponent_div_34_Template, 5, 0, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.LoginAcceptForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loginStatus && !ctx.loginSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loginStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loginStatus);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["body[_ngcontent-%COMP%] {\r\n    background-image: url('pages-abstract.jpeg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.toolbal-style[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    height: 50px;\r\n    width: 300px;\r\n    font-weight: 400;\r\n    border-radius: 0px 30px 30px 0px;\r\n    font-size: inherit;\r\n    box-shadow: 0px 10px 20px 2px rgb(0 0 0 / 25%);\r\n}\r\n\r\n.toolbar-logo-img[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.login-card-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #ffffff47;\r\n    height: auto;\r\n    width: 350px;\r\n    min-width: 350px;\r\n    border-radius: 80px !important;\r\n    -webkit-backdrop-filter: blur(20px);\r\n    backdrop-filter: blur(20px);\r\n    box-shadow: 0px 10px 20px 2px rgb(0 0 0 / 25%);\r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.logo-text[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.default-user-img[_ngcontent-%COMP%] {\r\n    height: 110px;\r\n    margin-top: 65px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.top-watermark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 50px;\r\n    top: 25px;\r\n    left: 25px;\r\n    z-index: 5;\r\n}\r\n\r\n.input-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.user-input[_ngcontent-%COMP%] {\r\n    background: none;\r\n    height: 24px;\r\n    width: 100%;\r\n    margin-top: -22px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border: 0;\r\n    padding: 7px 0;\r\n    border-bottom: 1px solid #ccc;\r\n    padding-left: 25px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.user-input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    letter-spacing: 1px;\r\n}\r\n\r\ninput[type=\"password\"][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.user-input[_ngcontent-%COMP%] ~ .focus-border[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #28b885;\r\n    background-image: linear-gradient(to right, #ffffff, #29b684, 80%, #ffffff);\r\n    transition: 0.4s;\r\n}\r\n\r\n.user-input[_ngcontent-%COMP%]:focus ~ .focus-border[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    transition: 0.4s;\r\n    left: 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::placeholder {\r\n    color: #bfbfbf;\r\n    font-size: small;\r\n}\r\n\r\n.input-lbl[_ngcontent-%COMP%] {\r\n    font-size: smaller;\r\n}\r\n\r\n.input-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n}\r\n\r\n.lbl-invalid-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    margin-top: -10px;\r\n    height: 22px;\r\n}\r\n\r\n.invalid-indicate-container[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    width: 10px;\r\n    border-radius: 100px;\r\n    display: flex;\r\n    border: 1px solid red;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.invalid-indicate-inner[_ngcontent-%COMP%] {\r\n    height: 6px;\r\n    width: 6px;\r\n    border-radius: 100px;\r\n    background: red;\r\n}\r\n\r\n.lbl-invalid[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n    color: red;\r\n    margin-top: 17px;\r\n}\r\n\r\n.btn-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin: 20px 0px 36px 0px;\r\n    justify-content: center;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%] {\r\n    width: 145px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #4040ff !important;\r\n}\r\n\r\n.signup-btn[_ngcontent-%COMP%] {\r\n    width: 92px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #28b885 !important;\r\n}\r\n\r\n.btn-container-In[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin: 20px 0px 36px 0px;\r\n}\r\n\r\n.lbl-forget[_ngcontent-%COMP%] {\r\n    color: #676767;\r\n    font-size: small;\r\n    text-decoration: none;\r\n    padding-left: 148px;\r\n}\r\n\r\n.lbl-forget-In[_ngcontent-%COMP%] {\r\n    margin-top: 12px;\r\n    color: #676767;\r\n    font-size: small;\r\n    text-decoration: none;\r\n    padding-left: 148px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRDQUFnRTtJQUNoRSwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpREFBaUQ7SUFDakQsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QiwyRUFBMkU7SUFDM0UsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9wYWdlcy1hYnN0cmFjdC5qcGVnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnRvb2xiYWwtc3R5bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDMwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAycHggcmdiKDAgMCAwIC8gMjUlKTtcclxufVxyXG5cclxuLnRvb2xiYXItbG9nby1pbWcge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNDc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogODBweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDJweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG59XHJcblxyXG4ubG9nby1pbWcge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubG9nby10ZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRlZmF1bHQtdXNlci1pbWcge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4udG9wLXdhdGVybWFyayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmlucHV0LWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udXNlci1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4udXNlci1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLnVzZXItaW5wdXR+LmZvY3VzLWJvcmRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yjg4NTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiwgIzI5YjY4NCwgODAlLCAjZmZmZmZmKTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi51c2VyLWlucHV0OmZvY3Vzfi5mb2N1cy1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmlucHV0LWxibCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmxibC1pbnZhbGlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWluZGljYXRlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmludmFsaWQtaW5kaWNhdGUtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbi5sYmwtaW52YWxpZCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4IDM2cHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG4gICAgd2lkdGg6IDE0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzQwNDBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lnbnVwLWJ0biB7XHJcbiAgICB3aWR0aDogOTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMyOGI4ODUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXItSW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTVweDtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMzZweCAwcHg7XHJcbn1cclxuXHJcbi5sYmwtZm9yZ2V0IHtcclxuICAgIGNvbG9yOiAjNjc2NzY3O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTQ4cHg7XHJcbn1cclxuXHJcbi5sYmwtZm9yZ2V0LUluIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBjb2xvcjogIzY3Njc2NztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0OHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      opacity: 1
    }))])])]
  }
});

/***/ }),

/***/ 3668:
/*!******************************************************!*\
  !*** ./src/app/pages/login/popup/popup.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);








function PopupComponent_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
  }
}
function PopupComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to Exit?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5)(4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.Exit_Yes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.Exit_No());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function PopupComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 8)(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.SelectedAccount_C());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_4_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.SelectedAccount_A());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Shop Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.Exit_No());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
class PopupComponent {
  constructor(router, values, dialogRef, data) {
    this.router = router;
    this.values = values;
    this.dialogRef = dialogRef;
    this.data = data;
    this.passData = {
      Country: [],
      Module: '',
      Data: []
    };
  }
  Exit_Yes() {
    this.dialogRef.close();
    this.router.navigate(['login']);
  }
  Exit_No() {
    this.dialogRef.close();
  }
  SelectedAccount_A() {
    this.router.navigate(['signup/admin']);
    this.dialogRef.close();
  }
  SelectedAccount_C() {
    this.router.navigate(['signup/customer']);
    this.dialogRef.close();
  }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) {
  return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
};
PopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PopupComponent,
  selectors: [["app-popup"]],
  decls: 5,
  vars: 5,
  consts: [[1, "header"], ["class", "bi bi-person-fill-gear AccType-icon", 4, "ngIf"], ["class", "content-container", 4, "ngIf"], [1, "bi", "bi-person-fill-gear", "AccType-icon"], [1, "content-container"], [1, "btn-Container"], ["mat-raised-button", "", "type", "button", 1, "btn-yes", 3, "click"], ["mat-raised-button", "", "type", "button", 1, "btn-no", 3, "click"], [1, "option-btn-container"], ["mat-raised-button", "", "type", "button", 1, "option-btn", 3, "click"], [1, "bi", "bi-person-circle"], [1, "bi", "bi-shop"], ["mat-raised-button", "", "type", "button", 1, "btn-no", "accountChange_exit", 3, "click"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopupComponent_i_1_Template, 1, 0, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopupComponent_div_3_Template, 8, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupComponent_div_4_Template, 11, 1, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.Module == "Select Account Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.Module, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.Module == "Exit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.Module == "Select Account Type");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar],
  styles: [".header[_ngcontent-%COMP%] {\r\n    width: 350px !important;\r\n    margin-top: -75px;\r\n    font-size: inherit;\r\n    letter-spacing: 1px;\r\n    background: #ffffff87;\r\n}\r\n\r\n.AccType-icon[_ngcontent-%COMP%] {\r\n    margin: 0px 8px;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n    margin-top: 22px;\r\n    padding: 0px 25px;\r\n}\r\n\r\n.btn-no[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    margin-bottom: 20px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #fd5656 !important;\r\n}\r\n\r\n.btn-yes[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    margin-bottom: 20px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #28b885 !important;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n    margin-top: 22px;\r\n    padding: 0px 25px;\r\n}\r\n\r\n.option-btn-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    flex-flow: column;\r\n    margin: 40px 0px;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.option-btn[_ngcontent-%COMP%] {\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #435260 !important;\r\n    width: 180px;\r\n}\r\n\r\n.accountChange_exit[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    margin: 14px 0px -14px 0px;\r\n}\r\n\r\n.btn-Container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-flow: row-reverse;\r\n    gap: 10px;\r\n    margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vcG9wdXAvcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTc1cHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjg3O1xyXG59XHJcblxyXG4uQWNjVHlwZS1pY29uIHtcclxuICAgIG1hcmdpbjogMHB4IDhweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLmJ0bi1ubyB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmQ1NjU2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4teWVzIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMyOGI4ODUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLm9wdGlvbi1idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIG1hcmdpbjogNDBweCAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ub3B0aW9uLWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1MjYwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbi5hY2NvdW50Q2hhbmdlX2V4aXQge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxNHB4IDBweCAtMTRweCAwcHg7XHJcbn1cclxuXHJcbi5idG4tQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      opacity: 1
    }))])])]
  }
});

/***/ }),

/***/ 7967:
/*!**********************************************!*\
  !*** ./src/app/pages/oops/oops.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OopsComponent": () => (/* binding */ OopsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OopsComponent {}
OopsComponent.ɵfac = function OopsComponent_Factory(t) {
  return new (t || OopsComponent)();
};
OopsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OopsComponent,
  selectors: [["app-oops"]],
  decls: 2,
  vars: 0,
  template: function OopsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "oops works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8955:
/*!*********************************************************************!*\
  !*** ./src/app/pages/signup/admin-signup/admin-signup.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSignupComponent": () => (/* binding */ AdminSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/stepper */ 1861);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! google-libphonenumber */ 4535);
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/popup.component */ 9363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup.service */ 7332);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ 4193);

















function AdminSignupComponent_i_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Shop name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_i_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_i_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_i_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_i_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_div_94_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 78);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_div_94_i_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_div_94_i_9_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r48.GetCurrentLocality());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_div_94_i_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_div_94_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_div_94_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "div", 26)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "locality");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br")(5, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AdminSignupComponent_div_94_img_6_Template, 1, 1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 76)(8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AdminSignupComponent_div_94_i_9_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AdminSignupComponent_div_94_i_10_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AdminSignupComponent_div_94_span_11_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AdminSignupComponent_div_94_span_12_Template, 1, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.loader_Locality);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.switchLocality && !ctx_r17.loader_Locality);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r17.switchLocality && ((tmp_2_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_2_0.touched) && !ctx_r17.loader_Locality);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_4_0.touched) && !ctx_r17.loader_Locality);
  }
}
function AdminSignupComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "div", 12)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br")(5, "i", 74)(6, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", true);
  }
}
function AdminSignupComponent_i_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Category name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_i_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_i_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_i_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 81);
  }
}
function AdminSignupComponent_i_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_i_167_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter your username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Username already taken ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_i_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Need at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function AdminSignupComponent_i_193_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 70);
  }
}
function AdminSignupComponent_span_194_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter confirmation password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password confirmation does not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminSignupComponent_span_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
class AdminSignupComponent {
  constructor(Countries, signupService, formbuilder, toastr, dialog, router, http) {
    this.Countries = Countries;
    this.signupService = signupService;
    this.formbuilder = formbuilder;
    this.toastr = toastr;
    this.dialog = dialog;
    this.router = router;
    this.http = http;
    this.currentLocationURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLocationURL;
    this.countryName = '';
    this.countryCode = 91;
    this.country_alpha2 = 'IN';
    this.countryImage = 'in.svg';
    this.state = '';
    this.city = '';
    this.locality = '';
    this.locationByPin = [];
    this.localityList = [];
    this.pincode = '';
    this.lastPincode = '';
    this.isWrongPincode = false;
    this.switchLocality = false;
    this.isValidLocality = true;
    this.contactNumberLength = 10;
    this.isValidNumber = true;
    this.isValidConfirmation_P = true;
    this.userNameAvailablity = true;
    this.loader_Locality = false;
    this.Admin_SignUp = {
      ShopName: '',
      ShopContactNo: '',
      ContactNo: '',
      DoorNo: '',
      Street: '',
      CountryName: '',
      CountryCode: 0,
      CountryImage: '',
      Alpha2: '',
      State: '',
      City: '',
      Locality: '',
      PinCode: 0,
      UserName: '',
      Password: '',
      Name: '',
      ShopCategory: ''
    };
  }
  ngOnInit() {
    this.AdminSignupForm_1();
    this.AdminSignupForm_2();
  }
  AdminSignupForm_1() {
    this.Form_1 = this.formbuilder.group({
      shopName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      countryCode: ['+91', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      contactNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(7)]],
      doorNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      pinCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      locality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      shopCategory: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  AdminSignupForm_2() {
    this.Form_2 = this.formbuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      countryCode: ['+91', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      contactNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
      confirmationPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  popup_Countries() {
    const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, {
      disableClose: false,
      autoFocus: true,
      height: '328px',
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        callBack_value: this.pass_value.bind(this),
        Module: 'Select Country'
      }
    });
  }
  ChangeCurrentAccount() {
    const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, {
      disableClose: false,
      autoFocus: true,
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        callBack_value: this.pass_value.bind(this),
        Module: 'Changing Account Type',
        AccountType: 'Admin',
        IsAlert: true
      }
    });
  }
  popup_Exit() {
    const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, {
      disableClose: false,
      autoFocus: true,
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        Module: 'Exit',
        IsAlert: true
      }
    });
  }
  GetCurrentLocality() {
    const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, {
      disableClose: false,
      autoFocus: true,
      height: '328px',
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        callBack_value: this.pass_value.bind(this),
        Module: 'Select Your Locality',
        DropDownData: this.localityList,
        IsAlert: false
      }
    });
  }
  pass_value(data) {
    if (data.Module == 'Select Country') {
      this.countryCode = data.Country[0].countryCode;
      this.countryImage = data.Country[0].countryImage;
      this.country_alpha2 = data.Country[0].alpha2;
      this.Form_1.patchValue({
        countryCode: data.Country[0].countryCodeString
      });
      this.Form_1.patchValue({
        pinCode: ''
      });
      this.Form_1.patchValue({
        locality: ''
      });
      this.Form_1.patchValue({
        city: ''
      });
      this.switchLocality = false;
      this.isValidLocality = true;
      this.IsValidContact();
    }
    if (data.Module == 'Select Your Locality') {
      this.pincode = this.pincode.split(' ').join('');
      this.locality = data.Data[0].Name;
      this.Form_1.patchValue({
        locality: this.locality
      });
      this.Form_1.patchValue({
        pinCode: this.pincode
      });
      this.isValidLocality = true;
    }
  }
  GetCurrentLocationByPin() {
    this.countryName = '';
    this.state = '';
    this.city = '';
    const currentPinCode = this.Form_1.controls['pinCode'].value;
    if (this.lastPincode != currentPinCode) {
      if (currentPinCode > 0) {
        this.loader_Locality = true;
        const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLocationURL + 'address=' + currentPinCode + '&key=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.geoCodingApiKey;
        this.http.get(URL).subscribe(response => {
          this.locationByPin = [];
          this.locationByPin.push(response);
          if (this.locationByPin[0].status == 'OK') {
            this.isWrongPincode = false;
            this.lastPincode = currentPinCode;
            const data = this.locationByPin[0].results[0].address_components;
            const LocalityListData = this.locationByPin[0].results[0].postcode_localities;
            for (let i = 0; i < data.length; i++) {
              for (let j = 0; j < data[i].types.length; j++) {
                if (data[i].types[j] == 'country' && this.countryName.trim().length == 0 && this.countryName != null) {
                  this.countryName = data[i].long_name;
                }
                if (data[i].types[j - 1] == 'country' && data[i].types[j] == 'political') {
                  this.country_alpha2 = data[i].short_name;
                  const CountryData = this.Countries.find(x => x.alpha2 === this.country_alpha2);
                  if (CountryData != null) {
                    this.Form_1.patchValue({
                      countryCode: '+' + CountryData.countryCode
                    });
                    this.countryImage = CountryData.countryImage;
                    this.countryCode = CountryData.countryCode;
                    this.country_alpha2 = CountryData.alpha2;
                    this.IsValidContact();
                  }
                }
                if (data[i].types[j] == 'administrative_area_level_1' && this.state.trim().length == 0 && this.state != null) {
                  this.state = data[i].long_name;
                }
                if (data[i].types[j] == 'locality' && this.city.trim().length == 0 && this.city != null) {
                  this.city = data[i].long_name;
                }
                if (data[i].types[j] == 'postal_code' && LocalityListData != null && LocalityListData.length > 0) {
                  this.pincode = data[i].long_name;
                }
              }
            }
            if (LocalityListData != null && LocalityListData.length > 0) {
              this.localityList = [];
              this.localityList = this.locationByPin[0].results[0].postcode_localities;
              this.loader_Locality = false;
              this.GetCurrentLocality();
              this.switchLocality = true;
              this.isValidLocality = true;
              this.Form_1.patchValue({
                city: this.city
              });
            } else {
              this.loader_Locality = false;
              this.switchLocality = false;
              this.isValidLocality = false;
              this.Form_1.patchValue({
                city: this.city
              });
            }
          } else if (this.locationByPin[0].status == 'ZERO_RESULTS') {
            this.loader_Locality = false;
            this.isWrongPincode = true;
          } else {
            this.loader_Locality = false;
            this.toastr.warning('Something went wrong, please try again..!', '', {
              timeOut: 5000
            });
          }
        });
      }
    }
  }
  UserNameAvailability() {
    if (this.Form_2.controls['username'].value.trim().length > 0) {
      this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl + '/api/Signup/UserNameAvailability?UserName=' + this.Form_2.controls['username'].value).subscribe(response => {
        if (response.status == 'Success') {
          this.userNameAvailablity = response.data;
        } else {
          this.toastr.warning('Something went wrong, please try again..!', '', {
            timeOut: 5000
          });
          this.userNameAvailablity = false;
        }
      });
    }
  }
  Field_Restriction_N(e) {
    if (e.keyCode == 49 || e.keyCode == 50 || e.keyCode == 51 || e.keyCode == 52 || e.keyCode == 53 || e.keyCode == 54 || e.keyCode == 55 || e.keyCode == 56 || e.keyCode == 57 || e.keyCode == 48 || e.keyCode == 13) {
      return;
    } else {
      e.preventDefault();
      this.toastr.warning('Only numbers allowed', '', {
        timeOut: 5000
      });
    }
  }
  IsValidContact() {
    if (this.Form_1.controls['contactNo'].value > 0 && this.Form_1.controls['contactNo'].valid) {
      const phoneNumberUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_5__.PhoneNumberUtil.getInstance();
      const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(this.Form_1.controls['contactNo'].value, this.country_alpha2);
      this.isValidNumber = phoneNumberUtil.isValidNumber(phoneNumber);
    }
  }
  checkConfirmation_P() {
    if (this.Form_2.controls['password'].value.trim().length > 0 && this.Form_2.controls['password'].valid) {
      if (this.Form_2.controls['confirmationPassword'].value == this.Form_2.controls['password'].value) {
        this.isValidConfirmation_P = true;
      } else {
        this.isValidConfirmation_P = false;
      }
    }
  }
  next() {
    if (!this.isValidLocality) {
      this.Form_1.patchValue({
        locality: 'No Data'
      });
    }
    this.Form_1.markAllAsTouched();
  }
  SignUp() {
    if (this.Form_1.valid && this.isValidNumber && !this.isWrongPincode && this.Form_2.valid && this.isValidConfirmation_P && this.userNameAvailablity) {
      this.Admin_SignUp.ShopName = this.Form_1.controls['shopName'].value;
      this.Admin_SignUp.ShopCategory = this.Form_1.controls['shopCategory'].value;
      this.Admin_SignUp.ShopContactNo = this.Form_1.controls['contactNo'].value;
      this.Admin_SignUp.DoorNo = this.Form_1.controls['doorNo'].value;
      this.Admin_SignUp.Street = this.Form_1.controls['street'].value;
      this.Admin_SignUp.PinCode = this.Form_1.controls['pinCode'].value;
      this.Admin_SignUp.Password = this.Form_2.controls['password'].value;
      this.Admin_SignUp.UserName = this.Form_2.controls['username'].value;
      this.Admin_SignUp.ContactNo = this.Form_2.controls['contactNo'].value;
      this.Admin_SignUp.Name = this.Form_2.controls['name'].value;
      this.Admin_SignUp.CountryName = this.countryName;
      this.Admin_SignUp.CountryCode = this.countryCode;
      this.Admin_SignUp.CountryImage = this.countryImage;
      this.Admin_SignUp.Alpha2 = this.country_alpha2;
      this.Admin_SignUp.City = this.city;
      if (!this.isValidLocality) {
        this.Admin_SignUp.Locality = this.Form_1.controls['locality'].value;
      } else {
        this.Admin_SignUp.Locality = this.locality;
      }
      this.Admin_SignUp.State = this.state;
      this.signupService.AdminSignup(this.Admin_SignUp).subscribe(response => {
        if (response.status == 'Success') {
          this.toastr.success('Successfully Signed Up!', '', {
            timeOut: 5000
          });
          this.router.navigate(['home']);
        } else {
          this.toastr.warning('Something went wrong, please try again..!', '', {
            timeOut: 5000
          });
        }
      });
    }
  }
}
AdminSignupComponent.ɵfac = function AdminSignupComponent_Factory(t) {
  return new (t || AdminSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('COUNTRIES'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient));
};
AdminSignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AdminSignupComponent,
  selectors: [["app-admin-signup"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__.STEPPER_GLOBAL_OPTIONS,
    useValue: {
      showError: true
    }
  }])],
  decls: 223,
  vars: 56,
  consts: [[1, "toolbal-style"], ["src", "assets/img/logo_black.png", 1, "toolbar-logo-img"], [1, "main-container"], [1, "signup-card-container"], [1, "logo-container"], ["src", "assets/img/logo_black.png", 1, "logo-img"], ["claass", "logo-text"], [1, "form-container"], [3, "linear"], ["stepper", ""], ["linear", "", 3, "stepControl"], [3, "formGroup"], [1, "input-box"], [1, "stepper-name"], ["mat-raised-button", "", "type", "button", 1, "close-btn-stepper", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "form-group", "input-container"], [1, "input-box", "input-shopName", "Index-1"], [1, "input-lbl"], [1, "bi", "bi-shop", "input-icon"], ["type", "text", "placeholder", "Type your shop name", "formControlName", "shopName", 1, "user-input"], [1, "focus-border"], ["class", "bi bi-exclamation-circle invalid-red-info-icon", 4, "ngIf"], ["class", "invalid-field", 4, "ngIf"], ["class", "invalid-field-bar-red", 4, "ngIf"], [1, "splited-input-2"], [1, "input-box", "Index-1"], [1, "country-icon", 3, "src"], [1, "gms-overlap", 3, "click"], ["type", "text", "formControlName", "countryCode", 1, "user-input-left", "user-input", 3, "autocomplete"], [1, "bi", "bi-telephone-fill", "input-icon"], ["type", "tel", "placeholder", "Ex. 1234567890", "formControlName", "contactNo", 1, "user-input-right", "user-input", "input-contact", 3, "keypress", "focusout"], [1, "splited-input-1"], [1, "bi", "bi-journal-text", "input-icon"], ["type", "text", "placeholder", "No.13B", "formControlName", "doorNo", 1, "user-input-left", "user-input"], [1, "bi", "bi-geo-alt-fill", "input-icon"], ["type", "text", "placeholder", "2nd Block, 1st Street", "formControlName", "street", 1, "user-input-right", "user-input", "input-locality"], [1, "bi", "bi-globe2", "input-icon"], ["type", "number", "placeholder", "600118", "formControlName", "pinCode", 1, "user-input-left", "user-input", 3, "focusout", "keypress"], ["class", "invalid-field-zip", 4, "ngIf"], ["class", "form-group input-container", 4, "ngIf"], [1, "bi", "bi-person-vcard-fill", "input-icon"], ["type", "text", "placeholder", "Ex.Grocery store, Super market, etc...", "formControlName", "shopCategory", 1, "user-input-left", "user-input"], [1, "btn-container-stepper_1"], ["mat-raised-button", "", "type", "button", 1, "bck-btn", 3, "click"], ["matStepperNext", "", 1, "bi", "bi-arrow-repeat"], ["mat-raised-button", "", "matStepperNext", "", "type", "submit", 1, "nxt-btn", 3, "click"], [1, "bi", "bi-arrow-right-circle-fill"], [1, "bi", "bi-person-circle", "input-icon"], ["type", "text", "placeholder", "Type your name", "formControlName", "name", 1, "user-input"], [1, "input-box", "input-username", "admin_UserName", "Index-1"], ["class", "bi bi-check-circle-fill input-icon valid-field-value", 4, "ngIf"], [1, "high-contrast-bg"], ["type", "text", "placeholder", "Type your username", "formControlName", "username", 1, "user-input", 3, "keyup"], [1, "input-box", "input-s-password"], [1, "bi", "bi-key-fill", "input-icon"], ["type", "password", "placeholder", "Type your password", "formControlName", "password", 1, "user-input", "input-alignment", 3, "focusout", "paste"], [1, "extended-input"], [1, "input-box", "input-s-c-password"], [1, "bi", "bi-arrow-clockwise", "input-icon"], ["type", "text", "placeholder", "Type confirmation password", "formControlName", "confirmationPassword", 1, "user-input", "input-alignment", 3, "focusout"], [1, "btn-container-stepper_2"], [1, "stepper-name_end"], ["mat-raised-button", "", "type", "button", 1, "close-btn-s2", 3, "click"], [1, "free-payment"], [1, "bi", "bi-emoji-smile-fill", "smile-icons"], [1, "btn-container-stepper_end"], ["mat-raised-button", "", "matStepperPrevious", "", "type", "button", 1, "bck-btn-signup"], ["matStepperNext", "", 1, "bi", "bi-arrow-left-circle-fill"], ["mat-raised-button", "", "type", "submit", 1, "signup-btn", 3, "click"], [1, "bi", "bi-exclamation-circle", "invalid-red-info-icon"], [1, "invalid-field"], [1, "invalid-field-bar-red"], [1, "invalid-field-zip"], [1, "bi", "bi-geo-fill", "input-icon"], ["class", "loader loader-left", "src", "assets/gif/spinner.gif", 4, "ngIf"], ["type", "text", "placeholder", "Ex. Kodungaiyur", "formControlName", "locality", 1, "user-input-right", "user-input", "input-locality"], ["matStepperNext", "", "class", "bi bi-arrow-repeat change-locality", 3, "click", 4, "ngIf"], ["src", "assets/gif/spinner.gif", 1, "loader", "loader-left"], ["matStepperNext", "", 1, "bi", "bi-arrow-repeat", "change-locality", 3, "click"], ["type", "text", "placeholder", "Ex. Chennai", "formControlName", "city", 1, "user-input-right", "user-input", "input-locality", 3, "readonly"], [1, "bi", "bi-check-circle-fill", "input-icon", "valid-field-value"]],
  template: function AdminSignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Signup Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "body")(3, "mat-toolbar", 0)(4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "J.S.R.L - Shop Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "div", 4)(11, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " J.S.R.L ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "mat-stepper", 8, 9)(18, "mat-step", 10)(19, "form", 11)(20, "div", 12)(21, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Shop Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_button_click_23_listener() {
        return ctx.popup_Exit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Exit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16)(27, "div", 17)(28, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Shop Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br")(31, "i", 19)(32, "input", 20)(33, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AdminSignupComponent_i_34_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AdminSignupComponent_span_35_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AdminSignupComponent_span_36_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 25)(38, "div", 16)(39, "div", 26)(40, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Country Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "br")(43, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_p_click_44_listener() {
        return ctx.popup_Countries();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 29)(46, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 16)(48, "div", 26)(49, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Contact No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "br")(52, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AdminSignupComponent_Template_input_keypress_53_listener($event) {
        return ctx.Field_Restriction_N($event);
      })("focusout", function AdminSignupComponent_Template_input_focusout_53_listener() {
        return ctx.IsValidContact();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, AdminSignupComponent_i_55_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, AdminSignupComponent_span_56_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, AdminSignupComponent_span_57_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, AdminSignupComponent_span_58_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 32)(60, "div", 16)(61, "div", 26)(62, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Shop No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "br")(65, "i", 33)(66, "input", 34)(67, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, AdminSignupComponent_i_68_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, AdminSignupComponent_span_69_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, AdminSignupComponent_span_70_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 16)(72, "div", 26)(73, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Street");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "br")(76, "i", 35)(77, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, AdminSignupComponent_i_78_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, AdminSignupComponent_span_80_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 32)(82, "div", 16)(83, "div", 26)(84, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Zip/Pin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "br")(87, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function AdminSignupComponent_Template_input_focusout_88_listener() {
        return ctx.GetCurrentLocationByPin();
      })("keypress", function AdminSignupComponent_Template_input_keypress_88_listener($event) {
        return ctx.Field_Restriction_N($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, AdminSignupComponent_i_90_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, AdminSignupComponent_span_91_Template, 2, 0, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, AdminSignupComponent_span_92_Template, 2, 0, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, AdminSignupComponent_span_93_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](94, AdminSignupComponent_div_94_Template, 13, 5, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, AdminSignupComponent_div_95_Template, 7, 1, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 32)(97, "div", 16)(98, "div", 12)(99, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Shop Categoty");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "br")(102, "i", 41)(103, "input", 42)(104, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](105, AdminSignupComponent_i_105_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](106, AdminSignupComponent_span_106_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](107, AdminSignupComponent_span_107_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 43)(109, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_button_click_109_listener() {
        return ctx.ChangeCurrentAccount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, " Switch account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_button_click_112_listener() {
        return ctx.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, " Next ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "mat-step", 10)(116, "form", 11)(117, "div", 12)(118, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Personal Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_button_click_120_listener() {
        return ctx.popup_Exit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, " Exit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 16)(124, "div", 17)(125, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "br")(128, "i", 48)(129, "input", 49)(130, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](131, AdminSignupComponent_i_131_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](132, AdminSignupComponent_span_132_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](133, AdminSignupComponent_span_133_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 25)(135, "div", 16)(136, "div", 26)(137, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Country Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "br")(140, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_p_click_141_listener() {
        return ctx.popup_Countries();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "input", 29)(143, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 16)(145, "div", 26)(146, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Contact No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "br")(149, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AdminSignupComponent_Template_input_keypress_150_listener($event) {
        return ctx.Field_Restriction_N($event);
      })("focusout", function AdminSignupComponent_Template_input_focusout_150_listener() {
        return ctx.IsValidContact();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](152, AdminSignupComponent_i_152_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](153, AdminSignupComponent_span_153_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](154, AdminSignupComponent_span_154_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](155, AdminSignupComponent_span_155_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 16)(157, "div", 50)(158, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "User Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "br")(161, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](162, AdminSignupComponent_i_162_Template, 1, 0, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function AdminSignupComponent_Template_input_keyup_164_listener() {
        return ctx.UserNameAvailability();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](166, AdminSignupComponent_i_166_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](167, AdminSignupComponent_i_167_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](168, AdminSignupComponent_span_168_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](169, AdminSignupComponent_span_169_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](170, AdminSignupComponent_span_170_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 16)(172, "div", 54)(173, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "br")(176, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function AdminSignupComponent_Template_input_focusout_177_listener() {
        return ctx.checkConfirmation_P();
      })("paste", function AdminSignupComponent_Template_input_paste_177_listener() {
        return false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "span", 57)(179, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](180, AdminSignupComponent_i_180_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](181, AdminSignupComponent_span_181_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](182, AdminSignupComponent_span_182_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](183, AdminSignupComponent_span_183_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "div", 16)(185, "div", 58)(186, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](188, "br")(189, "i", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function AdminSignupComponent_Template_input_focusout_190_listener() {
        return ctx.checkConfirmation_P();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "span", 57)(192, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](193, AdminSignupComponent_i_193_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](194, AdminSignupComponent_span_194_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](195, AdminSignupComponent_span_195_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](196, AdminSignupComponent_span_196_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 61)(198, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_button_click_198_listener() {
        return ctx.ChangeCurrentAccount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, " Switch account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_button_click_201_listener() {
        return ctx.Form_2.markAllAsTouched();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, " Next ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](203, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "mat-step")(205, "div", 16)(206, "div", 12)(207, "p", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "Payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_button_click_209_listener() {
        return ctx.popup_Exit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, " Exit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 12)(213, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Be pleasure..! For now it's completly free");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 66)(218, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](219, "i", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSignupComponent_Template_button_click_221_listener() {
        return ctx.SignUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      let tmp_16_0;
      let tmp_17_0;
      let tmp_18_0;
      let tmp_19_0;
      let tmp_20_0;
      let tmp_23_0;
      let tmp_24_0;
      let tmp_25_0;
      let tmp_28_0;
      let tmp_29_0;
      let tmp_30_0;
      let tmp_33_0;
      let tmp_34_0;
      let tmp_35_0;
      let tmp_36_0;
      let tmp_37_0;
      let tmp_38_0;
      let tmp_39_0;
      let tmp_40_0;
      let tmp_41_0;
      let tmp_42_0;
      let tmp_43_0;
      let tmp_44_0;
      let tmp_45_0;
      let tmp_46_0;
      let tmp_47_0;
      let tmp_48_0;
      let tmp_49_0;
      let tmp_50_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("linear", false)("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.Form_1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form_1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.Form_1.get("shopName")) == null ? null : tmp_3_0.errors) && ((tmp_3_0 = ctx.Form_1.get("shopName")) == null ? null : tmp_3_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.Form_1.get("shopName")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.Form_1.get("shopName")) == null ? null : tmp_4_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.Form_1.get("shopName")) == null ? null : tmp_5_0.errors) && ((tmp_5_0 = ctx.Form_1.get("shopName")) == null ? null : tmp_5_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/img/Countries/", ctx.countryImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autocomplete", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_8_0.errors) && ((tmp_8_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_8_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_9_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (!ctx.isValidNumber || ((tmp_10_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_10_0.hasError("minlength"))) && ((tmp_10_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_10_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (!ctx.isValidNumber || ((tmp_11_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_11_0.errors)) && ((tmp_11_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_11_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_12_0.errors) && ((tmp_12_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_12_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_13_0.hasError("required")) && ((tmp_13_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_13_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_14_0.errors) && ((tmp_14_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_14_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.Form_1.get("street")) == null ? null : tmp_15_0.errors) && ((tmp_15_0 = ctx.Form_1.get("street")) == null ? null : tmp_15_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.Form_1.get("street")) == null ? null : tmp_16_0.hasError("required")) && ((tmp_16_0 = ctx.Form_1.get("street")) == null ? null : tmp_16_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_17_0.errors) && ((tmp_17_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_17_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_18_0.hasError("required")) && ((tmp_18_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_18_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isWrongPincode && ((tmp_19_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_19_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_20_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_20_0.errors) && ((tmp_20_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_20_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isValidLocality);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isValidLocality);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_23_0 = ctx.Form_1.get("shopCategory")) == null ? null : tmp_23_0.errors) && ((tmp_23_0 = ctx.Form_1.get("shopCategory")) == null ? null : tmp_23_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_24_0 = ctx.Form_1.get("shopCategory")) == null ? null : tmp_24_0.hasError("required")) && ((tmp_24_0 = ctx.Form_1.get("shopCategory")) == null ? null : tmp_24_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_25_0 = ctx.Form_1.get("shopCategory")) == null ? null : tmp_25_0.errors) && ((tmp_25_0 = ctx.Form_1.get("shopCategory")) == null ? null : tmp_25_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.Form_2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form_2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_28_0 = ctx.Form_2.get("name")) == null ? null : tmp_28_0.errors) && ((tmp_28_0 = ctx.Form_2.get("name")) == null ? null : tmp_28_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_29_0 = ctx.Form_2.get("name")) == null ? null : tmp_29_0.hasError("required")) && ((tmp_29_0 = ctx.Form_2.get("name")) == null ? null : tmp_29_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_30_0 = ctx.Form_2.get("name")) == null ? null : tmp_30_0.errors) && ((tmp_30_0 = ctx.Form_2.get("name")) == null ? null : tmp_30_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/img/Countries/", ctx.countryImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autocomplete", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_33_0 = ctx.Form_2.get("contactNo")) == null ? null : tmp_33_0.errors) && ((tmp_33_0 = ctx.Form_2.get("contactNo")) == null ? null : tmp_33_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_34_0 = ctx.Form_2.get("contactNo")) == null ? null : tmp_34_0.hasError("required")) && ((tmp_34_0 = ctx.Form_2.get("contactNo")) == null ? null : tmp_34_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isValidNumber && ((tmp_35_0 = ctx.Form_2.get("contactNo")) == null ? null : tmp_35_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_36_0 = ctx.Form_2.get("contactNo")) == null ? null : tmp_36_0.errors) && ((tmp_36_0 = ctx.Form_2.get("contactNo")) == null ? null : tmp_36_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userNameAvailablity && !((tmp_37_0 = ctx.Form_2.get("username")) == null ? null : tmp_37_0.errors) && ((tmp_37_0 = ctx.Form_2.get("username")) == null ? null : tmp_37_0.value.trim().length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_38_0 = ctx.Form_2.get("username")) == null ? null : tmp_38_0.errors) && ((tmp_38_0 = ctx.Form_2.get("username")) == null ? null : tmp_38_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.userNameAvailablity && !((tmp_39_0 = ctx.Form_2.get("username")) == null ? null : tmp_39_0.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_40_0 = ctx.Form_2.get("username")) == null ? null : tmp_40_0.hasError("required")) && ((tmp_40_0 = ctx.Form_2.get("username")) == null ? null : tmp_40_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.userNameAvailablity && !((tmp_41_0 = ctx.Form_2.get("username")) == null ? null : tmp_41_0.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_42_0 = ctx.Form_2.get("username")) == null ? null : tmp_42_0.errors) && ((tmp_42_0 = ctx.Form_2.get("username")) == null ? null : tmp_42_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_43_0 = ctx.Form_2.get("password")) == null ? null : tmp_43_0.errors) && ((tmp_43_0 = ctx.Form_2.get("password")) == null ? null : tmp_43_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_44_0 = ctx.Form_2.get("password")) == null ? null : tmp_44_0.hasError("required")) && ((tmp_44_0 = ctx.Form_2.get("password")) == null ? null : tmp_44_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_45_0 = ctx.Form_2.get("password")) == null ? null : tmp_45_0.hasError("minlength")) && ((tmp_45_0 = ctx.Form_2.get("password")) == null ? null : tmp_45_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_46_0 = ctx.Form_2.get("password")) == null ? null : tmp_46_0.errors) && ((tmp_46_0 = ctx.Form_2.get("password")) == null ? null : tmp_46_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_47_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_47_0.errors) && ((tmp_47_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_47_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_48_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_48_0.hasError("required")) && ((tmp_48_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_48_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isValidConfirmation_P && ((tmp_49_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_49_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_50_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_50_0.errors) && ((tmp_50_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_50_0.touched));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepperPrevious],
  styles: ["body[_ngcontent-%COMP%] {\r\n    background-image: url('pages-abstract.jpeg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.toolbal-style[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    height: 50px;\r\n    width: 300px;\r\n    font-weight: 400;\r\n    border-radius: 0px 30px 30px 0px;\r\n    font-size: inherit;\r\n    box-shadow: 0px 10px 20px 2px rgb(0 0 0 / 25%);\r\n}\r\n\r\n.toolbar-logo-img[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.signup-card-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #ffffff47;\r\n    height: auto;\r\n    width: 350px;\r\n    border-radius: 80px !important;\r\n    -webkit-backdrop-filter: blur(20px);\r\n            backdrop-filter: blur(20px);\r\n    box-shadow: 0px 10px 20px 2px rgb(0 0 0 / 25%);\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 40px;\r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.logo-text[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 190px;\r\n}\r\n\r\n.input-shopName[_ngcontent-%COMP%] {\r\n    margin-top: 260px;\r\n    margin-bottom: -173px;\r\n}\r\n\r\n.user-input-left[_ngcontent-%COMP%] {\r\n    background: none;\r\n    height: 24px;\r\n    width: 100%;\r\n    margin-top: -22px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border: 0;\r\n    padding: 7px 0;\r\n    border-bottom: 1px solid #ccc;\r\n    padding-left: 25px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.user-input-right[_ngcontent-%COMP%] {\r\n    background: none;\r\n    height: 24px;\r\n    width: 130px !important;\r\n    margin-top: -22px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border: 0;\r\n    padding: 7px 0;\r\n    border-bottom: 1px solid #ccc;\r\n    padding-left: 25px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.splited-input-1[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin-top: -193px;\r\n    width: 100%;\r\n}\r\n\r\n.splited-input-2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin-top: -39px;\r\n    width: 100%;\r\n}\r\n\r\n.bck-btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    min-width: 167px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #435260 !important;\r\n}\r\n\r\n.nxt-btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    min-width: 87px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #4040ff !important;\r\n}\r\n\r\n.stepper-name[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border-radius: 50px;\r\n    background: #435261;\r\n    color: white;\r\n    padding: 0px 10px;\r\n    margin-top: -48px;\r\n    box-shadow: var(--mdc-protected-button-container-elevation,\r\n            0px 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n            0px 2px 2px 0px rgba(0, 0, 0, 0.14),\r\n            0px 1px 5px 0px rgba(0, 0, 0, 0.12));\r\n}\r\n\r\n.btn-container-stepper_1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin: 18px 0px 0px 0px;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.side-overlap-bar[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 10px;\r\n    background: #435260;\r\n}\r\n\r\n.close-btn-stepper[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border-radius: 50px;\r\n    padding: 0px 10px;\r\n    margin-top: -48px;\r\n    margin-left: 198px;\r\n    height: 24px;\r\n}\r\n\r\n.input-c-address[_ngcontent-%COMP%] {\r\n    margin-top: -194px;\r\n    margin-bottom: -173px;\r\n}\r\n\r\n.gms-overlap[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 74px;\r\n    height: 26px;\r\n    z-index: 1;\r\n    margin-left: 16px;\r\n    cursor: pointer;\r\n}\r\n\r\n.country-icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    border-radius: 50px;\r\n    height: 18px;\r\n    left: 2px;\r\n    bottom: 5px;\r\n}\r\n\r\n.country-overlap[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 132px;\r\n    height: 26px;\r\n    z-index: 1;\r\n    margin-left: -1px;\r\n    cursor: pointer;\r\n}\r\n\r\n.invalid-field[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: #fae4e4;\r\n    border-radius: 50px;\r\n    font-size: x-small;\r\n    color: #ca0000;\r\n    right: 0px;\r\n    bottom: -22px;\r\n    padding: 0px 8px;\r\n}\r\n\r\n.invalid-field-bar-red[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 2px;\r\n    left: 0px;\r\n    width: 102%;\r\n    bottom: 0px;\r\n    background-image: linear-gradient(to right, #ffffff00, #ca0000, #ffffff00);\r\n    z-index: 1;\r\n}\r\n\r\n.invalid-red-info-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    font-size: small;\r\n    color: #ff3229;\r\n    right: 0px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.input-contact[_ngcontent-%COMP%] {\r\n    width: 160px !important;\r\n}\r\n\r\n.input-locality[_ngcontent-%COMP%] {\r\n    width: 158px !important;\r\n}\r\n\r\n.shopName-icon[_ngcontent-%COMP%] {\r\n    margin-top: -2px;\r\n}\r\n\r\n.input-shopId_2[_ngcontent-%COMP%] {\r\n    margin-top: -192px;\r\n}\r\n\r\n.change-locality[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0px;\r\n}\r\n\r\n.input-s-password[_ngcontent-%COMP%] {\r\n    margin-top: -193px;\r\n    margin-bottom: -173px;\r\n}\r\n\r\n.input-s-c-password[_ngcontent-%COMP%] {\r\n    margin-bottom: -173px;\r\n}\r\n\r\n.stepper-action-head[_ngcontent-%COMP%] {\r\n    margin-top: 260px;\r\n}\r\n\r\n.input-s-password[_ngcontent-%COMP%] {\r\n    margin-top: -174px;\r\n}\r\n\r\n.bck-btn-signup[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    min-width: 152px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #435260 !important;\r\n}\r\n\r\n.signup-btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    min-width: 100px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #28b885 !important;\r\n}\r\n\r\n.valid-field-value[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    font-size: small;\r\n    color: #28b885;\r\n    margin-top: 2px;\r\n    left: 255px;\r\n}\r\n\r\n.invalid-field-value[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    font-size: small;\r\n    color: orange;\r\n    margin-top: 2px;\r\n    left: 230px;\r\n}\r\n\r\n.stepper-name_end[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border-radius: 50px;\r\n    background: #435261;\r\n    color: white;\r\n    padding: 0px 10px;\r\n    margin-top: -396px;\r\n    box-shadow: var(--mdc-protected-button-container-elevation,\r\n            0px 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n            0px 2px 2px 0px rgba(0, 0, 0, 0.14),\r\n            0px 1px 5px 0px rgba(0, 0, 0, 0.12));\r\n}\r\n\r\n.free-payment[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: flex;\r\n    padding: 10px 28px 0px 28px !important;\r\n    border-radius: 50px;\r\n    background: #435261;\r\n    color: white;\r\n    padding: 0px 10px;\r\n    margin-top: -273px;\r\n    box-shadow: var(--mdc-protected-button-container-elevation,\r\n            0px 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n            0px 2px 2px 0px rgba(0, 0, 0, 0.14),\r\n            0px 1px 5px 0px rgba(0, 0, 0, 0.12));\r\n}\r\n\r\n.close-btn-s2[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border-radius: 50px;\r\n    padding: 0px 10px;\r\n    margin-top: -396px;\r\n    margin-left: 198px;\r\n    height: 24px;\r\n}\r\n\r\n.btn-container-stepper_end[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin: 607px 0px 0px 0px;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.admin_UserName[_ngcontent-%COMP%] {\r\n    margin-top: -194px;\r\n}\r\n\r\n.btn-container-stepper_2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin: 214px 0px 0px 0px;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.invalid-field-zip[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: #fae4e4;\r\n    border-radius: 50px;\r\n    font-size: x-small;\r\n    color: #ca0000;\r\n    right: -5px;\r\n    bottom: -15px;\r\n    padding: 0px 8px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbnVwL2FkbWluLXNpZ251cC9hZG1pbi1zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRDQUFtRTtJQUNuRSwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpREFBaUQ7SUFDakQsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsU0FBUztJQUNULGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOzs7Z0RBRzRDO0FBQ2hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCwwRUFBMEU7SUFDMUUsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQjs7O2dEQUc0QztBQUNoRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEI7OztnREFHNEM7QUFDaEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGFnZXMtYWJzdHJhY3QuanBlZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi50b29sYmFsLXN0eWxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMnB4IHJnYigwIDAgMCAvIDI1JSk7XHJcbn1cclxuXHJcbi50b29sYmFyLWxvZ28taW1nIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZ251cC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY0NztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMnB4IHJnYigwIDAgMCAvIDI1JSk7XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ubG9nby1pbWcge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubG9nby10ZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE5MHB4O1xyXG59XHJcblxyXG4uaW5wdXQtc2hvcE5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMjYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTczcHg7XHJcbn1cclxuXHJcbi51c2VyLWlucHV0LWxlZnQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTIycHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnVzZXItaW5wdXQtcmlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTIycHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnNwbGl0ZWQtaW5wdXQtMSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xOTNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3BsaXRlZC1pbnB1dC0yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTM5cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJjay1idG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDE2N3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzQzNTI2MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnh0LWJ0biB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogODdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICM0MDQwZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0ZXBwZXItbmFtZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzQzNTI2MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQ4cHg7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tZGMtcHJvdGVjdGVkLWJ1dHRvbi1jb250YWluZXItZWxldmF0aW9uLFxyXG4gICAgICAgICAgICAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpKTtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXItc3RlcHBlcl8xIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBtYXJnaW46IDE4cHggMHB4IDBweCAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uc2lkZS1vdmVybGFwLWJhciB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1MjYwO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuLXN0ZXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQ4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk4cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1jLWFkZHJlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogLTE5NHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE3M3B4O1xyXG59XHJcblxyXG4uZ21zLW92ZXJsYXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc0cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGxlZnQ6IDJweDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY291bnRyeS1vdmVybGFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMzJweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmludmFsaWQtZmllbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZTRlNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBjb2xvcjogI2NhMDAwMDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IC0yMnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDhweDtcclxufVxyXG5cclxuLmludmFsaWQtZmllbGQtYmFyLXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDIlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYwMCwgI2NhMDAwMCwgI2ZmZmZmZjAwKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5pbnZhbGlkLXJlZC1pbmZvLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiAjZmYzMjI5O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhY3Qge1xyXG4gICAgd2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1sb2NhbGl0eSB7XHJcbiAgICB3aWR0aDogMTU4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNob3BOYW1lLWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG5cclxuLmlucHV0LXNob3BJZF8yIHtcclxuICAgIG1hcmdpbi10b3A6IC0xOTJweDtcclxufVxyXG5cclxuLmNoYW5nZS1sb2NhbGl0eSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtcy1wYXNzd29yZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTkzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTczcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1zLWMtcGFzc3dvcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE3M3B4O1xyXG59XHJcblxyXG4uc3RlcHBlci1hY3Rpb24taGVhZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNjBweDtcclxufVxyXG5cclxuLmlucHV0LXMtcGFzc3dvcmQge1xyXG4gICAgbWFyZ2luLXRvcDogLTE3NHB4O1xyXG59XHJcblxyXG4uYmNrLWJ0bi1zaWdudXAge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDE1MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzQzNTI2MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lnbnVwLWJ0biB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjhiODg1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52YWxpZC1maWVsZC12YWx1ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6ICMyOGI4ODU7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBsZWZ0OiAyNTVweDtcclxufVxyXG5cclxuLmludmFsaWQtZmllbGQtdmFsdWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBsZWZ0OiAyMzBweDtcclxufVxyXG5cclxuLnN0ZXBwZXItbmFtZV9lbmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM0MzUyNjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zOTZweDtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLW1kYy1wcm90ZWN0ZWQtYnV0dG9uLWNvbnRhaW5lci1lbGV2YXRpb24sXHJcbiAgICAgICAgICAgIDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMikpO1xyXG59XHJcblxyXG4uZnJlZS1wYXltZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI4cHggMHB4IDI4cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1MjYxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjczcHg7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tZGMtcHJvdGVjdGVkLWJ1dHRvbi1jb250YWluZXItZWxldmF0aW9uLFxyXG4gICAgICAgICAgICAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpKTtcclxufVxyXG5cclxuLmNsb3NlLWJ0bi1zMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzk2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTk4cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyLXN0ZXBwZXJfZW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBtYXJnaW46IDYwN3B4IDBweCAwcHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmFkbWluX1VzZXJOYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IC0xOTRweDtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXItc3RlcHBlcl8yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIxNHB4IDBweCAwcHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmludmFsaWQtZmllbGQtemlwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmYWU0ZTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgY29sb3I6ICNjYTAwMDA7XHJcbiAgICByaWdodDogLTVweDtcclxuICAgIGJvdHRvbTogLTE1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
      opacity: 1
    }))])])]
  }
});

/***/ }),

/***/ 8463:
/*!***************************************************************************!*\
  !*** ./src/app/pages/signup/customer-signup/customer-signup.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerSignupComponent": () => (/* binding */ CustomerSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! google-libphonenumber */ 4535);
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/stepper */ 1861);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/popup.component */ 9363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_pages_signup_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/signup/signup.service */ 7332);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ 4193);

















function CustomerSignupComponent_i_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_i_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_i_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_i_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_i_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_div_94_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_div_94_i_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerSignupComponent_div_94_i_9_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r45.GetCurrentLocality());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CustomerSignupComponent_div_94_i_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_div_94_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_div_94_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "div", 26)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "locality");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br")(5, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CustomerSignupComponent_div_94_img_6_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 70)(8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CustomerSignupComponent_div_94_i_9_Template, 1, 0, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CustomerSignupComponent_div_94_i_10_Template, 1, 1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CustomerSignupComponent_div_94_span_11_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CustomerSignupComponent_div_94_span_12_Template, 1, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.loader_Locality);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.switchLocality && !ctx_r17.loader_Locality);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r17.switchLocality && ((tmp_2_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_2_0.touched) && !ctx_r17.loader_Locality);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx_r17.Form_1.get("locality")) == null ? null : tmp_4_0.touched) && !ctx_r17.loader_Locality);
  }
}
function CustomerSignupComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "div", 12)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br")(5, "i", 69)(6, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", true);
  }
}
function CustomerSignupComponent_i_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_img_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 72);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " ShopID required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid ShopId ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_div_111_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "div", 12)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Shop Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br")(5, "i", 75)(6, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CustomerSignupComponent_div_111_span_7_Template, 1, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r25.Form_1.get("shopName")) == null ? null : tmp_0_0.errors) && ((tmp_0_0 = ctx_r25.Form_1.get("shopName")) == null ? null : tmp_0_0.touched));
  }
}
function CustomerSignupComponent_i_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 77);
  }
}
function CustomerSignupComponent_i_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_i_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter your username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Username already taken ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_i_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Need at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_i_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter confirmation password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CustomerSignupComponent_span_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password confirmation does not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function CustomerSignupComponent_span_167_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
class CustomerSignupComponent {
  constructor(Countries, signupService, formbuilder, toastr, dialog, router, http) {
    this.Countries = Countries;
    this.signupService = signupService;
    this.formbuilder = formbuilder;
    this.toastr = toastr;
    this.dialog = dialog;
    this.router = router;
    this.http = http;
    this.currentLocationURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLocationURL;
    this.countryName = '';
    this.countryCode = 91;
    this.country_alpha2 = 'IN';
    this.countryImage = 'in.svg';
    this.state = '';
    this.city = '';
    this.locality = '';
    this.locationByPin = [];
    this.localityList = [];
    this.pincode = '';
    this.lastPincode = '';
    this.isWrongPincode = false;
    this.switchLocality = false;
    this.isValidLocality = true;
    this.contactNumberLength = 10;
    this.isValidNumber = true;
    this.isvalidShopId = true;
    this.shopNameField = false;
    this.isValidConfirmation_P = true;
    this.userNameAvailablity = true;
    this.loader_ShopName = false;
    this.loader_Locality = false;
    this.customer_SignUp = {
      Name: '',
      ContactNo: '',
      DoorNo: '',
      Street: '',
      CountryName: '',
      CountryCode: 0,
      CountryImage: '',
      Alpha2: '',
      State: '',
      City: '',
      Locality: '',
      PinCode: 0,
      ShopId: 0,
      UserName: '',
      Password: ''
    };
  }
  ngOnInit() {
    this.CustomerSignupForm_1();
    this.CustomerSignupForm_2();
  }
  CustomerSignupForm_1() {
    this.Form_1 = this.formbuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      countryCode: ['+91', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      contactNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(7)]],
      doorNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      pinCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      locality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      shopID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      shopName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  CustomerSignupForm_2() {
    this.Form_2 = this.formbuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
      confirmationPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  popup_Countries() {
    const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, {
      disableClose: false,
      autoFocus: true,
      height: '328px',
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        callBack_value: this.pass_value.bind(this),
        Module: 'Select Country'
      }
    });
  }
  ChangeCurrentAccount() {
    const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, {
      disableClose: false,
      autoFocus: true,
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        callBack_value: this.pass_value.bind(this),
        Module: 'Changing Account Type',
        AccountType: 'Customer',
        IsAlert: true
      }
    });
  }
  popup_Exit() {
    const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, {
      disableClose: false,
      autoFocus: true,
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        Module: 'Exit',
        IsAlert: true
      }
    });
  }
  GetCurrentLocality() {
    const dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, {
      disableClose: false,
      autoFocus: true,
      height: '328px',
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        callBack_value: this.pass_value.bind(this),
        Module: 'Select Your Locality',
        DropDownData: this.localityList,
        IsAlert: false
      }
    });
  }
  pass_value(data) {
    if (data.Module == 'Select Country') {
      this.countryCode = data.Country[0].countryCode;
      this.countryImage = data.Country[0].countryImage;
      this.country_alpha2 = data.Country[0].alpha2;
      this.Form_1.patchValue({
        countryCode: data.Country[0].countryCodeString
      });
      this.Form_1.patchValue({
        pinCode: ''
      });
      this.Form_1.patchValue({
        locality: ''
      });
      this.Form_1.patchValue({
        city: ''
      });
      this.switchLocality = false;
      this.isValidLocality = true;
      this.IsValidContact();
    }
    if (data.Module == 'Select Your Locality') {
      this.pincode = this.pincode.split(' ').join('');
      this.locality = data.Data[0].Name;
      this.Form_1.patchValue({
        locality: this.locality
      });
      this.Form_1.patchValue({
        pinCode: this.pincode
      });
      this.isValidLocality = true;
    }
  }
  GetCurrentLocationByPin() {
    this.countryName = '';
    this.state = '';
    this.city = '';
    const currentPinCode = this.Form_1.controls['pinCode'].value;
    if (this.lastPincode != currentPinCode) {
      if (currentPinCode > 0) {
        this.loader_Locality = true;
        const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLocationURL + 'address=' + currentPinCode + '&key=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.geoCodingApiKey;
        this.http.get(URL).subscribe({
          next: response => {
            this.locationByPin = [];
            this.locationByPin.push(response);
            if (this.locationByPin[0].status == 'OK') {
              this.isWrongPincode = false;
              this.lastPincode = currentPinCode;
              const data = this.locationByPin[0].results[0].address_components;
              const LocalityListData = this.locationByPin[0].results[0].postcode_localities;
              for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].types.length; j++) {
                  if (data[i].types[j] == 'country' && this.countryName.trim().length == 0 && this.countryName != null) {
                    this.countryName = data[i].long_name;
                  }
                  if (data[i].types[j - 1] == 'country' && data[i].types[j] == 'political') {
                    this.country_alpha2 = data[i].short_name;
                    const CountryData = this.Countries.find(x => x.alpha2 === this.country_alpha2);
                    if (CountryData != null) {
                      this.Form_1.patchValue({
                        countryCode: '+' + CountryData.countryCode
                      });
                      this.countryImage = CountryData.countryImage;
                      this.countryCode = CountryData.countryCode;
                      this.country_alpha2 = CountryData.alpha2;
                      this.IsValidContact();
                    }
                  }
                  if (data[i].types[j] == 'administrative_area_level_1' && this.state.trim().length == 0 && this.state != null) {
                    this.state = data[i].long_name;
                  }
                  if (data[i].types[j] == 'locality' && this.city.trim().length == 0 && this.city != null) {
                    this.city = data[i].long_name;
                  }
                  if (data[i].types[j] == 'postal_code' && LocalityListData != null && LocalityListData.length > 0) {
                    this.pincode = data[i].long_name;
                  }
                }
              }
              if (LocalityListData != null && LocalityListData.length > 0) {
                this.localityList = [];
                this.localityList = this.locationByPin[0].results[0].postcode_localities;
                this.loader_Locality = false;
                this.GetCurrentLocality();
                this.switchLocality = true;
                this.isValidLocality = true;
                this.Form_1.patchValue({
                  city: this.city
                });
              } else {
                this.switchLocality = false;
                this.isValidLocality = false;
                this.Form_1.patchValue({
                  city: this.city
                });
              }
            } else if (this.locationByPin[0].status == 'ZERO_RESULTS') {
              this.loader_Locality = false;
              this.isWrongPincode = true;
            } else {
              this.loader_Locality = false;
              this.toastr.warning('Something went wrong, please try again..!', '', {
                timeOut: 5000
              });
            }
          },
          error: e => {
            this.loader_Locality = false;
            this.toastr.error('Something went wrong, please try again later', '', {
              timeOut: 5000
            });
          }
        });
      }
    }
  }
  GetShopName() {
    if (this.Form_1.controls['shopID'].value > 0) {
      this.loader_ShopName = true;
      this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl + '/api/Signup/GetShopName?ShopId=' + this.Form_1.controls['shopID'].value).subscribe({
        next: response => {
          if (response.status == 'Success') {
            if (response.data == 'Invalid ShopId') {
              this.loader_ShopName = false;
              this.isvalidShopId = false;
              this.shopNameField = false;
            } else {
              this.Form_1.patchValue({
                shopName: response.data
              });
              this.loader_ShopName = false;
              this.isvalidShopId = true;
              this.shopNameField = true;
            }
          } else {
            this.loader_ShopName = false;
            this.toastr.warning('Something went wrong, please try again..!', '', {
              timeOut: 5000
            });
            this.shopNameField = false;
          }
        },
        error: e => {
          this.loader_ShopName = false;
          this.toastr.error('Something went wrong, please try again later', '', {
            timeOut: 5000
          });
          this.shopNameField = false;
        }
      });
    } else {
      this.isvalidShopId = false;
      this.shopNameField = false;
    }
  }
  UserNameAvailability() {
    if (this.Form_2.controls['username'].value.trim().length > 0) {
      this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl + '/api/Signup/UserNameAvailability?UserName=' + this.Form_2.controls['username'].value).subscribe({
        next: response => {
          if (response.status == 'Success') {
            this.userNameAvailablity = response.data;
          } else {
            this.toastr.warning('Something went wrong, please try again..!', '', {
              timeOut: 5000
            });
            this.userNameAvailablity = false;
          }
        },
        error: e => {
          this.toastr.error('Something went wrong, please try again later', '', {
            timeOut: 5000
          });
          this.userNameAvailablity = false;
        }
      });
    }
  }
  Field_Restriction_N(e) {
    if (e.keyCode == 49 || e.keyCode == 50 || e.keyCode == 51 || e.keyCode == 52 || e.keyCode == 53 || e.keyCode == 54 || e.keyCode == 55 || e.keyCode == 56 || e.keyCode == 57 || e.keyCode == 48 || e.keyCode == 13) {
      return;
    } else {
      e.preventDefault();
      this.toastr.warning('Only numbers allowed', '', {
        timeOut: 5000
      });
    }
  }
  IsValidContact() {
    if (this.Form_1.controls['contactNo'].value > 0 && this.Form_1.controls['contactNo'].valid) {
      const phoneNumberUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_5__.PhoneNumberUtil.getInstance();
      const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(this.Form_1.controls['contactNo'].value, this.country_alpha2);
      this.isValidNumber = phoneNumberUtil.isValidNumber(phoneNumber);
    }
  }
  checkConfirmation_P() {
    if (this.Form_2.controls['password'].value.trim().length > 0 && this.Form_2.controls['password'].valid) {
      if (this.Form_2.controls['confirmationPassword'].value == this.Form_2.controls['password'].value) {
        this.isValidConfirmation_P = true;
      } else {
        this.isValidConfirmation_P = false;
      }
    }
  }
  next() {
    if (!this.isValidLocality) {
      this.Form_1.patchValue({
        locality: 'No Data'
      });
    }
    this.Form_1.markAllAsTouched();
  }
  SignUp() {
    this.Form_2.markAllAsTouched();
    if (this.Form_1.valid && this.isValidNumber && !this.isWrongPincode && this.isvalidShopId && this.Form_2.valid && this.isValidConfirmation_P && this.userNameAvailablity) {
      this.customer_SignUp.Name = this.Form_1.controls['name'].value;
      this.customer_SignUp.ContactNo = this.Form_1.controls['contactNo'].value;
      this.customer_SignUp.DoorNo = this.Form_1.controls['doorNo'].value;
      this.customer_SignUp.Street = this.Form_1.controls['street'].value;
      this.customer_SignUp.PinCode = this.Form_1.controls['pinCode'].value;
      this.customer_SignUp.ShopId = this.Form_1.controls['shopID'].value;
      this.customer_SignUp.Password = this.Form_2.controls['password'].value;
      this.customer_SignUp.UserName = this.Form_2.controls['username'].value;
      this.customer_SignUp.CountryName = this.countryName;
      this.customer_SignUp.CountryCode = this.countryCode;
      this.customer_SignUp.CountryImage = this.countryImage;
      this.customer_SignUp.Alpha2 = this.country_alpha2;
      this.customer_SignUp.City = this.city;
      if (!this.isValidLocality) {
        this.customer_SignUp.Locality = this.Form_1.controls['locality'].value;
      } else {
        this.customer_SignUp.Locality = this.locality;
      }
      this.customer_SignUp.State = this.state;
      this.signupService.CustomerSignup(this.customer_SignUp).subscribe({
        next: response => {
          if (response.status == 'Success') {
            this.toastr.success('Successfully Signed Up!', '', {
              timeOut: 5000
            });
            this.router.navigate(['home']);
          } else {
            this.toastr.warning('Something went wrong, please try again..!', '', {
              timeOut: 5000
            });
          }
        },
        error: e => {
          this.toastr.error('Something went wrong, please try again later', '', {
            timeOut: 5000
          });
        }
      });
    }
  }
}
CustomerSignupComponent.ɵfac = function CustomerSignupComponent_Factory(t) {
  return new (t || CustomerSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('COUNTRIES'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_pages_signup_signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient));
};
CustomerSignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CustomerSignupComponent,
  selectors: [["app-customer-signup"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__.STEPPER_GLOBAL_OPTIONS,
    useValue: {
      showError: true
    }
  }])],
  decls: 174,
  vars: 50,
  consts: [[1, "toolbal-style"], ["src", "assets/img/logo_black.png", 1, "toolbar-logo-img"], [1, "main-container"], [1, "signup-card-container"], [1, "logo-container"], ["src", "assets/img/logo_black.png", 1, "logo-img"], ["claass", "logo-text"], [1, "form-container"], [3, "linear"], ["stepper", ""], ["linear", "", 3, "stepControl"], [3, "formGroup"], [1, "input-box"], [1, "stepper-name"], ["mat-raised-button", "", "type", "button", 1, "close-btn-stepper", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "form-group", "input-container"], [1, "input-box", "input-shopName", "Index-1"], [1, "input-lbl"], [1, "bi", "bi-person-circle", "input-icon"], ["type", "text", "placeholder", "Type your name", "formControlName", "name", 1, "user-input"], [1, "focus-border"], ["class", "bi bi-exclamation-circle invalid-red-info-icon", 4, "ngIf"], ["class", "invalid-field", 4, "ngIf"], ["class", "invalid-field-bar-red", 4, "ngIf"], [1, "splited-input-2"], [1, "input-box", "Index-1"], [1, "country-icon", 3, "src"], [1, "gms-overlap", 3, "click"], ["type", "text", "formControlName", "countryCode", 1, "user-input-left", "user-input", 3, "autocomplete"], [1, "bi", "bi-telephone-fill", "input-icon"], ["type", "tel", "placeholder", "Ex. 1234567890", "formControlName", "contactNo", 1, "user-input-right", "user-input", "input-contact", 3, "keypress", "focusout"], [1, "splited-input-1"], [1, "bi", "bi-house-door-fill", "input-icon"], ["type", "text", "placeholder", "No.13B", "formControlName", "doorNo", 1, "user-input-left", "user-input"], [1, "bi", "bi-geo-alt-fill", "input-icon"], ["type", "text", "placeholder", "2nd Block, 1st Street", "formControlName", "street", 1, "user-input-right", "user-input", "input-locality"], [1, "bi", "bi-globe2", "input-icon"], ["type", "number", "placeholder", "600118", "formControlName", "pinCode", 1, "user-input-left", "user-input", 3, "focusout", "keypress"], ["class", "invalid-field-zip", 4, "ngIf"], ["class", "form-group input-container", 4, "ngIf"], [1, "bi", "bi-person-vcard-fill", "input-icon"], ["type", "number", "placeholder", "Ex. 00001", "formControlName", "shopID", 1, "user-input-left", "user-input", 3, "keypress", "keyup"], ["class", "loader loader-left", "src", "assets/gif/spinner.gif", 4, "ngIf"], [1, "btn-container-stepper_1"], ["mat-raised-button", "", "type", "button", 1, "bck-btn", 3, "click"], ["matStepperNext", "", 1, "bi", "bi-arrow-repeat"], ["mat-raised-button", "", "matStepperNext", "", "type", "submit", 1, "nxt-btn", 3, "click"], [1, "bi", "bi-arrow-right-circle-fill"], [1, "input-box", "stepper-action-head"], [1, "input-box", "input-username", "Index-1"], ["class", "bi bi-check-circle-fill input-icon valid-field-value", 4, "ngIf"], [1, "high-contrast-bg"], ["type", "text", "placeholder", "Type your username", "formControlName", "username", 1, "user-input", 3, "keyup"], [1, "input-box", "input-s-password"], [1, "bi", "bi-key-fill", "input-icon"], ["type", "password", "placeholder", "Type your password", "formControlName", "password", 1, "user-input", "input-alignment", 3, "focusout", "paste"], [1, "extended-input"], [1, "input-box", "input-s-c-password"], [1, "bi", "bi-arrow-clockwise", "input-icon"], ["type", "text", "placeholder", "Type confirmation password", "formControlName", "confirmationPassword", 1, "user-input", "input-alignment", 3, "focusout"], [1, "btn-container-stepper_2"], ["mat-raised-button", "", "matStepperPrevious", "", "type", "button", 1, "bck-btn-signup"], ["matStepperNext", "", 1, "bi", "bi-arrow-left-circle-fill"], ["mat-raised-button", "", "type", "submit", 1, "signup-btn", 3, "click"], [1, "bi", "bi-exclamation-circle", "invalid-red-info-icon"], [1, "invalid-field"], [1, "invalid-field-bar-red"], [1, "invalid-field-zip"], [1, "bi", "bi-geo-fill", "input-icon"], ["type", "text", "placeholder", "Ex. Kodungaiyur", "formControlName", "locality", 1, "user-input-right", "user-input", "input-locality"], ["matStepperNext", "", "class", "bi bi-arrow-repeat change-locality", 3, "click", 4, "ngIf"], ["src", "assets/gif/spinner.gif", 1, "loader", "loader-left"], ["matStepperNext", "", 1, "bi", "bi-arrow-repeat", "change-locality", 3, "click"], ["type", "text", "placeholder", "Ex. Chennai", "formControlName", "city", 1, "user-input-right", "user-input", "input-locality", 3, "readonly"], [1, "bi", "bi-shop", "input-icon", "shopName-icon"], ["type", "text", "formControlName", "shopName", 1, "user-input-right", "user-input", "input-city"], [1, "bi", "bi-check-circle-fill", "input-icon", "valid-field-value"]],
  template: function CustomerSignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Signup Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "body")(3, "mat-toolbar", 0)(4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "J.S.R.L - Shop Management");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "div", 4)(11, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " J.S.R.L ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "mat-stepper", 8, 9)(18, "mat-step", 10)(19, "form", 11)(20, "div", 12)(21, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Customer Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerSignupComponent_Template_button_click_23_listener() {
        return ctx.popup_Exit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Exit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16)(27, "div", 17)(28, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br")(31, "i", 19)(32, "input", 20)(33, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CustomerSignupComponent_i_34_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, CustomerSignupComponent_span_35_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CustomerSignupComponent_span_36_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 25)(38, "div", 16)(39, "div", 26)(40, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Country Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "br")(43, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerSignupComponent_Template_p_click_44_listener() {
        return ctx.popup_Countries();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 29)(46, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 16)(48, "div", 26)(49, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Contact No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "br")(52, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CustomerSignupComponent_Template_input_keypress_53_listener($event) {
        return ctx.Field_Restriction_N($event);
      })("focusout", function CustomerSignupComponent_Template_input_focusout_53_listener() {
        return ctx.IsValidContact();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, CustomerSignupComponent_i_55_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, CustomerSignupComponent_span_56_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, CustomerSignupComponent_span_57_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, CustomerSignupComponent_span_58_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 32)(60, "div", 16)(61, "div", 26)(62, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Door No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "br")(65, "i", 33)(66, "input", 34)(67, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, CustomerSignupComponent_i_68_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, CustomerSignupComponent_span_69_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, CustomerSignupComponent_span_70_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 16)(72, "div", 26)(73, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Street");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "br")(76, "i", 35)(77, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, CustomerSignupComponent_i_78_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, CustomerSignupComponent_span_80_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 32)(82, "div", 16)(83, "div", 26)(84, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Zip/Pin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "br")(87, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function CustomerSignupComponent_Template_input_focusout_88_listener() {
        return ctx.GetCurrentLocationByPin();
      })("keypress", function CustomerSignupComponent_Template_input_keypress_88_listener($event) {
        return ctx.Field_Restriction_N($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, CustomerSignupComponent_i_90_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, CustomerSignupComponent_span_91_Template, 2, 1, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, CustomerSignupComponent_span_92_Template, 2, 1, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, CustomerSignupComponent_span_93_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](94, CustomerSignupComponent_div_94_Template, 13, 5, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, CustomerSignupComponent_div_95_Template, 7, 1, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 32)(97, "div", 16)(98, "div", 12)(99, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Shop ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "br")(102, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function CustomerSignupComponent_Template_input_keypress_103_listener($event) {
        return ctx.Field_Restriction_N($event);
      })("keyup", function CustomerSignupComponent_Template_input_keyup_103_listener() {
        return ctx.GetShopName();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](105, CustomerSignupComponent_i_105_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](106, CustomerSignupComponent_img_106_Template, 1, 1, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](107, CustomerSignupComponent_span_107_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](108, CustomerSignupComponent_span_108_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, CustomerSignupComponent_span_109_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](110, CustomerSignupComponent_span_110_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](111, CustomerSignupComponent_div_111_Template, 8, 1, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 44)(113, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerSignupComponent_Template_button_click_113_listener() {
        return ctx.ChangeCurrentAccount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, " Switch account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "button", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerSignupComponent_Template_button_click_116_listener() {
        return ctx.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, " Next ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "mat-step", 10)(120, "form", 11)(121, "div", 49)(122, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Login Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerSignupComponent_Template_button_click_124_listener() {
        return ctx.popup_Exit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, " Exit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 16)(128, "div", 50)(129, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "User Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "br")(132, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](133, CustomerSignupComponent_i_133_Template, 1, 0, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CustomerSignupComponent_Template_input_keyup_135_listener() {
        return ctx.UserNameAvailability();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](137, CustomerSignupComponent_i_137_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](138, CustomerSignupComponent_i_138_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](139, CustomerSignupComponent_span_139_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](140, CustomerSignupComponent_span_140_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](141, CustomerSignupComponent_span_141_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 16)(143, "div", 54)(144, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "br")(147, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function CustomerSignupComponent_Template_input_focusout_148_listener() {
        return ctx.checkConfirmation_P();
      })("paste", function CustomerSignupComponent_Template_input_paste_148_listener() {
        return false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "span", 57)(150, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](151, CustomerSignupComponent_i_151_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](152, CustomerSignupComponent_span_152_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](153, CustomerSignupComponent_span_153_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](154, CustomerSignupComponent_span_154_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 16)(156, "div", 58)(157, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "br")(160, "i", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function CustomerSignupComponent_Template_input_focusout_161_listener() {
        return ctx.checkConfirmation_P();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "span", 57)(163, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](164, CustomerSignupComponent_i_164_Template, 1, 1, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](165, CustomerSignupComponent_span_165_Template, 2, 0, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](166, CustomerSignupComponent_span_166_Template, 2, 1, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](167, CustomerSignupComponent_span_167_Template, 1, 1, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 61)(169, "button", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, " Previous ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "button", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerSignupComponent_Template_button_click_172_listener() {
        return ctx.SignUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      let tmp_16_0;
      let tmp_17_0;
      let tmp_18_0;
      let tmp_19_0;
      let tmp_20_0;
      let tmp_23_0;
      let tmp_25_0;
      let tmp_26_0;
      let tmp_27_0;
      let tmp_32_0;
      let tmp_33_0;
      let tmp_34_0;
      let tmp_35_0;
      let tmp_36_0;
      let tmp_37_0;
      let tmp_38_0;
      let tmp_39_0;
      let tmp_40_0;
      let tmp_41_0;
      let tmp_42_0;
      let tmp_43_0;
      let tmp_44_0;
      let tmp_45_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("linear", false)("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.Form_1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form_1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.Form_1.get("name")) == null ? null : tmp_3_0.errors) && ((tmp_3_0 = ctx.Form_1.get("name")) == null ? null : tmp_3_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.Form_1.get("name")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.Form_1.get("name")) == null ? null : tmp_4_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.Form_1.get("name")) == null ? null : tmp_5_0.errors) && ((tmp_5_0 = ctx.Form_1.get("name")) == null ? null : tmp_5_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/img/Countries/", ctx.countryImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autocomplete", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_8_0.errors) && ((tmp_8_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_8_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_9_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (!ctx.isValidNumber || ((tmp_10_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_10_0.hasError("minlength"))) && ((tmp_10_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_10_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (!ctx.isValidNumber || ((tmp_11_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_11_0.errors)) && ((tmp_11_0 = ctx.Form_1.get("contactNo")) == null ? null : tmp_11_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_12_0.errors) && ((tmp_12_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_12_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_13_0.hasError("required")) && ((tmp_13_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_13_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_14_0.errors) && ((tmp_14_0 = ctx.Form_1.get("doorNo")) == null ? null : tmp_14_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.Form_1.get("street")) == null ? null : tmp_15_0.errors) && ((tmp_15_0 = ctx.Form_1.get("street")) == null ? null : tmp_15_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.Form_1.get("street")) == null ? null : tmp_16_0.hasError("required")) && ((tmp_16_0 = ctx.Form_1.get("street")) == null ? null : tmp_16_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_17_0.errors) && ((tmp_17_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_17_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_18_0.hasError("required")) && ((tmp_18_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_18_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isWrongPincode && ((tmp_19_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_19_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_20_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_20_0.errors) && ((tmp_20_0 = ctx.Form_1.get("pinCode")) == null ? null : tmp_20_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isValidLocality);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isValidLocality);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (((tmp_23_0 = ctx.Form_1.get("shopID")) == null ? null : tmp_23_0.errors) || !ctx.isvalidShopId) && ((tmp_23_0 = ctx.Form_1.get("shopID")) == null ? null : tmp_23_0.touched) && !ctx.loader_ShopName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader_ShopName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_25_0 = ctx.Form_1.get("shopID")) == null ? null : tmp_25_0.hasError("required")) && ((tmp_25_0 = ctx.Form_1.get("shopID")) == null ? null : tmp_25_0.touched) && !ctx.loader_ShopName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isvalidShopId && !((tmp_26_0 = ctx.Form_1.get("shopID")) == null ? null : tmp_26_0.hasError("required")) && !ctx.loader_ShopName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_27_0 = ctx.Form_1.get("shopID")) == null ? null : tmp_27_0.errors) && ((tmp_27_0 = ctx.Form_1.get("shopID")) == null ? null : tmp_27_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isvalidShopId);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isvalidShopId && ctx.shopNameField);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.Form_2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form_2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userNameAvailablity && !((tmp_32_0 = ctx.Form_2.get("username")) == null ? null : tmp_32_0.errors) && ((tmp_32_0 = ctx.Form_2.get("username")) == null ? null : tmp_32_0.value.trim().length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_33_0 = ctx.Form_2.get("username")) == null ? null : tmp_33_0.errors) && ((tmp_33_0 = ctx.Form_2.get("username")) == null ? null : tmp_33_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.userNameAvailablity && !((tmp_34_0 = ctx.Form_2.get("username")) == null ? null : tmp_34_0.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_35_0 = ctx.Form_2.get("username")) == null ? null : tmp_35_0.hasError("required")) && ((tmp_35_0 = ctx.Form_2.get("username")) == null ? null : tmp_35_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.userNameAvailablity && !((tmp_36_0 = ctx.Form_2.get("username")) == null ? null : tmp_36_0.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_37_0 = ctx.Form_2.get("username")) == null ? null : tmp_37_0.errors) && ((tmp_37_0 = ctx.Form_2.get("username")) == null ? null : tmp_37_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_38_0 = ctx.Form_2.get("password")) == null ? null : tmp_38_0.errors) && ((tmp_38_0 = ctx.Form_2.get("password")) == null ? null : tmp_38_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_39_0 = ctx.Form_2.get("password")) == null ? null : tmp_39_0.hasError("required")) && ((tmp_39_0 = ctx.Form_2.get("password")) == null ? null : tmp_39_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_40_0 = ctx.Form_2.get("password")) == null ? null : tmp_40_0.hasError("minlength")) && ((tmp_40_0 = ctx.Form_2.get("password")) == null ? null : tmp_40_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_41_0 = ctx.Form_2.get("password")) == null ? null : tmp_41_0.errors) && ((tmp_41_0 = ctx.Form_2.get("password")) == null ? null : tmp_41_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_42_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_42_0.errors) && ((tmp_42_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_42_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_43_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_43_0.hasError("required")) && ((tmp_43_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_43_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isValidConfirmation_P && ((tmp_44_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_44_0.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_45_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_45_0.errors) && ((tmp_45_0 = ctx.Form_2.get("confirmationPassword")) == null ? null : tmp_45_0.touched));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepperPrevious],
  styles: ["body[_ngcontent-%COMP%] {\r\n    background-image: url('pages-abstract.jpeg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.toolbal-style[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    height: 50px;\r\n    width: 300px;\r\n    font-weight: 400;\r\n    border-radius: 0px 30px 30px 0px;\r\n    font-size: inherit;\r\n    box-shadow: 0px 10px 20px 2px rgb(0 0 0 / 25%);\r\n}\r\n\r\n.toolbar-logo-img[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.signup-card-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #ffffff47;\r\n    height: auto;\r\n    width: 350px;\r\n    border-radius: 80px !important;\r\n    -webkit-backdrop-filter: blur(20px);\r\n            backdrop-filter: blur(20px);\r\n    box-shadow: 0px 10px 20px 2px rgb(0 0 0 / 25%);\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 40px;\r\n}\r\n\r\n.logo-img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n.logo-text[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 190px;\r\n}\r\n\r\n.input-shopName[_ngcontent-%COMP%] {\r\n    margin-top: 260px;\r\n    margin-bottom: -173px;\r\n}\r\n\r\n.user-input-left[_ngcontent-%COMP%] {\r\n    background: none;\r\n    height: 24px;\r\n    width: 100%;\r\n    margin-top: -22px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border: 0;\r\n    padding: 7px 0;\r\n    border-bottom: 1px solid #ccc;\r\n    padding-left: 25px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.user-input-right[_ngcontent-%COMP%] {\r\n    background: none;\r\n    height: 24px;\r\n    width: 130px !important;\r\n    margin-top: -22px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border: 0;\r\n    padding: 7px 0;\r\n    border-bottom: 1px solid #ccc;\r\n    padding-left: 25px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.splited-input-1[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin-top: -193px;\r\n    width: 100%;\r\n}\r\n\r\n.splited-input-2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin-top: -39px;\r\n    width: 100%;\r\n}\r\n\r\n.bck-btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    min-width: 167px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #435260 !important;\r\n}\r\n\r\n.nxt-btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    min-width: 87px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #4040ff !important;\r\n}\r\n\r\n.stepper-name[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border-radius: 50px;\r\n    background: #435261;\r\n    color: white;\r\n    padding: 0px 10px;\r\n    margin-top: -48px;\r\n    box-shadow: var(--mdc-protected-button-container-elevation,\r\n            0px 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n            0px 2px 2px 0px rgba(0, 0, 0, 0.14),\r\n            0px 1px 5px 0px rgba(0, 0, 0, 0.12));\r\n}\r\n\r\n.btn-container-stepper_1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin: 18px 0px 0px 0px;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.btn-container-stepper_2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin: 342px 0px 0px 0px;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.side-overlap-bar[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 10px;\r\n    background: #435260;\r\n}\r\n\r\n.close-btn-stepper[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border-radius: 50px;\r\n    padding: 0px 10px;\r\n    margin-top: -48px;\r\n    margin-left: 198px;\r\n    height: 24px;\r\n}\r\n\r\n.input-c-address[_ngcontent-%COMP%] {\r\n    margin-top: -194px;\r\n    margin-bottom: -173px;\r\n}\r\n\r\n.gms-overlap[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 74px;\r\n    height: 26px;\r\n    z-index: 1;\r\n    margin-left: 16px;\r\n    cursor: pointer;\r\n}\r\n\r\n.country-icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    border-radius: 50px;\r\n    height: 18px;\r\n    left: 2px;\r\n    bottom: 5px;\r\n}\r\n\r\n.country-overlap[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 132px;\r\n    height: 26px;\r\n    z-index: 1;\r\n    margin-left: -1px;\r\n    cursor: pointer;\r\n}\r\n\r\n.invalid-field[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: #fae4e4;\r\n    border-radius: 50px;\r\n    font-size: x-small;\r\n    color: #ca0000;\r\n    right: 0px;\r\n    bottom: -22px;\r\n    padding: 0px 8px;\r\n}\r\n\r\n.invalid-field-bar-red[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 2px;\r\n    left: 0px;\r\n    width: 102%;\r\n    bottom: 0px;\r\n    background-image: linear-gradient(to right, #ffffff00, #ca0000, #ffffff00);\r\n    z-index: 1;\r\n}\r\n\r\n.invalid-red-info-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    font-size: small;\r\n    color: #ff3229;\r\n    right: 0px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.input-contact[_ngcontent-%COMP%] {\r\n    width: 160px !important;\r\n}\r\n\r\n.input-locality[_ngcontent-%COMP%] {\r\n    width: 158px !important;\r\n}\r\n\r\n.shopName-icon[_ngcontent-%COMP%] {\r\n    margin-top: -2px;\r\n}\r\n\r\n.input-shopId_2[_ngcontent-%COMP%] {\r\n    margin-top: -192px;\r\n}\r\n\r\n.change-locality[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0px;\r\n}\r\n\r\n.input-s-password[_ngcontent-%COMP%] {\r\n    margin-top: -193px;\r\n    margin-bottom: -173px;\r\n}\r\n\r\n.input-s-c-password[_ngcontent-%COMP%] {\r\n    margin-bottom: -173px;\r\n}\r\n\r\n.stepper-action-head[_ngcontent-%COMP%] {\r\n    margin-top: 260px;\r\n}\r\n\r\n.input-s-password[_ngcontent-%COMP%] {\r\n    margin-top: -174px;\r\n}\r\n\r\n.bck-btn-signup[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    min-width: 152px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #435260 !important;\r\n}\r\n\r\n.signup-btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    min-width: 100px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #28b885 !important;\r\n}\r\n\r\n.valid-field-value[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    font-size: small;\r\n    color: #28b885;\r\n    margin-top: 2px;\r\n    left: 255px;\r\n}\r\n\r\n.invalid-field-value[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    font-size: small;\r\n    color: orange;\r\n    margin-top: 2px;\r\n    left: 230px;\r\n}\r\n\r\n.invalid-field-zip[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: #fae4e4;\r\n    border-radius: 50px;\r\n    font-size: x-small;\r\n    color: #ca0000;\r\n    right: -5px;\r\n    bottom: -15px;\r\n    padding: 0px 8px;\r\n}\r\n\r\n.loader-left[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbnVwL2N1c3RvbWVyLXNpZ251cC9jdXN0b21lci1zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRDQUFtRTtJQUNuRSwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpREFBaUQ7SUFDakQsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsU0FBUztJQUNULGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOzs7Z0RBRzRDO0FBQ2hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCwwRUFBMEU7SUFDMUUsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BhZ2VzLWFic3RyYWN0LmpwZWcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4udG9vbGJhbC1zdHlsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDMwcHggMzBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDJweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG59XHJcblxyXG4udG9vbGJhci1sb2dvLWltZyB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWdudXAtY2FyZC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNDc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDJweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmxvZ28taW1nIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmxvZ28tdGV4dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcclxufVxyXG5cclxuLmlucHV0LXNob3BOYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDI2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE3M3B4O1xyXG59XHJcblxyXG4udXNlci1pbnB1dC1sZWZ0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDdweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi51c2VyLWlucHV0LXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDdweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5zcGxpdGVkLWlucHV0LTEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTkzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwbGl0ZWQtaW5wdXQtMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zOXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iY2stYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAxNjdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICM0MzUyNjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm54dC1idG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDg3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDA0MGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGVwcGVyLW5hbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM0MzUyNjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC00OHB4O1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWRjLXByb3RlY3RlZC1idXR0b24tY29udGFpbmVyLWVsZXZhdGlvbixcclxuICAgICAgICAgICAgMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSk7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyLXN0ZXBwZXJfMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxOHB4IDBweCAwcHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXItc3RlcHBlcl8yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBtYXJnaW46IDM0MnB4IDBweCAwcHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnNpZGUtb3ZlcmxhcC1iYXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzQzNTI2MDtcclxufVxyXG5cclxuLmNsb3NlLWJ0bi1zdGVwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC00OHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5OHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uaW5wdXQtYy1hZGRyZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IC0xOTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNzNweDtcclxufVxyXG5cclxuLmdtcy1vdmVybGFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY291bnRyeS1pY29uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBsZWZ0OiAycHg7XHJcbiAgICBib3R0b206IDVweDtcclxufVxyXG5cclxuLmNvdW50cnktb3ZlcmxhcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTMycHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZpZWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmYWU0ZTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgY29sb3I6ICNjYTAwMDA7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAtMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZpZWxkLWJhci1yZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAyJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmMDAsICNjYTAwMDAsICNmZmZmZmYwMCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaW52YWxpZC1yZWQtaW5mby1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogI2ZmMzIyOTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWN0IHtcclxuICAgIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtbG9jYWxpdHkge1xyXG4gICAgd2lkdGg6IDE1OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaG9wTmFtZS1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuXHJcbi5pbnB1dC1zaG9wSWRfMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTkycHg7XHJcbn1cclxuXHJcbi5jaGFuZ2UtbG9jYWxpdHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmlucHV0LXMtcGFzc3dvcmQge1xyXG4gICAgbWFyZ2luLXRvcDogLTE5M3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE3M3B4O1xyXG59XHJcblxyXG4uaW5wdXQtcy1jLXBhc3N3b3JkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNzNweDtcclxufVxyXG5cclxuLnN0ZXBwZXItYWN0aW9uLWhlYWQge1xyXG4gICAgbWFyZ2luLXRvcDogMjYwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1zLXBhc3N3b3JkIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNzRweDtcclxufVxyXG5cclxuLmJjay1idG4tc2lnbnVwIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAxNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICM0MzUyNjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZ251cC1idG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzI4Yjg4NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmFsaWQtZmllbGQtdmFsdWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiAjMjhiODg1O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbGVmdDogMjU1cHg7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZpZWxkLXZhbHVlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbGVmdDogMjMwcHg7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZpZWxkLXppcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFlNGU0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIGNvbG9yOiAjY2EwMDAwO1xyXG4gICAgcmlnaHQ6IC01cHg7XHJcbiAgICBib3R0b206IC0xNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDhweDtcclxufVxyXG5cclxuLmxvYWRlci1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
      opacity: 1
    }))])])]
  }
});

/***/ }),

/***/ 9363:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/popup/popup.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);










function PopupComponent_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 9);
  }
}
function PopupComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 10);
  }
}
function PopupComponent_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PopupComponent_input_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.searchText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.searchText);
  }
}
function PopupComponent_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PopupComponent_input_6_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.searchText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.searchText);
  }
}
function PopupComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.data.Module, "");
  }
}
function PopupComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_i_8_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.Exit_No());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PopupComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Are you sure you want to Exit?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16)(4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_div_9_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.Exit_Yes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_div_9_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.Exit_No());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}
function PopupComponent_div_10_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_div_10_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const data_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.SelectedCountry(data_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/Countries/", data_r20.countryImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r20.countryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", data_r20.countryCodeString, ")\u00A0");
  }
}
function PopupComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PopupComponent_div_10_li_1_Template, 6, 3, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r7.Countries, ctx_r7.searchText));
  }
}
function PopupComponent_div_11_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_div_11_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const data_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.SelectedLocality(data_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", data_r24.Name, "\u00A0");
  }
}
function PopupComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PopupComponent_div_11_li_1_Template, 4, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r8.ListOfAllRegions, ctx_r8.searchText));
  }
}
function PopupComponent_div_12_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_div_12_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.SelectedAccount_C());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PopupComponent_div_12_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_div_12_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.SelectedAccount_C());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Shop Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PopupComponent_div_12_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_div_12_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.SelectedAccount_C());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PopupComponent_div_12_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_div_12_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.SelectedAccount_A());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PopupComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Are you sure you want to change your account type to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PopupComponent_div_12_button_3_Template, 3, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PopupComponent_div_12_button_4_Template, 3, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Note : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " By changing your account type you will lose all your filled details in this current form. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PopupComponent_div_12_button_10_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PopupComponent_div_12_button_11_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_div_12_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.Exit_No());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.data.AccountType == "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.data.AccountType == "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.data.AccountType == "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.data.AccountType == "Customer");
  }
}
class PopupComponent {
  constructor(router, values, Countries, dialogRef, data) {
    this.router = router;
    this.values = values;
    this.Countries = Countries;
    this.dialogRef = dialogRef;
    this.data = data;
    this.ListOfAllRegions = [];
    this.selectedCountry = {
      Country: [],
      Module: ''
    };
    this.passData = {
      Module: '',
      Data: []
    };
  }
  ngOnInit() {
    if (this.data.Module == 'Select Your Locality') {
      this.GetLocality();
    }
  }
  GetLocality() {
    for (let i = 0; i < this.data.DropDownData.length; i++) {
      const LocalityList = {
        Name: this.data.DropDownData[i]
      };
      if (i == 0) {
        this.ListOfAllRegions.push(LocalityList);
      } else {
        if (this.data.DropDownData[i] != this.data.DropDownData[i - 1]) {
          this.ListOfAllRegions.push(LocalityList);
        }
      }
    }
  }
  SelectedAccount_A() {
    this.router.navigate(['signup/admin']);
    this.dialogRef.close();
  }
  SelectedAccount_C() {
    this.router.navigate(['signup/customer']);
    this.dialogRef.close();
  }
  ChangeAccount_Alert_Yes(stepper) {
    this.data.Module = 'Select Account Type';
    this.data.IsAlert = false;
    stepper.selected.completed = true;
    stepper.next();
  }
  ChangeAccount_Alert_No() {
    this.dialogRef.close();
  }
  SelectedCountry(data) {
    this.selectedCountry.Country.push(data);
    this.selectedCountry.Module = 'Select Country';
    this.values.callBack_value(this.selectedCountry);
    this.dialogRef.close();
  }
  SelectedLocality(data) {
    this.passData.Data.push(data);
    this.passData.Module = 'Select Your Locality';
    this.values.callBack_value(this.passData);
    this.dialogRef.close();
  }
  Exit_Yes() {
    this.dialogRef.close();
    this.router.navigate(['login']);
  }
  Exit_No() {
    this.dialogRef.close();
  }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) {
  return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('COUNTRIES'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};
PopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PopupComponent,
  selectors: [["app-popup"]],
  decls: 13,
  vars: 11,
  consts: [[1, "header"], ["class", "bi bi-exclamation-circle-fill alert-icon", 4, "ngIf"], ["class", "bi bi-search search-icon", 4, "ngIf"], ["class", "form-control search-input", "type", "text", "autocomplete", "off", "placeholder", "Search your country code", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "form-control search-input", "type", "text", "autocomplete", "off", "placeholder", "Search your Locality", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "module_Name", 4, "ngIf"], ["class", "bi bi-x-circle-fill close-icon", 3, "click", 4, "ngIf"], ["class", "content-container", 4, "ngIf"], ["class", "country-data", 4, "ngIf"], [1, "bi", "bi-exclamation-circle-fill", "alert-icon"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "autocomplete", "off", "placeholder", "Search your country code", 1, "form-control", "search-input", 3, "ngModel", "ngModelChange"], ["type", "text", "autocomplete", "off", "placeholder", "Search your Locality", 1, "form-control", "search-input", 3, "ngModel", "ngModelChange"], [1, "module_Name"], [1, "bi", "bi-x-circle-fill", "close-icon", 3, "click"], [1, "content-container"], [1, "btn-Container"], ["mat-raised-button", "", "type", "button", 1, "btn-yes", 3, "click"], ["mat-raised-button", "", "type", "button", 1, "btn-no", 3, "click"], [1, "country-data"], ["class", "country-Details", 3, "click", 4, "ngFor", "ngForOf"], [1, "country-Details", 3, "click"], [1, "co-icon", "selector", 3, "src"], [1, "co-name"], [1, "dropDown_align"], [1, "bi", "bi-geo-alt-fill", "locality-icon"], ["mat-raised-button", "", "class", "option-btn-c", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "option-btn-a", "type", "button", 3, "click", 4, "ngIf"], [1, "note-text"], [1, "note-content"], ["mat-raised-button", "", "class", "btn-yes", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 1, "option-btn-c", 3, "click"], [1, "bi", "bi-person-circle"], ["mat-raised-button", "", "type", "button", 1, "option-btn-a", 3, "click"], [1, "bi", "bi-shop"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "popup works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PopupComponent_i_3_Template, 1, 0, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PopupComponent_i_4_Template, 1, 0, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PopupComponent_input_5_Template, 1, 1, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PopupComponent_input_6_Template, 1, 1, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PopupComponent_p_7_Template, 2, 1, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PopupComponent_i_8_Template, 1, 0, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PopupComponent_div_9_Template, 8, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PopupComponent_div_10_Template, 3, 5, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PopupComponent_div_11_Template, 3, 5, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PopupComponent_div_12_Template, 14, 5, "div", 7);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.IsAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.Module == "Select Country" || ctx.data.Module == "Select Your Locality");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.Module == "Select Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.Module == "Select Your Locality");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.Module != "Select Country" && ctx.data.Module != "Select Your Locality");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.Module == "Select Country" || ctx.data.Module == "Select Your Locality");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.Module == "Exit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.Module == "Select Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.Module == "Select Your Locality");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.Module == "Changing Account Type");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipe],
  styles: [".header[_ngcontent-%COMP%] {\r\n    width: 350px !important;\r\n    margin-top: -75px;\r\n    font-size: inherit;\r\n    letter-spacing: 1px;\r\n    background: #ffffff87;\r\n}\r\n\r\n.module_Name[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.country-data[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.country-data[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.country-data[_ngcontent-%COMP%] {\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    width: 346px !important;\r\n    margin: 0px;\r\n}\r\n\r\n.search-icon[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    margin-left: 10px;\r\n    margin-top: 2px;\r\n    z-index: 10;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n    border-radius: 50px !important;\r\n    position: fixed;\r\n    width: 350px;\r\n    height: 60px;\r\n    padding-left: 55px;\r\n    margin-left: -17px;\r\n    z-index: 9;\r\n    outline: none;\r\n    border: none;\r\n    background: #ffffff00;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::placeholder {\r\n    color: #929292;\r\n    font-size: small;\r\n}\r\n\r\n.country-Details[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: -2px;\r\n    padding-left: 25px;\r\n    width: 470px;\r\n}\r\n\r\n.country-Details[_ngcontent-%COMP%]:hover {\r\n    background: #e6e6e6;\r\n    width: 100% !important;\r\n    border-radius: 50px;\r\n}\r\n\r\n.co-icon[_ngcontent-%COMP%] {\r\n    height: 18px;\r\n    border-radius: 50px;\r\n    margin-bottom: 2px;\r\n    box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 25%);\r\n}\r\n\r\n.co-name[_ngcontent-%COMP%] {\r\n    margin: 0px 6px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 225px;\r\n}\r\n\r\n.dropDown_align[_ngcontent-%COMP%] {\r\n    margin-top: 17px;\r\n    margin-right: 18px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n.alert-icon[_ngcontent-%COMP%] {\r\n    margin: 0px 8px;\r\n    color: red;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n    margin-top: 22px;\r\n    padding: 0px 25px;\r\n}\r\n\r\n.note-text[_ngcontent-%COMP%] {\r\n    font-size: x-small;\r\n    margin-top: 12px;\r\n    width: 250px;\r\n}\r\n\r\n.note-content[_ngcontent-%COMP%] {\r\n    font-size: x-small;\r\n    color: #ca0000;\r\n}\r\n\r\n.btn-Container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-flow: row-reverse;\r\n    gap: 10px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.btn-no[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    margin-bottom: 20px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #fd5656 !important;\r\n}\r\n\r\n.btn-yes[_ngcontent-%COMP%] {\r\n    width: 75px;\r\n    margin-bottom: 20px;\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #28b885 !important;\r\n}\r\n\r\n.option-btn-a[_ngcontent-%COMP%] {\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #435260 !important;\r\n    width: 145px;\r\n    height: 22px;\r\n    position: absolute;\r\n    top: 48px;\r\n    left: 142px;\r\n    font-size: small;\r\n}\r\n\r\n.option-btn-c[_ngcontent-%COMP%] {\r\n    border-radius: 50px;\r\n    color: white !important;\r\n    background: #435260 !important;\r\n    width: 125px;\r\n    height: 22px;\r\n    position: absolute;\r\n    top: 48px;\r\n    left: 142px;\r\n    font-size: small;\r\n}\r\n\r\n.mat-stepper[_ngcontent-%COMP%] {\r\n    height: 230px;\r\n    margin-top: 30px;\r\n    overflow: hidden;\r\n}\r\n\r\n.stepper-container_1[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 16px;\r\n}\r\n\r\n.stepper-container_2[_ngcontent-%COMP%] {\r\n    margin-top: 206px;\r\n}\r\n\r\n.accountChange_exit[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    margin: 14px 0px -14px 0px;\r\n}\r\n\r\n.AccType-icon[_ngcontent-%COMP%] {\r\n    margin: 0px 8px;\r\n}\r\n\r\n.locality-icon[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n.close-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 24px;\r\n    z-index: 10;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmODc7XHJcbn1cclxuXHJcbi5tb2R1bGVfTmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLmNvdW50cnktZGF0YSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWRhdGE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWRhdGEge1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICB3aWR0aDogMzQ2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE3cHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYwMDtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmNvdW50cnktRGV0YWlscyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICB3aWR0aDogNDcwcHg7XHJcbn1cclxuXHJcbi5jb3VudHJ5LURldGFpbHM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uY28taWNvbiB7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYigwIDAgMCAvIDI1JSk7XHJcbn1cclxuXHJcbi5jby1uYW1lIHtcclxuICAgIG1hcmdpbjogMHB4IDZweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXgtd2lkdGg6IDIyNXB4O1xyXG59XHJcblxyXG4uZHJvcERvd25fYWxpZ24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYWxlcnQtaWNvbiB7XHJcbiAgICBtYXJnaW46IDBweCA4cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xyXG59XHJcblxyXG4ubm90ZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5ub3RlLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgY29sb3I6ICNjYTAwMDA7XHJcbn1cclxuXHJcbi5idG4tQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJ0bi1ubyB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmQ1NjU2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4teWVzIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMyOGI4ODUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9wdGlvbi1idG4tYSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1MjYwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ4cHg7XHJcbiAgICBsZWZ0OiAxNDJweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5vcHRpb24tYnRuLWMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzQzNTI2MCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OHB4O1xyXG4gICAgbGVmdDogMTQycHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ubWF0LXN0ZXBwZXIge1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3RlcHBlci1jb250YWluZXJfMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWNvbnRhaW5lcl8yIHtcclxuICAgIG1hcmdpbi10b3A6IDIwNnB4O1xyXG59XHJcblxyXG4uYWNjb3VudENoYW5nZV9leGl0IHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMTRweCAwcHggLTE0cHggMHB4O1xyXG59XHJcblxyXG4uQWNjVHlwZS1pY29uIHtcclxuICAgIG1hcmdpbjogMHB4IDhweDtcclxufVxyXG5cclxuLmxvY2FsaXR5LWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY2xvc2UtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjRweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 1
    }))])])]
  }
});

/***/ }),

/***/ 7332:
/*!************************************************!*\
  !*** ./src/app/pages/signup/signup.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupService": () => (/* binding */ SignupService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class SignupService {
  constructor(http) {
    this.http = http;
    this.baseApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl;
  }
  AdminSignup(AdminsignUp) {
    return this.http.post(this.baseApiUrl + '/api/Signup/AdminSignup', AdminsignUp);
  }
  CustomerSignup(customerSignup) {
    return this.http.post(this.baseApiUrl + '/api/Signup/CustomerSignup', customerSignup);
  }
}
SignupService.ɵfac = function SignupService_Factory(t) {
  return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
SignupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SignupService,
  factory: SignupService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  baseApiUrl: 'http://localhost:5000',
  geoCodingApiKey: 'AIzaSyCTDx1lwJi8ZUwG9pXMPE7-TsZnMybij1g',
  currentLocationURL: 'https://maps.googleapis.com/maps/api/geocode/json?'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map