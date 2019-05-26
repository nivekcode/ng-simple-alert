(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ng-simple-alert/src/lib/ng-simple-alert.component.css":
/*!****************************************************************!*\
  !*** ../ng-simple-alert/src/lib/ng-simple-alert.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  padding: 20px;\n  color: white;\n}\n\n.closebtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  float: right;\n  font-size: 22px;\n  line-height: 20px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.closebtn:hover {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNpbXBsZS1hbGVydC9zcmMvbGliL25nLXNpbXBsZS1hbGVydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoicHJvamVjdHMvbmctc2ltcGxlLWFsZXJ0L3NyYy9saWIvbmctc2ltcGxlLWFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jbG9zZWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNsb3NlYnRuOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "../ng-simple-alert/src/lib/ng-simple-alert.component.ts":
/*!***************************************************************!*\
  !*** ../ng-simple-alert/src/lib/ng-simple-alert.component.ts ***!
  \***************************************************************/
/*! exports provided: NgSimpleAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSimpleAlertComponent", function() { return NgSimpleAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-simple-alert.service */ "../ng-simple-alert/src/lib/ng-simple-alert.service.ts");




var NgSimpleAlertComponent = /** @class */ (function () {
    function NgSimpleAlertComponent(alertService) {
        this.alertService = alertService;
        this.close$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NgSimpleAlertComponent.prototype.ngOnInit = function () {
        this.alertMessage$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.alertService.alertMessage$, this.close$);
    };
    NgSimpleAlertComponent.prototype.closeAlert = function () {
        this.close$.next();
    };
    NgSimpleAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-simple-alert',
            template: "\n    <div class=\"alert\" *ngIf=\"alertMessage$ | async as alertMessage\" [ngStyle]=\"{ background: alertMessage.color }\">\n      <span class=\"closebtn\" (click)=\"closeAlert()\">&times;</span>\n      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./ng-simple-alert.component.css */ "../ng-simple-alert/src/lib/ng-simple-alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_3__["NgSimpleAlertService"]])
    ], NgSimpleAlertComponent);
    return NgSimpleAlertComponent;
}());



/***/ }),

/***/ "../ng-simple-alert/src/lib/ng-simple-alert.module.ts":
/*!************************************************************!*\
  !*** ../ng-simple-alert/src/lib/ng-simple-alert.module.ts ***!
  \************************************************************/
/*! exports provided: NgSimpleAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSimpleAlertModule", function() { return NgSimpleAlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-simple-alert.component */ "../ng-simple-alert/src/lib/ng-simple-alert.component.ts");




var NgSimpleAlertModule = /** @class */ (function () {
    function NgSimpleAlertModule() {
    }
    NgSimpleAlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_3__["NgSimpleAlertComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_3__["NgSimpleAlertComponent"]]
        })
    ], NgSimpleAlertModule);
    return NgSimpleAlertModule;
}());



/***/ }),

/***/ "../ng-simple-alert/src/lib/ng-simple-alert.service.ts":
/*!*************************************************************!*\
  !*** ../ng-simple-alert/src/lib/ng-simple-alert.service.ts ***!
  \*************************************************************/
/*! exports provided: NgSimpleAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSimpleAlertService", function() { return NgSimpleAlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var NgSimpleAlertService = /** @class */ (function () {
    function NgSimpleAlertService() {
        this.alertMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NgSimpleAlertService.prototype.createSuccessAlert = function (message) {
        this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
    };
    NgSimpleAlertService.prototype.createDangerAlert = function (message) {
        this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
    };
    NgSimpleAlertService.prototype.createWarningAlert = function (message) {
        this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
    };
    NgSimpleAlertService.prototype.createInfoAlert = function (message) {
        this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
    };
    NgSimpleAlertService.prototype.createAlertMessage = function (prefix, message, color) {
        return { prefix: prefix, message: message, color: color };
    };
    NgSimpleAlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NgSimpleAlertService);
    return NgSimpleAlertService;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\nbutton.success {\n  background: green;\n}\n\nbutton.danger {\n  background: red;\n}\n\nbutton.info {\n  background: dodgerblue;\n}\n\nbutton.warning {\n  background: darkorange;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNpbXBsZS1hbGVydC1zaG93Y2FzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InByb2plY3RzL25nLXNpbXBsZS1hbGVydC1zaG93Y2FzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmJ1dHRvbi5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG59XG5cbmJ1dHRvbi5kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbmJ1dHRvbi5pbmZvIHtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbn1cblxuYnV0dG9uLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiBkYXJrb3JhbmdlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_simple_alert_src_lib_ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ng-simple-alert/src/lib/ng-simple-alert.service */ "../ng-simple-alert/src/lib/ng-simple-alert.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(alertService) {
        this.alertService = alertService;
    }
    AppComponent.prototype.createSuccessMessage = function () {
        this.alertService.createSuccessAlert('Sample success message');
    };
    AppComponent.prototype.createDangerMessage = function () {
        this.alertService.createDangerAlert('Sample danger message');
    };
    AppComponent.prototype.createWarningMessage = function () {
        this.alertService.createWarningAlert('Sample warning message');
    };
    AppComponent.prototype.createInfoMessage = function () {
        this.alertService.createInfoAlert('Sample info message');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <ng-simple-alert></ng-simple-alert>\n\n    <button class=\"success\" (click)=\"createSuccessMessage()\">\n      Create success alert\n    </button>\n    <button class=\"danger\" (click)=\"createDangerMessage()\">\n      Create danger alert\n    </button>\n    <button class=\"warning\" (click)=\"createWarningMessage()\">\n      Create warning alert\n    </button>\n    <button class=\"info\" (click)=\"createInfoMessage()\">\n      Create info alert\n    </button>\n  ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_simple_alert_src_lib_ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_simple_alert_src_lib_ng_simple_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ng-simple-alert/src/lib/ng-simple-alert.module */ "../ng-simple-alert/src/lib/ng-simple-alert.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_simple_alert_src_lib_ng_simple_alert_module__WEBPACK_IMPORTED_MODULE_4__["NgSimpleAlertModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/kreuzerk/ng-simple-alert/projects/ng-simple-alert-showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map