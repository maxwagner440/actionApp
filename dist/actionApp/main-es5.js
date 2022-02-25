function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar style=\"background-color: black;\" class=\"example-toolbar\">\r\n    <button mat-icon-button (click)=\"showNav = !showNav\"><mat-icon style=\"color:white;\">menu</mat-icon></button>\r\n</mat-toolbar>\r\n<mat-sidenav-container>\r\n    <mat-sidenav mode=\"side\" [opened]=\"!showNav\" class=\"sidenav\">\r\n        <div class=\"container\">\r\n            <div class=\"pointer text-center p-2\" [routerLink]=\"'/home'\">\r\n                <h4> Eric </h4>\r\n            </div>\r\n        </div>        \r\n        <mat-nav-list>\r\n            <a mat-list-item [routerLink]=\"'/login'\"> Login/Signup </a>\r\n            <a mat-list-item [routerLink]=\"'/task'\"> Tasks </a>\r\n            <a mat-list-item [routerLink]=\"'/vote'\"> Vote </a>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    \r\n    <mat-sidenav-content>\r\n        <div style=\"min-height: 100vh;\">\r\n            <router-outlet></router-outlet>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/website/home/home.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/home/home.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWebsiteHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>This is a deployment test</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/website/login/login.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/login/login.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWebsiteLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" class=\"mt-5\">\n    <!-- LOGIN -->\n    <div class=\"row\" *ngIf=\"showLogin\">\n      <div class=\"col\"></div>\n      <div class=\"col\">\n        <div class=\"card\" style=\"width: 18rem;\">\n          <div class=\"card-body\">\n            <form [formGroup]=\"signInForm\" >\n              <input class=\"mx-4 my-2\" id=\"email\" placeholder=\"Email\" type=\"email\" formControlName=\"email\">\n              <input class=\"mx-4 my-2\" id=\"password\" placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n            </form>\n            <button class=\"m-4\"type=\"button\" (click)=\"loginUser()\">Sign In</button>\n  \n            <div *ngIf=\"showSignInInvalid\">Please enter your name!</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\"></div>\n    </div>\n    <!-- SIGN UP -->\n    <div class=\"row\" *ngIf=\"!showLogin\">\n      <div class=\"col\"></div>\n      <div class=\"col\">\n        <div class=\"card\" style=\"width: 18rem;\">\n          <div class=\"card-body\">\n            <form [formGroup]=\"signUpForm\" >\n              <input class=\"mx-4 my-2\" id=\"name\" placeholder=\"Name\" type=\"text\" formControlName=\"name\">\n              <input class=\"mx-4 my-2\" id=\"email\" placeholder=\"Email\" type=\"email\" formControlName=\"email\">\n              <input class=\"mx-4 my-2\" id=\"password\" placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n            </form>\n            <button class=\"m-4\"type=\"button\" (click)=\"create_user()\">Sign Up</button>\n  \n            <div *ngIf=\"showSignUpInvalid\">Please enter your info!</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\"></div>\n    </div>\n    <div class=\"row\" *ngIf=\"showLogin\">\n      <div class=\"col\"></div>\n      <div class=\"col-10 mx-1\">Not signed up yet? <button type=\"button\" (click)=\"showLogin =! showLogin\">Sign Up Here</button></div>\n      <div class=\"col\"></div>\n    </div>\n    <div class=\"row\" *ngIf=\"!showLogin\">\n      <div class=\"col\"></div>\n      <div class=\"col-10\"><button type=\"button\" (click)=\"showLogin =! showLogin\">Login</button></div>\n      <div class=\"col\"></div>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/website/name-form/name-form.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/name-form/name-form.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWebsiteNameFormNameFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-login></app-login>\r\n\r\n\r\n<div>\r\n    <button (click)=\"logout()\">Log out</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/website/task/task.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/task/task.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWebsiteTaskTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"taskForm\" >\n    <input class=\"mx-4 my-2\" id=\"task\" placeholder=\"Task\" type=\"text\" formControlName=\"description\">\n    <input class=\"mx-4 my-2\" id=\"ifFailed\" placeholder=\"If Failed\" type=\"text\" formControlName=\"ifFailed\">\n    <input class=\"mx-4 my-2\" id=\"reward\" placeholder=\"If Successful\" type=\"text\" formControlName=\"reward\">\n</form>\n<button class=\"m-4\"type=\"button\" (click)=\"createTask()\">Create Task</button>\n\n\n<button (click)=\"getTasks()\">Get Tasks</button>\n\n\n\n\n<table>\n    <thead>\n        <th>Task</th>\n        <th>If Failed</th>\n        <th>Reward</th>\n        <th>Thy Maker</th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let task of tasks\">\n            <td>{{task.description}}</td>\n            <td>{{task.if_failed}}</td>\n            <td>{{task.reward}}</td>\n            <td>{{task.created_by}}</td>\n        </tr>\n    </tbody>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/website/vote/vote.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/website/vote/vote.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWebsiteVoteVoteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>vote works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: white;\n  color: white;\n  margin: 6px 0;\n}\n\n.pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYXh3YVxcUHJvamVjdHNcXEVyaWNBbmd1bGFyQVBwXFxhY3Rpb25BcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyMSwgLmJhcjIsIC5iYXIzIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICB9XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIuYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDZweCAwO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'actionApp';
      this.showNav = true;
    });

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _website_website_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./website/website.module */
    "./src/app/website/website.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/index.js");
    /* harmony import */


    var _website_task_task_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./website/task/task.component */
    "./src/app/website/task/task.component.ts");
    /* harmony import */


    var _website_vote_vote_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./website/vote/vote.component */
    "./src/app/website/vote/vote.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _website_task_task_component__WEBPACK_IMPORTED_MODULE_12__["TaskComponent"], _website_vote_vote_component__WEBPACK_IMPORTED_MODULE_13__["VoteComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _website_website_module__WEBPACK_IMPORTED_MODULE_5__["WebsiteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/website/home/home.component.css":
  /*!*************************************************!*\
    !*** ./src/app/website/home/home.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWebsiteHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/website/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/website/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppWebsiteHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/auth-service.service */
    "./src/app/website/service/auth-service.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(srvLogin, router) {
        _classCallCheck(this, HomeComponent);

        this.srvLogin = srvLogin;
        this.router = router;

        if (!srvLogin.checkLogValues()) {
          router.navigate(['/login']);
        }
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addItem",
        value: function addItem(newItem) {
          console.log(newItem);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/website/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/website/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/website/login/login.component.css":
  /*!***************************************************!*\
    !*** ./src/app/website/login/login.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWebsiteLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/website/login/login.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/website/login/login.component.ts ***!
    \**************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppWebsiteLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/index.js");
    /* harmony import */


    var _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/app-api-service.service */
    "./src/app/website/service/app-api-service.service.ts");
    /* harmony import */


    var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/auth-service.service */
    "./src/app/website/service/auth-service.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(srvLogin, router, activatedRoute, cookieService, apiService) {
        _classCallCheck(this, LoginComponent);

        this.srvLogin = srvLogin;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cookieService = cookieService;
        this.apiService = apiService;
        this.showSignUpInvalid = false;
        this.showSignInInvalid = false;
        this.showLogin = true;
        this.Obj = new _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["User"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.defineForm();
        }
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this = this;

          if (this.signInForm.controls.email.value && this.signInForm.controls.password.value) {
            this.apiService.postUser(this.signInForm.controls.email.value, this.signInForm.controls.password.value).subscribe(function (data) {
              if (data.name && data.email) {
                _this.cookieService.set('username', data.email);

                _this.cookieService.set('cookie', _this.makeCooke());

                _this.router.navigate(['/home']);
              } else {
                if (data.Warning) {
                  alert(data.Warning);
                } else {
                  alert("Incorrent username/password");
                }
              }
            });
          } else {
            alert("enter username and password");
          }
        }
      }, {
        key: "makeCooke",
        value: function makeCooke() {
          var result = '';
          var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

          for (var i = 30; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
          }

          return result;
        }
      }, {
        key: "create_user",
        value: function create_user() {
          var _this2 = this;

          if (this.signUpForm.controls.email.value && this.signUpForm.controls.password.value && this.signUpForm.controls.name.value) {
            this.apiService.putUser(this.signUpForm.controls.name.value, this.signUpForm.controls.email.value, this.signUpForm.controls.password.value).subscribe(function (data) {
              if (data.email && data.name) {
                alert("you have signed up with email '" + data.email + "' and are logged in");

                _this2.cookieService.set('username', data.email);

                _this2.cookieService.set('cookie', _this2.makeCooke());

                _this2.router.navigate(['/home']);
              } else {
                alert("Something went wrong");
              }
            });
          } else {
            alert("enter username, password and name");
          }
        }
      }, {
        key: "defineForm",
        value: function defineForm() {
          this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
          this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_5__["AppApiServiceService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/website/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/website/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/website/name-form/name-form.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/website/name-form/name-form.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWebsiteNameFormNameFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flex-container {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    background-color: DodgerBlue;\r\n  }\r\n  \r\n  .flex-container > div {\r\n    background-color: #f1f1f1;\r\n    width: 100px;\r\n    margin: 10px;\r\n    text-align: center;\r\n    line-height: 75px;\r\n    font-size: 30px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vic2l0ZS9uYW1lLWZvcm0vbmFtZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvbmFtZS1mb3JtL25hbWUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDc1cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/website/name-form/name-form.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/website/name-form/name-form.component.ts ***!
    \**********************************************************/

  /*! exports provided: NameFormComponent */

  /***/
  function srcAppWebsiteNameFormNameFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NameFormComponent", function () {
      return NameFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/index.js");
    /* harmony import */


    var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/auth-service.service */
    "./src/app/website/service/auth-service.service.ts");

    var NameFormComponent = /*#__PURE__*/function () {
      function NameFormComponent(srvLogin, router, activatedRoute, cookieService) {
        _classCallCheck(this, NameFormComponent);

        this.srvLogin = srvLogin;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cookieService = cookieService;
        this.userDisplayName = '';
        this.password = ''; // this.Obj = new User();  
        // this.userDisplayName = this.cookieService.get('username');  
        // this.password = this.cookieService.get('password');  
        // this.Obj.username = this.userDisplayName;  
        // this.Obj.password = this.password;  
        // console.log(this.Obj)

        if (!srvLogin.checkLogValues()) {
          router.navigate(['/login']);
        }
      }

      _createClass(NameFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          alert("logged out");
          this.cookieService.deleteAll();
          this.router.navigate(['/home']);
        }
      }]);

      return NameFormComponent;
    }();

    NameFormComponent.ctorParameters = function () {
      return [{
        type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    NameFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'name-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./name-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/website/name-form/name-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./name-form.component.css */
      "./src/app/website/name-form/name-form.component.css"))["default"]]
    })], NameFormComponent);
    /***/
  },

  /***/
  "./src/app/website/service/app-api-service.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/website/service/app-api-service.service.ts ***!
    \************************************************************/

  /*! exports provided: AppApiServiceService */

  /***/
  function srcAppWebsiteServiceAppApiServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppApiServiceService", function () {
      return AppApiServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppApiServiceService = /*#__PURE__*/function () {
      function AppApiServiceService(http) {
        _classCallCheck(this, AppApiServiceService);

        this.http = http;
        this.baseUrl = 'https://eric-action-app.herokuapp.com'; //baseUrl = ' http://127.0.0.1:5000'

        this.userUrl = '/user';
        this.taskUrl = "/task";
        this.voteUrl = "/vote";
      } //USER


      _createClass(AppApiServiceService, [{
        key: "getUser",
        value: function getUser() {
          return this.http.get(this.baseUrl + this.userUrl + "/6217eb6d5eacf615cf83ebd8");
        }
      }, {
        key: "putUser",
        value: function putUser(name, email, password) {
          return this.http.put(this.baseUrl + this.userUrl, {
            "name": name,
            "email": email,
            "password": password
          });
        }
      }, {
        key: "postUser",
        value: function postUser(email, password) {
          return this.http.post(this.baseUrl + this.userUrl, {
            "email": email,
            "password": password
          });
        } //TASK

      }, {
        key: "getTask",
        value: function getTask(task_id) {
          return this.http.get(this.baseUrl + this.taskUrl + "/" + task_id);
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          return this.http.get(this.baseUrl + this.taskUrl + "s");
        }
      }, {
        key: "putTask",
        value: function putTask(description, createdBy, reward, if_failed) {
          //TODO: Add reward to API
          return this.http.put(this.baseUrl + this.taskUrl, {
            "description": description,
            "created_by": createdBy,
            "if_failed": if_failed,
            "reward": reward
          });
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(task_id, created_by) {
          return this.http.post(this.baseUrl + this.taskUrl + '/delete/' + task_id, {
            "created_by": created_by
          });
        } // postTask(body) {
        //   return this.http.post<any>(this.baseUrl+this.taskUrl, body);
        // }
        //USER

      }, {
        key: "getVote",
        value: function getVote(vote_id) {
          return this.http.get(this.baseUrl + this.voteUrl + "/" + vote_id);
        }
      }, {
        key: "getVotes",
        value: function getVotes() {
          return this.http.get(this.baseUrl + this.voteUrl + "s");
        }
      }, {
        key: "putVote",
        value: function putVote(body) {
          return this.http.put(this.baseUrl + this.voteUrl, body);
        }
      }]);

      return AppApiServiceService;
    }();

    AppApiServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppApiServiceService);
    /***/
  },

  /***/
  "./src/app/website/service/auth-service.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/website/service/auth-service.service.ts ***!
    \*********************************************************/

  /*! exports provided: AuthService, User */

  /***/
  function srcAppWebsiteServiceAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, cookie) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.cookie = cookie;
        this.isloggedin = false;
      }

      _createClass(AuthService, [{
        key: "checkLogValues",
        value: function checkLogValues() {
          this.localCookie = this.cookie.get('cookie');

          if (this.localCookie) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);

    var User = /*#__PURE__*/_createClass(function User() {
      _classCallCheck(this, User);
    });
    /***/

  },

  /***/
  "./src/app/website/task/task.component.css":
  /*!*************************************************!*\
    !*** ./src/app/website/task/task.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWebsiteTaskTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvdGFzay90YXNrLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/website/task/task.component.ts":
  /*!************************************************!*\
    !*** ./src/app/website/task/task.component.ts ***!
    \************************************************/

  /*! exports provided: TaskComponent */

  /***/
  function srcAppWebsiteTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/index.js");
    /* harmony import */


    var _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/app-api-service.service */
    "./src/app/website/service/app-api-service.service.ts");
    /* harmony import */


    var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/auth-service.service */
    "./src/app/website/service/auth-service.service.ts");

    var TaskComponent = /*#__PURE__*/function () {
      function TaskComponent(srvLogin, router, cookieService, apiService) {
        _classCallCheck(this, TaskComponent);

        this.srvLogin = srvLogin;
        this.router = router;
        this.cookieService = cookieService;
        this.apiService = apiService;

        if (!srvLogin.checkLogValues()) {
          router.navigate(['/login']);
        }
      }

      _createClass(TaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.defineForm();
          this.getTasks();
        }
      }, {
        key: "createTask",
        value: function createTask() {
          this.apiService.putTask(this.taskForm.controls.description.value, this.cookieService.get('username'), this.taskForm.controls.reward.value, this.taskForm.controls.ifFailed.value).subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          var _this3 = this;

          this.apiService.getTasks().subscribe(function (data) {
            console.log(data);
            console.log(data.length);
            _this3.tasks = data;
          });
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(task_id) {
          var _this4 = this;

          this.apiService.deleteTask(task_id, this.cookieService.get('username')).subscribe(function (data) {
            console.log(data);
            console.log(data.length);
            _this4.tasks = data;
          });
        }
      }, {
        key: "defineForm",
        value: function defineForm() {
          this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ifFailed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            reward: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }]);

      return TaskComponent;
    }();

    TaskComponent.ctorParameters = function () {
      return [{
        type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: _service_app_api_service_service__WEBPACK_IMPORTED_MODULE_5__["AppApiServiceService"]
      }];
    };

    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/website/task/task.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task.component.css */
      "./src/app/website/task/task.component.css"))["default"]]
    })], TaskComponent);
    /***/
  },

  /***/
  "./src/app/website/vote/vote.component.css":
  /*!*************************************************!*\
    !*** ./src/app/website/vote/vote.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWebsiteVoteVoteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvdm90ZS92b3RlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/website/vote/vote.component.ts":
  /*!************************************************!*\
    !*** ./src/app/website/vote/vote.component.ts ***!
    \************************************************/

  /*! exports provided: VoteComponent */

  /***/
  function srcAppWebsiteVoteVoteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoteComponent", function () {
      return VoteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/auth-service.service */
    "./src/app/website/service/auth-service.service.ts");

    var VoteComponent = /*#__PURE__*/function () {
      function VoteComponent(srvLogin, router) {
        _classCallCheck(this, VoteComponent);

        this.srvLogin = srvLogin;
        this.router = router;

        if (!srvLogin.checkLogValues()) {
          router.navigate(['/login']);
        }
      }

      _createClass(VoteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VoteComponent;
    }();

    VoteComponent.ctorParameters = function () {
      return [{
        type: _service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    VoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vote',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vote.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/website/vote/vote.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vote.component.css */
      "./src/app/website/vote/vote.component.css"))["default"]]
    })], VoteComponent);
    /***/
  },

  /***/
  "./src/app/website/website.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/website/website.module.ts ***!
    \*******************************************/

  /*! exports provided: WebsiteModule */

  /***/
  function srcAppWebsiteWebsiteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsiteModule", function () {
      return WebsiteModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/website/home/home.component.ts");
    /* harmony import */


    var _website_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./website.routing.module */
    "./src/app/website/website.routing.module.ts");
    /* harmony import */


    var _name_form_name_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./name-form/name-form.component */
    "./src/app/website/name-form/name-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/index.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/website/login/login.component.ts");

    var WebsiteModule = /*#__PURE__*/_createClass(function WebsiteModule() {
      _classCallCheck(this, WebsiteModule);
    });

    WebsiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _website_routing_module__WEBPACK_IMPORTED_MODULE_4__["WebsiteRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]],
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _name_form_name_form_component__WEBPACK_IMPORTED_MODULE_5__["NameFormComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]]
    })], WebsiteModule);
    /***/
  },

  /***/
  "./src/app/website/website.routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/website/website.routing.module.ts ***!
    \***************************************************/

  /*! exports provided: websiteRoutes, WebsiteRoutingModule */

  /***/
  function srcAppWebsiteWebsiteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "websiteRoutes", function () {
      return websiteRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsiteRoutingModule", function () {
      return WebsiteRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/website/home/home.component.ts");
    /* harmony import */


    var _name_form_name_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./name-form/name-form.component */
    "./src/app/website/name-form/name-form.component.ts");
    /* harmony import */


    var _task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task/task.component */
    "./src/app/website/task/task.component.ts");
    /* harmony import */


    var _vote_vote_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vote/vote.component */
    "./src/app/website/vote/vote.component.ts");

    var websiteRoutes = [{
      path: 'login',
      component: _name_form_name_form_component__WEBPACK_IMPORTED_MODULE_4__["NameFormComponent"]
    }, {
      path: 'task',
      component: _task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"]
    }, {
      path: 'vote',
      component: _vote_vote_component__WEBPACK_IMPORTED_MODULE_6__["VoteComponent"]
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var WebsiteRoutingModule = /*#__PURE__*/_createClass(function WebsiteRoutingModule() {
      _classCallCheck(this, WebsiteRoutingModule);
    });

    WebsiteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(websiteRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WebsiteRoutingModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\maxwa\Projects\EricAngularAPp\actionApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map