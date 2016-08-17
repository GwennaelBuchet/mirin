/**
 * Created by gwen on 10/08/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.weatherUrl = 'http://localhost:8090/weather';
    }
    WeatherService.prototype.getCurrent = function (city, countryCode) {
        if (city === void 0) { city = 'lille'; }
        if (countryCode === void 0) { countryCode = 'fr'; }
        return this.http.get(this.weatherUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    WeatherService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return this.Promise.reject(error.message || error);
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map