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
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-recommendations/list-recommendations.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-recommendations/list-recommendations.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tphoto\"\n[@cardAnimator]=\"animationState\"\n(@cardAnimator.done)=\"resetAnimationState($event)\"\n(swipeleft)='startAnimation(\"swipeleft\")' \n(swiperight)='startAnimation(\"swiperight\")'\n>\n<div class=\"tbg\">\n    <div class=\"theader\">\n        <img class=\"tlogo\" src=\"assets/images/Logo guatajaus.png\" alt=\"Guatajaus Logo\" title=\"Guatajaus Logo\" />\n        <img class=\"title title-center\" src=\"assets/flaticons/GUATAJAUS.png\"  alt=\"Guatajaus Text\" title=\"Guatajaus Text\" />\n    </div>\n    <div class=\"tbgwrap\">\n      <div class=\"tphoto\" style=\"background-color:lightgrey;\">\n        <img src=\"{{current.images[0].image}}\" class=\"center\" style=\"height: 300px;\" title=\"tphoto\" alt=\"Guatajaus Photo\"/>\n        <div class=\"tbed\">\n          <img src=\"assets/logos_btn/bed.svg\" /> <p class=\"tbed-text\">{{ current.rooms }}</p>\n          <img src=\"assets/logos_btn/wc-sign.svg\"/> <p class=\"tbed-text\">{{ current.bathrooms }}</p>\n          <img src=\"assets/logos_btn/squareMeters.png\"/> <p class=\"tbed-text\">{{ current.surface }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"tcontrols_right\">\n      <div (click)='cardAnimation(\"swiperight\"); nextRecommendation();' class=\"tyes\"><img class=\" shakeit center_decision_btn\" src=\"assets/flaticons/like.svg\"/></div>\n    </div>\n    <div class=\"tcontrols_left\">\n      <div (click)='cardAnimation(\"swipeleft\"); nextRecommendation();' class=\"tno\"><img class=\" shakeit center_decision_btn\" src=\"assets/flaticons/error.svg\"/></div>\n    </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typeform/typeform.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typeform/typeform.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>typeform works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'guatajaus';
    }
    ngOnInit() {
    }
};
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_recommendations_list_recommendations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-recommendations/list-recommendations.component */ "./src/app/list-recommendations/list-recommendations.component.ts");
/* harmony import */ var _typeform_typeform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typeform/typeform.component */ "./src/app/typeform/typeform.component.ts");
/* harmony import */ var _services_api_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/api-session.service */ "./src/app/services/api-session.service.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");













const appRoutes = [
    { path: 'recommender', component: _list_recommendations_list_recommendations_component__WEBPACK_IMPORTED_MODULE_9__["ListRecommendationsComponent"] },
    { path: '', component: _loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _list_recommendations_list_recommendations_component__WEBPACK_IMPORTED_MODULE_9__["ListRecommendationsComponent"],
            _typeform_typeform_component__WEBPACK_IMPORTED_MODULE_10__["TypeformComponent"],
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
        ],
        providers: [_services_api_session_service__WEBPACK_IMPORTED_MODULE_11__["ApiSessionService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/list-recommendations/keyframes.ts":
/*!***************************************************!*\
  !*** ./src/app/list-recommendations/keyframes.ts ***!
  \***************************************************/
/*! exports provided: swiperight, swipeleft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swiperight", function() { return swiperight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swipeleft", function() { return swipeleft; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const swiperight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(200%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0 }),
];
const swipeleft = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-200%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: 0 }),
];


/***/ }),

/***/ "./src/app/list-recommendations/list-recommendations.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/list-recommendations/list-recommendations.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/************************\nTinder Template by Miami\n************************/\n.tbg {\n  height: 720px;\n  width: 400px;\n  background-color: #fff;\n  margin: 0 auto;\n  border: 1px solid #c0c0c0;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -o-border-radius: 10px;\n  -ms-border-radius: 10px;\n  box-shadow: 0px 0px 3px #636363;\n}\n.tbgwrap {\n  padding: 10px;\n}\n.theader {\n  height: 13%;\n  border-bottom: 1px solid #000000;\n}\n.tlogo {\n  width: 18%;\n  margin: 0 auto;\n  padding: 10px;\n  float: left;\n}\n.tlogo img {\n  width: 100%;\n}\n.tphoto {\n  width: 75%;\n  height: 75%;\n  overflow: hidden;\n  margin: 0 auto;\n  position: relative;\n  top: 15px;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -o-border-radius: 10px;\n  -ms-border-radius: 10px;\n  border: 1px solid #c0c0c0;\n  padding-bottom: 60px;\n  background-color: rgba(255, 255, 255, 0.685);\n  box-shadow: 0px 0px 5px #636363;\n  margin-bottom: 5%;\n  padding-top: 5%;\n}\n.ng-tns-c1-0 {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n  height: 80%;\n}\n.title {\n  margin: 5 auto;\n  padding-right: 5%;\n  padding-top: 8%;\n  width: 60%;\n}\n.title-center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.center {\n  border-top: 1px solid #000000;\n  border-bottom: 1px solid #000000;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n.center_decision_btn {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 75%;\n  height: 100%;\n}\n.tbed {\n  display: inline-block;\n}\n.tbed img {\n  display: inline-block !important;\n  width: 10%;\n  margin: 5% 0% 0% 5%;\n}\n.tbed-text {\n  display: inline-block !important;\n  margin-right: 15%;\n  font-family: monospace;\n}\n.tname {\n  padding: 15px;\n  font-size: 20px;\n  font-family: \"Helvetica\", sans-serif;\n  float: left;\n}\n.tname .age {\n  font-weight: 200;\n}\n.tinfo {\n  font-family: \"Helvetica\", sans-serif;\n}\n.tinfo .fa-users, .tinfo .fa-book {\n  color: #c0c0c0;\n  float: right;\n  position: relative;\n  font-size: 24px;\n  padding: 12px;\n}\n.tcontrols_left {\n  float: left;\n}\n.tcontrols_right {\n  float: right;\n}\n.tno {\n  background-color: #fff;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -o-border-radius: 50%;\n  -ms-border-radius: 50%;\n  position: relative;\n  display: inline-block;\n  left: 75%;\n  border: 10px solid #e0e0e0;\n}\n.tyes {\n  background-color: #fff;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -o-border-radius: 50%;\n  -ms-border-radius: 50%;\n  position: relative;\n  display: inline-block;\n  right: 75%;\n  border: 10px solid #e0e0e0;\n}\n.shakeit:hover {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1000px;\n}\n@-webkit-keyframes shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tvcmFray9Fc2NyaXRvcmlvL0hhY2tVUENGcm9udC9ndWF0YWphdXMvc3JjL2FwcC9saXN0LXJlY29tbWVuZGF0aW9ucy9saXN0LXJlY29tbWVuZGF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdC1yZWNvbW1lbmRhdGlvbnMvbGlzdC1yZWNvbW1lbmRhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3dCQUFBO0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQ0NKO0FERUE7RUFBVyxhQUFBO0FDRVg7QUREQTtFQUFXLFdBQUE7RUFBYSxnQ0FBQTtBQ014QjtBREpBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ09KO0FETEE7RUFBYSxXQUFBO0FDU2I7QURSQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1dKO0FEUkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDV0o7QURSQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDV0o7QURSQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDV0o7QURUQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNZSjtBRFRBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1lKO0FEVEE7RUFDSSxxQkFBQTtBQ1lKO0FEVkE7RUFDSSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ2FKO0FEWEE7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNjSjtBRFhBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUNjSjtBRFpBO0VBQWMsZ0JBQUE7QUNnQmQ7QURmQTtFQUFTLG9DQUFBO0FDbUJUO0FEbEJBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDcUJKO0FEbkJBO0VBQ0ksV0FBQTtBQ3NCSjtBRHBCQTtFQUNJLFlBQUE7QUN1Qko7QURwQkE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FDdUJKO0FEcEJBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQ3VCSjtBRHBCQTtFQUNJLHdFQUFBO1VBQUEsZ0VBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQ3VCSjtBRHBCQTtFQUNJO0lBQ0ksa0NBQUE7RUN1Qk47RURwQkU7SUFDSSxpQ0FBQTtFQ3NCTjtFRG5CRTtJQUNJLGtDQUFBO0VDcUJOO0VEbEJFO0lBQ0ksaUNBQUE7RUNvQk47QUFDRjtBRG5DQTtFQUNJO0lBQ0ksa0NBQUE7RUN1Qk47RURwQkU7SUFDSSxpQ0FBQTtFQ3NCTjtFRG5CRTtJQUNJLGtDQUFBO0VDcUJOO0VEbEJFO0lBQ0ksaUNBQUE7RUNvQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcmVjb21tZW5kYXRpb25zL2xpc3QtcmVjb21tZW5kYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKlxuVGluZGVyIFRlbXBsYXRlIGJ5IE1pYW1pXG4qKioqKioqKioqKioqKioqKioqKioqKiovXG4udGJnIHtcbiAgICBoZWlnaHQ6IDcyMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAjNjM2MzYzO1xuXG59XG4udGJnd3JhcCB7IHBhZGRpbmc6IDEwcHg7IH1cbi50aGVhZGVyIHsgaGVpZ2h0OiAxMyU7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwOyB9XG5cbi50bG9nbyB7IFxuICAgIHdpZHRoOiAxOCU7IFxuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7IFxuICAgIH1cbi50bG9nbyBpbWcgeyB3aWR0aDogMTAwJTsgfVxuLnRwaG90byB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42ODUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM2MzYzNjM7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4ubmctdG5zLWMxLTB7XG4gICAgbWFyZ2luLXRvcDo1JTtcbiAgICBtYXJnaW4tYm90dG9tOjUlO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbi50aXRsZXtcbiAgICBtYXJnaW46IDUgYXV0bztcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICBwYWRkaW5nLXRvcDo4JTtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4udGl0bGUtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY2VudGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZW50ZXJfZGVjaXNpb25fYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6MTAwJTtcbn1cblxuLnRiZWQge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuLnRiZWQgaW1ne1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6MTAlO1xuICAgIG1hcmdpbjogNSUgMCUgMCUgNSU7XG59XG4udGJlZC10ZXh0e1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLnRuYW1lIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4udG5hbWUgLmFnZSB7IGZvbnQtd2VpZ2h0OiAyMDA7IH1cbi50aW5mbyB7IGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjsgfVxuLnRpbmZvIC5mYS11c2VycywgLnRpbmZvIC5mYS1ib29rIHtcbiAgICBjb2xvcjogI2MwYzBjMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuLnRjb250cm9sc19sZWZ0IHtcbiAgICBmbG9hdDpsZWZ0O1xufVxuLnRjb250cm9sc19yaWdodCB7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbi50bm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxlZnQ6IDc1JTtcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2UwZTBlMDtcbn1cblxuLnR5ZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHJpZ2h0OiA3NSU7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5zaGFrZWl0OmhvdmVyIHtcbiAgICBhbmltYXRpb246IHNoYWtlIDAuODJzIGN1YmljLWJlemllciguMzYsLjA3LC4xOSwuOTcpIGJvdGg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgMTAlLCA5MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICAgIH1cblxuICAgIDIwJSwgODAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICAgIH1cblxuICAgIDMwJSwgNTAlLCA3MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICAgIH1cblxuICAgIDQwJSwgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICAgIH1cbn0iLCIvKioqKioqKioqKioqKioqKioqKioqKioqXG5UaW5kZXIgVGVtcGxhdGUgYnkgTWlhbWlcbioqKioqKioqKioqKioqKioqKioqKioqKi9cbi50Ymcge1xuICBoZWlnaHQ6IDcyMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAjNjM2MzYzO1xufVxuXG4udGJnd3JhcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50aGVhZGVyIHtcbiAgaGVpZ2h0OiAxMyU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4udGxvZ28ge1xuICB3aWR0aDogMTglO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50bG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRwaG90byB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNzUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjg1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzYzNjM2MztcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLm5nLXRucy1jMS0wIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbjogNSBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgcGFkZGluZy10b3A6IDglO1xuICB3aWR0aDogNjAlO1xufVxuXG4udGl0bGUtY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jZW50ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlcl9kZWNpc2lvbl9idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGJlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRiZWQgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbjogNSUgMCUgMCUgNSU7XG59XG5cbi50YmVkLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbi50bmFtZSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIHNhbnMtc2VyaWY7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udG5hbWUgLmFnZSB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50aW5mbyB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBzYW5zLXNlcmlmO1xufVxuXG4udGluZm8gLmZhLXVzZXJzLCAudGluZm8gLmZhLWJvb2sge1xuICBjb2xvcjogI2MwYzBjMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLnRjb250cm9sc19sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50Y29udHJvbHNfcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50bm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsZWZ0OiA3NSU7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4udHllcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHJpZ2h0OiA3NSU7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4uc2hha2VpdDpob3ZlciB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDEwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICB9XG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cbiAgMzAlLCA1MCUsIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcbiAgfVxuICA0MCUsIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/list-recommendations/list-recommendations.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/list-recommendations/list-recommendations.component.ts ***!
  \************************************************************************/
/*! exports provided: ListRecommendationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRecommendationsComponent", function() { return ListRecommendationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-session.service */ "./src/app/services/api-session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyframes */ "./src/app/list-recommendations/keyframes.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ListRecommendationsComponent = class ListRecommendationsComponent {
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.users = [
            { id: 1, picture: 'guatajaus/src/guatajaus/src/assets/images/Logo guatajaus.pngassets/images/Logo guatajaus.png', age: 22, name: 'Catalina', gender: 'female' },
            { id: 2, picture: 'guatajaus/src/assets/images/gengar.jpg', age: 44, name: 'Nigerian', gender: 'male' }
        ];
        this.index = 0;
        this.parentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.parentSubject.subscribe(event => {
            this.startAnimation(event);
        });
        this.apiSession = this.sessionService.getApiInfo();
        this.nextRecommendation();
    }
    startAnimation(state) {
        if (!this.animationState) {
            this.animationState = state;
        }
    }
    resetAnimationState(state) {
        this.animationState = '';
        this.index++;
    }
    ngOnDestroy() {
        this.parentSubject.unsubscribe();
    }
    cardAnimation(value) {
        this.parentSubject.next(value);
    }
    nextRecommendation() {
        this.current = this.apiSession.recommendations.pop();
        console.log(this.current.id);
    }
};
ListRecommendationsComponent.ctorParameters = () => [
    { type: _services_api_session_service__WEBPACK_IMPORTED_MODULE_1__["ApiSessionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ListRecommendationsComponent.prototype, "parentSubject", void 0);
ListRecommendationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-list-recommendations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-recommendations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-recommendations/list-recommendations.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('cardAnimator', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => swiperight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(750, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["swiperight"]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => swipeleft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(750, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["swipeleft"])))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-recommendations.component.scss */ "./src/app/list-recommendations/list-recommendations.component.scss")).default]
    })
], ListRecommendationsComponent);



/***/ }),

/***/ "./src/app/loading/loading.component.scss":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _services_api_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-session.service */ "./src/app/services/api-session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoadingComponent = class LoadingComponent {
    constructor(spinner, api, router, activatedRoute) {
        this.spinner = spinner;
        this.api = api;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.time = 5000;
    }
    ngOnInit() {
        let email;
        this.activatedRoute.queryParamMap.subscribe(queryParam => {
            email = queryParam.get('email');
            if (email !== undefined && email !== null) {
                this.getSession(email);
            }
        });
        /** spinner starts on init */
        this.spinner.show();
    }
    getSession(email) {
        this.api.getApiSession(email).subscribe((data) => {
            this.api.setApiSession(data);
            if (this.api.isSessionReady()) {
                this.spinner.hide();
                this.router.navigate(['recommender']);
            }
        }, err => console.error(err), () => console.log('done loading session: ' + this.api.getApiInfo().email));
    }
};
LoadingComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
    { type: _services_api_session_service__WEBPACK_IMPORTED_MODULE_3__["ApiSessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.component.scss */ "./src/app/loading/loading.component.scss")).default]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/services/api-session.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/api-session.service.ts ***!
  \*************************************************/
/*! exports provided: ApiSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiSessionService", function() { return ApiSessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let ApiSessionService = class ApiSessionService {
    constructor(http, activatedRoute) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.sessionUrl = 'https://guatajaus.herokuapp.com/session/last';
    }
    getApiSession(email) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', email);
        return this.http.get(this.sessionUrl, {
            headers: httpOptions.headers,
            params
        });
    }
    isSessionReady() {
        return this.apiSession.status === 'completed';
    }
    getRecommendations() {
        return this.apiSession.recommendations;
    }
    getApiInfo() {
        return this.apiSession;
    }
    setApiSession(apiSession) {
        this.apiSession = apiSession;
    }
};
ApiSessionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ApiSessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiSessionService);



/***/ }),

/***/ "./src/app/typeform/typeform.component.scss":
/*!**************************************************!*\
  !*** ./src/app/typeform/typeform.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cGVmb3JtL3R5cGVmb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/typeform/typeform.component.ts":
/*!************************************************!*\
  !*** ./src/app/typeform/typeform.component.ts ***!
  \************************************************/
/*! exports provided: TypeformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeformComponent", function() { return TypeformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TypeformComponent = class TypeformComponent {
    constructor() { }
    ngOnInit() {
    }
};
TypeformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-typeform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typeform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typeform/typeform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./typeform.component.scss */ "./src/app/typeform/typeform.component.scss")).default]
    })
], TypeformComponent);



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
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/korakk/Escritorio/HackUPCFront/guatajaus/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /home/korakk/Escritorio/HackUPCFront/guatajaus/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map