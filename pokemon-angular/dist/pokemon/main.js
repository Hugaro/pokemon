(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/abilities-card/abilities-card.component.html":
/*!**************************************************************!*\
  !*** ./src/app/abilities-card/abilities-card.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"ability\" class=\"card\" id=\"{{ ability.name }}\">\n    <mat-card-header>\n      <mat-card-title class=\"card-title\"> {{ ability.name }} </mat-card-title>\n      <mat-card-subtitle > {{ ability.pokemon.length }} - pokémon(s)</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        <p *ngIf=\"ability.effect_entries\"> {{ ability.effect_entries[0].effect }}<p>\n      </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"!ability\" class=\"card empty\">\n  <mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/abilities-card/abilities-card.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/abilities-card/abilities-card.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\n.card {\n  height: 300px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 120px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvYWJpbGl0aWVzLWNhcmQvYWJpbGl0aWVzLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksY0FBYSxFQU9oQjs7QUFSRDtJQUlRLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWJpbGl0aWVzLWNhcmQvYWJpbGl0aWVzLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuXG4gICAgJi5lbXB0eT46Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW46IDEyMHB4IGF1dG87XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/abilities-card/abilities-card.component.ts":
/*!************************************************************!*\
  !*** ./src/app/abilities-card/abilities-card.component.ts ***!
  \************************************************************/
/*! exports provided: AbilitiesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilitiesCardComponent", function() { return AbilitiesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbilitiesCardComponent = /** @class */ (function () {
    function AbilitiesCardComponent(service) {
        this.service = service;
    }
    AbilitiesCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getResource(this.resourceUrl).subscribe(function (data) { return _this.ability = data; }, function (err) { return console.log(err.message); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AbilitiesCardComponent.prototype, "resourceUrl", void 0);
    AbilitiesCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abilities-card',
            template: __webpack_require__(/*! ./abilities-card.component.html */ "./src/app/abilities-card/abilities-card.component.html"),
            styles: [__webpack_require__(/*! ./abilities-card.component.scss */ "./src/app/abilities-card/abilities-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], AbilitiesCardComponent);
    return AbilitiesCardComponent;
}());



/***/ }),

/***/ "./src/app/abilities-cell/abilities-cell.component.html":
/*!**************************************************************!*\
  !*** ./src/app/abilities-cell/abilities-cell.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{ abilityName }}</span>\n"

/***/ }),

/***/ "./src/app/abilities-cell/abilities-cell.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/abilities-cell/abilities-cell.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  border: 1px solid #ccc;\n  padding: 1% 2.5%;\n  background: white;\n  border-radius: 5px;\n  margin-right: 5px;\n  margin-top: 5px;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvYWJpbGl0aWVzLWNlbGwvYWJpbGl0aWVzLWNlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2Ysc0JBQXFCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYWJpbGl0aWVzLWNlbGwvYWJpbGl0aWVzLWNlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDElIDIuNSU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/abilities-cell/abilities-cell.component.ts":
/*!************************************************************!*\
  !*** ./src/app/abilities-cell/abilities-cell.component.ts ***!
  \************************************************************/
/*! exports provided: AbilitiesCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilitiesCellComponent", function() { return AbilitiesCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AbilitiesCellComponent = /** @class */ (function () {
    function AbilitiesCellComponent() {
    }
    AbilitiesCellComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AbilitiesCellComponent.prototype, "abilityName", void 0);
    AbilitiesCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abilities-cell',
            template: __webpack_require__(/*! ./abilities-cell.component.html */ "./src/app/abilities-cell/abilities-cell.component.html"),
            styles: [__webpack_require__(/*! ./abilities-cell.component.scss */ "./src/app/abilities-cell/abilities-cell.component.scss")]
        })
    ], AbilitiesCellComponent);
    return AbilitiesCellComponent;
}());



/***/ }),

/***/ "./src/app/abilities/abilities.component.html":
/*!****************************************************!*\
  !*** ./src/app/abilities/abilities.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-abilities-card *ngFor=\"let resource of resources\"\n  [resourceUrl]=\"resource.url\">\n</app-abilities-card>\n"

/***/ }),

/***/ "./src/app/abilities/abilities.component.scss":
/*!****************************************************!*\
  !*** ./src/app/abilities/abilities.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-abilities-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvYWJpbGl0aWVzL2FiaWxpdGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hYmlsaXRpZXMvYWJpbGl0aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWFiaWxpdGllcy1jYXJkIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/abilities/abilities.component.ts":
/*!**************************************************!*\
  !*** ./src/app/abilities/abilities.component.ts ***!
  \**************************************************/
/*! exports provided: AbilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilitiesComponent", function() { return AbilitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbilitiesComponent = /** @class */ (function () {
    function AbilitiesComponent(service, route) {
        this.service = service;
        this.route = route;
        this.resources = [];
    }
    AbilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) {
            _this.loadResources(route.abilitiesUrl);
        });
    };
    AbilitiesComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (page) {
            _this.resources = _this.resources.concat(page.results);
            _this.next = page.next;
        }, function (err) { return console.log(err.message); });
    };
    AbilitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abilities',
            template: __webpack_require__(/*! ./abilities.component.html */ "./src/app/abilities/abilities.component.html"),
            styles: [__webpack_require__(/*! ./abilities.component.scss */ "./src/app/abilities/abilities.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], AbilitiesComponent);
    return AbilitiesComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abilities/abilities.component */ "./src/app/abilities/abilities.component.ts");
/* harmony import */ var _areas_areas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./areas/areas.component */ "./src/app/areas/areas.component.ts");
/* harmony import */ var _berries_berries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./berries/berries.component */ "./src/app/berries/berries.component.ts");
/* harmony import */ var _generation_generation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generation/generation.component */ "./src/app/generation/generation.component.ts");
/* harmony import */ var _generations_generations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generations/generations.component */ "./src/app/generations/generations.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _machines_machine_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./machines/machine.component */ "./src/app/machines/machine.component.ts");
/* harmony import */ var _moves_moves_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./moves/moves.component */ "./src/app/moves/moves.component.ts");
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pokemons/pokemons.component */ "./src/app/pokemons/pokemons.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./region/region.component */ "./src/app/region/region.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _types_types_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./types/types.component */ "./src/app/types/types.component.ts");
/* harmony import */ var _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wiki/wiki.component */ "./src/app/wiki/wiki.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    { path: 'pokemons', component: _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_11__["PokemonsComponent"] },
    { path: 'types', component: _types_types_component__WEBPACK_IMPORTED_MODULE_14__["TypesComponent"] },
    { path: 'berries', component: _berries_berries_component__WEBPACK_IMPORTED_MODULE_4__["BerriesComponent"] },
    { path: 'abilities', component: _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_2__["AbilitiesComponent"] },
    { path: 'moves', component: _moves_moves_component__WEBPACK_IMPORTED_MODULE_10__["MovesComponent"] },
    { path: 'machines', component: _machines_machine_component__WEBPACK_IMPORTED_MODULE_9__["MachineComponent"] },
    { path: 'stats', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_13__["StatsComponent"] },
    { path: 'generations', component: _generations_generations_component__WEBPACK_IMPORTED_MODULE_6__["GenerationsComponent"] },
    { path: 'generation/:name', component: _generation_generation_component__WEBPACK_IMPORTED_MODULE_5__["GenerationComponent"] },
    { path: 'regions', component: _region_region_component__WEBPACK_IMPORTED_MODULE_12__["RegionComponent"] },
    { path: 'locations', component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_8__["LocationsComponent"] },
    { path: 'areas', component: _areas_areas_component__WEBPACK_IMPORTED_MODULE_3__["AreaComponent"] },
    { path: 'wiki', component: _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_15__["WikiComponent"] },
    { path: 'items', component: _items_items_component__WEBPACK_IMPORTED_MODULE_7__["ItemsComponent"] },
    { path: '**', component: _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_11__["PokemonsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-menu></app-menu>\n<div class=\"content\">\n    <router-outlet>\n    </router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\n  left: 0;\n  position: fixed;\n  text-align: center;\n  vertical-align: middle;\n  background: blue;\n  width: 100%;\n  height: 60px;\n  z-index: 10000; }\n\napp-menu {\n  position: fixed;\n  width: 15%;\n  height: 100%;\n  float: left;\n  background-color: #ccc;\n  margin-top: 60px; }\n\n.content {\n  width: 85%;\n  background-color: #ccc;\n  height: auto;\n  float: right;\n  margin-top: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBTztFQUNQLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGFBQVk7RUFDWixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixXQUFVO0VBQ1YsYUFBWTtFQUNaLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksV0FBVTtFQUNWLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osYUFBWTtFQUNaLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1oZWFkZXIge1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHotaW5kZXg6IDEwMDAwO1xufVxuYXBwLW1lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG4uY29udGVudCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pokemon';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _abilities_card_abilities_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abilities-card/abilities-card.component */ "./src/app/abilities-card/abilities-card.component.ts");
/* harmony import */ var _abilities_cell_abilities_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abilities-cell/abilities-cell.component */ "./src/app/abilities-cell/abilities-cell.component.ts");
/* harmony import */ var _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./abilities/abilities.component */ "./src/app/abilities/abilities.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _area_card_area_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./area-card/area-card.component */ "./src/app/area-card/area-card.component.ts");
/* harmony import */ var _areas_areas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./areas/areas.component */ "./src/app/areas/areas.component.ts");
/* harmony import */ var _berries_berries_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./berries/berries.component */ "./src/app/berries/berries.component.ts");
/* harmony import */ var _berry_card_berry_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./berry-card/berry-card.component */ "./src/app/berry-card/berry-card.component.ts");
/* harmony import */ var _generation_card_generation_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./generation-card/generation-card.component */ "./src/app/generation-card/generation-card.component.ts");
/* harmony import */ var _generation_generation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./generation/generation.component */ "./src/app/generation/generation.component.ts");
/* harmony import */ var _generations_generations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./generations/generations.component */ "./src/app/generations/generations.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _location_card_location_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./location-card/location-card.component */ "./src/app/location-card/location-card.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _machine_card_machine_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./machine-card/machine-card.component */ "./src/app/machine-card/machine-card.component.ts");
/* harmony import */ var _machines_machine_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./machines/machine.component */ "./src/app/machines/machine.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _move_card_move_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./move-card/move-card.component */ "./src/app/move-card/move-card.component.ts");
/* harmony import */ var _moves_moves_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./moves/moves.component */ "./src/app/moves/moves.component.ts");
/* harmony import */ var _pokemon_card_pokemon_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pokemon-card/pokemon-card.component */ "./src/app/pokemon-card/pokemon-card.component.ts");
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pokemons/pokemons.component */ "./src/app/pokemons/pokemons.component.ts");
/* harmony import */ var _region_card_region_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./region-card/region-card.component */ "./src/app/region-card/region-card.component.ts");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./region/region.component */ "./src/app/region/region.component.ts");
/* harmony import */ var _stat_cell_stat_cell_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./stat-cell/stat-cell.component */ "./src/app/stat-cell/stat-cell.component.ts");
/* harmony import */ var _stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stats-card/stats-card.component */ "./src/app/stats-card/stats-card.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _type_card_type_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./type-card/type-card.component */ "./src/app/type-card/type-card.component.ts");
/* harmony import */ var _type_cell_type_cell_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./type-cell/type-cell.component */ "./src/app/type-cell/type-cell.component.ts");
/* harmony import */ var _types_types_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./types/types.component */ "./src/app/types/types.component.ts");
/* harmony import */ var _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./wiki/wiki.component */ "./src/app/wiki/wiki.component.ts");
/* harmony import */ var _pokemon_cell_pokemon_cell_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pokemon-cell/pokemon-cell.component */ "./src/app/pokemon-cell/pokemon-cell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_27__["PokemonsComponent"],
                _pokemon_card_pokemon_card_component__WEBPACK_IMPORTED_MODULE_26__["PokemonCardComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_23__["MenuComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _types_types_component__WEBPACK_IMPORTED_MODULE_35__["TypesComponent"],
                _type_card_type_card_component__WEBPACK_IMPORTED_MODULE_33__["TypeCardComponent"],
                _berries_berries_component__WEBPACK_IMPORTED_MODULE_12__["BerriesComponent"],
                _berry_card_berry_card_component__WEBPACK_IMPORTED_MODULE_13__["BerryCardComponent"],
                _type_cell_type_cell_component__WEBPACK_IMPORTED_MODULE_34__["TypeCellComponent"],
                _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_7__["AbilitiesComponent"],
                _abilities_card_abilities_card_component__WEBPACK_IMPORTED_MODULE_5__["AbilitiesCardComponent"],
                _abilities_cell_abilities_cell_component__WEBPACK_IMPORTED_MODULE_6__["AbilitiesCellComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_32__["StatsComponent"],
                _stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_31__["StatsCardComponent"],
                _stat_cell_stat_cell_component__WEBPACK_IMPORTED_MODULE_30__["StatCellComponent"],
                _machines_machine_component__WEBPACK_IMPORTED_MODULE_22__["MachineComponent"],
                _moves_moves_component__WEBPACK_IMPORTED_MODULE_25__["MovesComponent"],
                _move_card_move_card_component__WEBPACK_IMPORTED_MODULE_24__["MoveCardComponent"],
                _machine_card_machine_card_component__WEBPACK_IMPORTED_MODULE_21__["MachineCardComponent"],
                _generations_generations_component__WEBPACK_IMPORTED_MODULE_16__["GenerationsComponent"],
                _generation_generation_component__WEBPACK_IMPORTED_MODULE_15__["GenerationComponent"],
                _generation_card_generation_card_component__WEBPACK_IMPORTED_MODULE_14__["GenerationCardComponent"],
                _wiki_wiki_component__WEBPACK_IMPORTED_MODULE_36__["WikiComponent"],
                _region_region_component__WEBPACK_IMPORTED_MODULE_29__["RegionComponent"],
                _region_card_region_card_component__WEBPACK_IMPORTED_MODULE_28__["RegionCardComponent"],
                _location_card_location_card_component__WEBPACK_IMPORTED_MODULE_19__["LocationCardComponent"],
                _locations_locations_component__WEBPACK_IMPORTED_MODULE_20__["LocationsComponent"],
                _areas_areas_component__WEBPACK_IMPORTED_MODULE_11__["AreaComponent"],
                _area_card_area_card_component__WEBPACK_IMPORTED_MODULE_10__["AreaCardComponent"],
                _items_items_component__WEBPACK_IMPORTED_MODULE_18__["ItemsComponent"],
                _pokemon_cell_pokemon_cell_component__WEBPACK_IMPORTED_MODULE_37__["PokemonCellComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/area-card/area-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/area-card/area-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"area\" class=\"card\" id=\"{{ area.name }}\">\n  <mat-card-header>\n    <mat-card-title class=\"card-title\"> {{ area.name }} </mat-card-title>\n    <mat-card-subtitle > {{ area.pokemon_encounters.length }} - Pokemons</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <section>Versions</section>\n    <app-abilities-cell *ngFor=\"let method of area.encounter_method_rates\" [abilityName]=\"method.encounter_method.name\"></app-abilities-cell>\n\n  </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"!area\" class=\"card empty\">\n<mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/area-card/area-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/area-card/area-card.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: #ccc;\n  border: #ccc solid 1px;\n  padding: 2%;\n  border-radius: 5px;\n  text-align: center;\n  margin: 10px 0; }\n\n::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\n.card {\n  height: 170px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 120px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvYXJlYS1jYXJkL2FyZWEtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQix1QkFBc0I7RUFDdEIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxjQUFhLEVBT2hCOztBQVJEO0lBSVEsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcmVhLWNhcmQvYXJlYS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgMXB4O1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG46Om5nLWRlZXAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuXG4gICAgJi5lbXB0eT46Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW46IDEyMHB4IGF1dG87XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/area-card/area-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/area-card/area-card.component.ts ***!
  \**************************************************/
/*! exports provided: AreaCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaCardComponent", function() { return AreaCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreaCardComponent = /** @class */ (function () {
    function AreaCardComponent(service) {
        this.service = service;
    }
    AreaCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getResource(this.resourceUrl).subscribe(function (data) { return _this.area = data; }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AreaCardComponent.prototype, "resourceUrl", void 0);
    AreaCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-area-card',
            template: __webpack_require__(/*! ./area-card.component.html */ "./src/app/area-card/area-card.component.html"),
            styles: [__webpack_require__(/*! ./area-card.component.scss */ "./src/app/area-card/area-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], AreaCardComponent);
    return AreaCardComponent;
}());



/***/ }),

/***/ "./src/app/areas/areas.component.html":
/*!********************************************!*\
  !*** ./src/app/areas/areas.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-area-card *ngFor=\"let resource of resources\"\n  [resourceUrl]=\"resource.url\">\n</app-area-card>\n"

/***/ }),

/***/ "./src/app/areas/areas.component.scss":
/*!********************************************!*\
  !*** ./src/app/areas/areas.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-area-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvYXJlYXMvYXJlYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXJlYXMvYXJlYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtYXJlYS1jYXJkIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/areas/areas.component.ts":
/*!******************************************!*\
  !*** ./src/app/areas/areas.component.ts ***!
  \******************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaComponent = /** @class */ (function () {
    function AreaComponent(service, route) {
        this.service = service;
        this.route = route;
        this.resources = [];
    }
    AreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) { return _this.loadResources(route.areaUrl); });
    };
    AreaComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (data) { return _this.resources = _this.resources.concat(data.results); }, function (err) { return console.log(err); });
    };
    AreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-areas',
            template: __webpack_require__(/*! ./areas.component.html */ "./src/app/areas/areas.component.html"),
            styles: [__webpack_require__(/*! ./areas.component.scss */ "./src/app/areas/areas.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "./src/app/berries/berries.component.html":
/*!************************************************!*\
  !*** ./src/app/berries/berries.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-berry-card *ngFor=\"let resource of resources\"\n  [resorceUrl]=\"resource.url\" >\n</app-berry-card>\n<div class=\"more\" *ngIf=\"next\" (click)=\"loadResources(next)\"> Carregar mais </div>\n"

/***/ }),

/***/ "./src/app/berries/berries.component.scss":
/*!************************************************!*\
  !*** ./src/app/berries/berries.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-berry-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvYmVycmllcy9iZXJyaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVTtFQUNWLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2JlcnJpZXMvYmVycmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1iZXJyeS1jYXJkIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/berries/berries.component.ts":
/*!**********************************************!*\
  !*** ./src/app/berries/berries.component.ts ***!
  \**********************************************/
/*! exports provided: BerriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BerriesComponent", function() { return BerriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BerriesComponent = /** @class */ (function () {
    function BerriesComponent(service, route) {
        this.service = service;
        this.route = route;
        this.resources = [];
    }
    BerriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) {
            _this.loadResources(route.berriesUrl);
        });
    };
    BerriesComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (data) {
            _this.resources = _this.resources.concat(data.results);
            _this.next = data.next;
        }, function (err) { return console.log(err.message); });
    };
    BerriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-berries',
            template: __webpack_require__(/*! ./berries.component.html */ "./src/app/berries/berries.component.html"),
            styles: [__webpack_require__(/*! ./berries.component.scss */ "./src/app/berries/berries.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], BerriesComponent);
    return BerriesComponent;
}());



/***/ }),

/***/ "./src/app/berry-card/berry-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/berry-card/berry-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"berry\" tabindex=\"0\" class=\"card\" id=\"{{ berry.name }}\">\n    <mat-card-header>\n        <img mat-card-avatar src=\"{{ berry.item.sprites.default }}\" class=\"header-image\" />\n      <mat-card-title class=\"card-title\"> {{ berry.name }} </mat-card-title>\n      <mat-card-subtitle class=\"card-title\"> {{ berry.item.category.name }} </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p> {{ berry.item.effect_entries[0].effect }}<p>\n    </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"!berry\" class=\"card empty\">\n  <mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/berry-card/berry-card.component.scss":
/*!******************************************************!*\
  !*** ./src/app/berry-card/berry-card.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  width: 40px;\n  height: 40px; }\n\n.card {\n  height: 170px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 60px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvYmVycnktY2FyZC9iZXJyeS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLGNBQWEsRUFPaEI7O0FBUkQ7SUFJUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2JlcnJ5LWNhcmQvYmVycnktY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2Uge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuIFxuICAgICYuZW1wdHk+OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/berry-card/berry-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/berry-card/berry-card.component.ts ***!
  \****************************************************/
/*! exports provided: BerryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BerryCardComponent", function() { return BerryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BerryCardComponent = /** @class */ (function () {
    function BerryCardComponent(service) {
        this.service = service;
    }
    BerryCardComponent.prototype.ngOnInit = function () {
        this.getBerry();
    };
    BerryCardComponent.prototype.getItem = function (berry) {
        var _this = this;
        this.service.getResource(berry.item.url).subscribe(function (data) {
            berry.item = data;
            _this.berry = berry;
        }, function (err) { return console.log(err.message); });
    };
    BerryCardComponent.prototype.getBerry = function () {
        var _this = this;
        this.service.getResource(this.resorceUrl).subscribe(function (data) { return _this.getItem(data); }, function (err) { return console.log(err.message); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BerryCardComponent.prototype, "resorceUrl", void 0);
    BerryCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-berry-card',
            template: __webpack_require__(/*! ./berry-card.component.html */ "./src/app/berry-card/berry-card.component.html"),
            styles: [__webpack_require__(/*! ./berry-card.component.scss */ "./src/app/berry-card/berry-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], BerryCardComponent);
    return BerryCardComponent;
}());



/***/ }),

/***/ "./src/app/generation-card/generation-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/generation-card/generation-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"generation\" class=\"card\">\n  <mat-card-header>\n    <mat-card-title class=\"card-title\" [routerLink]=\"['/generation',  generation.name]\">{{ generation.name }} </mat-card-title>\n    <mat-card-subtitle > Region of {{ generation.main_region.name }}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <div style=\"padding:1%; border-top: 1px solid #ccc;border-bottom: 1px solid #ccc; width:98%\">\n      <span>  New pokémon species  </span>\n      <span style=\"float:right\"> {{ generation.pokemon_species.length }} </span>\n    </div>\n    <div style=\"padding:1%; border-top: 1px solid #ccc;border-bottom: 1px solid #ccc; width:98%\">\n      <span>  New pokémon types  </span>\n      <span style=\"float:right\"> {{ generation.types.length }} </span>\n    </div>\n    <div style=\"padding:1%; border-top: 1px solid #ccc;border-bottom: 1px solid #ccc; width:98%\">\n      <span> New pokémon moves  </span>\n      <span style=\"float:right\"> {{ generation.moves.length }} </span>\n    </div>\n    <div style=\"padding:1%; border-top: 1px solid #ccc;border-bottom: 1px solid #ccc; width:98%\">\n      <span> Number of version groups  </span>\n      <span style=\"float:right\"> {{ generation.version_groups.length }} </span>\n    </div>\n    </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"!generation\" class=\"card empty\">\n  <mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/generation-card/generation-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/generation-card/generation-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-title {\n  cursor: pointer; }\n\n::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\n.card {\n  height: 240px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 120px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvZ2VuZXJhdGlvbi1jYXJkL2dlbmVyYXRpb24tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksWUFBVztFQUNYLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGNBQWEsRUFPaEI7O0FBUkQ7SUFJUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRpb24tY2FyZC9nZW5lcmF0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC10aXRsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuOjpuZy1kZWVwLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZCB7XG4gICAgaGVpZ2h0OiAyNDBweDtcblxuICAgICYuZW1wdHk+OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luOiAxMjBweCBhdXRvO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/generation-card/generation-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/generation-card/generation-card.component.ts ***!
  \**************************************************************/
/*! exports provided: GenerationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerationCardComponent", function() { return GenerationCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenerationCardComponent = /** @class */ (function () {
    function GenerationCardComponent(service) {
        this.service = service;
    }
    GenerationCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getResource(this.resourceUrl).subscribe(function (data) { return _this.generation = data; }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GenerationCardComponent.prototype, "resourceUrl", void 0);
    GenerationCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generation-card',
            template: __webpack_require__(/*! ./generation-card.component.html */ "./src/app/generation-card/generation-card.component.html"),
            styles: [__webpack_require__(/*! ./generation-card.component.scss */ "./src/app/generation-card/generation-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], GenerationCardComponent);
    return GenerationCardComponent;
}());



/***/ }),

/***/ "./src/app/generation/generation.component.html":
/*!******************************************************!*\
  !*** ./src/app/generation/generation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-info\">\n  <div class=\"wrapper\">\n    <app-generation-card *ngIf=\"resourceUrl\"\n      [resourceUrl]=\"resourceUrl\">\n    </app-generation-card>\n    <app-region-card *ngIf=\"regionUrl\"\n      [resourceUrl]=\"regionUrl\">\n    </app-region-card>\n  </div>\n</div>\n\n<mat-tab-group>\n  <mat-tab label=\"Pokemons\">\n    <div class=\"tab\">\n      <app-pokemon-cell *ngFor=\"let pokemon of pokemons\"\n        [resourceUrl]=\"pokemon.url\">\n      </app-pokemon-cell>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Moves\">\n    <div class=\"tab\">\n      <app-move-card *ngFor=\"let move of moves\"\n        [moveUrl]=\"move.url\">\n      </app-move-card>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Types\">\n    <div class=\"tab\">\n      <app-type-card *ngFor=\"let type of types\"\n        [resourceUrl]=\"type.url\">\n      </app-type-card>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/generation/generation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/generation/generation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-pokemon-cell {\n  z-index: 9999;\n  min-width: 24%;\n  max-width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\napp-move-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\napp-type-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\napp-region-card {\n  width: 100%;\n  padding: 0;\n  margin-bottom: 12px;\n  float: left; }\n\napp-generation-card {\n  width: 100%;\n  padding: 0;\n  margin-bottom: 12px;\n  float: left; }\n\nmat-card-title {\n  cursor: pointer; }\n\n::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\n::ng-deep.mat-tab-header {\n  background-color: white;\n  border-radius: 4px;\n  width: 98.25%;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  color: black;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n\n.wrapper {\n  width: 100%;\n  display: inline-block; }\n\n.main-info {\n  margin-top: 12px;\n  margin-left: 0.75%;\n  width: 24%;\n  float: left; }\n\n.tab {\n  z-index: 9999;\n  width: 100%;\n  display: inline-block; }\n\n.card {\n  height: 240px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 120px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvZ2VuZXJhdGlvbi9nZW5lcmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGVBQWM7RUFDZCxlQUFjO0VBQ2QsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNkOztBQUNEO0VBQ0ksV0FBVTtFQUNWLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLFlBQVcsRUFDZDs7QUFDRDtFQUNJLFdBQVU7RUFDVixXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFtQjtFQUNuQixZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsV0FBVTtFQUNWLG9CQUFtQjtFQUNuQixZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSx3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixnSEFBbUcsRUFDdEc7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsc0JBQXFCLEVBQ3hCOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBVyxFQUNkOztBQUNEO0VBQ0ksY0FBYTtFQUNiLFlBQVc7RUFDWCxzQkFBcUIsRUFDeEI7O0FBQ0Q7RUFDSSxjQUFhLEVBT2hCOztBQVJEO0lBSVEsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmF0aW9uL2dlbmVyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcG9rZW1vbi1jZWxsIHtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIG1pbi13aWR0aDogMjQlO1xuICAgIG1heC13aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5hcHAtbW92ZS1jYXJkIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5hcHAtdHlwZS1jYXJkIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5hcHAtcmVnaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbmFwcC1nZW5lcmF0aW9uLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbm1hdC1jYXJkLXRpdGxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG46Om5nLWRlZXAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjo6bmctZGVlcC5tYXQtdGFiLWhlYWRlciB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogOTguMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1JTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XG59XG4ud3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1haW4taW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMC43NSU7XG4gICAgd2lkdGg6IDI0JTtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi50YWIge1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNhcmQge1xuICAgIGhlaWdodDogMjQwcHg7XG5cbiAgICAmLmVtcHR5PjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogMTIwcHggYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/generation/generation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/generation/generation.component.ts ***!
  \****************************************************/
/*! exports provided: GenerationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerationComponent", function() { return GenerationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenerationComponent = /** @class */ (function () {
    function GenerationComponent(routeActivated, route, service) {
        this.routeActivated = routeActivated;
        this.route = route;
        this.service = service;
    }
    GenerationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.routeActivated.snapshot.paramMap.get('name');
        this.route.load().then(function (route) {
            _this.resourceUrl = route.getUrlName(route.generation, name);
            _this.service.getResource(_this.resourceUrl).subscribe(function (data) {
                _this.route.load().then(function (route2) {
                    _this.regionUrl = route2.getUrlName(route2.region, data.main_region.name);
                });
                _this.pokemons = data.pokemon_species;
                _this.moves = data.moves;
                _this.types = data.types;
            }, function (err) { return console.log(err); });
        });
    };
    GenerationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generation',
            template: __webpack_require__(/*! ./generation.component.html */ "./src/app/generation/generation.component.html"),
            styles: [__webpack_require__(/*! ./generation.component.scss */ "./src/app/generation/generation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"],
            _service_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]])
    ], GenerationComponent);
    return GenerationComponent;
}());



/***/ }),

/***/ "./src/app/generations/generations.component.html":
/*!********************************************************!*\
  !*** ./src/app/generations/generations.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-generation-card *ngFor=\"let resource of resources\"\n  [resourceUrl]=\"resource.url\">\n</app-generation-card>\n"

/***/ }),

/***/ "./src/app/generations/generations.component.scss":
/*!********************************************************!*\
  !*** ./src/app/generations/generations.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-generation-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvZ2VuZXJhdGlvbnMvZ2VuZXJhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhdGlvbnMvZ2VuZXJhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZ2VuZXJhdGlvbi1jYXJkIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/generations/generations.component.ts":
/*!******************************************************!*\
  !*** ./src/app/generations/generations.component.ts ***!
  \******************************************************/
/*! exports provided: GenerationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerationsComponent", function() { return GenerationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenerationsComponent = /** @class */ (function () {
    function GenerationsComponent(service, router) {
        this.service = service;
        this.router = router;
        this.resources = [];
    }
    GenerationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.load().then(function (route) {
            var url = route.getUrlPage(route.generation);
            _this.loadResources(url);
        });
    };
    GenerationsComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (data) { return _this.resources = data.results; }, function (err) { return console.log(err); });
    };
    GenerationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generations',
            template: __webpack_require__(/*! ./generations.component.html */ "./src/app/generations/generations.component.html"),
            styles: [__webpack_require__(/*! ./generations.component.scss */ "./src/app/generations/generations.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], GenerationsComponent);
    return GenerationsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"img-title\" src=\"../../assets/img/pokemon-logo.png\"/>\n<img class=\"img-title\" src=\"../../assets/img/ash.png\"/>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-title {\n  margin-top: 5px;\n  height: 50px;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/items/items.component.html":
/*!********************************************!*\
  !*** ./src/app/items/items.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"Berries\">\n        <app-berries></app-berries>\n    </mat-tab>\n    <mat-tab label=\"Machines\">\n        <app-machine></app-machine>\n    </mat-tab>\n</mat-tab-group>\n\n"

/***/ }),

/***/ "./src/app/items/items.component.scss":
/*!********************************************!*\
  !*** ./src/app/items/items.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.mat-tab-header {\n  background-color: white;\n  border-radius: 4px;\n  width: 98.25%;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  color: black;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvaXRlbXMvaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixnSEFBbUcsRUFDdEciLCJmaWxlIjoic3JjL2FwcC9pdGVtcy9pdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5tYXQtdGFiLWhlYWRlciB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogOTguMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1JTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.scss */ "./src/app/items/items.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/location-card/location-card.component.html":
/*!************************************************************!*\
  !*** ./src/app/location-card/location-card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"location\" class=\"card\" id=\"{{ location.name }}\">\n  <mat-card-header>\n    <mat-card-title class=\"card-title\"> {{ location.name }} </mat-card-title>\n    <mat-card-subtitle class=\"card-title\"> {{ location.areas.length }} - Areas </mat-card-subtitle>\n  </mat-card-header>\n</mat-card>\n<mat-card *ngIf=\"!location\" class=\"card empty\">\n<mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/location-card/location-card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/location-card/location-card.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\n.card {\n  height: 300px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 120px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvbG9jYXRpb24tY2FyZC9sb2NhdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGNBQWEsRUFPaEI7O0FBUkQ7SUFJUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLWNhcmQvbG9jYXRpb24tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQge1xuICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICAmLmVtcHR5PjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogMTIwcHggYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/location-card/location-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/location-card/location-card.component.ts ***!
  \**********************************************************/
/*! exports provided: LocationCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationCardComponent", function() { return LocationCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationCardComponent = /** @class */ (function () {
    function LocationCardComponent(service) {
        this.service = service;
    }
    LocationCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getResource(this.resourceUrl).subscribe(function (data) { return _this.location = data; }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LocationCardComponent.prototype, "resourceUrl", void 0);
    LocationCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location-card',
            template: __webpack_require__(/*! ./location-card.component.html */ "./src/app/location-card/location-card.component.html"),
            styles: [__webpack_require__(/*! ./location-card.component.scss */ "./src/app/location-card/location-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], LocationCardComponent);
    return LocationCardComponent;
}());



/***/ }),

/***/ "./src/app/locations/locations.component.html":
/*!****************************************************!*\
  !*** ./src/app/locations/locations.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-location-card *ngFor=\"let resource of resources\"\n  [resourceUrl]=\"resource.url\">\n</app-location-card>\n"

/***/ }),

/***/ "./src/app/locations/locations.component.scss":
/*!****************************************************!*\
  !*** ./src/app/locations/locations.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-location-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbnMvbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWxvY2F0aW9uLWNhcmQge1xuICAgIHdpZHRoOiAyNCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogMC43NSU7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBmbG9hdDogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/locations/locations.component.ts":
/*!**************************************************!*\
  !*** ./src/app/locations/locations.component.ts ***!
  \**************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) { return _this.loadResources(route.locationUrl); });
    };
    LocationsComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (data) { return _this.resources = data.results; }, function (err) { return console.log(err); });
    };
    LocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.scss */ "./src/app/locations/locations.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/machine-card/machine-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/machine-card/machine-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"machine\" tabindex=\"0\" class=\"card\" id=\"{{ machine.item.name }}\">\n  <mat-card-header>\n      <img mat-card-avatar src=\"{{ machine.item.sprites.default }}\" class=\"header-image\" />\n    <mat-card-title class=\"card-title\"> {{ machine.item.name }} </mat-card-title>\n    <mat-card-subtitle class=\"card-title\"> {{ machine.item.category.name }} </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p> {{ machine.item.effect_entries[0].effect }}<p>\n  </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"!machine\" class=\"card empty\">\n<mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/machine-card/machine-card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/machine-card/machine-card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  width: 40px;\n  height: 40px; }\n\n.card {\n  height: 170px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 60px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvbWFjaGluZS1jYXJkL21hY2hpbmUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxjQUFhLEVBT2hCOztBQVJEO0lBSVEsWUFBVztJQUNYLGFBQVk7SUFDWixrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tYWNoaW5lLWNhcmQvbWFjaGluZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pbWFnZSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLmNhcmQge1xuICAgIGhlaWdodDogMTcwcHg7XG4gXG4gICAgJi5lbXB0eT46Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW46IDYwcHggYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/machine-card/machine-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/machine-card/machine-card.component.ts ***!
  \********************************************************/
/*! exports provided: MachineCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineCardComponent", function() { return MachineCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MachineCardComponent = /** @class */ (function () {
    function MachineCardComponent(service) {
        this.service = service;
    }
    MachineCardComponent.prototype.ngOnInit = function () {
        this.getMachine(this.resourceUrl);
    };
    MachineCardComponent.prototype.getMachine = function (url) {
        var _this = this;
        this.service.getResource(url).subscribe(function (data) { return _this.getItem(data); }, function (err) { return console.log(err); });
    };
    MachineCardComponent.prototype.getItem = function (machine) {
        var _this = this;
        console.log('item: ', machine.item.url);
        this.service.getResource(machine.item.url).subscribe(function (data) {
            machine.item = data;
            _this.machine = machine;
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MachineCardComponent.prototype, "resourceUrl", void 0);
    MachineCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-machine-card',
            template: __webpack_require__(/*! ./machine-card.component.html */ "./src/app/machine-card/machine-card.component.html"),
            styles: [__webpack_require__(/*! ./machine-card.component.scss */ "./src/app/machine-card/machine-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], MachineCardComponent);
    return MachineCardComponent;
}());



/***/ }),

/***/ "./src/app/machines/machine.component.html":
/*!*************************************************!*\
  !*** ./src/app/machines/machine.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-machine-card *ngFor=\"let resource of resources\"\n  [resourceUrl]=\"resource.url\">\n</app-machine-card>\n"

/***/ }),

/***/ "./src/app/machines/machine.component.scss":
/*!*************************************************!*\
  !*** ./src/app/machines/machine.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-machine-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvbWFjaGluZXMvbWFjaGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWNoaW5lcy9tYWNoaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLW1hY2hpbmUtY2FyZCB7XG4gICAgd2lkdGg6IDI0JTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1JTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/machines/machine.component.ts":
/*!***********************************************!*\
  !*** ./src/app/machines/machine.component.ts ***!
  \***********************************************/
/*! exports provided: MachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineComponent", function() { return MachineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MachineComponent = /** @class */ (function () {
    function MachineComponent(service, route) {
        this.service = service;
        this.route = route;
        this.resources = [];
    }
    MachineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) {
            _this.loadResources(route.machinesUrl);
        });
    };
    MachineComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (data) {
            _this.loadMachine(data.results);
            if (data.next) {
                _this.loadResources(data.next);
            }
            _this.next = data.next;
        }, function (err) { return console.log(err); });
    };
    MachineComponent.prototype.loadMachine = function (resources) {
        var _this = this;
        var _loop_1 = function (resource) {
            this_1.service.getResource(resource.url).subscribe(function (data) {
                resource.name = data.item.name;
                if (_this.resources.find(function (x) { return x.name === data.item.name; }) === undefined) {
                    console.log('i put');
                    _this.resources.push(resource);
                }
            }, function (err) { return console.log(err); });
        };
        var this_1 = this;
        for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
            var resource = resources_1[_i];
            _loop_1(resource);
        }
    };
    MachineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-machine',
            template: __webpack_require__(/*! ./machine.component.html */ "./src/app/machines/machine.component.html"),
            styles: [__webpack_require__(/*! ./machine.component.scss */ "./src/app/machines/machine.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], MachineComponent);
    return MachineComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group vertical>\n  <mat-button-toggle routerLink=\"/pokemons\">Pokémons</mat-button-toggle>\n  <mat-button-toggle routerLink=\"/types\">Types</mat-button-toggle>\n  <mat-button-toggle routerLink=\"/abilities\">Abilities</mat-button-toggle>\n  <mat-button-toggle routerLink=\"/moves\">Moves</mat-button-toggle>\n  <mat-button-toggle routerLink=\"/generations\">Generations</mat-button-toggle>\n  <mat-button-toggle routerLink=\"/regions\">Regions</mat-button-toggle>\n  <mat-button-toggle routerLink=\"/locations\">Locations</mat-button-toggle>\n  <mat-button-toggle routerLink=\"/areas\">Areas</mat-button-toggle>\n  <mat-button-toggle routerLink=\"/items\">Items</mat-button-toggle>\n  <mat-button-toggle routerLink=\"/stats\" >Stats</mat-button-toggle>\n  <!-- <mat-button-toggle routerLink=\"/wiki\" >Wiki</mat-button-toggle> -->\n</mat-button-toggle-group>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-button-toggle-group {\n  border-radius: 4px;\n  width: 100%;\n  margin-top: 12px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n\nmat-button-toggle {\n  margin-bottom: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVU7RUFDVixpQkFBZ0I7RUFDaEIsZ0hBQW1HLEVBQ3RHOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xufVxubWF0LWJ1dHRvbi10b2dnbGV7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/models/config.models.ts":
/*!*****************************************!*\
  !*** ./src/app/models/config.models.ts ***!
  \*****************************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
var Route = /** @class */ (function () {
    function Route(obj) {
        this.pageSize = obj['page_size'];
        this.offset = obj['offset'];
        this.generation = obj['url']['generation'];
        this.region = obj['url']['region'];
        this.locationUrl = obj['url']['location'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.areaUrl = obj['url']['area'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.pokemonsUrl = obj['url']['pokemon'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.berriesUrl = obj['url']['berry'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.machinesUrl = obj['url']['machine'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.abilitiesUrl = obj['url']['ability'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.movesUrl = obj['url']['move'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.typesUrl = obj['url']['type'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
        this.statsUrl = obj['url']['stat'] + '/?limit=' + this.pageSize + '&offset=' + this.offset;
    }
    Route.prototype.getUrlPage = function (urlBase) {
        return urlBase + '/?limit=' + this.pageSize + '&offset=' + this.offset;
    };
    Route.prototype.getUrlName = function (urlBase, name) {
        return urlBase + '/' + name;
    };
    return Route;
}());



/***/ }),

/***/ "./src/app/move-card/move-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/move-card/move-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"move\" class=\"card\" id=\"{{ move.name }}\">\n  <mat-card-header>\n    <mat-card-title class=\"card-title\"> {{ move.name }} </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n      <p *ngIf=\"move.effect_entries\"> {{ move.effect_entries[0].effect }}<p>\n    </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"!move\" class=\"card empty\">\n<mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/move-card/move-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/move-card/move-card.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\n.card {\n  height: 300px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 120px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvbW92ZS1jYXJkL21vdmUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxjQUFhLEVBT2hCOztBQVJEO0lBSVEsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb3ZlLWNhcmQvbW92ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICYuZW1wdHk+OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luOiAxMjBweCBhdXRvO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/move-card/move-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/move-card/move-card.component.ts ***!
  \**************************************************/
/*! exports provided: MoveCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveCardComponent", function() { return MoveCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoveCardComponent = /** @class */ (function () {
    function MoveCardComponent(service) {
        this.service = service;
    }
    MoveCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getResource(this.moveUrl).subscribe(function (data) { return _this.move = data; }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MoveCardComponent.prototype, "moveUrl", void 0);
    MoveCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-move-card',
            template: __webpack_require__(/*! ./move-card.component.html */ "./src/app/move-card/move-card.component.html"),
            styles: [__webpack_require__(/*! ./move-card.component.scss */ "./src/app/move-card/move-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], MoveCardComponent);
    return MoveCardComponent;
}());



/***/ }),

/***/ "./src/app/moves/moves.component.html":
/*!********************************************!*\
  !*** ./src/app/moves/moves.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-move-card *ngFor=\"let resource of resources\"\n  [moveUrl]=\"resource.url\">\n</app-move-card>\n"

/***/ }),

/***/ "./src/app/moves/moves.component.scss":
/*!********************************************!*\
  !*** ./src/app/moves/moves.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-move-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvbW92ZXMvbW92ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbW92ZXMvbW92ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbW92ZS1jYXJkIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/moves/moves.component.ts":
/*!******************************************!*\
  !*** ./src/app/moves/moves.component.ts ***!
  \******************************************/
/*! exports provided: MovesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovesComponent", function() { return MovesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovesComponent = /** @class */ (function () {
    function MovesComponent(service, route) {
        this.service = service;
        this.route = route;
        this.resources = [];
    }
    MovesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) {
            _this.loadResources(route.movesUrl);
        });
    };
    MovesComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (data) {
            _this.resources = _this.resources.concat(data.results);
            _this.next = data.next;
        }, function (err) { return console.log(err); });
    };
    MovesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moves',
            template: __webpack_require__(/*! ./moves.component.html */ "./src/app/moves/moves.component.html"),
            styles: [__webpack_require__(/*! ./moves.component.scss */ "./src/app/moves/moves.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], MovesComponent);
    return MovesComponent;
}());



/***/ }),

/***/ "./src/app/pokemon-card/pokemon-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pokemon-card/pokemon-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"pokemon\" class=\"card\">\n    <mat-card-header>\n      <img mat-card-avatar src=\"{{ pokemon.sprites.front_default }}\" class=\"header-image\" />\n      <mat-card-title class=\"card-title\"> {{ pokemon.name }}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <section>Types</section>\n        <app-type-cell *ngFor=\"let item of pokemon.types\" [typeName]=\"item.type.name\"></app-type-cell>\n        <section>Abilities</section>\n        <app-abilities-cell *ngFor=\"let item of pokemon.abilities\" [abilityName]=\"item.ability.name\"></app-abilities-cell>\n        <section>Stats</section>\n        <div style=\"padding:1%; border-top: 1px solid #ccc;border-bottom: 1px solid #ccc; width:98%\" *ngFor=\"let item of pokemon.stats\">\n          <span> {{ item.stat.name }} </span>\n          <span style=\"float:right\"> {{ item.base_stat }} </span>\n        </div>\n      </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"!pokemon\" class=\"card empty\">\n  <mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/pokemon-card/pokemon-card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pokemon-card/pokemon-card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: #ddd;\n  border: #ccc solid 1px;\n  padding: 2%;\n  border-radius: 5px;\n  text-align: center;\n  margin: 10px 0; }\n\n::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\n.card-title {\n  margin-top: 18px; }\n\n.header-image {\n  width: 60px;\n  height: 60px; }\n\n.card {\n  height: 410px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 180px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvcG9rZW1vbi1jYXJkL3Bva2Vtb24tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQix1QkFBc0I7RUFDdEIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUNEO0VBQ0ksY0FBYSxFQU9oQjs7QUFSRDtJQUlRLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcG9rZW1vbi1jYXJkL3Bva2Vtb24tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuOjpuZy1kZWVwLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5oZWFkZXItaW1hZ2Uge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDQxMHB4O1xuXG4gICAgJi5lbXB0eT46Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW46IDE4MHB4IGF1dG87XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pokemon-card/pokemon-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pokemon-card/pokemon-card.component.ts ***!
  \********************************************************/
/*! exports provided: PokemonCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonCardComponent", function() { return PokemonCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokemonCardComponent = /** @class */ (function () {
    function PokemonCardComponent(resources) {
        this.resources = resources;
    }
    PokemonCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resources.getResource(this.resourceUrl).subscribe(function (data) { return _this.pokemon = data; }, function (err) { return console.log(err.message); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PokemonCardComponent.prototype, "resourceUrl", void 0);
    PokemonCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pokemon-card',
            template: __webpack_require__(/*! ./pokemon-card.component.html */ "./src/app/pokemon-card/pokemon-card.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-card.component.scss */ "./src/app/pokemon-card/pokemon-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], PokemonCardComponent);
    return PokemonCardComponent;
}());



/***/ }),

/***/ "./src/app/pokemon-cell/pokemon-cell.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pokemon-cell/pokemon-cell.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"pokemon\" class=\"card\">\n  <mat-card-header>\n    <img mat-card-avatar src=\"{{ pokemon.sprites.front_default }}\" class=\"header-image\" />\n    <mat-card-title class=\"card-title\"> {{ pokemon.name }}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n      <section>Types</section>\n      <app-type-cell *ngFor=\"let item of pokemon.types\" [typeName]=\"item.type.name\"></app-type-cell>\n      <section>Abilities</section>\n      <app-abilities-cell *ngFor=\"let item of pokemon.abilities\" [abilityName]=\"item.ability.name\"></app-abilities-cell>\n      <section>Stats</section>\n      <div style=\"padding:1%; border-top: 1px solid #ccc;border-bottom: 1px solid #ccc; width:98%\" *ngFor=\"let item of pokemon.stats\">\n        <span> {{ item.stat.name }} </span>\n        <span style=\"float:right\"> {{ item.base_stat }} </span>\n      </div>\n    </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"!pokemon\" class=\"card empty\">\n<mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/pokemon-cell/pokemon-cell.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pokemon-cell/pokemon-cell.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: #ddd;\n  border: #ccc solid 1px;\n  padding: 2%;\n  border-radius: 5px;\n  text-align: center;\n  margin: 10px 0; }\n\n.card-title {\n  margin-top: 18px; }\n\n.header-image {\n  width: 60px;\n  height: 60px; }\n\n.card {\n  height: 410px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 180px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvcG9rZW1vbi1jZWxsL3Bva2Vtb24tY2VsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQix1QkFBc0I7RUFDdEIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxjQUFhLEVBT2hCOztBQVJEO0lBSVEsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9wb2tlbW9uLWNlbGwvcG9rZW1vbi1jZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgMXB4O1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG4uY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5oZWFkZXItaW1hZ2Uge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDQxMHB4O1xuXG4gICAgJi5lbXB0eT46Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW46IDE4MHB4IGF1dG87XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pokemon-cell/pokemon-cell.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pokemon-cell/pokemon-cell.component.ts ***!
  \********************************************************/
/*! exports provided: PokemonCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonCellComponent", function() { return PokemonCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokemonCellComponent = /** @class */ (function () {
    function PokemonCellComponent(resources) {
        this.resources = resources;
    }
    PokemonCellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resources.getResource(this.resourceUrl).subscribe(function (spicie) {
            _this.resources.getResource(spicie.varieties[0].pokemon.url).subscribe(function (pokemon) {
                pokemon.spicie = spicie;
                _this.pokemon = pokemon;
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err.message); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PokemonCellComponent.prototype, "resourceUrl", void 0);
    PokemonCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pokemon-cell',
            template: __webpack_require__(/*! ./pokemon-cell.component.html */ "./src/app/pokemon-cell/pokemon-cell.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-cell.component.scss */ "./src/app/pokemon-cell/pokemon-cell.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], PokemonCellComponent);
    return PokemonCellComponent;
}());



/***/ }),

/***/ "./src/app/pokemons/pokemons.component.html":
/*!**************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pokemon-card *ngFor=\"let resource of resources\"\n  [resourceUrl]=\"resource.url\" >\n</app-pokemon-card>\n<div class=\"more\" *ngIf=\"next\" (click)=\"loadResources(next)\"> Carregar mais </div>\n"

/***/ }),

/***/ "./src/app/pokemons/pokemons.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-pokemon-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n.more {\n  display: inline-block;\n  width: 98.25%;\n  height: 15px;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  background: blue;\n  border-radius: 5px;\n  text-align: center;\n  padding: 10px 0px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvcG9rZW1vbnMvcG9rZW1vbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFVO0VBQ1YsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNkOztBQUNEO0VBQ0ksc0JBQXFCO0VBQ3JCLGNBQWE7RUFDYixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcG9rZW1vbnMvcG9rZW1vbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmFwcC1wb2tlbW9uLWNhcmQge1xuICAgIHdpZHRoOiAyNCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogMC43NSU7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5tb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDk4LjI1JTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pokemons/pokemons.component.ts":
/*!************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.ts ***!
  \************************************************/
/*! exports provided: PokemonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsComponent", function() { return PokemonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonsComponent = /** @class */ (function () {
    function PokemonsComponent(service, route) {
        this.service = service;
        this.route = route;
        this.resources = [];
    }
    PokemonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) {
            _this.loadResources(route.pokemonsUrl);
        });
    };
    PokemonsComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (page) {
            _this.resources = _this.resources.concat(page.results);
            _this.next = page.next;
        }, function (err) { return console.log(err.message); });
    };
    PokemonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pokemons',
            template: __webpack_require__(/*! ./pokemons.component.html */ "./src/app/pokemons/pokemons.component.html"),
            styles: [__webpack_require__(/*! ./pokemons.component.scss */ "./src/app/pokemons/pokemons.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], PokemonsComponent);
    return PokemonsComponent;
}());



/***/ }),

/***/ "./src/app/region-card/region-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/region-card/region-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"region\" tabindex=\"0\" class=\"card\">\n    <mat-card-header>\n      <mat-card-title class=\"card-title\"> {{ region.name }} </mat-card-title>\n      <mat-card-subtitle class=\"card-title\"> {{ region.locations.length }} - Locations</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <section>Versions</section>\n      <app-abilities-cell *ngFor=\"let group of region.version_groups\" [abilityName]=\"group.name\"></app-abilities-cell>\n      <section>Pokedexes</section>\n      <app-abilities-cell *ngFor=\"let pokedex of region.pokedexes\" [abilityName]=\"pokedex.name\"></app-abilities-cell>\n    </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"!region\" class=\"card empty\">\n  <mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/region-card/region-card.component.scss":
/*!********************************************************!*\
  !*** ./src/app/region-card/region-card.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: #ccc;\n  border: #ccc solid 1px;\n  padding: 2%;\n  border-radius: 5px;\n  text-align: center;\n  margin: 10px 0; }\n\n::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\n.card {\n  height: 250px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 120px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvcmVnaW9uLWNhcmQvcmVnaW9uLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksY0FBYSxFQU9oQjs7QUFSRDtJQUlRLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcmVnaW9uLWNhcmQvcmVnaW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGJvcmRlcjogI2NjYyBzb2xpZCAxcHg7XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbjo6bmctZGVlcC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQge1xuICAgIGhlaWdodDogMjUwcHg7XG5cbiAgICAmLmVtcHR5PjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogMTIwcHggYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/region-card/region-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/region-card/region-card.component.ts ***!
  \******************************************************/
/*! exports provided: RegionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionCardComponent", function() { return RegionCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegionCardComponent = /** @class */ (function () {
    function RegionCardComponent(service) {
        this.service = service;
    }
    RegionCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getResource(this.resourceUrl).subscribe(function (data) { return _this.region = data; }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegionCardComponent.prototype, "resourceUrl", void 0);
    RegionCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region-card',
            template: __webpack_require__(/*! ./region-card.component.html */ "./src/app/region-card/region-card.component.html"),
            styles: [__webpack_require__(/*! ./region-card.component.scss */ "./src/app/region-card/region-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], RegionCardComponent);
    return RegionCardComponent;
}());



/***/ }),

/***/ "./src/app/region/region.component.html":
/*!**********************************************!*\
  !*** ./src/app/region/region.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-region-card *ngFor=\"let resource of resources\"\n  [resourceUrl]=\"resource.url\">\n</app-region-card>\n"

/***/ }),

/***/ "./src/app/region/region.component.scss":
/*!**********************************************!*\
  !*** ./src/app/region/region.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-region-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXJlZ2lvbi1jYXJkIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/region/region.component.ts":
/*!********************************************!*\
  !*** ./src/app/region/region.component.ts ***!
  \********************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegionComponent = /** @class */ (function () {
    function RegionComponent(service, route) {
        this.service = service;
        this.route = route;
        this.resources = [];
    }
    RegionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) {
            var url = route.getUrlPage(route.region);
            _this.loadResources(url);
        });
    };
    RegionComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (data) { return _this.resources = data.results; }, function (err) { return console.log(err); });
    };
    RegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(/*! ./region.component.html */ "./src/app/region/region.component.html"),
            styles: [__webpack_require__(/*! ./region.component.scss */ "./src/app/region/region.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], RegionComponent);
    return RegionComponent;
}());



/***/ }),

/***/ "./src/app/service/resource.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/resource.service.ts ***!
  \*********************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourceService = /** @class */ (function () {
    function ResourceService(http) {
        this.http = http;
    }
    ResourceService.prototype.getResources = function (url) {
        return this.http.get(url);
    };
    ResourceService.prototype.getResource = function (url) {
        return this.http.get(url);
    };
    ResourceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ResourceService);
    return ResourceService;
}());



/***/ }),

/***/ "./src/app/service/route.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/route.service.ts ***!
  \******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_config_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/config.models */ "./src/app/models/config.models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteService = /** @class */ (function () {
    function RouteService(http) {
        this.http = http;
        this.host = '//' + location.host + '/';
        this.configFile = 'assets/config.json';
    }
    RouteService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.host + _this.configFile).subscribe(function (data) {
                resolve(new _models_config_models__WEBPACK_IMPORTED_MODULE_2__["Route"](data));
            }, function (err) { return reject(err); });
        });
    };
    RouteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "./src/app/stat-cell/stat-cell.component.html":
/*!****************************************************!*\
  !*** ./src/app/stat-cell/stat-cell.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stat-cell works!\n</p>\n"

/***/ }),

/***/ "./src/app/stat-cell/stat-cell.component.scss":
/*!****************************************************!*\
  !*** ./src/app/stat-cell/stat-cell.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXQtY2VsbC9zdGF0LWNlbGwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/stat-cell/stat-cell.component.ts":
/*!**************************************************!*\
  !*** ./src/app/stat-cell/stat-cell.component.ts ***!
  \**************************************************/
/*! exports provided: StatCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatCellComponent", function() { return StatCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatCellComponent = /** @class */ (function () {
    function StatCellComponent() {
    }
    StatCellComponent.prototype.ngOnInit = function () {
    };
    StatCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat-cell',
            template: __webpack_require__(/*! ./stat-cell.component.html */ "./src/app/stat-cell/stat-cell.component.html"),
            styles: [__webpack_require__(/*! ./stat-cell.component.scss */ "./src/app/stat-cell/stat-cell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatCellComponent);
    return StatCellComponent;
}());



/***/ }),

/***/ "./src/app/stats-card/stats-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/stats-card/stats-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"stat\" class=\"card\" id=\"{{ stat.name }}\">\n    <mat-card-header>\n      <mat-card-title class=\"card-title\"> {{ stat.name }} </mat-card-title>\n    </mat-card-header>\n</mat-card>\n<mat-card *ngIf=\"!stat\" class=\"card empty\">\n  <mat-spinner [diameter]=\"30\"></mat-spinner>\n</mat-card>"

/***/ }),

/***/ "./src/app/stats-card/stats-card.component.scss":
/*!******************************************************!*\
  !*** ./src/app/stats-card/stats-card.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\n.card {\n  height: 100px; }\n\n.card.empty > :first-child {\n    width: 30px;\n    height: 30px;\n    margin: 30px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvc3RhdHMtY2FyZC9zdGF0cy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGNBQWEsRUFPZjs7QUFSRjtJQUlRLFlBQVc7SUFDWCxhQUFZO0lBQ1osa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3RhdHMtY2FyZC9zdGF0cy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBcbiAgICAmLmVtcHR5PjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIH1cbiB9Il19 */"

/***/ }),

/***/ "./src/app/stats-card/stats-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/stats-card/stats-card.component.ts ***!
  \****************************************************/
/*! exports provided: StatsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCardComponent", function() { return StatsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatsCardComponent = /** @class */ (function () {
    function StatsCardComponent(service) {
        this.service = service;
    }
    StatsCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getResource(this.resourceUrl).subscribe(function (data) { return _this.stat = data; }, function (err) { return console.log(err.message); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatsCardComponent.prototype, "resourceUrl", void 0);
    StatsCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats-card',
            template: __webpack_require__(/*! ./stats-card.component.html */ "./src/app/stats-card/stats-card.component.html"),
            styles: [__webpack_require__(/*! ./stats-card.component.scss */ "./src/app/stats-card/stats-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], StatsCardComponent);
    return StatsCardComponent;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-stats-card *ngFor=\"let resource of resources\"\n  [resourceUrl]=\"resource.url\">\n</app-stats-card>\n"

/***/ }),

/***/ "./src/app/stats/stats.component.scss":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-stats-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvc3RhdHMvc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvc3RhdHMvc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc3RhdHMtY2FyZCB7XG4gICAgd2lkdGg6IDI0JTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1JTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsComponent = /** @class */ (function () {
    function StatsComponent(service, route) {
        this.service = service;
        this.route = route;
        this.resources = [];
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) { return _this.loadResources(route.statsUrl); });
    };
    StatsComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (data) {
            _this.resources = data.results;
            _this.next = data.next;
        }, function (err) { return console.log(err.message); });
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.scss */ "./src/app/stats/stats.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/type-card/type-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/type-card/type-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"type && type.pokemon.length > 0\" id=\"{{ type.name }}\">\n    <mat-card-header>\n      <mat-card-title class=\"card-title\"> {{ type.name }} </mat-card-title>\n      <mat-card-subtitle > {{ type.pokemon.length }} - pokémon(s)</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <section>Demage from</section>\n      <div class=\"damage\">\n        <app-type-cell *ngFor=\"let item of type.damage_relations.no_damage_from\" \n          [typeName]=item.name\n          [damageLevel]=0>\n        </app-type-cell>\n        <app-type-cell *ngFor=\"let item of type.damage_relations.half_damage_from\" \n          [typeName]=item.name\n          [damageLevel]=0.5>\n        </app-type-cell>\n        <app-type-cell *ngFor=\"let item of type.damage_relations.double_damage_from\" \n          [typeName]=item.name\n          [damageLevel]=2 >\n        </app-type-cell>\n      </div>\n      <section>Demage to</section>\n      <div class=\"damage\">\n          <app-type-cell *ngFor=\"let item of type.damage_relations.no_damage_to\" \n            [typeName]=item.name\n            [damageLevel]=0>\n          </app-type-cell>\n          <app-type-cell *ngFor=\"let item of type.damage_relations.half_damage_to\" \n            [typeName]=item.name\n            [damageLevel]=0.5>\n          </app-type-cell>\n          <app-type-cell *ngFor=\"let item of type.damage_relations.double_damage_to\" \n            [typeName]=item.name\n            [damageLevel]=2 >\n          </app-type-cell>\n        </div>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/type-card/type-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/type-card/type-card.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.mat-card-header-text {\n  width: 100%;\n  text-align: center; }\n\nsection {\n  background: #ddd;\n  border: #ccc solid 1px;\n  padding: 2%;\n  border-radius: 5px;\n  text-align: center;\n  margin: 10px 0; }\n\n.damage {\n  height: 170px; }\n\n.damage-head {\n  width: 100%;\n  text-align: center; }\n\n.card {\n  height: 410px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvdHlwZS1jYXJkL3R5cGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksWUFBVztFQUNYLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC90eXBlLWNhcmQvdHlwZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIGJvcmRlcjogI2NjYyBzb2xpZCAxcHg7XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbi5kYW1hZ2Uge1xuICAgIGhlaWdodDogMTcwcHg7XG59XG4uZGFtYWdlLWhlYWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDQxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/type-card/type-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/type-card/type-card.component.ts ***!
  \**************************************************/
/*! exports provided: TypeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeCardComponent", function() { return TypeCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypeCardComponent = /** @class */ (function () {
    function TypeCardComponent(service) {
        this.service = service;
    }
    TypeCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getResource(this.resourceUrl).subscribe(function (data) { return _this.type = data; }, function (err) { return console.log(err.message); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TypeCardComponent.prototype, "resourceUrl", void 0);
    TypeCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-type-card',
            template: __webpack_require__(/*! ./type-card.component.html */ "./src/app/type-card/type-card.component.html"),
            styles: [__webpack_require__(/*! ./type-card.component.scss */ "./src/app/type-card/type-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], TypeCardComponent);
    return TypeCardComponent;
}());



/***/ }),

/***/ "./src/app/type-cell/type-cell.component.html":
/*!****************************************************!*\
  !*** ./src/app/type-cell/type-cell.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"{{ typeName }}\">\n  <div>{{ typeName }}</div> \n  <div *ngIf=\"damageLevel >= 0\" style=\"font-size: 12px; font-style: italic;\">{{ damageLevel }} x</div>\n</span>\n\n"

/***/ }),

/***/ "./src/app/type-cell/type-cell.component.scss":
/*!****************************************************!*\
  !*** ./src/app/type-cell/type-cell.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  width: 20%;\n  border: 1px solid #ccc;\n  padding: 1.5% 1.3%;\n  background: #efefef;\n  border-radius: 5px;\n  margin-right: 1.5%;\n  font-size: 14px;\n  margin-bottom: 1.5%;\n  text-align: center;\n  display: inline-block; }\n\n.poison {\n  background: #dcccd9; }\n\n.grass {\n  background: #04ff00; }\n\n.fire {\n  background: #ffb749; }\n\n.water {\n  background: #37c1fb; }\n\n.bug {\n  background: #7ad969; }\n\n.flying {\n  background: #e7e1b8; }\n\n.ice {\n  background: #b9e8ea; }\n\n.electric {\n  background: #f5d973; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvdHlwZS1jZWxsL3R5cGUtY2VsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDeEI7O0FBQ0Q7RUFDSSxvQkFDSixFQUFDOztBQUNEO0VBQ0ksb0JBQ0osRUFBQzs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLG9CQUNKLEVBQUM7O0FBQ0Q7RUFDSSxvQkFDSixFQUFDOztBQUNEO0VBQ0ksb0JBQ0osRUFBQzs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3R5cGUtY2VsbC90eXBlLWNlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogMS41JSAxLjMlO1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMS41JTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBvaXNvbiB7XG4gICAgYmFja2dyb3VuZDogI2RjY2NkOVxufVxuLmdyYXNzIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDRmZjAwXG59XG4uZmlyZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmYjc0OTtcbn1cbi53YXRlciB7XG4gICAgYmFja2dyb3VuZDogIzM3YzFmYlxufVxuLmJ1ZyB7XG4gICAgYmFja2dyb3VuZDogIzdhZDk2OVxufVxuLmZseWluZyB7XG4gICAgYmFja2dyb3VuZDogI2U3ZTFiOFxufVxuLmljZSB7XG4gICAgYmFja2dyb3VuZDogI2I5ZThlYTtcbn1cbi5lbGVjdHJpYyB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZDk3Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/type-cell/type-cell.component.ts":
/*!**************************************************!*\
  !*** ./src/app/type-cell/type-cell.component.ts ***!
  \**************************************************/
/*! exports provided: TypeCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeCellComponent", function() { return TypeCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypeCellComponent = /** @class */ (function () {
    function TypeCellComponent() {
    }
    TypeCellComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TypeCellComponent.prototype, "typeName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TypeCellComponent.prototype, "damageLevel", void 0);
    TypeCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-type-cell',
            template: __webpack_require__(/*! ./type-cell.component.html */ "./src/app/type-cell/type-cell.component.html"),
            styles: [__webpack_require__(/*! ./type-cell.component.scss */ "./src/app/type-cell/type-cell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypeCellComponent);
    return TypeCellComponent;
}());



/***/ }),

/***/ "./src/app/types/types.component.html":
/*!********************************************!*\
  !*** ./src/app/types/types.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-type-card *ngFor=\"let resource of resources\"\n  [resourceUrl]=\"resource.url\">\n</app-type-card>"

/***/ }),

/***/ "./src/app/types/types.component.scss":
/*!********************************************!*\
  !*** ./src/app/types/types.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-type-card {\n  width: 24%;\n  padding: 0;\n  margin-left: 0.75%;\n  margin-top: 12px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1Z2Fyby9Eb2N1bWVudHMvcG9rZW1vbi1hbmd1bGFyL3Bva2Vtb24vY2xpZW50L3NyYy9hcHAvdHlwZXMvdHlwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvdHlwZXMvdHlwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdHlwZS1jYXJkIHtcbiAgICB3aWR0aDogMjQlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzUlO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/types/types.component.ts":
/*!******************************************!*\
  !*** ./src/app/types/types.component.ts ***!
  \******************************************/
/*! exports provided: TypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesComponent", function() { return TypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/resource.service */ "./src/app/service/resource.service.ts");
/* harmony import */ var _service_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/route.service */ "./src/app/service/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypesComponent = /** @class */ (function () {
    function TypesComponent(service, route) {
        this.service = service;
        this.route = route;
        this.resources = [];
    }
    TypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.load().then(function (route) {
            _this.loadResources(route.typesUrl);
        });
    };
    TypesComponent.prototype.loadResources = function (url) {
        var _this = this;
        this.service.getResources(url).subscribe(function (page) {
            _this.resources = _this.resources.concat(page.results);
            _this.next = page.next;
        }, function (err) { return console.log(err.message); });
    };
    TypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-types',
            template: __webpack_require__(/*! ./types.component.html */ "./src/app/types/types.component.html"),
            styles: [__webpack_require__(/*! ./types.component.scss */ "./src/app/types/types.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"],
            _service_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], TypesComponent);
    return TypesComponent;
}());



/***/ }),

/***/ "./src/app/wiki/wiki.component.html":
/*!******************************************!*\
  !*** ./src/app/wiki/wiki.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Generations\n</h1>\n<p>\n    A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.\n</p>"

/***/ }),

/***/ "./src/app/wiki/wiki.component.scss":
/*!******************************************!*\
  !*** ./src/app/wiki/wiki.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpa2kvd2lraS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/wiki/wiki.component.ts":
/*!****************************************!*\
  !*** ./src/app/wiki/wiki.component.ts ***!
  \****************************************/
/*! exports provided: WikiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikiComponent", function() { return WikiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WikiComponent = /** @class */ (function () {
    function WikiComponent() {
    }
    WikiComponent.prototype.ngOnInit = function () {
    };
    WikiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wiki',
            template: __webpack_require__(/*! ./wiki.component.html */ "./src/app/wiki/wiki.component.html"),
            styles: [__webpack_require__(/*! ./wiki.component.scss */ "./src/app/wiki/wiki.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WikiComponent);
    return WikiComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hugaro/Documents/pokemon-angular/pokemon/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map