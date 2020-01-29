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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-orders/admin-orders.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-orders/admin-orders.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"mt-5\">Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n        <th>Order ID</th>\n        <th>Name</th>\n        <th>Date</th>\n        <th></th>\n    </tr>\n  </thead> \n  <tbody>\n    <tr *ngFor=\"let order of orders; let i = index\">\n        <td>{{ order.orderID }}</td>\n        <td>{{ order.name }}</td>\n        <td>{{ order.date | date}}</td>\n        <td>\n            <button type=\"button\" (click)=\"toggleModal(i)\" class=\"btn btn-link\">View Order</button>\n        </td>\n    </tr>\n  </tbody> \n</table>\n\n<div *ngIf=\"showModal\">\n    <app-order-modal [order]=\"orders[orderIndex]\" (toggleModal)=\"closeModal($event)\"></app-order-modal>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-products/admin-products.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-products/admin-products.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center mt-3\">Products</h2>\n<p>\n    <button routerLink=\"/admin/products/new\" \n    class=\"btn btn-primary mt-2\">\n        New Product\n    </button>\n</p>\n<p>\n    <input \n    #query\n    (keyup)=\"pageCounter = getMaxPages(query.value)\" \n    type=\"text\" class=\"form-control\" \n    placeholder=\"Search...\">\n</p>\n\n<table class=\"bold-font table table-striped table-bordered table-hover\">\n    <thead>\n        <tr>\n            <th (click)=\"sortProducts('id')\" style=\"width: 10%\">\n                <ng-container *ngIf=\"sortCategory === 'id'\">\n                    <fa-icon *ngIf=\"idClick\" [icon]=\"angleDown\"></fa-icon>\n                    <fa-icon *ngIf=\"!idClick\" [icon]=\"angleUp\"></fa-icon>\n                </ng-container>\n            </th>\n            <th (click)=\"sortProducts('title')\" style=\"width: 45%\">\n                Title\n                <ng-container *ngIf=\"sortCategory === 'title'\">\n                    <fa-icon *ngIf=\"titleClick\" [icon]=\"angleDown\"></fa-icon>\n                    <fa-icon *ngIf=\"!titleClick\" [icon]=\"angleUp\"></fa-icon>\n                </ng-container>\n            </th>\n            <th (click)=\"sortProducts('price')\" style=\"width: 30%\">\n                Price\n                <ng-container *ngIf=\"sortCategory === 'price'\">\n                    <fa-icon *ngIf=\"priceClick\" [icon]=\"angleDown\"></fa-icon>\n                    <fa-icon *ngIf=\"!priceClick\" [icon]=\"angleUp\"></fa-icon>\n                </ng-container>\n            </th>\n            <th style=\"width: 15%\"></th>\n        </tr>\n    </thead>\n    <tbody>\n        <ng-container *ngFor=\"let product of filterList(query.value) | slice:(pageCounter - 1)*itemLimit:pageCounter*itemLimit; let i = index\">\n            <tr>\n                <td>{{ (pageCounter - 1) * (itemLimit % products.length) + (i + 1) }}</td>\n                <td>{{ product.title }}</td>\n                <td>{{ product.price | currency: 'USD': true }}</td>\n                <td>\n                    <a [routerLink]=\"['/admin/products', product.id]\">Edit</a>\n                </td>\n            </tr>   \n        </ng-container>\n    </tbody>\n    <tfoot>\n    \n    </tfoot>\n</table>\n<div class=\"bold-font container form-inline\">\n    \n    Results {{ (pageCounter - 1)  * itemLimit + 1 }} - {{ listEnd(query.value) ? pageCounter * itemLimit : filterList(query.value).length }} / {{ filterList(query.value).length }} \n    \n    <div class=\"ml-auto\">\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text bold-font text-center\" style=\"width: 4rem\">Limit:</span>\n            </div>\n            <input [value]=\"itemLimit\" (input)=\"newItemLimit($event.target.value ? $event.target.value : 1, query.value)\" type=\"number\" \n                min=\"1\" max=\"{{ filterList(query.value).length }}\"\n                class=\"form-control bold-font mr-5 text-center border-round-right\" style=\"width: 5rem\" \n                placeholder=\"{{ pageCounter*10 }}\">\n\n            <button [disabled]=\"pageCounter === 1\" type=\"button\" style=\"width: 2.7rem\" class=\"input-group-text ml-5 mr-1 text-center\" (click)=\"pageBegin()\">\n                <fa-icon [icon]=\"angleDoubleLeft\"></fa-icon>\n            </button>\n            <button [disabled]=\"pageCounter === 1\" type=\"button\" style=\"width: 2.3rem\" class=\"input-group-text mr-1 text-center\" (click)=\"pageChangeOne(-1)\">\n                <fa-icon [icon]=\"angleLeft\"></fa-icon>    \n            </button>\n\n            <input type=\"text\" \n                class=\"form-control bold-font text-center border-round-left\" style=\"width: 4rem !important\"\n                placeholder=\"{{ pageCounter }}\">\n            <span class=\"input-group-append float-right mr-1\">\n                <span class=\"input-group-text bold-font\">/ {{ getMaxPages(query.value) }}</span>\n            </span>\n\n            <button [disabled]=\"!listEnd(query.value)\" type=\"button\" style=\"width: 2.3rem\" class=\"input-group-text mr-1 text-center\" (click)=\"pageChangeOne(1)\">\n                <fa-icon [icon]=\"angleRight\"></fa-icon>\n            </button>\n            <button [disabled]=\"!listEnd(query.value)\" type=\"button\" style=\"width: 2.7rem\" class=\"input-group-text mr-1 text-center\" (click)=\"pageEnd(query.value)\">\n                <fa-icon [icon]=\"angleDoubleRight\"></fa-icon>\n            </button>\n        </div>\n    </div>\n</div>\n\n        <!-- \n<div class=\"row\">\n    <div class=\"col-3\">\n        Results {{ pageCounter * 10 + 1 }} - {{ products.length > pageCounter*10+10 ? pageCounter*10+10 : products.length }} / {{ products.length }} \n    </div>\n    <div class=\"ml-auto\">\n\n        <span class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Limit:</span>\n        </span>\n        <input type=\"text\" \n        class=\"input-group-text\" style=\"width: 10% !important; text-align: center\" \n        placeholder=\"{{pageCounter*10 + 10}}\">\n        \n        <button type=\"button\" style=\"width: 7%; text-align: center\" class=\"input-group-text mr-1\" (click)=\"pageChange(1)\"><<</button>\n        <button type=\"button\" style=\"width: 6%; text-align: center\" class=\"input-group-text mr-1\" (click)=\"pageChange(-1)\"><</button>\n\n\n        <input type=\"text\" \n            class=\"form-control\" style=\"width: 10% !important; text-align: center\" \n            aria-label=\"Amount (to the nearest dollar)\" \n            placeholder=\"{{ pageCounter + 1 }}\"\n        >\n        <span class=\"input-group-prepend float-right mr-1\">\n            <span class=\"input-group-text\">/ {{ pageCounter + 1 }}</span>\n        </span>\n\n        <button type=\"button\" style=\"width: 6%; text-align: center\" class=\"input-group-text mr-1\" (click)=\"pageChange(1)\">></button>\n        <button type=\"button\" style=\"width: 7%; text-align: center\" class=\"input-group-text mr-1\" (click)=\"pageChange(-1)\">>></button>\n    </div> \n</div>\n-->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/product-form/product-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/product-form/product-form.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bg-success rounded mt-5 pb-3 text-center\">\n    <img src=\"../../assets/images/ferrari_fresh_logo.png\">\n    <div class=\"card rounded\">\n        <h5 class=\"card-title text-center\">Product Form</h5>\n        <div *ngIf=\"this.errors?.general && !this.productForm.touched\">\n            <small class=\"text-danger\">\n                {{ this.errors.general }}\n            </small>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-9 col-lg-7 ml-3 mb-2\">\n                    <form *ngIf=\"productForm\" [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group\">\n                            <label for=\"title\">Title</label>\n                            <input formControlName=\"title\" id=\"title\" \n                                type=\"text\" class=\"form-control\" placeholder=\"Item\">\n                            <div *ngIf=\"title.invalid && title.touched\">\n                                <small *ngIf=\"title.errors?.required\" class=\"text-danger\">\n                                    Title is required\n                                </small>\n                            </div>\n                            <div *ngIf=\"title.untouched && this.errors?.title\">\n                                <small class=\"text-danger\">\n                                    {{ this.errors.title }}\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"price\">Price</label>\n                            <div id=\"price\" class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">$</span>\n                                </div>\n                                <input formControlName=\"price\" type=\"text\" \n                                    class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" \n                                    placeholder=\"0.00\">\n                            </div>\n                            <div *ngIf=\"price.invalid && price.touched\">\n                                <small *ngIf=\"price.errors?.required\" class=\"text-danger\">\n                                    Price is required\n                                </small>\n                                <small *ngIf=\"price.errors?.pattern\" class=\"text-danger\">\n                                    Invalid price\n                                </small>\n                            </div>\n                            <div *ngIf=\"price.untouched && this.errors?.price\">\n                                <small class=\"text-danger\">\n                                    {{ this.errors.price }}\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"category\">Category</label>\n                            <select formControlName=\"category\" id=\"category\" type=\"number\" class=\"form-control\">\n                                <option value=\"\">---Select---</option>\n                                <option *ngFor=\"let category of categories\" value={{category}}>{{ category }}</option>\n                            </select>\n                            <div *ngIf=\"category.invalid && category.touched\">\n                                <small *ngIf=\"category.value === ''\" class=\"text-danger\">\n                                    Please select a category\n                                </small>\n                            </div>\n                            <div *ngIf=\"category.untouched && this.errors?.category\">\n                                <small class=\"text-danger\">\n                                    {{ this.errors.category }}\n                                </small>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"imageUrl\">Image Url</label>\n                            <input formControlName=\"imageUrl\" id=\"imageUrl\" type=\"text\" class=\"form-control\">\n                            <div *ngIf=\"imageUrl.invalid && imageUrl.touched\">\n                                <small *ngIf=\"imageUrl.errors?.required\" class=\"text-danger\">\n                                    Image URL is required\n                                </small>\n                                <small *ngIf=\"imageUrl.errors?.pattern\" class=\"text-danger\">\n                                    Invalid image Url\n                                </small>\n                            </div>\n                            <div *ngIf=\"imageUrl.untouched && this.errors?.imageUrl\">\n                                <small class=\"text-danger\">\n                                    {{ this.errors.imageUrl }}\n                                </small>\n                            </div>\n                        </div>\n                        <hr class=\"my-3\">\n                        <button class=\"btn btn-primary bg-success mr-3\" [disabled]=\"!productForm.valid\">{{ productId ? 'Update' : 'Save' }} Product</button>\n                        <button type=\"button\" *ngIf=\"this.productId\" class=\"btn btn-danger\" [disabled]=\"!productForm.valid\" (click)=\"onDelete()\">Delete</button>\n                    </form>\n            </div>\n            <div class=\"col-xs-10 col-sm-10 col-md-9 col-lg-4 mx-auto my-auto\">\n                <app-product-card [product]=\"productForm.value\" [showButton]=\"false\"></app-product-card>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<!-- <div class=\"card text-center\">\n    <img *ngIf=\"imageUrl\" [src]=imageUrl.value alt=\"\" class=\"card-img-top\">\n    <div class=\"card-body\">\n        <h4 *ngIf=\"title\" class=\"card-title\">{{ title.value }}</h4>\n        <p *ngIf=\"price\" class=\"card-text\">{{ price.value | currency: 'USD': true}}</p>\n    </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<main role=\"main\">\n\n <div class=\"container\">\n   <router-outlet></router-outlet>\n </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row mt-5\">\n    <div class=\"col-3\">\n        <app-product-filter [category]=\"categoryType\"></app-product-filter>\n    </div>\n    <div class=\"col\">\n        <div class=\"row\">\n            <ng-container *ngFor=\"let product of filterByCategory(); let i = index\">\n                <div class=\"col\">\n                    <app-product-card [product]=\"product\" [showButton]=\"true\"></app-product-card>\n                </div>\n                <div *ngIf=\"(i + 1) % 2 === 0\" class=\"w-100\"></div>\n            </ng-container>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top bg-success\">\n  <img routerLink=\"/\" class=\"navbar-brand mr-5\" src=\"../../assets/images/ferrari_fresh_logo.png\" />\n  <button class=\"navbar-toggler\"><span class=\"navbar-toggler-icon\"></span></button>\n  \n  <div class=\"collapse navbar-collapse ml-5 w-100\">\n      <div class=\"navbar-nav flex-row ml-4 w-50\">\n          <input class=\"form-control mr-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n          <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n      </div>\n  \n      <ul class=\"navbar-nav ml-auto\">\n\n        <li *ngIf=\"user.getUser() as _user\" ngbDropdown class=\"nav-item dropdown\">\n          <div >\n              <button ngbDropdownToggle type=\"button\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-outline-light mr-2\">\n                  <fa-icon [icon]=\"faUser\" class=\"mr-2\"></fa-icon>\n                  Welcome {{ _user }}\n              </button>\n\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                <a class=\"dropdown-item\" routerLink=\"/my-orders\">My Orders</a>\n                <a *ngIf=\"user.getAuth() === 'ADMIN'\" class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n                <a *ngIf=\"user.getAuth() === 'ADMIN'\" class=\"dropdown-item\" routerLink=\"/admin/products\">Manage Products</a>\n                <a class=\"dropdown-item\" routerLink=\"/login\" (click)=\"user.logout()\">Logout</a>\n              </div>\n          </div>\n        </li>\n\n        <li *ngIf=\"!user.getUser()\" ngbDropdown class=\"nav-item dropdown\">\n          <div>\n            <button ngbDropdownToggle type=\"button\" href=\"#\" id=\"dropdown02\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"btn btn-outline-light mr-2\">\n              <fa-icon [icon]=\"faUser\"></fa-icon>\n              Sign in\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown02\">\n              <a routerLink=\"/login\" class=\"dropdown-item\">Sign In</a>\n              <a routerLink=\"/signup\" class=\"dropdown-item\">Sign Up</a>\n            </div>\n          </div>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <button type=\"button\" routerLink=\"/login\" class=\"btn btn-outline-light mr-2\">Login</button>\n        </li> -->\n        <li *ngIf=\"user.getUser();\" class=\"nav-item\">\n            <button type=\"button\" (shoppingCart)=\"changeQuantity($event)\" routerLink=\"/shopping-cart\" class=\"btn btn-outline-light mr-2\">\n              <span *ngIf=\"cart.getCartValue() as _cart\" class=\"badge badge-warning badge-pill badge-icon\">\n                {{ _cart }}\n              </span> \n              <fa-icon [icon]=\"faCart\" class=\"mr-2 fa-lg\" [class.cart]=\"cart.getCartValue() !== 0\" >\n              </fa-icon>\n              Shopping Cart\n            </button>\n        </li>\n\n      </ul>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-modal/order-modal.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-modal/order-modal.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal\">\n    <div class=\"container-fluid outer-container rounded text-center\">\n        <img src=\"../../assets/images/ferrari_fresh_logo.png\">\n        <span id=\"closeBtn\" (click)=\"closeModal()\" class=\"close-btn\">&times;</span>\n        <div class=\"card rounded card-dim text-left\">\n            <h3>Order ID: {{ order.orderID }}</h3>\n            <hr />\n            <div class=\"row\">\n                <div class=\"col-xs-10 col-sm-10 col-md-9 col-lg-4 ml-4 mb-2 my-auto text-center\">\n                    <div class=\"ml-3 mt-2\">\n                        <h5 *ngIf=\"order.name\">Name: {{ order.name }}</h5>\n                        <p>Ordered on: {{ order.date | date }}</p>\n                        <p>Delivered to \n                            {{ order.address.streetAddress }}, \n                            {{ order.address.city }}, \n                            {{ order.address.state }}\n                            {{ order.address.zipcode }}\n                        </p>\n                    </div>\n                </div>\n                <div class=\"col-xs-10 col-sm-10 col-md-9 col-lg-6 mx-auto\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <ul class=\"list-group list-group-flush\">\n                                <li *ngFor=\"let prod of order.products\" class=\"list-group-item\">\n                                    {{ prod.quantity }} x {{ prod.title }}\n                                    <div class=\"text-right\">\n                                    {{ prod.price * prod.quantity | currency:'USD':true }}\n                                    </div>\n                                </li>\n                                <li class=\"list-group-item font-weight-bold text-right\">\n                                    Total: {{ getTotalPrice() | currency: 'USD': true}}\n                                </li>\n                            </ul>                        \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-card/product-card.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-card/product-card.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card rounded mb-2\" style=\"width: 17rem; background-color: #e4e4e4\">\n    <img class=\"card-img-top\" *ngIf=\"product.imageUrl\" [src]=\"product.imageUrl\" alt=\"{{ product.title }}\" width=\"920\" height=\"200\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ product.title }}</h5>\n        <span class=\"card-text\">\n            <p *ngIf=\"product.quantity\" class=\"text-info\" style=\"display: inline\">{{ product.quantity }} in cart</p>\n            <p style=\"float: right;\">Price: {{ product.price  | currency: 'USD': true}}</p>\n        </span>\n    </div>\n    <div class=\"card-footer\">\n        <a *ngIf=\"showButton\" href=\"#\" (click)=\"showModal=true\" class=\"btn btn-primary btn-block\">Add to Cart</a>\n    </div>\n</div>\n\n<div *ngIf=\"showModal\">\n    <app-product-modal [product]=\"product\" (prodAmount)=\"increaseQuantity($event)\" (toggleModal)=\"closeModal($event)\"></app-product-modal>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-filter/product-filter.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-filter/product-filter.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sticky-top\" style=\"z-index: 1 !important;\">\n    Categories\n    <div class=\"list-group\">\n        <a class=\"list-group-item list-group-item-action\" \n        [class.active]=\"category === ''\" routerLink=\"/\">\n            All Categories\n        </a>\n        <a *ngFor=\"let c of categories\" \n        routerLink=\"/\" [queryParams]=\"{ category: c}\"\n        class=\"list-group-item list-group-item-action\"\n        [class.active]=\"category === c\">\n            {{ c }}\n        </a>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-modal/product-modal.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-modal/product-modal.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal\">\n    <div class=\"container-fluid outer-container rounded text-center\">\n        <img src=\"../../assets/images/ferrari_fresh_logo.png\">\n        <span id=\"closeBtn\" (click)=\"closeModal()\" class=\"close-btn\">&times;</span>\n        <div class=\"card rounded card-dim\">\n            <div class=\"row m-4\">\n                <div class=\"col\">\n                    <img *ngIf=\"product.imageUrl\" [src]=\"product.imageUrl\" alt=\"Product Image\" \n                    width=\"250\" height=\"270\">\n                </div>\n                <div class=\"col-sm-10 col-md col-lg-6 mx-auto\">\n                    <div class=\"modal-body\">\n                        <h2>{{ product.title }}</h2>\n                        <hr />\n                        <h5>Price: {{ product.price | currency: 'USD': true }} each</h5>\n                        <div class=\"d-inline\">\n                            <button [disabled]=\"quantity === 1\" class=\"btn btn-secondary\" (click)=\"changeQuantity(-1)\" type=\"button\">-</button>\n                            <button [disabled]=\"true\" class=\"btn\" style=\"width: 6.5rem; background: #ccc !important;\" type=\"button\">{{ quantity }}</button>\n                            <button class=\"btn btn-secondary\" (click)=\"changeQuantity(1)\" type=\"button\">+</button>\n                        </div>\n                        <h5 class=\"mt-4\">Total: {{ product.price * quantity | currency: 'USD': true }}</h5>\n                    </div>\n                    <button type=\"button\" (click)=\"addProdToCart()\" class=\"btn btn-primary mt-2\">Add to Cart</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/products/products.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/products/products.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>products works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/check-out/check-out.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/check-out/check-out.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card rounded my-5\">\n    <div class=\"row\">\n        <div class=\"col-xs-10 col-sm-10 col-md-9 col-lg-6 ml-3 mb-2\">\n            <form *ngIf=\"checkoutForm\" [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit()\">\n                <h2 class=\"d-inline mr-5\">Shipping</h2>\n                <input (change)=getUserAddress($event.target.checked) name=\"check\" type=\"checkbox\" class=\"mr-2\"> \n                <label for=\"check\">\n                    Send to this address\n                </label> \n    \n                <div formGroupName=\"address\">\n                    <div class=\"form-group\">\n                        <label for=\"streetAddress\">Street Address</label>\n                        <input formControlName=\"streetAddress\" name=\"streetAddress\" type=\"text\" class=\"form-control\" required placeholder=\"Street Address\">\n                        <div *ngIf=\"streetAddress.invalid && streetAddress.touched\">\n                            <small *ngIf=\"streetAddress.errors?.required\" class=\"text-danger ml-2\">\n                                Street address is required\n                            </small>\n                            <small *ngIf=\"streetAddress.errors?.pattern\" class=\"text-danger\">\n                                Invalid street address\n                            </small>\n                        </div>\n                    </div>\n        \n                    <div class=\"form-group\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <label for=\"city\">City</label>\n                                <input formControlName=\"city\" name=\"city\" type=\"text\" class=\"form-control\" required placeholder=\"City\">\n                                <div *ngIf=\"city.invalid && city.touched\">\n                                    <small *ngIf=\"city.errors?.required\" class=\"text-danger\">\n                                        City is required\n                                    </small>\n                                </div>\n                            </div>\n                            <div class=\"col\">\n                                <label for=\"state\">State</label>\n                                <select formControlName=\"state\"name=\"state\" id=\"state\" class=\"form-control\">\n                                    <option value=\"\">---Select---</option>\n                                    <option *ngFor=\"let state of states\">{{ state }}</option>\n                                </select>\n                                <div *ngIf=\"state.invalid && state.touched\">\n                                    <small *ngIf=\"state.errors?.required\" class=\"text-danger\">\n                                        State is required\n                                    </small>\n                                </div>\n                            </div>\n                            <div class=\"col\">\n                                <label for=\"zipcode\">Zipcode</label>\n                                <input formControlName=\"zipcode\" name=\"zipcode\" type=\"number\" class=\"form-control\" required placeholder=\"99999\">\n                                <div *ngIf=\"zipcode.invalid && zipcode.touched\">\n                                    <small *ngIf=\"zipcode.errors?.required\" class=\"text-danger\">\n                                        Zipcode is required\n                                    </small>\n                                    <small *ngIf=\"zipcode.errors?.minlength || zipcode.errors?.maxlength\" class=\"text-danger\">\n                                        Invalid zipcode\n                                    </small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <hr />\n                <h2 class=\"d-inline mr-3\">Billing</h2>\n                <select *ngIf=\"userBillingInfo.length\" (change)=\"getCardInfo($event.target.value)\" id=\"state\" class=\"form-control d-inline mr-3\" style=\"width: 10.5rem\" required>\n                    <option value=\"0\">Select saved card</option>\n                    <option *ngFor=\"let card of userBillingInfo; let i = index;\" value=\"{{ i + 1 }}\">****-***-****-{{ card.cardNumber % 10000 }}</option>\n                </select> \n\n                <span formGroupName=\"card\">\n                    <input formControlName=\"saveCard\" name=\"saveCard\" name=\"check\" type=\"checkbox\" class=\"mr-1\"> Save card info\n                </span>\n                <div formGroupName=\"card\">\n                    <div class=\"form-group\">\n                        <label for=\"cardNumber\">Card Number</label>\n                        <input formControlName=\"cardNumber\" name=\"cardNumber\" type=\"number\" class=\"form-control\" required placeholder=\"123-456-7890\">\n                        <div *ngIf=\"cardNumber.invalid && cardNumber.touched\">\n                            <small *ngIf=\"cardNumber.errors?.required\" class=\"text-danger ml-2\">\n                                Card number is required\n                            </small>\n                            <small *ngIf=\"cardNumber.errors?.pattern\" class=\"text-danger\">\n                                Invalid card number\n                            </small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"cardHolder\">Card Holder</label>\n                        <input formControlName=\"cardHolder\" name=\"cardHolder\" type=\"text\" class=\"form-control\" required placeholder=\"Card Holder Name\">\n                        <div *ngIf=\"cardHolder.invalid && cardHolder.touched\">\n                            <small *ngIf=\"cardHolder.errors?.required\" class=\"text-danger ml-2\">\n                                Card holder name is required\n                            </small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <label for=\"expDate\">Expiration Date</label>\n                                <input formControlName=\"expDate\" name=\"expDate\" type=\"text\" class=\"form-control\" required placeholder=\"Expiration Date\">\n                                <div *ngIf=\"expDate.invalid && expDate.touched\">\n                                    <small *ngIf=\"expDate.errors?.required\" class=\"text-danger ml-2\">\n                                        Card expiration date is required\n                                    </small>\n                                    <small *ngIf=\"expDate.errors?.pattern\" class=\"text-danger\">\n                                        Invalid expiration date\n                                    </small>\n                                </div>\n                            </div>\n                            <div class=\"col\">\n                                <label for=\"securityCode\">Security Code</label>\n                                <input formControlName=\"securityCode\" name=\"securityCode\" type=\"number\" class=\"form-control\" required placeholder=\"Security Code\">\n                                <div *ngIf=\"securityCode.invalid && securityCode.touched\">\n                                    <small *ngIf=\"securityCode.errors?.required\" class=\"text-danger ml-2\">\n                                        Card number is required\n                                    </small>\n                                    <small *ngIf=\"securityCode.errors?.pattern\" class=\"text-danger\">\n                                        Invalid securityCode\n                                    </small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary mt-2\">Place Order</button>\n            </form>\n        </div>\n        <div class=\"col-xs-10 col-sm-10 col-md-9 col-lg-5 mx-auto my-auto\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Order Summary</h4>\n                    <p class=\"card-text\">You have {{ cart.getCartValue() }} items in your shopping cart.</p>\n                    <ul class=\"list-group list-group-flush\">\n                        <li *ngFor=\"let prod of products\" class=\"list-group-item\">\n                            {{ prod.quantity }} x {{ prod.title }}\n                            <div class=\"float-right\">\n                            {{ prod.price * prod.quantity | currency:'USD':true }}\n                            </div>\n                        </li>\n                        <li class=\"list-group-item font-weight-bold text-right\">\n                            Total: {{ getTotalPrice() | currency: 'USD': true}}\n                        </li>\n                    </ul>\n                </div>\n                </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/my-orders/my-orders.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/my-orders/my-orders.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"mt-5\">Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n        <th>Order ID</th>\n        <th>Date</th>\n        <th></th>\n    </tr>\n  </thead> \n  <tbody>\n    <tr *ngFor=\"let order of orders; let i = index\">\n        <td>{{ order.orderID }}</td>\n        <td>{{ order.date | date}}</td>\n        <td>\n          <button type=\"button\" (click)=\"toggleModal(i)\" class=\"btn btn-link\">View Order</button>\n        </td>\n    </tr>\n  </tbody> \n</table>\n\n<div *ngIf=\"showModal\">\n  <app-order-modal [order]=\"orders[orderIndex]\" (toggleModal)=\"closeModal($event)\"></app-order-modal>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/order-success/order-success.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/order-success/order-success.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-success mt-5\">\n    <h1>Your order has been placed</h1>\n    <div *ngIf=\"order\" class=\"text-left ml-3\">\n        <h3>Order ID: {{ order.orderID }}</h3>\n        <hr />\n        <div class=\"row\">\n            <div class=\"col-xs-10 col-sm-10 col-md-9 col-lg-4 ml-4 mb-2 my-auto text-center\">\n                <div class=\"ml-3 mt-2\">\n                    <h5>Name: {{ order.name }}</h5>\n                    <p>Ordered on: {{ order.date | date }}</p>\n                    <p>Delivered to \n                        {{ order.address.streetAddress }}, \n                        {{ order.address.city }}, \n                        {{ order.address.state }}\n                        {{ order.address.zipcode }}\n                    </p>\n                </div>\n            </div>\n            <div class=\"col-xs-10 col-sm-10 col-md-9 col-lg-5 mx-auto\">\n                <ul class=\"list-group list-group-flush\">\n                    <li *ngFor=\"let prod of order.products\" class=\"\">\n                        {{ prod.quantity }} x {{ prod.title }}\n                        <div class=\"text-right\">\n                        {{ prod.price * prod.quantity | currency:'USD':true }}\n                        </div>\n                    </li>\n                    <hr />\n                    <li class=\"font-weight-bold text-right\">\n                        Total: {{ getTotalPrice() | currency: 'USD': true}}\n                    </li>\n                </ul>                        \n            </div>\n        </div>\n    </div>\n</div>\n<a href=\"\" class=\"ml-2 mt-2 btn btn-success\"><- Return To Home Page</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/shopping-cart/shopping-cart.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/shopping-cart/shopping-cart.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"mt-5\">Shopping Cart</h1>\n<div *ngIf=\"cart.getCartValue(); else elseBlock\">\n    <span class=\"form-inline\">\n        <p>You have {{ cart.getCartValue() }} items in your shopping cart!</p>\n        <button (click)=\"deleteCart()\" class=\"btn btn-light ml-5 mb-3\">Delete Shopping Cart</button>\n    </span>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th style=\"width: 20%\"></th>\n                <th style=\"width: 20%\">Title</th>\n                <th style=\"width: 30%\">Quantity</th>\n                <th style=\"width: 15%\">Price</th>\n                <th style=\"width: 15%\"></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let prod of products; let i = index\">\n                <td>\n                    <img *ngIf=\"prod.imageUrl\" [src]=\"prod.imageUrl\" \n                    alt=\"{{ prod.title }} Image\" width=\"100\" height=\"100\"\n                    class=\"thumbnail alig-center\">\n                </td>\n                <td class=\"align-middle\">{{ prod.title }}</td>\n                <td class=\"align-middle\">\n                    <button [disabled]=\"prod.quantity === 1\" class=\"btn btn-secondary\" (click)=\"changeQuantity(prod.id, -1, i)\" type=\"button\">-</button>\n                    <button [disabled]=\"true\" class=\"btn\" style=\"width: 6.5rem; background: #ccc !important;\" type=\"button\">{{ prod.quantity }}</button>\n                    <button class=\"btn btn-secondary\" (click)=\"changeQuantity(prod.id, 1, i)\" type=\"button\">+</button>\n                </td>\n                <td class=\"align-middle\">{{ prod.price * prod.quantity | currency: 'USD': true}}</td>\n                <td class=\"align-middle\">\n                    <button (click)=\"deleteFromCart(prod.id, prod.title, prod.quantity)\" class=\"btn btn-danger\">Delete</button>\n                </td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <td>\n                    \n                </td>\n                <td></td>\n                <td class=\"text-right\">Total:</td>\n                <td> {{ totalPrice() | currency: 'USD': true}}</td>\n                <td></td>\n            </tr>\n        </tfoot>\n    </table>\n    <a routerLink=\"/check-out\" class=\"btn btn-primary ml-3 mb-5\">Check Out</a>\n</div>\n\n<ng-template #elseBlock>\n    <p>Your shopping cart is empty!</p>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-authentication/login/login.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-authentication/login/login.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid outer-container rounded text-center w-50\">\n    <img src=\"../../assets/images/ferrari_fresh_logo.png\">\n    <div class=\"card rounded\">\n        <div class=\"row\">\n            <div class=\"col-sm-10 col-md col-lg-9 mx-auto card-signin\">\n                <div class=\"card-body\">\n                    <form [formGroup]=\"loginForm\" class=\"form-signin\" (ngSubmit)=\"onSubmit()\">\n                        <h5 class=\"card-title text-center\">Sign In</h5>\n                        <div *ngIf=\"this.errors?.general && password.pristine\">\n                            <small class=\"text-danger\">\n                                {{ this.errors.general }}\n                            </small>\n                        </div>\n\n                        <hr class=\"mb-3\">\n                        <div class=\"form-label-group mb-3\">\n                            <label for=\"email\">Email address</label>\n                            <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"form-control\" \n                            placeholder=\"Email address\" required>\n                            <div *ngIf=\"email.invalid && email.touched\">\n                                    <small *ngIf=\"email.errors?.required\" class=\"text-danger\">\n                                        Email address is required\n                                    </small>\n                                    <small *ngIf=\"email.errors?.pattern\" class=\"text-danger\">\n                                        Invalid email address\n                                    </small>\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-label-group mb-3\">\n                            <label for=\"password\">Password</label>\n                            <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                            <div *ngIf=\"password.invalid && password.touched\">\n                                <small *ngIf=\"password.errors?.required\" class=\"text-danger\">Password is required</small>\n                            </div>\n                        </div>\n        \n                        <button class=\"btn btn-lg btn-primary bg-success text-uppercase mt-4\" type=\"submit\" [disabled]=\"!loginForm.valid\">Sign in</button>\n                        <div>\n                            <small>Don't have an account? <a routerLink=\"/signup\">Sign up here!</a></small>\n                        </div>\n                        <hr class=\"my-3\">\n                        <button \n                        class=\"btn border btn-social-icon btn-lg btn-google text-uppercase googleBtn\" \n                        type=\"submit\"\n                        (click)=\"user.signIn()\">\n                            <fa-icon [icon]=\"faGoogle\"></fa-icon> \n                            Sign in with Google\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-authentication/signup/signup.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-authentication/signup/signup.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid outer-container rounded text-center w-50\">\n        <img src=\"../../assets/images/ferrari_fresh_logo.png\">\n        <div class=\"card rounded\">\n            <div class=\"row\">\n                <div class=\"col-sm-10 col-md col-lg-9 mx-auto card-signin\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">Sign Up</h5>\n                    <hr class=\"mb-3\">\n                    <form [formGroup]=\"signupForm\" class=\"form-signin\" (ngSubmit)=\"onSubmit()\">\n                        <div formGroupName='name'>\n                            <div class=\"form-label-group mb-3\">\n                                <label for=\"firstname\">First name</label>\n                                <input formControlName=\"firstname\" type=\"text\" id=\"firstname\" class=\"form-control\" \n                                placeholder=\"John\" required>\n                                <div *ngIf=\"firstname.invalid && firstname.touched\">\n                                    <small *ngIf=\"firstname.errors?.required\" class=\"text-danger\">\n                                        First name is required\n                                    </small>\n                                </div>\n                                <div *ngIf=\"firstname.untouched && this.errors?.firstname\">\n                                    <small class=\"text-danger\">\n                                        {{ this.errors.firstname }}\n                                    </small>\n                                </div>\n                            </div>\n    \n                            <div class=\"form-label-group mb-3\">\n                                <label for=\"lastname\">Last name</label>\n                                <input formControlName=\"lastname\" type=\"text\" id=\"lastname\" class=\"form-control\" \n                                placeholder=\"Doe\" required>\n                                <div *ngIf=\"lastname.invalid && lastname.touched\">\n                                    <small *ngIf=\"lastname.errors?.required\" class=\"text-danger\">\n                                        Last name is required\n                                    </small>\n                                </div>\n                                <div *ngIf=\"lastname.untouched && this.errors?.lastname\">\n                                    <small class=\"text-danger\">\n                                        {{ this.errors.lastname }}\n                                    </small>\n                                </div>\n                            </div>   \n                        </div>\n\n                        <div class=\"form-label-group mb-3\">\n                            <label for=\"dob\">Date of Birth</label>\n                            <input formControlName=\"dob\" type=\"text\" id=\"dob\" class=\"form-control\" \n                            placeholder=\"e.g. mm/dd/yyyy\" required>\n                            <div *ngIf=\"dob.invalid && dob.touched\">\n                                <small *ngIf=\"dob.errors?.required\" class=\"text-danger\">\n                                    Date of birth is required\n                                </small>\n                                <small *ngIf=\"dob.errors?.pattern\" class=\"text-danger\">\n                                    Invalid date format\n                                </small>\n                                <small *ngIf=\"!dob.errors?.required && !dob.errors?.pattern && dob.errors?.invalid\" class=\"text-danger\">\n                                    Date does not exist\n                                </small>\n                            </div>\n                            <div *ngIf=\"dob.untouched && this.errors?.dob\">\n                                <small class=\"text-danger\">\n                                    {{ this.errors.dob }}\n                                </small>\n                            </div>\n                        </div>\n\n                        <div formGroupName=\"address\">\n                            <div class=\"form-label-group mb-3\">\n                                <label for=\"streetAddress\">Street address</label>\n                                <input formControlName=\"streetAddress\" type=\"text\" id=\"streetAddress\" class=\"form-control\" \n                                placeholder=\"123 Main St.\" required>\n                                <div *ngIf=\"streetAddress.invalid && streetAddress.touched\">\n                                    <small *ngIf=\"streetAddress.errors?.required\" class=\"text-danger\">\n                                        Street address is required\n                                    </small>\n                                    <small *ngIf=\"streetAddress.errors?.pattern\" class=\"text-danger\">\n                                        Invalid street address\n                                    </small>\n                                </div>\n                                <div *ngIf=\"streetAddress.untouched && this.errors?.streetAddress\">\n                                    <small class=\"text-danger\">\n                                        {{ this.errors.streetAddress }}\n                                    </small>\n                                </div>\n                            </div>\n\n                            <div class=\"form-label-group mb-3\">\n                                <label for=\"city\">City</label>\n                                <input formControlName=\"city\" type=\"text\" id=\"city\" class=\"form-control\" \n                                placeholder=\"New York City\" required>\n                                <div *ngIf=\"city.invalid && city.touched\">\n                                    <small *ngIf=\"city.errors?.required\" class=\"text-danger\">\n                                        City is required\n                                    </small>\n                                </div>\n                                <div *ngIf=\"city.untouched && this.errors?.city\">\n                                    <small class=\"text-danger\">\n                                        {{ this.errors.city }}\n                                    </small>\n                                </div>\n                            </div>\n\n                            <div class=\"form-label-group mb-3\">\n                                <label for=\"state\">State</label>\n                                <select formControlName=\"state\" id=\"state\" class=\"form-control\" required>\n                                    <option value=\"\">---Select---</option>\n                                    <option *ngFor=\"let state of states\">{{ state }}</option>\n                                </select> \n                                <div *ngIf=\"state.invalid && state.touched\">\n                                    <small *ngIf=\"state.value === ''\" class=\"text-danger\">\n                                        Please select a state\n                                    </small>\n                                </div>\n                                <div *ngIf=\"state.untouched && this.errors?.state\">\n                                    <small class=\"text-danger\">\n                                        {{ this.errors.state }}\n                                    </small>\n                                </div>\n                            </div> \n\n                            <div class=\"form-label-group mb-3\">\n                                <label for=\"zipcode\">Zipcode</label>\n                                <input formControlName=\"zipcode\" type=\"text\" id=\"zipcode\" class=\"form-control\" \n                                placeholder=\"99999\" required (keypress)=\"isNumber($event)\">\n                                <div *ngIf=\"zipcode.invalid && zipcode.touched\">\n                                    <small *ngIf=\"zipcode.errors?.required\" class=\"text-danger\">\n                                        Zipcode is required\n                                    </small>\n                                    <small *ngIf=\"zipcode.errors?.minlength || zipcode.errors?.maxlength\" class=\"text-danger\">\n                                        Invalid zipcode\n                                    </small>\n                                </div>\n                                <div *ngIf=\"zipcode.untouched && this.errors?.zipcode\">\n                                    <small class=\"text-danger\">\n                                        {{ this.errors.zipcode }}\n                                    </small>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div formGroupName=\"accountInfo\">\n                            <div formGroupName=\"emailInput\">\n                                <div class=\"form-label-group mb-3\">\n                                    <label for=\"email\">Email address</label>\n                                    <input formControlName=\"email\" type=\"email\" id=\"email\" class=\"form-control\" \n                                    placeholder=\"test@example.com\" required>\n                                    <div *ngIf=\"email.invalid && email.touched\">\n                                        <small *ngIf=\"email.errors?.required\" class=\"text-danger\">\n                                            Email address is required\n                                        </small>\n                                        <small *ngIf=\"email.errors?.pattern\" class=\"text-danger\">\n                                            Invalid email address\n                                        </small>\n                                    </div>\n                                    <div *ngIf=\"email.untouched && this.errors?.email\">\n                                        <small class=\"text-danger\">\n                                            {{ this.errors.email }}\n                                        </small>\n                                    </div>\n                                </div>\n        \n                                <div class=\"form-label-group mb-3\">\n                                    <label for=\"confirmEmail\">Confirm email address</label>\n                                    <input formControlName=\"confirmEmail\" type=\"email\" id=\"confirmEmail\" class=\"form-control\" \n                                    placeholder=\"test@example.com\" required>\n                                    {{ emailInput.errors }}\n                                    <div *ngIf=\"confirmEmail.invalid && confirmEmail.touched\">\n                                        <small *ngIf=\"confirmEmail.errors?.required\" class=\"text-danger\">\n                                            Field is required\n                                        </small>\n                                        <small *ngIf=\"confirmEmail.errors?.notSame\" class=\"text-danger\">\n                                            Email addresses do not match up\n                                        </small>\n                                    </div>\n                                    <div *ngIf=\"confirmEmail.untouched && this.errors?.confirmEmail\">\n                                        <small class=\"text-danger\">\n                                            {{ this.errors.confirmEmail }}\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                            <div formGroupName=\"passwordInput\">\n                                <div class=\"form-label-group mb-3\">\n                                    <label for=\"password\">Password</label>\n                                    <input formControlName=\"password\" type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                                    <div *ngIf=\"password.invalid && password.touched\">\n                                        <small *ngIf=\"password.errors?.required\" class=\"text-danger\">Password is required</small>\n                                        <small *ngIf=\"password.errors?.minlength\" class=\"text-danger\">Password must have at least 7 characters</small>\n                                        <small *ngIf=\"!password.errors?.minlength && password.errors?.pattern\" class=\"text-danger\">Password must contain 1 uppercase letter, 1 number, and 1 special character</small>\n                                    </div>\n                                    <div *ngIf=\"password.untouched && this.errors?.password\">\n                                        <small class=\"text-danger\">\n                                            {{ this.errors.password }}\n                                        </small>\n                                    </div>\n                                </div>\n        \n                                <div class=\"form-label-group mb-3\">\n                                    <label for=\"confirmPassword\">Confirm password</label>\n                                    <input formControlName=\"confirmPassword\" type=\"password\" id=\"confirmPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                                    <div *ngIf=\"confirmPassword.invalid && confirmPassword.touched\">\n                                        <small *ngIf=\"confirmPassword.errors?.required\" class=\"text-danger\">Field is required</small>\n                                        <small *ngIf=\"confirmPassword.errors?.notSame\" class=\"text-danger\">Passwords do not match up</small>\n                                    </div>\n                                    <div *ngIf=\"confirmEmail.untouched && this.errors?.confirmEmail\">\n                                        <small class=\"text-danger\">\n                                            {{ this.errors.confirmEmail }}\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        \n                        <button class=\"btn btn-lg btn-primary bg-success text-uppercase mt-4\" type=\"submit\" [disabled]=\"!signupForm.valid\">Sign up</button>\n                        <div>\n                            <small>Already have an account? <a routerLink=\"/signup\">Sign in here!</a></small>\n                        </div>\n                        <hr class=\"my-3\">\n                        <button \n                            class=\"btn border btn-social-icon btn-lg btn-google text-uppercase googleBtn\" \n                            type=\"submit\"\n                            (click)=\"user.signIn()\">\n                            <fa-icon [icon]=\"faGoogle\"></fa-icon> \n                            Sign up with Google\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    ");

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

/***/ "./src/app/admin/admin-orders/admin-orders.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLW9yZGVycy9hZG1pbi1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AdminOrdersComponent = class AdminOrdersComponent {
    constructor(cart) {
        this.cart = cart;
        this.orders = [];
        this.showModal = false;
    }
    ngOnInit() {
        this.cart.getAllOrders().subscribe(res => {
            this.orders = res.orders;
        });
    }
    toggleModal(index) {
        this.showModal = true;
        this.orderIndex = index;
    }
    closeModal(value) {
        this.showModal = value;
    }
};
AdminOrdersComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
];
AdminOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-orders/admin-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/admin-orders/admin-orders.component.css")).default]
    })
], AdminOrdersComponent);



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {\r\n    background-color: #c4c4c4;\r\n    border-color: #a4a4a4;\r\n}\r\n\r\n.bold-font {\r\n    font-weight: 500 !important;\r\n}\r\n\r\n.text-center {\r\n    text-align: center !important;\r\n}\r\n\r\n.border-round-right {\r\n    border-radius: 0px 6px 6px 0px !important;\r\n}\r\n\r\n.border-round-left {\r\n    border-radius: 6px 0px 0px 6px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1wcm9kdWN0cy9hZG1pbi1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCgybisxKSA+IHRkLCAudGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDJuKzEpID4gdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHRkLCAudGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcclxuICAgIGJvcmRlci1jb2xvcjogI2E0YTRhNDtcclxufVxyXG5cclxuLmJvbGQtZm9udCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1yb3VuZC1yaWdodCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNnB4IDZweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1yb3VuZC1sZWZ0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweCAwcHggMHB4IDZweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_form_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/form-data.service */ "./src/app/services/form-data.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





let AdminProductsComponent = class AdminProductsComponent {
    constructor(product) {
        this.product = product;
        this.products = [];
        this.pageCounter = 1;
        this.itemLimit = 10;
        this.sortCategory = 'id';
        this.idClick = true;
        this.titleClick = false;
        this.priceClick = false;
        this.angleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDown"];
        this.angleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleUp"];
        this.angleDoubleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDoubleLeft"];
        this.angleDoubleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDoubleRight"];
        this.angleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleLeft"];
        this.angleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleRight"];
    }
    ngOnInit() {
        this.product.getProducts('false', 'false')
            .subscribe(res => {
            if (res.imageFlag) {
                for (const prod of res.products) {
                    prod.image = _services_form_data_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"].stringToBlob(prod.image);
                }
            }
            this.products = res.products;
            if (this.products.length < 10) {
                this.itemLimit = this.products.length;
            }
        }, err => {
            console.log(err);
        });
    }
    sortProducts(type) {
        this.sortCategory = type;
        switch (type) {
            case 'id':
                this.idClick = !this.idClick;
                this.titleClick = false;
                this.priceClick = false;
                if (this.idClick) {
                    this.products.sort((a, b) => a.id - b.id);
                }
                else {
                    this.products.sort((a, b) => b.id - a.id);
                }
                break;
            case 'title':
                this.titleClick = !this.titleClick;
                this.idClick = false;
                this.priceClick = false;
                if (this.titleClick) {
                    this.products.sort((a, b) => (a.title > b.title) ? 1 : -1);
                }
                else {
                    this.products.sort((a, b) => (b.title > a.title) ? 1 : -1);
                }
                break;
            case 'price':
                this.priceClick = !this.priceClick;
                this.idClick = false;
                this.titleClick = false;
                if (this.priceClick) {
                    this.products.sort((a, b) => a.price - b.price);
                }
                else {
                    this.products.sort((a, b) => b.price - a.price);
                }
                break;
            default:
                break;
        }
    }
    filterList(query) {
        return this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
    }
    pageChangeOne(num) {
        this.pageCounter = this.pageCounter + num;
    }
    pageBegin() {
        this.pageCounter = 1;
    }
    getMaxPages(query) {
        return Math.ceil(this.filterList(query).length / this.itemLimit);
    }
    pageEnd(query) {
        this.pageCounter = this.getMaxPages(query);
    }
    listEnd(query) {
        if (this.filterList(query).length > this.pageCounter * this.itemLimit) {
            return true;
        }
        else {
            return false;
        }
    }
    newItemLimit(value, query) {
        this.itemLimit = value;
        if (this.pageCounter * this.itemLimit >= this.products.length) {
            this.pageCounter = this.getMaxPages(query);
        }
    }
};
AdminProductsComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-products/admin-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/admin-products/admin-products.component.css")).default]
    })
], AdminProductsComponent);



/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_form_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/form-data.service */ "./src/app/services/form-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let ProductFormComponent = class ProductFormComponent {
    constructor(fb, product, router, route, dp) {
        this.fb = fb;
        this.product = product;
        this.router = router;
        this.route = route;
        this.dp = dp;
        this.regexPrice = /(\d+\.\d{2,2})/;
        this.regexImageUrl = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))(\?.*)?/;
        this.productId = this.route.snapshot.paramMap.get('id');
        this.productForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.regexPrice)]],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            imageUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.regexImageUrl)]]
        });
    }
    get title() {
        return this.productForm.get('title');
    }
    get price() {
        return this.productForm.get('price');
    }
    get category() {
        return this.productForm.get('category');
    }
    get imageUrl() {
        return this.productForm.get('imageUrl');
    }
    ngOnInit() {
        this.categories = _services_form_data_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"].getCategories();
        if (this.productId) {
            this.product.productInfo(this.productId)
                .subscribe(res => {
                this.productForm.controls.title.setValue(res.title);
                this.productForm.controls.price.setValue(this.dp.transform(res.price, '1.2-2'));
                this.productForm.controls.category.setValue(res.category);
                this.productForm.controls.imageUrl.setValue(res.imageUrl);
            });
        }
    }
    onSubmit() {
        this.productForm.markAsUntouched();
        let req = null;
        if (this.productId) {
            req = this.product.updateProduct(this.productForm.value, this.productId);
        }
        else {
            req = this.product.saveProduct(this.productForm.value);
        }
        return req
            .subscribe(res => {
            this.errors = null;
            this.router.navigate(['/admin/products']);
        }, err => {
            this.productForm.markAsUntouched();
            this.errors = err.error;
        });
    }
    onDelete() {
        if (confirm('Are you sure you want to delete this product?')) {
            return this.product.deleteProduct(this.productId)
                .subscribe(res => {
                this.errors = null;
                this.router.navigate(['/admin/products']);
            }, err => {
                console.log(err);
                this.errors = err.error;
            });
        }
    }
};
ProductFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"] }
];
ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-product-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/product-form/product-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-form.component.css */ "./src/app/admin/product-form/product-form.component.css")).default]
    })
], ProductFormComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);






let AppComponent = class AppComponent {
    constructor(user, router, route, cart) {
        this.user = user;
        this.router = router;
        this.route = route;
        this.cart = cart;
        this.title = 'ecommerce-frontend';
        if (!localStorage.token) {
            this.user.user = this.user.auth = null;
            this.router.navigate(['/login']);
        }
        else {
            const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(localStorage.token);
            if (decodedToken.exp * 1000 < Date.now()) {
                console.log(decodedToken.exp * 1000 + ', ' + Date.now());
                localStorage.removeItem('token');
                this.user.user = this.user.auth = this.user.id = null;
                this.router.navigate(['/login']);
            }
            else {
                console.log(decodedToken.exp * 1000 + ', ' + Date.now());
                this.user.user = decodedToken.name;
                this.user.auth = decodedToken.auth;
                this.user.id = decodedToken.sub;
                this.cart.getCartQuantity().subscribe();
            }
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _services_form_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/form-data.service */ "./src/app/services/form-data.service.ts");
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ "./src/app/services/admin-auth-guard.service.ts");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _shopping_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shopping/my-orders/my-orders.component */ "./src/app/shopping/my-orders/my-orders.component.ts");
/* harmony import */ var _shopping_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shopping/order-success/order-success.component */ "./src/app/shopping/order-success/order-success.component.ts");
/* harmony import */ var _shopping_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shopping/check-out/check-out.component */ "./src/app/shopping/check-out/check-out.component.ts");
/* harmony import */ var _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shopping/shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _product_products_products_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product/products/products.component */ "./src/app/product/products/products.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-authentication/login/login.component */ "./src/app/user-authentication/login/login.component.ts");
/* harmony import */ var _user_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-authentication/signup/signup.component */ "./src/app/user-authentication/signup/signup.component.ts");
/* harmony import */ var _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/product-form/product-form.component */ "./src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _product_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./product/product-filter/product-filter.component */ "./src/app/product/product-filter/product-filter.component.ts");
/* harmony import */ var _product_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./product/product-card/product-card.component */ "./src/app/product/product-card/product-card.component.ts");
/* harmony import */ var _product_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./product/product-modal/product-modal.component */ "./src/app/product/product-modal/product-modal.component.ts");
/* harmony import */ var _order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./order-modal/order-modal.component */ "./src/app/order-modal/order-modal.component.ts");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _product_products_products_component__WEBPACK_IMPORTED_MODULE_19__["ProductsComponent"],
            _shopping_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__["CheckOutComponent"],
            _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_18__["ShoppingCartComponent"],
            _shopping_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_16__["OrderSuccessComponent"],
            _shopping_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_15__["MyOrdersComponent"],
            _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_14__["AdminProductsComponent"],
            _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__["AdminOrdersComponent"],
            _user_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
            _user_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"],
            _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_24__["ProductFormComponent"],
            _product_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_26__["ProductFilterComponent"],
            _product_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_27__["ProductCardComponent"],
            _product_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_28__["ProductModalComponent"],
            _order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_29__["OrderModalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
                { path: 'signup', component: _user_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"] },
                { path: 'login', component: _user_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"] },
                { path: 'products', component: _product_products_products_component__WEBPACK_IMPORTED_MODULE_19__["ProductsComponent"] },
                { path: 'shopping-cart', component: _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_18__["ShoppingCartComponent"] },
                { path: 'my-orders', component: _shopping_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_15__["MyOrdersComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
                { path: 'check-out', component: _shopping_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__["CheckOutComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
                { path: 'order-success/:orderId', component: _shopping_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_16__["OrderSuccessComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
                { path: 'admin/orders', component: _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__["AdminOrdersComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuardService"]] },
                { path: 'admin/products/new', component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_24__["ProductFormComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuardService"]] },
                { path: 'admin/products/:id', component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_24__["ProductFormComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuardService"]] },
                { path: 'admin/products', component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_14__["AdminProductsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuardService"]] }
            ])
        ],
        providers: [
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"],
            _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuardService"],
            _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"],
            _services_form_data_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_25__["DecimalPipe"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");





let HomeComponent = class HomeComponent {
    constructor(user, product, route) {
        this.user = user;
        this.product = product;
        this.route = route;
        this.products = [];
    }
    ngOnInit() {
        this.product.getProducts('true', 'true')
            .subscribe(res => {
            this.errors = null;
            this.products = res.products;
        }, err => {
            console.log(err);
            this.errors = err;
        });
        this.route.queryParamMap.subscribe(params => {
            if (params.get('category')) {
                this.categoryType = params.get('category');
            }
            else {
                this.categoryType = '';
            }
        });
    }
    filterByCategory() {
        return this.products.filter(prod => {
            return this.categoryType === '' ? true : prod.category === this.categoryType;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:hover {\r\n    background-color: #28a745;\r\n    color: #fff;\r\n}\r\n\r\nmenu-item {\r\n    margin-left: 2.75em !important;\r\n}\r\n\r\n.badge-icon {\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 89.4%;\r\n    top: 33%;\r\n}\r\n\r\n.cart {\r\n    z-index: 1;\r\n    position: relative;\r\n    right: 3%;\r\n    top: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87QUFDWCIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5tZW51LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNzVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFkZ2UtaWNvbiB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogODkuNCU7XHJcbiAgICB0b3A6IDMzJTtcclxufVxyXG5cclxuLmNhcnQge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAzJTtcclxuICAgIHRvcDogNSU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-user.service */ "./src/app/services/auth-user.service.ts");





let NavbarComponent = class NavbarComponent {
    constructor(user, cart) {
        this.user = user;
        this.cart = cart;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
        this.faCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
    changeQuantity(amount) {
        this.quantity = this.quantity + amount;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/order-modal/order-modal.component.css":
/*!*******************************************************!*\
  !*** ./src/app/order-modal/order-modal.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-container {\r\n    margin: 200px auto 80px auto;\r\n    background-color: #28a745;\r\n    padding-bottom: 15px;\r\n    width: 700px;\r\n}\r\n\r\n.modal {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 2;\r\n    left:0;\r\n    top:0;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.modal-content {\r\n    /* background-color: #f4f4f4; */\r\n    margin: 20% auto;\r\n    width: 70%;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2),\r\n    0 7px 20px 0 rgba(0, 0, 0, 0.17);\r\n    -webkit-animation-name: modalopen;\r\n            animation-name: modalopen;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n\r\n}\r\n\r\n.modal-header {\r\n    background: coral;\r\n    padding: 15px;\r\n    color:white;\r\n}\r\n\r\n.modal-header h2, .modal-footer h3 {\r\n    margin: 0;\r\n}\r\n\r\n.modal-body {\r\n    padding: 10px 20px;\r\n}\r\n\r\n.modal-footer {\r\n    background: coral;\r\n    padding: 10px;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.close-btn {\r\n    color: white;\r\n    z-index: 1;\r\n    float: right;\r\n    font-size: 30px;\r\n}\r\n\r\n.close-btn:hover, .close-btn:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n@-webkit-keyframes modalopen {\r\n    from{opacity: 0}\r\n    to{opacity: 2}\r\n}\r\n\r\n@keyframes modalopen {\r\n    from{opacity: 0}\r\n    to{opacity: 2}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItbW9kYWwvb3JkZXItbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sS0FBSztJQUNMLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWO29DQUNnQztJQUNoQyxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDhCQUFzQjtZQUF0QixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksS0FBSyxVQUFVO0lBQ2YsR0FBRyxVQUFVO0FBQ2pCOztBQUhBO0lBQ0ksS0FBSyxVQUFVO0lBQ2YsR0FBRyxVQUFVO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItbW9kYWwvb3JkZXItbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyMDBweCBhdXRvIDgwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDsgKi9cclxuICAgIG1hcmdpbjogMjAlIGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA3cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbW9kYWxvcGVuO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuXHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogY29yYWw7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDIsIC5tb2RhbC1mb290ZXIgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogY29yYWw7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmNsb3NlLWJ0bjpob3ZlciwgLmNsb3NlLWJ0bjpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb2RhbG9wZW4ge1xyXG4gICAgZnJvbXtvcGFjaXR5OiAwfVxyXG4gICAgdG97b3BhY2l0eTogMn1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/order-modal/order-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/order-modal/order-modal.component.ts ***!
  \******************************************************/
/*! exports provided: OrderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModalComponent", function() { return OrderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderModalComponent = class OrderModalComponent {
    constructor() {
        this.toggleModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    closeModal() {
        this.toggleModal.emit(false);
    }
    getTotalPrice() {
        return this.order.products.reduce((total, currentValue) => total + currentValue.price * currentValue.quantity, 0);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderModalComponent.prototype, "order", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OrderModalComponent.prototype, "toggleModal", void 0);
OrderModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-modal/order-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-modal.component.css */ "./src/app/order-modal/order-modal.component.css")).default]
    })
], OrderModalComponent);



/***/ }),

/***/ "./src/app/product/product-card/product-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-card/product-card.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-footer {\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/product/product-card/product-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-card/product-card.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ProductCardComponent = class ProductCardComponent {
    constructor(cart) {
        this.cart = cart;
        this.showModal = false;
    }
    ngOnInit() {
    }
    closeModal(off) {
        this.showModal = off;
    }
    increaseQuantity(value) {
        if (this.product.quantity) {
            this.product.quantity += value;
        }
        else {
            this.product.quantity = value;
        }
    }
};
ProductCardComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ProductCardComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ProductCardComponent.prototype, "showButton", void 0);
ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-product-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-card/product-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-card.component.css */ "./src/app/product/product-card/product-card.component.css")).default]
    })
], ProductCardComponent);



/***/ }),

/***/ "./src/app/product/product-filter/product-filter.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/product-filter/product-filter.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sticky-top {\r\n    top: 180px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0aWNreS10b3Age1xyXG4gICAgdG9wOiAxODBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/product/product-filter/product-filter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-filter/product-filter.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_form_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/form-data.service */ "./src/app/services/form-data.service.ts");



let ProductFilterComponent = class ProductFilterComponent {
    constructor() {
        this.categories = src_app_services_form_data_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"].getCategories();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductFilterComponent.prototype, "category", void 0);
ProductFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-filter/product-filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-filter.component.css */ "./src/app/product/product-filter/product-filter.component.css")).default]
    })
], ProductFilterComponent);



/***/ }),

/***/ "./src/app/product/product-modal/product-modal.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/product/product-modal/product-modal.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-container {\r\n    margin: 200px auto 80px auto;\r\n    background-color: #28a745;\r\n    padding-bottom: 15px;\r\n    width: 700px;\r\n}\r\n\r\n.modal {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 2;\r\n    left:0;\r\n    top:0;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.modal-content {\r\n    /* background-color: #f4f4f4; */\r\n    margin: 20% auto;\r\n    width: 70%;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2),\r\n    0 7px 20px 0 rgba(0, 0, 0, 0.17);\r\n    -webkit-animation-name: modalopen;\r\n            animation-name: modalopen;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n\r\n}\r\n\r\n.modal-header {\r\n    background: coral;\r\n    padding: 15px;\r\n    color:white;\r\n}\r\n\r\n.modal-header h2, .modal-footer h3 {\r\n    margin: 0;\r\n}\r\n\r\n.modal-body {\r\n    padding: 10px 20px;\r\n}\r\n\r\n.modal-footer {\r\n    background: coral;\r\n    padding: 10px;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.close-btn {\r\n    color: white;\r\n    z-index: 1;\r\n    float: right;\r\n    font-size: 30px;\r\n}\r\n\r\n.close-btn:hover, .close-btn:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n@-webkit-keyframes modalopen {\r\n    from{opacity: 0}\r\n    to{opacity: 2}\r\n}\r\n\r\n@keyframes modalopen {\r\n    from{opacity: 0}\r\n    to{opacity: 2}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sS0FBSztJQUNMLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWO29DQUNnQztJQUNoQyxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDhCQUFzQjtZQUF0QixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksS0FBSyxVQUFVO0lBQ2YsR0FBRyxVQUFVO0FBQ2pCOztBQUhBO0lBQ0ksS0FBSyxVQUFVO0lBQ2YsR0FBRyxVQUFVO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyMDBweCBhdXRvIDgwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDsgKi9cclxuICAgIG1hcmdpbjogMjAlIGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA3cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbW9kYWxvcGVuO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuXHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogY29yYWw7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDIsIC5tb2RhbC1mb290ZXIgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogY29yYWw7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmNsb3NlLWJ0bjpob3ZlciwgLmNsb3NlLWJ0bjpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb2RhbG9wZW4ge1xyXG4gICAgZnJvbXtvcGFjaXR5OiAwfVxyXG4gICAgdG97b3BhY2l0eTogMn1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/product/product-modal/product-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product/product-modal/product-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModalComponent", function() { return ProductModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ProductModalComponent = class ProductModalComponent {
    constructor(http, cart, user) {
        this.http = http;
        this.cart = cart;
        this.user = user;
        this.toggleModal = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.prodAmount = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.quantity = 1;
    }
    ngOnInit() {
        console.log(this.product.imageUrl);
    }
    closeModal() {
        this.toggleModal.emit(false);
    }
    changeQuantity(num) {
        this.quantity = this.quantity + num;
    }
    changeProductAmount() {
        this.prodAmount.emit(this.quantity);
    }
    addProdToCart() {
        this.cart.addToCart({
            productId: this.product.id,
            user: this.user.getId(),
            quantity: this.quantity
        })
            .subscribe(res => {
            this.cart.incrementCart(this.quantity);
            this.changeProductAmount();
            this.closeModal();
        });
    }
};
ProductModalComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] },
    { type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_1__["AuthUserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], ProductModalComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], ProductModalComponent.prototype, "toggleModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], ProductModalComponent.prototype, "prodAmount", void 0);
ProductModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-product-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-modal/product-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-modal.component.css */ "./src/app/product/product-modal/product-modal.component.css")).default]
    })
], ProductModalComponent);



/***/ }),

/***/ "./src/app/product/products/products.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product/products/products.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/product/products/products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsComponent = class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/product/products/products.component.css")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/services/admin-auth-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/admin-auth-guard.service.ts ***!
  \******************************************************/
/*! exports provided: AdminAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function() { return AdminAuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AdminAuthGuardService = class AdminAuthGuardService {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    canActivate() {
        const token = localStorage.token;
        if (this.user.getAuth() === 'ADMIN') {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
};
AdminAuthGuardService.ctorParameters = () => [
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_1__["AuthUserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminAuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AdminAuthGuardService);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





let AuthGuardService = class AuthGuardService {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    canActivate(route, state) {
        const token = localStorage.token;
        if (token) {
            const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
            console.log(decodedToken.exp * 1000 + ', ' + Date.now());
            if (decodedToken.exp * 1000 > Date.now()) {
                return true;
            }
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/auth-user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth-user.service.ts ***!
  \***********************************************/
/*! exports provided: AuthUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthUserService", function() { return AuthUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);






let AuthUserService = class AuthUserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        if (localStorage.token) {
            const userData = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(localStorage.token);
            this.user = userData.name;
            this.auth = userData.auth;
            this.id = userData.sub;
        }
        else {
            this.user = this.auth = this.id = null;
        }
    }
    signIn(userData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.http.post('http://localhost:8080/api/signin', userData, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            localStorage.setItem('token', data.token);
            const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(data.token);
            this.user = decodedToken.name;
            this.auth = decodedToken.auth;
            this.id = decodedToken.sub;
            return data;
        }));
    }
    signUp(userData) {
        const objCopy = Object.assign({}, userData);
        const dateString = objCopy.dob.split('/');
        objCopy.dob = {
            month: dateString[0],
            day: dateString[1],
            year: dateString[2]
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        const obs = this.http.post('http://localhost:8080/api/signup', objCopy, { headers });
        return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            return res;
        }));
    }
    getUserShippingInfo() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('user', this.id);
        return this.http.get('http://localhost:8080/api/user/checkout/address/get', {
            headers,
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    getUserBillingInfo() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('user', this.id);
        return this.http.get('http://localhost:8080/api/user/checkout/card/get', {
            headers,
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    logout() {
        localStorage.removeItem('token');
        this.user = this.auth = this.id = null;
    }
    getAuth() {
        return this.auth;
    }
    getUser() {
        return this.user;
    }
    getId() {
        return this.id;
    }
};
AuthUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthUserService);



/***/ }),

/***/ "./src/app/services/form-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/form-data.service.ts ***!
  \***********************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FormDataService = class FormDataService {
    constructor(http) {
        this.http = http;
        this.timezone = new Date().getTimezoneOffset();
    }
    static emailMatchValidator(control) {
        const email = control.root.get('accountInfo.emailInput.email') ?
            control.root.get('accountInfo.emailInput.email').value : '';
        const confirmEmail = control.value;
        return email === '' ? null : (confirmEmail === '' ? null : (confirmEmail !== email ? { notSame: true } : null));
    }
    static passwordMatchValidator(control) {
        const password = control.root.get('accountInfo.passwordInput.password') ?
            control.root.get('accountInfo.passwordInput.password').value : '';
        const confirmPassword = control.value;
        return password === '' ? null : (confirmPassword === '' ? null : (confirmPassword !== password ? { notSame: true } : null));
    }
    static dateValidator(control) {
        const dateString = control.value.split('/');
        if (parseInt(dateString[0], 10) < 1 || parseInt(dateString[0], 10) > 12) {
            return { invalid: true };
        }
        switch (parseInt(dateString[0], 10)) {
            case 2:
                if (parseInt(dateString[1], 10) > 28) {
                    if (parseInt(dateString[1], 10) === 29) {
                        const year = parseInt(dateString[2], 10);
                        if (year % 4 !== 0) {
                            return { invalid: true };
                        }
                        if (year % 100 === 0) {
                            if (year % 400 !== 0) {
                                return { invalid: true };
                            }
                        }
                    }
                    else {
                        return { invalid: true };
                    }
                }
                break;
            case 4:
                if (parseInt(dateString[1], 10) > 30) {
                    return { invalid: true };
                }
                break;
            case 6:
                if (parseInt(dateString[1], 10) > 30) {
                    return { invalid: true };
                }
                break;
            case 9:
                if (parseInt(dateString[1], 10) > 30) {
                    return { invalid: true };
                }
                break;
            case 11:
                if (parseInt(dateString[1], 10) > 30) {
                    return { invalid: true };
                }
                break;
            default:
                break;
        }
        const date = new Date(dateString[2], dateString[0] - 1, dateString[1]);
        if (Object.prototype.toString.call(date) === '[object Date]') {
            // it is a date
            if (isNaN(date.getTime())) { // d.valueOf() could also work
                // date is not valid
                return { invalid: true };
            }
            else {
                // date is valid
                return null;
            }
        }
        else {
            // not a date
            return { invalid: true };
        }
    }
    static getStates() {
        return [
            'Alabama', 'Alaska', 'American Samoa', 'Arizona',
            'Arkansas', 'California', 'Colorado', 'Connecticut',
            'Delaware', 'District of Columbia',
            'Federated States of Micronesia', 'Florida', 'Georgia',
            'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
            'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
            'Marshall Islands', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
            'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York',
            'North Carolina', 'North Dakota',
            'Northern Mariana Islands', 'Ohio', 'Oklahoma',
            'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
            'Rhode Island', 'South Carolina', 'South Dakota',
            'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virgin Island', 'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
    static getCategories() {
        return [
            'Fruits', 'Vegetables', 'Dairy', 'Bread', 'Spices'
        ];
    }
    static stringToBlob(imageString) {
        const byteString = window.atob(imageString);
        const int8Array = new Uint8Array(new ArrayBuffer(byteString.length));
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    }
};
FormDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FormDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormDataService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-user.service */ "./src/app/services/auth-user.service.ts");






let ProductService = class ProductService {
    constructor(http, router, user) {
        this.http = http;
        this.router = router;
        this.user = user;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        });
    }
    saveProduct(productData) {
        return this.http.post('http://localhost:8080/api/admin/product/new', productData, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.products));
    }
    getProducts(imageFlag, getUserCart) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('imageFlag', imageFlag)
            .set('user', getUserCart ? this.user.getId() : null);
        return this.http.get('http://localhost:8080/api/user/products', {
            headers: this.headers,
            params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    updateProduct(productData, productID) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('productID', productID);
        return this.http.post(`http://localhost:8080/api/admin/product`, productData, {
            headers: this.headers,
            params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    productInfo(productID) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('productID', productID);
        return this.http.get('http://localhost:8080/api/admin/product/productInfo', {
            headers: this.headers,
            params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    deleteProduct(productID) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('productID', productID);
        return this.http.delete('http://localhost:8080/api/admin/product/delete', {
            headers: this.headers,
            params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_5__["AuthUserService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ShoppingCartService = class ShoppingCartService {
    constructor(http, user) {
        this.http = http;
        this.user = user;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        });
        this.clearCartCount();
    }
    getCartQuantity() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('user', this.user.getId());
        console.log(this.user.getAuth());
        return this.http.get('http://localhost:8080/api/user/products/shopping_cart/amount', {
            headers: this.headers,
            params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            this.cart = res.amount;
            return res;
        }));
    }
    addToCart(item) {
        return this.http.post('http://localhost:8080/api/user/product/shopping_cart/add', item, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    incrementCart(quantity) {
        this.cart = this.cart + quantity;
    }
    clearCartCount() {
        this.cart = 0;
    }
    getCartValue() {
        return this.cart;
    }
    getCart() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('user', this.user.getId());
        return this.http.get('http://localhost:8080/api/user/products/shopping_cart/user_products', {
            headers: this.headers,
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    changeProductQuantity(productId, num) {
        const data = {
            user: this.user.getId(),
            product: productId,
            quantity: num
        };
        return this.http.put('http://localhost:8080/api/user/product/shopping_cart/quantity_change', data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    getProductQuantity(productId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('user', this.user.getId())
            .set('productId', productId);
        return this.http.get('http://localhost:8080/api/user/product/shopping_cart/quantity', {
            headers: this.headers,
            params
        });
    }
    deleteFromCart(productId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('user', this.user.getId())
            .set('productId', productId);
        return this.http.delete('http://localhost:8080/api/user/product/shopping_cart/delete', {
            headers: this.headers,
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    deleteCart() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('user', this.user.getId());
        return this.http.delete('http://localhost:8080/api/user/products/shopping_cart/delete', {
            headers: this.headers,
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    placeOrder(orderData, productData) {
        return this.http.post('http://localhost:8080/api/user/checkout/order/place', Object.assign({}, orderData, { products: productData }, { user: this.user.getId() }), { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    getAllOrders() {
        return this.http.get('http://localhost:8080/api/admin/orders/all', { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    getAllUserOrders() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('user', this.user.getId());
        return this.http.get('http://localhost:8080/api/user/orders/all', {
            headers: this.headers,
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    getUserOrder(orderId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('orderId', orderId).set('user', this.user.getId());
        return this.http.get('http://localhost:8080/api/user/order/confirmed', {
            headers: this.headers,
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
};
ShoppingCartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_1__["AuthUserService"] }
];
ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], ShoppingCartService);



/***/ }),

/***/ "./src/app/shopping/check-out/check-out.component.css":
/*!************************************************************!*\
  !*** ./src/app/shopping/check-out/check-out.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NoZWNrLW91dC9jaGVjay1vdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shopping/check-out/check-out.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shopping/check-out/check-out.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _services_form_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/form-data.service */ "./src/app/services/form-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CheckOutComponent = class CheckOutComponent {
    constructor(fb, cart, user, router) {
        this.fb = fb;
        this.cart = cart;
        this.user = user;
        this.router = router;
        this.regexStreet = /^\d+\s[A-z]+\s[A-z]+\.?/;
        this.regexCardNumber = /\d{16}/;
        // tslint:disable-next-line:max-line-length
        // Actual Card Regex: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        this.regexExpDate = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
        this.regexSecurityCode = /^[0-9]{3,4}$/;
        this.states = _services_form_data_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"].getStates();
        this.products = [];
        this.userBillingInfo = [];
    }
    get address() {
        return this.checkoutForm.get('address');
    }
    get streetAddress() {
        return this.checkoutForm.get('address.streetAddress');
    }
    get city() {
        return this.checkoutForm.get('address.city');
    }
    get state() {
        return this.checkoutForm.get('address.state');
    }
    get zipcode() {
        return this.checkoutForm.get('address.zipcode');
    }
    get card() {
        return this.checkoutForm.get('card');
    }
    get saveCard() {
        return this.checkoutForm.get('card.saveCard');
    }
    get cardNumber() {
        return this.checkoutForm.get('card.cardNumber');
    }
    get cardHolder() {
        return this.checkoutForm.get('card.cardHolder');
    }
    get expDate() {
        return this.checkoutForm.get('card.expDate');
    }
    get securityCode() {
        return this.checkoutForm.get('card.securityCode');
    }
    ngOnInit() {
        this.user.getUserShippingInfo().subscribe(res => this.userShippingAddress = res);
        this.user.getUserBillingInfo().subscribe(res => {
            this.userBillingInfo = res.cards;
            console.log(this.userBillingInfo);
        });
        this.cart.getCart().subscribe(res => this.products = res.products);
        this.checkoutForm = this.fb.group({
            address: this.fb.group({
                streetAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.regexStreet)]],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5)]]
            }),
            card: this.fb.group({
                saveCard: [false, []],
                cardNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.regexCardNumber)]],
                cardHolder: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                expDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.regexExpDate)]],
                securityCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.regexSecurityCode)]]
            })
        });
    }
    onSubmit() {
        this.cart.placeOrder(this.checkoutForm.value, this.products)
            .subscribe(res => {
            this.router.navigate(['/order-success', res.orderID]);
            this.cart.clearCartCount();
        }, err => console.log(err));
    }
    getUserAddress(value) {
        if (value) {
            this.streetAddress.setValue(this.userShippingAddress.address.streetAddress);
            this.city.setValue(this.userShippingAddress.address.city);
            this.state.setValue(this.userShippingAddress.address.state);
            this.zipcode.setValue(this.userShippingAddress.address.zipcode);
        }
        else {
            this.address.reset();
        }
    }
    getCardInfo(index) {
        if (!this.saveCard.value) {
            this.cardNumber.setValue(this.userBillingInfo[index - 1].cardNumber);
            this.cardHolder.setValue(this.userBillingInfo[index - 1].cardHolder);
            this.expDate.setValue(this.userBillingInfo[index - 1].expDate);
            this.securityCode.setValue(this.userBillingInfo[index - 1].securityCode);
        }
        else {
            this.card.reset();
        }
    }
    getTotalPrice() {
        return this.products.reduce((total, currentValue) => total + currentValue.price * currentValue.quantity, 0);
    }
};
CheckOutComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] },
    { type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_1__["AuthUserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-check-out',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./check-out.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/check-out/check-out.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./check-out.component.css */ "./src/app/shopping/check-out/check-out.component.css")).default]
    })
], CheckOutComponent);



/***/ }),

/***/ "./src/app/shopping/my-orders/my-orders.component.css":
/*!************************************************************!*\
  !*** ./src/app/shopping/my-orders/my-orders.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL215LW9yZGVycy9teS1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shopping/my-orders/my-orders.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shopping/my-orders/my-orders.component.ts ***!
  \***********************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MyOrdersComponent = class MyOrdersComponent {
    constructor(cart) {
        this.cart = cart;
        this.orders = [];
        this.showModal = false;
    }
    ngOnInit() {
        this.cart.getAllUserOrders().subscribe(res => {
            this.orders = res.orders;
        });
    }
    toggleModal(index) {
        this.showModal = true;
        this.orderIndex = index;
    }
    closeModal(value) {
        this.showModal = value;
    }
};
MyOrdersComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
];
MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/my-orders/my-orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-orders.component.css */ "./src/app/shopping/my-orders/my-orders.component.css")).default]
    })
], MyOrdersComponent);



/***/ }),

/***/ "./src/app/shopping/order-success/order-success.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shopping/order-success/order-success.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li {\r\n    list-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmcvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy9vcmRlci1zdWNjZXNzL29yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shopping/order-success/order-success.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shopping/order-success/order-success.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let OrderSuccessComponent = class OrderSuccessComponent {
    constructor(cart, route) {
        this.cart = cart;
        this.route = route;
        this.order = null;
    }
    ngOnInit() {
        console.log();
        this.cart.getUserOrder(this.route.snapshot.params.orderId)
            .subscribe(res => {
            this.order = res;
            console.log(this.order);
        }, err => {
            console.log(err);
        });
    }
    getTotalPrice() {
        return this.order.products.reduce((total, currentValue) => total + currentValue.price * currentValue.quantity, 0);
    }
};
OrderSuccessComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
OrderSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-order-success',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/order-success/order-success.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-success.component.css */ "./src/app/shopping/order-success/order-success.component.css")).default]
    })
], OrderSuccessComponent);



/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thumbnail {\r\n    border-radius: 100%;\r\n    background-image: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmcvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmcvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBjb3ZlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(cart, route) {
        this.cart = cart;
        this.route = route;
        this.products = [];
    }
    ngOnInit() {
        this.cart.getCart()
            .subscribe(res => {
            this.products = res.products;
        });
    }
    totalPrice() {
        return this.products.reduce((total, prod) => {
            return total + prod.price * prod.quantity;
        }, 0);
    }
    changeQuantity(title, num, index) {
        this.cart.changeProductQuantity(title, num).subscribe();
        this.cart.incrementCart(num);
        this.products[index].quantity += num;
    }
    deleteFromCart(id, title, quantity) {
        if (confirm(`Are you sure you want to delete ${title} from your cart`)) {
            this.cart.deleteFromCart(id).subscribe(res => {
                this.products = this.products.filter(prod => prod.id !== id);
                this.cart.incrementCart(-quantity);
            });
        }
    }
    deleteCart() {
        if (confirm('Are you sure you want to delete your shopping cart')) {
            this.cart.deleteCart().subscribe(() => {
                this.cart.clearCartCount();
                this.products = [];
            });
        }
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-shopping-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping/shopping-cart/shopping-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping/shopping-cart/shopping-cart.component.css")).default]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/user-authentication/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-authentication/login/login.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-container {\r\n    margin: 80px auto 80px auto;\r\n    background-color: #28a745;\r\n    padding-bottom: 15px;\r\n    width: 80%;\r\n}\r\n\r\n.googleBtn {\r\n    background-color: #DD4B39;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXItYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA4MHB4IGF1dG8gODBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmdvb2dsZUJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjM5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-authentication/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-authentication/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands */ "./node_modules/@fortawesome/fontawesome-free-brands/index.es.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth-user.service */ "./src/app/services/auth-user.service.ts");







let LoginComponent = class LoginComponent {
    constructor(user, fb, router, cart) {
        this.user = user;
        this.fb = fb;
        this.router = router;
        this.cart = cart;
        this.faGoogle = _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_5__["faGoogle"];
        // tslint:disable-next-line:max-line-length
        this.regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regexEmail)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        return this.user.signIn(this.loginForm.value)
            .subscribe(data => {
            this.router.navigate(['/']);
            this.errors = null;
            return this.cart.getCartQuantity().subscribe();
        }, err => {
            this.loginForm.get('password').reset();
            console.log(err.error);
            this.errors = err.error;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-authentication/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/user-authentication/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user-authentication/signup/signup.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/user-authentication/signup/signup.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-container {\r\n    margin: 80px auto 80px auto;\r\n    background-color: #28a745;\r\n    padding-bottom: 15px;\r\n    width: 80%;\r\n}\r\n\r\n.googleBtn {\r\n    background-color: #DD4B39;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci1hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogODBweCBhdXRvIDgwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5nb29nbGVCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RENEIzOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/user-authentication/signup/signup.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user-authentication/signup/signup.component.ts ***!
  \****************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_form_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/form-data.service */ "./src/app/services/form-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands */ "./node_modules/@fortawesome/fontawesome-free-brands/index.es.js");
/* harmony import */ var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth-user.service */ "./src/app/services/auth-user.service.ts");







let SignupComponent = class SignupComponent {
    constructor(user, fb, router) {
        this.user = user;
        this.fb = fb;
        this.router = router;
        this.faGoogle = _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_5__["faGoogle"];
        // tslint:disable-next-line:max-line-length
        this.regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.regexDOB = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
        this.regexStreet = /^\d+\s[A-z]+\s[A-z]+\.?/;
        this.regexPassword = /^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,30}$/;
    }
    get name() {
        return this.signupForm.get('name');
    }
    get firstname() {
        return this.signupForm.get('name.firstname');
    }
    get lastname() {
        return this.signupForm.get('name.lastname');
    }
    get dob() {
        return this.signupForm.get('dob');
    }
    get address() {
        return this.signupForm.get('address');
    }
    get streetAddress() {
        return this.signupForm.get('address.streetAddress');
    }
    get city() {
        return this.signupForm.get('address.city');
    }
    get state() {
        return this.signupForm.get('address.state');
    }
    get zipcode() {
        return this.signupForm.get('address.zipcode');
    }
    get accountInfo() {
        return this.signupForm.get('accountInfo');
    }
    get emailInput() {
        return this.signupForm.get('accountInfo.emailInput');
    }
    get email() {
        return this.signupForm.get('accountInfo.emailInput.email');
    }
    get confirmEmail() {
        return this.signupForm.get('accountInfo.emailInput.confirmEmail');
    }
    get passwordInput() {
        return this.signupForm.get('accountInfo.passwordInput');
    }
    get password() {
        return this.signupForm.get('accountInfo.passwordInput.password');
    }
    get confirmPassword() {
        return this.signupForm.get('accountInfo.passwordInput.confirmPassword');
    }
    ngOnInit() {
        this.states = _services_form_data_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"].getStates();
        this.signupForm = this.fb.group({
            name: this.fb.group({
                firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regexDOB), _services_form_data_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"].dateValidator]],
            address: this.fb.group({
                streetAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regexStreet)]],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]]
            }),
            accountInfo: this.fb.group({
                emailInput: this.fb.group({
                    email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regexEmail)]],
                    confirmEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _services_form_data_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"].emailMatchValidator]],
                }),
                passwordInput: this.fb.group({
                    password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regexPassword)]],
                    confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _services_form_data_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"].passwordMatchValidator]],
                })
            })
        });
    }
    onSubmit() {
        return this.user.signUp(this.signupForm.value)
            .subscribe(res => {
            this.errors = null;
            this.router.navigate(['/login']);
        }, err => {
            this.signupForm.markAsUntouched();
            this.errors = err.error;
        });
    }
    isNumber(event) {
        event = (event) ? event : window.event;
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-authentication/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/user-authentication/signup/signup.component.css")).default]
    })
], SignupComponent);



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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBt-DckvJebAutVQy3tWUE-oFAbVyPXs2o',
        authDomain: 'e-commerce-app-533ad.firebaseapp.com',
        databaseURL: 'https://e-commerce-app-533ad.firebaseio.com',
        projectId: 'e-commerce-app-533ad',
        storageBucket: 'e-commerce-app-533ad.appspot.com',
        messagingSenderId: '538654980207',
        appId: '1:538654980207:web:bf89d9cd3b2f5521fd359a',
        measurementId: 'G-WPPWZJ0K0N'
    }
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

module.exports = __webpack_require__(/*! C:\Users\mikef\Documents\FerrariSite\Portfolio Projects\E-Commerce App\ecommerce-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);