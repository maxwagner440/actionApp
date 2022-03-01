(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n\r\n<div>This is a deployment test</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<div class=\"container\" class=\"mt-5\">\r\n    <!-- LOGIN -->\r\n    <div class=\"row\" *ngIf=\"showLogin\">\r\n      <div class=\"col\"></div>\r\n      <div class=\"col\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <div class=\"card-body\">\r\n            <form [formGroup]=\"signInForm\" >\r\n              <input class=\"mx-4 my-2\" id=\"email\" placeholder=\"Email\" type=\"email\" formControlName=\"email\">\r\n              <input class=\"mx-4 my-2\" id=\"password\" placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n            </form>\r\n            <button class=\"m-4\"type=\"button\" (click)=\"loginUser()\">Sign In</button>\r\n  \r\n            <div *ngIf=\"showSignInInvalid\">Please enter your name!</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\"></div>\r\n    </div>\r\n    <!-- SIGN UP -->\r\n    <div class=\"row\" *ngIf=\"!showLogin\">\r\n      <div class=\"col\"></div>\r\n      <div class=\"col\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <div class=\"card-body\">\r\n            <form [formGroup]=\"signUpForm\" >\r\n              <input class=\"mx-4 my-2\" id=\"name\" placeholder=\"Name\" type=\"text\" formControlName=\"name\">\r\n              <input class=\"mx-4 my-2\" id=\"email\" placeholder=\"Email\" type=\"email\" formControlName=\"email\">\r\n              <input class=\"mx-4 my-2\" id=\"password\" placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n            </form>\r\n            <button class=\"m-4\"type=\"button\" (click)=\"create_user()\">Sign Up</button>\r\n  \r\n            <div *ngIf=\"showSignUpInvalid\">Please enter your info!</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\"></div>\r\n    </div>\r\n    <div *ngIf=\"showSpinner\" class=\"row m-3 text-center\">\r\n      <div class=\"col-4\"></div>\r\n      <div class=\"col-4\">\r\n        <mat-spinner></mat-spinner>\r\n      </div>\r\n      <div class=\"col-4\"></div>\r\n    </div>\r\n    <div *ngIf=\"incomingSnackMessage\" class=\"row m-3\">\r\n      <div class=\"col-12\">\r\n        <mat-card style=\"background-color:red; color:white;\">{{incomingSnackMessage}}</mat-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"row text-center mt-4\" *ngIf=\"showLogin\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-10 mx-1\">Not signed up yet? </div>\r\n      <div class=\"col-1\"></div>\r\n    </div>\r\n    <div class=\"row text-center mt-2\" *ngIf=\"showLogin\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-10 mx-1\"><button type=\"button\" (click)=\"showLogin =! showLogin\">Sign Up Here</button></div>\r\n      <div class=\"col-1\"></div>\r\n    </div>\r\n    <div class=\"row text-center mt-4\" *ngIf=\"!showLogin\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-10\">Already a user?</div>\r\n      <div class=\"col-1\"></div>\r\n    </div>\r\n    <div class=\"row text-center mt-2\" *ngIf=\"!showLogin\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-10\"><button type=\"button\" (click)=\"showLogin =! showLogin\">Login</button></div>\r\n      <div class=\"col-1\"></div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/my-tasks/my-tasks.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/my-tasks/my-tasks.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n\r\n<div class=\"container my-2\">\r\n    <button (click)=\"showForm()\">Make a Task<span class=\"material-icons\">arrow_drop_down</span></button>\r\n    <div class=\"row w-80\" *ngIf=\"showCreateTask\">\r\n      <div class=\"col-12 w-60\">\r\n        <div class=\"card text-center\">\r\n          <div class=\"card-body\">\r\n            <h3 class=\"my-4\">Eric's Fate Lies in Your Hands</h3>\r\n            <form [formGroup]=\"taskForm\">\r\n              <textarea class=\"input-width\" id=\"task\" placeholder=\"Task\" type=\"text\"\r\n                formControlName=\"description\"></textarea>\r\n              <input class=\"input-width my-2\" id=\"ifFailed\" placeholder=\"If Failed\" type=\"text\"\r\n                formControlName=\"ifFailed\">\r\n              <input class=\"input-width my-2\" id=\"reward\" placeholder=\"If Successful\" type=\"text\"\r\n                formControlName=\"reward\">\r\n            </form>\r\n            <button class=\"m-4\" type=\"button\" (click)=\"createTask()\">Create Task</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n<!-- TABLE -->\r\n<div class=\"row text-center my-3\">\r\n    <div class=\"col\">\r\n    <h2>My Tasks</h2>\r\n    </div>\r\n</div>\r\n<div>\r\n<table mat-table [dataSource]=\"tasks\" multiTemplateDataRows class=\"mat-elevation-z8\">\r\n          <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\r\n            <th mat-header-cell *matHeaderCellDef> Task(s) </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"expandedDetail\">\r\n            <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\r\n              <div class=\"example-element-detail\"\r\n                [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n                <div class=\"row w-100\">\r\n                  <div class=\"col-10\">\r\n                    <div class=\"example-element-diagram\">\r\n                      <div class=\"example-element-position\"><b>Task:</b> {{element.description}} </div>\r\n                      <div class=\"example-element-position\"><b>Failed:</b> {{element.if_failed}} </div>\r\n                      <div class=\"example-element-position\"><b>Succeeded:</b> {{element.reward}} </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-2\">\r\n                    <div class=\"pointer\">\r\n                      <button (click)=\"deleteRowData(element)\">Delete</button>  \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"example-element-row\"\r\n            [class.example-expanded-row]=\"expandedElement === element\"\r\n            (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n          </tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n        </table>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/nav/nav.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/nav/nav.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-icon-button class=\"example-icon\" (click)=\"showNavigation()\"\r\n      aria-label=\"Example icon-button with menu icon\">\r\n      <mat-icon [matMenuTriggerFor]=\"menu\">menu</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"routeToLink('home')\">Home</button>\r\n      <button mat-menu-item (click)=\"routeToLink('task')\">Tasks</button>\r\n      <button mat-menu-item (click)=\"routeToLink('my-tasks')\">My Tasks</button>\r\n    </mat-menu>\r\n    <span class=\"example-spacer\"></span>\r\n\r\n    <span *ngIf=\"!username\"><button class=\"d-inline\" (click)=\"routeToLink('login')\">Login</button></span>\r\n    <span *ngIf=\"username\"><button class=\"d-inline\" (click)=\"logout()\">Logout</button></span>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row style=\"height:25px\" *ngIf=\"username\">\r\n    <span class=\"example-spacer\"></span>\r\n    <span style=\"font-size: 14px;\">User: {{username}}</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/task/task.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/task/task.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n\r\n<!-- <div class=\"container my-2\">\r\n  <div class=\"row w-80\">\r\n    <div class=\"col-12 w-60\">\r\n      <div class=\"card text-center\">\r\n        <div class=\"card-body\">\r\n          <h3 class=\"my-4\">Eric's Fate Lies in Your Hands</h3>\r\n          <form [formGroup]=\"taskForm\">\r\n            <textarea class=\"input-width\" id=\"task\" placeholder=\"Task\" type=\"text\"\r\n              formControlName=\"description\"></textarea>\r\n            <input class=\"input-width my-2\" id=\"ifFailed\" placeholder=\"If Failed\" type=\"text\"\r\n              formControlName=\"ifFailed\">\r\n            <input class=\"input-width my-2\" id=\"reward\" placeholder=\"If Successful\" type=\"text\"\r\n              formControlName=\"reward\">\r\n          </form>\r\n          <button class=\"m-4\" type=\"button\" (click)=\"createTask()\">Create Task</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n    <div class=\"example-large-box mat-elevation-z4\" *ngIf=\"dataSource.data.length > 0\">\r\n      <!-- TABLE -->\r\n      <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\r\n        <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumnsTopTen\">\r\n          <th mat-header-cell *matHeaderCellDef> {{column}} </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"expandedDetail\">\r\n          <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumnsTopTen.length\">\r\n            <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n              <div class=\"row w-100\">\r\n                <div class=\"col-10\">\r\n                  <div class=\"example-element-diagram\">\r\n                    <div class=\"example-element-position\"><b>Task:</b> {{element.description}} </div>\r\n                    <div class=\"example-element-position\"><b>Failed:</b> {{element.if_failed}} </div>\r\n                    <div class=\"example-element-position\"><b>Succeeded:</b> {{element.reward}} </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                  <div class=\"pointer\">\r\n                    <!-- <button [disabled]=\"username==element.created_by\" (click)=\"voteRow(element)\">Vote</button> -->\r\n                    <button  (click)=\"voteRow(element)\">Vote</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsTopTen\"></tr>\r\n        <tr mat-row *matRowDef=\"let element; columns: displayedColumnsTopTen;\" class=\"example-element-row\"\r\n          [class.example-expanded-row]=\"expandedElement === element\"\r\n          (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n        </tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n      </table>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: white;\n  color: white;\n  margin: 6px 0;\n}\n\n.pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYXh3YVxcUHJvamVjdHNcXEVyaWNBbmd1bGFyQVBwXFxhY3Rpb25BcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyMSwgLmJhcjIsIC5iYXIzIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICB9XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiIsIi5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNnB4IDA7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




let AppComponent = class AppComponent {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
        this.title = 'actionApp';
        this.showNav = true;
    }
    ngOnInit() {
        var cookieUser = this.cookieService.get("username");
        console.log(cookieUser);
        if (cookieUser) {
            this.username = cookieUser;
            console.log(this.username);
        }
    }
    routeToLink(link) {
        this.showNav = !this.showNav;
        this.router.navigate(["/" + link]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _website_website_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./website/website.module */ "./src/app/website/website.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _website_website_module__WEBPACK_IMPORTED_MODULE_5__["WebsiteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/website/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/website/home/home.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/website/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/website/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth-service.service */ "./src/app/website/service/auth-service.service.ts");




let HomeComponent = class HomeComponent {
    constructor(srvLogin, router) {
        this.srvLogin = srvLogin;
        this.router = router;
        if (!srvLogin.checkLogValues()) {
            router.navigate(['/login', { navMessage: "Please login" }]);
        }
    }
    ngOnInit() {
    }
    addItem(newItem) {
        console.log(newItem);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/website/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/website/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/website/login/login.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/website/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/website/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/app-api-service.service */ "./src/app/website/service/app-api-service.service.ts");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/auth-service.service */ "./src/app/website/service/auth-service.service.ts");







let LoginComponent = class LoginComponent {
    constructor(srvLogin, router, activatedRoute, cookieService, apiService) {
        this.srvLogin = srvLogin;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cookieService = cookieService;
        this.apiService = apiService;
        this.incomingSnackMessage = 'Please Sign In!';
        this.showSignUpInvalid = false;
        this.showSignInInvalid = false;
        this.showLogin = true;
        this.showSpinner = false;
        this.Obj = new _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["User"]();
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            console.log(params.navMessage);
            this.incomingSnackMessage = params.navMessage;
        });
        this.defineForm();
    }
    loginUser() {
        this.incomingSnackMessage = null;
        if (this.signInForm.controls.email.value && this.signInForm.controls.password.value) {
            this.showSpinner = true;
            this.apiService.postUser(this.signInForm.controls.email.value, this.signInForm.controls.password.value).subscribe((data) => {
                if (data.name && data.email) {
                    this.showSpinner = false;
                    this.cookieService.set('username', data.email);
                    this.cookieService.set('cookie', this.makeCooke());
                    //this.emitLoginEvent()
                    this.router.navigate(['/home']);
                }
                else {
                    this.showSpinner = false;
                    if (data.Warning) {
                        this.incomingSnackMessage = data.Warning;
                    }
                    else {
                        this.incomingSnackMessage = "Incorrent username/password";
                    }
                }
            });
        }
        else {
            this.showSpinner = false;
            this.incomingSnackMessage = "enter username and password";
        }
    }
    makeCooke() {
        var result = '';
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = 30; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    create_user() {
        if (this.signUpForm.controls.email.value && this.signUpForm.controls.password.value && this.signUpForm.controls.name.value) {
            this.apiService.putUser(this.signUpForm.controls.name.value, this.signUpForm.controls.email.value, this.signUpForm.controls.password.value).subscribe((data) => {
                if (data.email && data.name) {
                    alert("you have signed up with email '" + data.email + "' and are logged in");
                    this.cookieService.set('username', data.email);
                    this.cookieService.set('cookie', this.makeCooke());
                    this.router.navigate(['/home']);
                }
                else {
                    alert("Something went wrong");
                }
            });
        }
        else {
            alert("enter username, password and name");
        }
    }
    // emitLoginEvent(){
    //   this.loginEvent.emit("test from event emitter homue")
    // }
    defineForm() {
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_5__["AppApiServiceService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/website/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/website/my-tasks/my-tasks.component.css":
/*!*********************************************************!*\
  !*** ./src/app/website/my-tasks/my-tasks.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ntable {\r\n    width: 100%;\r\n  }\r\n  \r\n  tr.example-detail-row {\r\n    height: 0;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):hover {\r\n    background: whitesmoke;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n  }\r\n  \r\n  .example-element-row td {\r\n    border-bottom-width: 0;\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  .example-element-diagram {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n  }\r\n  \r\n  .example-element-symbol {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n  }\r\n  \r\n  .example-element-description {\r\n    padding: 16px;\r\n  }\r\n  \r\n  .example-element-description-attribution {\r\n    opacity: 0.5;\r\n  }\r\n  \r\n  .input-width{\r\n    width: 80%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vic2l0ZS9teS10YXNrcy9teS10YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUdGO0lBQ0ksVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvd2Vic2l0ZS9teS10YXNrcy9teS10YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICBcclxuLmlucHV0LXdpZHRoe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/website/my-tasks/my-tasks.component.ts":
/*!********************************************************!*\
  !*** ./src/app/website/my-tasks/my-tasks.component.ts ***!
  \********************************************************/
/*! exports provided: MyTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTasksComponent", function() { return MyTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/app-api-service.service */ "./src/app/website/service/app-api-service.service.ts");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth-service.service */ "./src/app/website/service/auth-service.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let MyTasksComponent = class MyTasksComponent {
    constructor(srvLogin, router, cookieService, apiService) {
        this.srvLogin = srvLogin;
        this.router = router;
        this.cookieService = cookieService;
        this.apiService = apiService;
        this.tasks = [];
        this.displayedColumns = ['description'];
        this.showCreateTask = false;
        if (!srvLogin.checkLogValues()) {
            router.navigate(['/login', { navMessage: "Please login" }]);
        }
    }
    ngOnInit() {
        this.defineForm();
        this.username = this.cookieService.get("username");
        this.getTasksByUser(this.username);
    }
    showForm() {
        this.showCreateTask = !this.showCreateTask;
    }
    getTasksByUser(username) {
        // return new Promise<[]>((resolve, reject) => {
        this.apiService.getTasks().subscribe(data => {
            this.tasks = data.map((task) => {
                if (task.created_by == username) {
                    return task;
                }
            });
            console.log(this.tasks);
        });
        // })
    }
    deleteTask(task_id) {
        this.apiService.deleteTask(task_id, this.username).subscribe(data => {
            this.getTasksByUser(this.username);
        });
    }
    deleteRowData(obj) {
        this.deleteTask(obj._id.$oid);
    }
    createTask() {
        if (this.taskForm.controls.description.value && this.taskForm.controls.reward.value && this.taskForm.controls.ifFailed.value) {
            this.apiService.putTask(this.taskForm.controls.description.value, this.username, this.taskForm.controls.reward.value, this.taskForm.controls.ifFailed.value).subscribe(data => {
                this.taskForm.reset();
                this.getTasksByUser(this.username);
            });
        }
        else {
            alert('Please fill out form completely');
        }
    }
    defineForm() {
        this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            ifFailed: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            reward: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
        });
    }
};
MyTasksComponent.ctorParameters = () => [
    { type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_4__["AppApiServiceService"] }
];
MyTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-tasks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/my-tasks/my-tasks.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-tasks.component.css */ "./src/app/website/my-tasks/my-tasks.component.css")).default]
    })
], MyTasksComponent);



/***/ }),

/***/ "./src/app/website/nav/nav.component.scss":
/*!************************************************!*\
  !*** ./src/app/website/nav/nav.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vic2l0ZS9uYXYvQzpcXFVzZXJzXFxtYXh3YVxcUHJvamVjdHNcXEVyaWNBbmd1bGFyQVBwXFxhY3Rpb25BcHAvc3JjXFxhcHBcXHdlYnNpdGVcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWJzaXRlL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC93ZWJzaXRlL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfSIsIi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/website/nav/nav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/website/nav/nav.component.ts ***!
  \**********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth-service.service */ "./src/app/website/service/auth-service.service.ts");





let NavComponent = class NavComponent {
    constructor(srvLogin, router, cookieService) {
        this.srvLogin = srvLogin;
        this.router = router;
        this.cookieService = cookieService;
        this.username = null;
        this.showNav = false;
        // if (!srvLogin.checkLogValues()) {  
        //   router.navigate(['/login']);  
        // }
    }
    ngOnInit() {
        console.log(this.showNav);
        this.username = this.cookieService.get('username');
    }
    showNavigation() {
        console.log("hello");
        console.log(this.showNav);
        this.showNav = !this.showNav;
    }
    routeToLink(link) {
        this.showNav = !this.showNav;
        this.router.navigate(["/" + link]);
    }
    logout() {
        this.cookieService.deleteAll();
        this.username = this.cookieService.get('username');
        this.router.navigate(['/login', { navMessage: "You have been logged out" }]);
    }
};
NavComponent.ctorParameters = () => [
    { type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavComponent.prototype, "username", void 0);
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/website/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/website/service/app-api-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/website/service/app-api-service.service.ts ***!
  \************************************************************/
/*! exports provided: AppApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppApiServiceService", function() { return AppApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppApiServiceService = class AppApiServiceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://eric-action-app.herokuapp.com';
        //baseUrl = ' http://127.0.0.1:5000'
        this.userUrl = '/user';
        this.taskUrl = "/task";
        this.voteUrl = "/vote";
    }
    //USER
    getUser() {
        return this.http.get(this.baseUrl + this.userUrl + "/6217eb6d5eacf615cf83ebd8");
    }
    putUser(name, email, password) {
        return this.http.put(this.baseUrl + this.userUrl, { "name": name, "email": email, "password": password });
    }
    postUser(email, password) {
        return this.http.post(this.baseUrl + this.userUrl, { "email": email, "password": password });
    }
    //TASK
    getTask(task_id) {
        return this.http.get(this.baseUrl + this.taskUrl + "/" + task_id);
    }
    getTasks() {
        return this.http.get(this.baseUrl + this.taskUrl + "s");
    }
    putTask(description, createdBy, reward, if_failed) {
        //TODO: Add reward to API
        return this.http.put(this.baseUrl + this.taskUrl, { "description": description, "created_by": createdBy, "if_failed": if_failed, "reward": reward });
    }
    deleteTask(task_id, created_by) {
        return this.http.post(this.baseUrl + this.taskUrl + '/delete/' + task_id, { "created_by": created_by });
    }
    // postTask(body) {
    //   return this.http.post<any>(this.baseUrl+this.taskUrl, body);
    // }
    //USER
    getVote(vote_id) {
        return this.http.get(this.baseUrl + this.voteUrl + "/" + vote_id);
    }
    getVotes() {
        return this.http.get(this.baseUrl + this.voteUrl + "s");
    }
    putVote(username, task_id) {
        return this.http.put(this.baseUrl + this.voteUrl, { "created_by": username, "task_id": task_id });
    }
};
AppApiServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppApiServiceService);



/***/ }),

/***/ "./src/app/website/service/auth-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/website/service/auth-service.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




let AuthService = class AuthService {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.isloggedin = false;
    }
    checkLogValues() {
        this.localCookie = this.cookie.get('cookie');
        if (this.localCookie) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);

class User {
}


/***/ }),

/***/ "./src/app/website/task/task.component.css":
/*!*************************************************!*\
  !*** ./src/app/website/task/task.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pointer {\r\n    cursor: pointer;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n.input-width{\r\n  width: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vic2l0ZS90YXNrL3Rhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBR0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC93ZWJzaXRlL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcblxyXG4uaW5wdXQtd2lkdGh7XHJcbiAgd2lkdGg6IDgwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/website/task/task.component.ts":
/*!************************************************!*\
  !*** ./src/app/website/task/task.component.ts ***!
  \************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/app-api-service.service */ "./src/app/website/service/app-api-service.service.ts");
/* harmony import */ var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/auth-service.service */ "./src/app/website/service/auth-service.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let TaskComponent = class TaskComponent {
    constructor(srvLogin, router, cookieService, apiService, changeDetectorRefs) {
        this.srvLogin = srvLogin;
        this.router = router;
        this.cookieService = cookieService;
        this.apiService = apiService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = ['description', 'created_by'];
        this.displayedColumnsTopTen = ['description', 'votes'];
        this.tasks = [];
        this.votes = [];
        this.tasksWithVotes = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
        this.username = this.cookieService.get('username');
        if (!srvLogin.checkLogValues()) {
            router.navigate(['/login', { navMessage: "Please login" }]);
        }
    }
    ngOnInit() {
        this.defineForm();
        this.getData();
    }
    getData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.tasks = [];
            this.tasks = yield this.getTasks();
            this.votes = [];
            this.votes = yield this.getVotes();
            this.aggregateVotesWithTasks();
        });
    }
    // createTask() {
    //   this.apiService.putTask(
    //     this.taskForm.controls.description.value,
    //     this.username,
    //     this.taskForm.controls.reward.value,
    //     this.taskForm.controls.ifFailed.value).subscribe(data => {
    //       this.taskForm.reset()
    //       this.getData()
    //     })
    // }
    getTasks() {
        return new Promise((resolve, reject) => {
            this.apiService.getTasks().subscribe(data => {
                // console.log(data)
                // console.log(data.length)
                resolve(data);
            });
        });
    }
    getVotes() {
        return new Promise((resolve, reject) => {
            this.apiService.getVotes().subscribe(data => {
                //console.log(data)
                resolve(data);
            });
        });
    }
    aggregateVotesWithTasks() {
        var newData = [];
        this.tasks.map((task) => {
            var matchingVote = this.votes[task._id.$oid];
            newData.push(Object.assign({}, task, { votes: matchingVote ? matchingVote : 0 }));
        });
        this.dataSource.data = newData;
    }
    voteRow(obj) {
        console.log(obj._id.$oid);
        this.apiService.putVote(this.username, obj._id.$oid).subscribe(data => {
            // console.log(data)
            this.getData();
        });
    }
    // deleteTask(task_id) {
    //   this.apiService.deleteTask(task_id, this.username).subscribe(data => {
    //     console.log(data)
    //     this.getData()
    //   })
    // }
    // deleteRowData(obj){
    //   console.log(obj._id.$oid)
    //   this.deleteTask(obj._id.$oid)
    // }
    defineForm() {
        this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ifFailed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            reward: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
};
TaskComponent.ctorParameters = () => [
    { type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_5__["AppApiServiceService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/website/task/task.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task.component.css */ "./src/app/website/task/task.component.css")).default]
    })
], TaskComponent);



/***/ }),

/***/ "./src/app/website/website.module.ts":
/*!*******************************************!*\
  !*** ./src/app/website/website.module.ts ***!
  \*******************************************/
/*! exports provided: WebsiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteModule", function() { return WebsiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/website/home/home.component.ts");
/* harmony import */ var _website_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./website.routing.module */ "./src/app/website/website.routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/website/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/website/nav/nav.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task/task.component */ "./src/app/website/task/task.component.ts");
/* harmony import */ var _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-tasks/my-tasks.component */ "./src/app/website/my-tasks/my-tasks.component.ts");













let WebsiteModule = class WebsiteModule {
};
WebsiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _website_routing_module__WEBPACK_IMPORTED_MODULE_4__["WebsiteRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        ],
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
            _task_task_component__WEBPACK_IMPORTED_MODULE_11__["TaskComponent"],
            _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_12__["MyTasksComponent"],
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]]
    })
], WebsiteModule);



/***/ }),

/***/ "./src/app/website/website.routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/website/website.routing.module.ts ***!
  \***************************************************/
/*! exports provided: websiteRoutes, WebsiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "websiteRoutes", function() { return websiteRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteRoutingModule", function() { return WebsiteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/website/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/website/login/login.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task.component */ "./src/app/website/task/task.component.ts");
/* harmony import */ var _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-tasks/my-tasks.component */ "./src/app/website/my-tasks/my-tasks.component.ts");







const websiteRoutes = [
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'task', component: _task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"]
    },
    {
        path: 'my-tasks', component: _my_tasks_my_tasks_component__WEBPACK_IMPORTED_MODULE_6__["MyTasksComponent"]
    },
    {
        path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
];
let WebsiteRoutingModule = class WebsiteRoutingModule {
};
WebsiteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(websiteRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], WebsiteRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maxwa\Projects\EricAngularAPp\actionApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map