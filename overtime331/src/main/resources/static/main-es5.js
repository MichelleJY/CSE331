(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event-page/event-page.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-page/event-page.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class = wrapper-wrapper> -->\n<cdk-virtual-scroll-viewport itemSize=50 class=\"left\">\n        <div class = id>#{{id}}</div>\n\n    <div *cdkVirtualFor=\"let item of sortedAlbumArr\" class=\"example-item\">\n            <img class =\"clickimg\" (click) =\"displayImg(item.src, item.parsed_date, item.description)\" src='https://das-lab.org/cse331fa2019/PhotosBackend/{{item.src}}' height =\"250px\" >    \n    </div>\n</cdk-virtual-scroll-viewport>    \n<!-- </div>   -->\n<div class = \"right\">\n    <a class=\"home links\" routerLink = '/home'>Home</a>\n    <a class=\"discover links\" routerLink = '/'>Discover</a>\n    <a class=\"timeline links\" routerLink = '/timeline'>Timeline</a>\n    <div *ngIf=\"displayimg; else elseBlock\">\n        <div class = \"displaydate\">{{displaydate}}</div>\n        <div class = \"displaydescp\">{{displaydescp}}</div> \n\n        <img class = \"displayimg\" src='https://das-lab.org/cse331fa2019/PhotosBackend/{{displayimg}}'>\n\n    </div>\n    <ng-template #elseBlock >\n        <div class=\"explain\">\n            click on an image to see detail<br>or scroll left panel to see more\n        </div>\n    </ng-template>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div class = title>OVERTIME</div>\n    <div class = line></div>\n    <div class = subtitle>Share your photo</div>\n    <div class = subtitle2>Share your story</div>\n    <a class = timeline routerLink=\"/timeline\">\n        <i class=\"material-icons\">timeline</i>\n        Timeline\n        <div class = line2></div>\n    </a>\n    <a class = discover routerLink=\"/\">\n        <i class=\"material-icons\">public</i>\n        Discover\n        <div class = line2></div>\n    </a>\n    <a class = upload routerLink=\"/\">\n        <i class=\"material-icons\">cloud_upload</i>\n        Upload\n        <div class = line3></div>\n    </a>\n\n    <div id=\"bg\">\n        <img src=\"../../assets/share1-r.jpg\" alt=\"\">\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timeline-page/timeline-page.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timeline-page/timeline-page.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"textcircle\"><br>\n    <div class=\"year\">{{year.substring(0,1)}}<br>{{year.substring(1,2)}}<br>{{year.substring(2,3)}}<br>{{year.substring(3)}}<br></div>\n    <div class = \"line2\"></div>\n</div>\n<div class=\"linepage\">\n    <div class=\"line\"></div>\n    <div>\n        <div class = \"today\">\n            <div class=\"textcircle2\"><br>\n                <div class = \"today-text\">Today</div>\n            </div>\n            <button id=\"upload-btn\" >\n                    <i class=\"material-icons plus\"> add_circle </i>\n            </button>\n        </div>\n        <div class=\"event\" *ngFor=\"let i of resultArr\" >\n            <div class=\"textcircle2\"><br>    \n                <div class=\"today-text\">{{i.create_date.substring(0,4)}}<br>{{i.create_date.substring(5)}}</div>\n            </div>\n            <div class = \"customcard\">\n                <a class=\"image\" routerLink=\"/detail/{{i.albumId}}\">\n                    <img src='https://das-lab.org/cse331fa2019/PhotosBackend/{{i.src}}' height =\"300px\" >\n                </a>\n                <div class = \"line3\"></div>\n                <div>\n                    <div class=\"eventinfo\">\n                            #{{i.event}}\n                    </div>\n                    <div class=\"description\">\n                            {{i.description}}\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</div> -->\n<a class=\"home links\" routerLink = '/home'>Home</a>\n<a class=\"discover links\" routerLink = '/'>Discover</a>\n<a class=\"timeline links\" routerLink = '/timeline'>Timeline</a>\n\n<div class = title>Timeline</div>\n<div class = year>{{year}}</div>\n<div class= today>\n    <div>\n        <div class = \"today-text\">Today</div>\n        <div class = descp>Think of anything fun today?</div>\n    </div>\n    <button id=\"upload-btn\" >\n            <i class=\"material-icons plus\"> add_circle </i>\n    </button>\n</div>\n<!-- TODO: change to let i of resultArr-->\n<div class=\"event\" *ngFor=\"let i of resultArr\"  >\n    <a class= date-descp routerLink=\"/detail/{{i.event}}\">\n        <div class=date>{{i.parsed_date.substring(5)}}</div>\n        <div class = month>{{i.parsed_date.substring(0,3)}}</div>\n        <div class= eventinfo>#{{i.event}}</div>\n        <div class = line1></div>\n        <div class= descp>{{i.description}}</div>\n    </a>\n    <!-- <img class = image2 src='../../assets/dots1.png' height =\"450px\" width = \"400px\"> -->\n    <a class=\"image\" routerLink=\"/detail/{{i.event}}\">\n        <img src='https://das-lab.org/cse331fa2019/PhotosBackend/{{i.src}}' height =\"350px\" >\n    </a>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/all.service.ts": 
        /*!********************************!*\
          !*** ./src/app/all.service.ts ***!
          \********************************/
        /*! exports provided: AllService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllService", function () { return AllService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AllService = /** @class */ (function () {
                function AllService(http) {
                    this.http = http;
                    this.baseUrl = 'https://das-lab.org/cse331fa2019/PhotosBackend'; // URL to web api
                    this.mockUrl = 'api/photos';
                    this.viewPhotoUrl = '/viewPhoto.php';
                    this.getPhotosUrl = '/getPhotos.php';
                }
                AllService.prototype.getViewPhoto = function (id) {
                    // return this.http.get<ViewPhotoModule[]>(this.mockUrl)
                    return this.http.get(this.baseUrl + this.viewPhotoUrl + '?id=' + id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                AllService.prototype.getPhotos = function () {
                    return this.http.get(this.baseUrl + this.getPhotosUrl + '?grp_id=' + '23333')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                AllService.prototype.handleError = function (error) {
                    if (error.error instanceof ErrorEvent) {
                        // A client-side or network error occurred. Handle it accordingly.
                        console.error('An error occurred:', error.error.message);
                    }
                    else {
                        // The backend returned an unsuccessful response code.
                        // The response body may contain clues as to what went wrong,
                        console.error("Backend returned code " + error.status + ", " +
                            ("body was: " + error.error));
                    }
                    // return an observable with a user-facing error message
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Cannot load reports now. Check HTTP request and try again.');
                };
                ;
                return AllService;
            }());
            AllService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AllService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AllService);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _timeline_page_timeline_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline-page/timeline-page.component */ "./src/app/timeline-page/timeline-page.component.ts");
            /* harmony import */ var _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-page/event-page.component */ "./src/app/event-page/event-page.component.ts");
            /* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
            var routes = [
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
                { path: 'timeline', component: _timeline_page_timeline_page_component__WEBPACK_IMPORTED_MODULE_3__["TimelinePageComponent"] },
                { path: 'detail/:id', component: _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_4__["EventPageComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'photo-sharing-app';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _timeline_page_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline-page/timeline-page.component */ "./src/app/timeline-page/timeline-page.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-page/event-page.component */ "./src/app/event-page/event-page.component.ts");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _timeline_page_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__["TimelinePageComponent"],
                        _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_10__["EventPageComponent"],
                        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollingModule"]
                        // // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                        // // and returns simulated server responses.
                        // // Remove it when a real server is ready to receive requests.
                        // HttpClientInMemoryWebApiModule.forRoot(
                        //   InMemoryDataService, { dataEncapsulation: false }
                        // )
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/event-page/event-page.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/event-page/event-page.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".left{\n    height: 100vh;\n    width: 35vw;\n}\n.id{\n    position: relative;\n    top: 50px;\n    left: 5px;\n    color: white;\n    font-size: 50px;\n    font-family: Gill Sans, sans-serif;\n    font-weight: bold;\n    padding-left: 50px;\n    letter-spacing: 5px;\n    padding-bottom: 60px;\n}\n.right{\n    width:65vw;\n    height: 100vh;\n    background-color:#ffe5cc;\n    position: fixed;\n    right:0px;\n    top:0px;\n}\n.example-item {\n    height: 300px;\n  }\n.clickimg{\n    border: 10px solid white;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n    cursor: pointer;\n    max-width: 480px;\n}\n.clickimg:hover{\n    transform: scale(1.05);\n}\n.displayimg{\n    height:500px;\n    max-width: 920px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    top: 70px;\n    border: 10px solid #803300;\n}\n.explain{\n    font-family: Gill Sans, sans-serif;\n    font-size: 30px;\n    position: relative;\n    top: 300px;\n    left: 200px;\n    line-height: 1.7;\n    opacity: 0.5;\n}\n.displaydate{\n    font-family: Gill Sans, sans-serif;\n    font-size: 30px;\n    position: relative;\n    left: 20px;\n    top: 30px;\n    opacity: 0.8;\n}\n.displaydescp{\n    font-family: Gill Sans, sans-serif;\n    font-size: 30px;\n    position: relative;\n    left: 20px;\n    top: 50px;\n    opacity: 0.8;\n}\n.links{\n    color: #803300;\n    text-decoration: underline;\n    font-family: Gill Sans, sans-serif;\n    font-size: 25px;\n    letter-spacing: 2px;\n    font-weight: lighter;\n    opacity:0.6;\n}\n.home{\n    position: absolute;\n    right: 450px;\n    top: 20px;\n}\n.discover{\n    position: absolute;\n    right: 250px;\n    top: 20px;\n}\n.timeline{\n    position: absolute;\n    right: 50px;\n    top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtcGFnZS9ldmVudC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztBQUNYO0FBRUU7SUFDRSxhQUFhO0VBQ2Y7QUFFRjtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUdBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7QUFDYjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0FBQ2I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQtcGFnZS9ldmVudC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAzNXZ3O1xufVxuLmlke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLnJpZ2h0e1xuICAgIHdpZHRoOjY1dnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmU1Y2M7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OjBweDtcbiAgICB0b3A6MHB4O1xufVxuICBcbiAgLmV4YW1wbGUtaXRlbSB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4uY2xpY2tpbWd7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xufVxuLmNsaWNraW1nOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5kaXNwbGF5aW1ne1xuICAgIGhlaWdodDo1MDBweDtcbiAgICBtYXgtd2lkdGg6IDkyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA3MHB4O1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjODAzMzAwO1xufVxuXG4uZXhwbGFpbntcbiAgICBmb250LWZhbWlseTogR2lsbCBTYW5zLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzMDBweDtcbiAgICBsZWZ0OiAyMDBweDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRpc3BsYXlkYXRle1xuICAgIGZvbnQtZmFtaWx5OiBHaWxsIFNhbnMsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHRvcDogMzBweDtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5kaXNwbGF5ZGVzY3B7XG4gICAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuXG4ubGlua3N7XG4gICAgY29sb3I6ICM4MDMzMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBvcGFjaXR5OjAuNjtcbn1cblxuLmhvbWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0NTBweDtcbiAgICB0b3A6IDIwcHg7XG59XG5cbi5kaXNjb3ZlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI1MHB4O1xuICAgIHRvcDogMjBweDtcbn1cblxuLnRpbWVsaW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTBweDtcbiAgICB0b3A6IDIwcHg7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/event-page/event-page.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/event-page/event-page.component.ts ***!
          \****************************************************/
        /*! exports provided: EventPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageComponent", function () { return EventPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _all_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../all.service */ "./src/app/all.service.ts");
            /* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
            var EventPageComponent = /** @class */ (function () {
                function EventPageComponent(route, allService, location) {
                    var _this = this;
                    this.route = route;
                    this.allService = allService;
                    this.location = location;
                    this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
                    this.resultArr = [];
                    this.globalResultArr = [];
                    this.sortedAlbumArr = [];
                    //-----get from timeline-----
                    this.viewPhoto = function (id) {
                        _this.allService.getViewPhoto(id).subscribe(function (res) {
                            var tempDescrp = res[0].description;
                            var objDescrp = JSON.parse(String(tempDescrp));
                            //generate json object represent one photo
                            var temp = {
                                albumId: objDescrp.albumId,
                                cover: objDescrp.cover,
                                create_date: objDescrp.create_date,
                                parsed_date: _this.getDate(objDescrp.create_date),
                                description: objDescrp.description,
                                event: objDescrp.event,
                                src: res[0].src
                            };
                            //push to globle variable
                            _this.globalResultArr.push(temp);
                            if (_this.globalResultArr.length == _this.groupPhotosInfo.length) {
                                _this.globalResultArr = _this.sortByTime(_this.globalResultArr);
                                var tempArr = _this.selectId(_this.globalResultArr);
                                _this.sortedAlbumArr = _this.sortByAlbum(tempArr);
                                console.log(_this.sortedAlbumArr);
                            }
                        }, function (err) {
                            console.log('HTTP error', err);
                            _this.errMsg = "Error: " + err;
                        });
                    };
                    this.getPhotos = function () {
                        _this.allService.getPhotos().subscribe(function (res) {
                            _this.groupPhotosInfo = res;
                            _this.generatePhotoData();
                        }, function (err) {
                            console.log('HTTP error', err);
                            _this.errMsg = "Error: " + err;
                        });
                    };
                }
                EventPageComponent.prototype.ngOnInit = function () {
                    this.getData();
                    this.getPhotos();
                };
                EventPageComponent.prototype.getData = function () {
                    var id = this.route.snapshot.paramMap.get('id');
                    this.id = id;
                };
                EventPageComponent.prototype.sortByAlbum = function (a) {
                    var sortedArray = a.sort(function (obj1, obj2) {
                        if (obj1.albumId > obj2.albumId) {
                            return 1;
                        }
                        if (obj1.albumId < obj2.albumId) {
                            return -1;
                        }
                        return 0;
                    });
                    return sortedArray;
                };
                EventPageComponent.prototype.displayImg = function (src, date, descp) {
                    console.log("display");
                    this.displayimg = src;
                    this.displaydate = date;
                    this.displaydescp = descp;
                };
                EventPageComponent.prototype.selectId = function (a) {
                    var result = [];
                    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
                        var i = a_1[_i];
                        if (i.event == this.id) {
                            result.push(i);
                        }
                    }
                    return result;
                };
                EventPageComponent.prototype.generatePhotoData = function () {
                    for (var _i = 0, _a = this.groupPhotosInfo; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.viewPhoto(item.id);
                    }
                };
                EventPageComponent.prototype.getDate = function (rawDate) {
                    var monthName = ["January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"];
                    var monthNameAbb = ["Jan.",
                        "Feb.",
                        "Mar.",
                        "Apr.",
                        "May.",
                        "Jun.",
                        "Jul.",
                        "Aug.",
                        "Sep.",
                        "Oct.",
                        "Nov.",
                        "Dec."];
                    var month = rawDate.slice(5, 7);
                    var date = rawDate.slice(8, 10);
                    return monthNameAbb[+month - 1] + " " + date;
                };
                EventPageComponent.prototype.sortByTime = function (a) {
                    var sortedArray = a.sort(function (obj1, obj2) {
                        if (+obj1.create_date.slice(5, 7) > +obj2.create_date.slice(5, 7)) {
                            return -1;
                        }
                        if (+obj1.create_date.slice(5, 7) < +obj2.create_date.slice(5, 7)) {
                            return 1;
                        }
                        if (+obj1.create_date.slice(5, 7) == +obj2.create_date.slice(5, 7)) {
                            if (+obj1.create_date.slice(8, 10) > +obj2.create_date.slice(8, 10)) {
                                return -1;
                            }
                            if (+obj1.create_date.slice(8, 10) < +obj2.create_date.slice(8, 10)) {
                                return 1;
                            }
                        }
                        return 0;
                    });
                    return sortedArray;
                };
                return EventPageComponent;
            }());
            EventPageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _all_service__WEBPACK_IMPORTED_MODULE_4__["AllService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            EventPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-event-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event-page/event-page.component.html")).default,
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event-page.component.css */ "./src/app/event-page/event-page.component.css")).default]
                })
            ], EventPageComponent);
            /***/ 
        }),
        /***/ "./src/app/globals.ts": 
        /*!****************************!*\
          !*** ./src/app/globals.ts ***!
          \****************************/
        /*! exports provided: Globals */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function () { return Globals; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Globals = /** @class */ (function () {
                function Globals() {
                    this.globalOnePhotoArr = [];
                    this.globalGroupPhotos = [];
                }
                return Globals;
            }());
            Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], Globals);
            /***/ 
        }),
        /***/ "./src/app/home-page/home-page.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/home-page/home-page.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#bg {\n    position: fixed; \n    top: -50%; \n    left: -50%; \n    width: 200%; \n    height: 200%;\n  }\n  #bg img {\n    position: absolute; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 0; \n    margin: auto; \n    min-width: 50%;\n    min-height: 50%;\n    opacity:0.6;\n  }\n  .title{\n    color: white;\n    z-index: 3;\n    position: absolute;\n    top: 140px;\n    right: 30px;\n    font-size: 150px;\n    letter-spacing: 2px;\n    font-family: Impact, fantasy;\n  }\n  .subtitle{\n    color: white;\n    z-index: 3;\n    position: absolute;\n    top: 360px;\n    right: 30px;\n    font-size: 80px;\n    letter-spacing: 1px;\n    font-family: Impact, fantasy;\n    opacity: 0.8;\n  }\n  .subtitle2{\n    color: white;\n    z-index: 3;\n    position: absolute;\n    top: 480px;\n    right: 30px;\n    font-size: 80px;\n    letter-spacing: 1px;\n    font-family: Impact, fantasy;\n    opacity: 0.8;\n  }\n  .line{\n    position: absolute;\n    z-index: 3;\n    width: 200px;\n    color: white;\n    border-top: 2px solid;\n    top: 330px;\n    right: 30px;\n  }\n  .line2{\n    position: absolute;\n    z-index: 3;\n    width: 260px;\n    color: white;\n    border-top: 2px solid;\n  }\n  .line3{\n    position: absolute;\n    z-index: 3;\n    width: 220px;\n    color: white;\n    border-top: 2px solid;\n  }\n  .timeline{\n      position: absolute;\n      z-index: 3;\n      top: 200px;\n      left: 100px;\n      color:white;\n      font-size: 40px;\n      font-family: Gill Sans, sans-serif;\n      letter-spacing: 8px;\n      line-height: 1.2;\n  }\n  .discover{\n    position: absolute;\n    z-index: 3;\n    top: 320px;\n    left: 100px;\n    color:white;\n    font-size: 40px;\n    font-family: Gill Sans, sans-serif;\n    letter-spacing: 8px;\n    line-height: 1.2;\n}\n  .upload{\n    position: absolute;\n    z-index: 3;\n    top: 440px;\n    left: 100px;\n    color:white;\n    font-size: 40px;\n    font-family: Gill Sans, sans-serif;\n    letter-spacing: 8px;\n    line-height: 1.2;\n  }\n  .material-icons{\n      font-size: 40px !important;\n  }\n  a:-webkit-any-link {\n    text-decoration: none;\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw0QkFBNEI7RUFDOUI7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0VBR0M7TUFDRyxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFVBQVU7TUFDVixXQUFXO01BQ1gsV0FBVztNQUNYLGVBQWU7TUFDZixrQ0FBa0M7TUFDbEMsbUJBQW1CO01BQ25CLGdCQUFnQjtFQUNwQjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7TUFDSSwwQkFBMEI7RUFDOUI7RUFFQTtJQUNFLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgdG9wOiAtNTAlOyBcbiAgICBsZWZ0OiAtNTAlOyBcbiAgICB3aWR0aDogMjAwJTsgXG4gICAgaGVpZ2h0OiAyMDAlO1xuICB9XG4gICNiZyBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgdG9wOiAwOyBcbiAgICBsZWZ0OiAwOyBcbiAgICByaWdodDogMDsgXG4gICAgYm90dG9tOiAwOyBcbiAgICBtYXJnaW46IGF1dG87IFxuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICBvcGFjaXR5OjAuNjtcbiAgfVxuXG4gIC50aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNDBweDtcbiAgICByaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDE1MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgZmFudGFzeTtcbiAgfVxuXG4gIC5zdWJ0aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNjBweDtcbiAgICByaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBmYW50YXN5O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAuc3VidGl0bGUye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ4MHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIGZhbnRhc3k7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgLmxpbmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gICAgdG9wOiAzMzBweDtcbiAgICByaWdodDogMzBweDtcbiAgfVxuXG4gIC5saW5lMntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMztcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZDtcbiAgfVxuXG4gIC5saW5lM3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMztcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZDtcbiAgfVxuXG4gIFxuICAgLnRpbWVsaW5le1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIHRvcDogMjAwcHg7XG4gICAgICBsZWZ0OiAxMDBweDtcbiAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucywgc2Fucy1zZXJpZjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG5cbiAgLmRpc2NvdmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIHRvcDogMzIwcHg7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHaWxsIFNhbnMsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4gIC51cGxvYWR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgdG9wOiA0NDBweDtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIH1cbiAgLm1hdGVyaWFsLWljb25ze1xuICAgICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBhOi13ZWJraXQtYW55LWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home-page/home-page.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/home-page/home-page.component.ts ***!
          \**************************************************/
        /*! exports provided: HomePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () { return HomePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomePageComponent = /** @class */ (function () {
                function HomePageComponent() {
                }
                HomePageComponent.prototype.ngOnInit = function () {
                };
                return HomePageComponent;
            }());
            HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
                })
            ], HomePageComponent);
            /***/ 
        }),
        /***/ "./src/app/timeline-page/timeline-page.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/timeline-page/timeline-page.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".links{\n    color: white;\n    text-decoration: underline;\n    font-family: Gill Sans, sans-serif;\n    font-size: 25px;\n    letter-spacing: 2px;\n    font-weight: lighter;\n    opacity: 0.6;\n}\n\n\n.home{\n    position: absolute;\n    right: 450px;\n    top: 20px;\n}\n\n\n.discover{\n    position: absolute;\n    right: 250px;\n    top: 20px;\n}\n\n\n.timeline{\n    position: absolute;\n    right: 50px;\n    top: 20px;\n}\n\n\n/*-----------------------------------------------*/\n\n\n.title{\n    position: relative;\n    top: 70px;\n    left: 120px;\n    color: white;\n    font-size: 50px;\n    font-family: Gill Sans, sans-serif;\n    font-weight: bold;\n    padding-left:50px;\n    letter-spacing: 5px;    \n}\n\n\n.year{\n    position: relative;\n    top: 120px;\n    left: 120px;\n    color: white;\n    font-size: 30px;\n    font-family: Gill Sans, sans-serif;\n    font-weight: bold;\n    padding-left:50px;\n    letter-spacing: 5px;    \n}\n\n\n.event{\n    display: flex;\n    flex-direction: row;\n    margin: 25px 50px 75px 10px;\n    font-size: 25px;\n}\n\n\n.date-descp{\n    background-color: #ff8000;\n    height: 450px;\n    width: 600px;\n    position: relative;\n    top: 130px;\n    left: 150px;\n    text-decoration: none;;\n}\n\n\n.date{\n    font-size: 85px;\n    font-weight: bold;\n    color: white;\n    font-family: Impact, fantasy;\n    letter-spacing: 2px;\n    padding: 25px 0px 0px 35px;\n}\n\n\n.month{\n    font-size: 45px;\n    font-weight: bold;\n    color: white;\n    font-family: Impact, fantasy;\n    letter-spacing: 2px;\n    padding: 0px 0px 0px 80px;\n}\n\n\n.eventinfo{\n    font-size: 25px;\n    font-weight: bold;\n    color: white;\n    font-family: Noto Sans, sans-serif;\n    letter-spacing: 2px;\n    padding: 90px 0px 0px 40px;\n}\n\n\n.line1{\n    border-top: 3px solid white;\n    width: 20px;\n    padding: 0px 0px 0px 0px;\n    margin: 20px 40px;\n}\n\n\n.descp{\n    font-size: 20px;\n    color: white;\n    font-family: Noto Sans, sans-serif;\n    padding: 0px 0px 0px 40px;\n    max-width: 250px;\n}\n\n\n.image{\n    border: 10px solid white;\n    height: 350px;\n    z-index: 3;\n    position: relative;\n    top: 170px;\n    left: -120px;\n}\n\n\n.today{\n    background-color: #ff8000;\n    height: 450px;\n    width: 600px;\n    position: relative;\n    top: 150px;\n    left: 160px;\n    text-decoration: none;\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 90px;\n}\n\n\n.today-text{\n    font-size: 85px;\n    font-weight: bold;\n    color: white;\n    font-family: Impact, fantasy;\n    letter-spacing: 2px;\n    padding: 25px 0px 0px 35px;\n}\n\n\n#upload-btn {\n    display: inline-block;\n    height: 250px;\n    width: 250px;\n    border: 3px solid #ff8000;\n    border-radius: 20px;\n    position: relative;\n    background-color: white;\n    left: 80px;\n    top: 150px;\n}\n\n\n#upload-btn:hover{\n    transform: scale(1.05);\n    .plus {\n        transform: scale(1.2);\n    }\n}\n\n\n.plus {\n    font-size: 45px !important;\n    color: #ff8000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUtcGFnZS90aW1lbGluZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztBQUNiOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztBQUNiOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOzs7QUFFQSxrREFBa0Q7OztBQUNsRDtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0o7OztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS1wYWdlL3RpbWVsaW5lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rc3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1mYW1pbHk6IEdpbGwgU2Fucywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cblxuLmhvbWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0NTBweDtcbiAgICB0b3A6IDIwcHg7XG59XG5cbi5kaXNjb3ZlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI1MHB4O1xuICAgIHRvcDogMjBweDtcbn1cblxuLnRpbWVsaW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTBweDtcbiAgICB0b3A6IDIwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnRpdGxle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDcwcHg7XG4gICAgbGVmdDogMTIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LWZhbWlseTogR2lsbCBTYW5zLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdDo1MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7ICAgIFxufVxuXG4ueWVhcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMjBweDtcbiAgICBsZWZ0OiAxMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBHaWxsIFNhbnMsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1sZWZ0OjUwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDsgICAgXG59XG5cbi5ldmVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiAyNXB4IDUwcHggNzVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmRhdGUtZGVzY3B7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODAwMDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMzBweDtcbiAgICBsZWZ0OiAxNTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7O1xufVxuXG4uZGF0ZXtcbiAgICBmb250LXNpemU6IDg1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIGZhbnRhc3k7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMzVweDtcbn1cblxuLm1vbnRoe1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgZmFudGFzeTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDgwcHg7XG59XG5cbi5ldmVudGluZm97XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogTm90byBTYW5zLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogOTBweCAwcHggMHB4IDQwcHg7XG59XG5cbi5saW5lMXtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIG1hcmdpbjogMjBweCA0MHB4O1xufVxuXG4uZGVzY3B7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogTm90byBTYW5zLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDQwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuLmltYWdle1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCB3aGl0ZTtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTcwcHg7XG4gICAgbGVmdDogLTEyMHB4O1xufVxuXG4udG9kYXl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODAwMDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNTBweDtcbiAgICBsZWZ0OiAxNjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XG59XG5cbi50b2RheS10ZXh0e1xuICAgIGZvbnQtc2l6ZTogODVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgZmFudGFzeTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDI1cHggMHB4IDBweCAzNXB4O1xufVxuXG4jdXBsb2FkLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZjgwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbGVmdDogODBweDtcbiAgICB0b3A6IDE1MHB4O1xufVxuXG4jdXBsb2FkLWJ0bjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIC5wbHVzIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbn1cblxuLnBsdXMge1xuICAgIGZvbnQtc2l6ZTogNDVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmY4MDAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/timeline-page/timeline-page.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/timeline-page/timeline-page.component.ts ***!
          \**********************************************************/
        /*! exports provided: TimelinePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageComponent", function () { return TimelinePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _all_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all.service */ "./src/app/all.service.ts");
            /* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
            var TimelinePageComponent = /** @class */ (function () {
                function TimelinePageComponent(allService, globals) {
                    var _this = this;
                    this.allService = allService;
                    this.globals = globals;
                    this.year = '2019';
                    this.resultArr = [];
                    this.globalResultArr = [];
                    this.viewPhoto = function (id) {
                        _this.allService.getViewPhoto(id).subscribe(function (res) {
                            var tempDescrp = res[0].description;
                            var objDescrp = JSON.parse(String(tempDescrp));
                            //generate json object represent one photo
                            var temp = {
                                albumId: objDescrp.albumId,
                                cover: objDescrp.cover,
                                create_date: objDescrp.create_date,
                                parsed_date: _this.getDate(objDescrp.create_date),
                                description: objDescrp.description,
                                event: objDescrp.event,
                                src: res[0].src
                            };
                            //push to globle variable
                            _this.globalResultArr.push(temp);
                            if (_this.globalResultArr.length == _this.groupPhotosInfo.length) {
                                _this.globalResultArr = _this.sortByTime(_this.globalResultArr);
                                for (var _i = 0, _a = _this.globalResultArr; _i < _a.length; _i++) {
                                    var entry = _a[_i];
                                    if (entry.cover == true) {
                                        _this.resultArr.push(entry);
                                    }
                                }
                                // this.chageGlobals();
                            }
                        }, function (err) {
                            console.log('HTTP error', err);
                            _this.errMsg = "Error: " + err;
                        });
                    };
                    this.getPhotos = function () {
                        _this.allService.getPhotos().subscribe(function (res) {
                            console.log(res);
                            _this.groupPhotosInfo = res;
                            _this.globals.globalGroupPhotos = _this.groupPhotosInfo;
                            _this.generatePhotoData();
                        }, function (err) {
                            console.log('HTTP error', err);
                            _this.errMsg = "Error: " + err;
                        });
                    };
                }
                TimelinePageComponent.prototype.ngOnInit = function () {
                    this.getPhotos();
                };
                TimelinePageComponent.prototype.generatePhotoData = function () {
                    for (var _i = 0, _a = this.groupPhotosInfo; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.viewPhoto(item.id);
                    }
                };
                TimelinePageComponent.prototype.getDate = function (rawDate) {
                    var monthName = ["January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"];
                    var monthNameAbb = ["Jan.",
                        "Feb.",
                        "Mar.",
                        "Apr.",
                        "May.",
                        "Jun.",
                        "Jul.",
                        "Aug.",
                        "Sep.",
                        "Oct.",
                        "Nov.",
                        "Dec."];
                    var month = rawDate.slice(5, 7);
                    var date = rawDate.slice(8, 10);
                    return monthNameAbb[+month - 1] + " " + date;
                };
                // private chageGlobals(){
                //   this.globals.globalOnePhotoArr = this.globalResultArr;
                //   console.log(this.globals.globalOnePhotoArr);
                // }
                TimelinePageComponent.prototype.sortByTime = function (a) {
                    var sortedArray = a.sort(function (obj1, obj2) {
                        if (+obj1.create_date.slice(5, 7) > +obj2.create_date.slice(5, 7)) {
                            return -1;
                        }
                        if (+obj1.create_date.slice(5, 7) < +obj2.create_date.slice(5, 7)) {
                            return 1;
                        }
                        if (+obj1.create_date.slice(5, 7) == +obj2.create_date.slice(5, 7)) {
                            if (+obj1.create_date.slice(8, 10) > +obj2.create_date.slice(8, 10)) {
                                return -1;
                            }
                            if (+obj1.create_date.slice(8, 10) < +obj2.create_date.slice(8, 10)) {
                                return 1;
                            }
                        }
                        return 0;
                    });
                    return sortedArray;
                };
                return TimelinePageComponent;
            }());
            TimelinePageComponent.ctorParameters = function () { return [
                { type: _all_service__WEBPACK_IMPORTED_MODULE_2__["AllService"] },
                { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] }
            ]; };
            TimelinePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-timeline-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timeline-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timeline-page/timeline-page.component.html")).default,
                    providers: [_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timeline-page.component.css */ "./src/app/timeline-page/timeline-page.component.css")).default]
                })
            ], TimelinePageComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/TeaLion/Desktop/CSE331/CSE331/photo-sharing-app/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map