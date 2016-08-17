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
var router_1 = require("@angular/router");
var weather_service_1 = require("./weather.service");
var WeatherComponent = (function () {
    function WeatherComponent(weatherService, route) {
        this.weatherService = weatherService;
        this.route = route;
        this.weather = {
            name: '',
            weather: [
                {
                    id: 0,
                    main: '',
                    description: '',
                    icon: ''
                }
            ],
            sys: {
                type: 1,
                id: 5625,
                message: 0.0566,
                country: "FR",
                sunrise: 1471408805,
                sunset: 1471460525
            },
            main: {
                temp: 6.71,
                temp_min: 6,
                temp_max: 8,
                pressure: 1023,
                sea_level: 0,
                grnd_level: 0,
                humidity: 61
            },
            wind: {
                speed: 4.6,
                deg: 30
            },
            clouds: {
                all: 90
            }
        };
        this.desc = '';
        this.icon = '';
        this.sunrise = '';
        this.sunset = '';
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.getCurrent();
    };
    WeatherComponent.prototype.getCurrent = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction
        this.weatherService.getCurrent().then(function (w) {
            _this.weather = w;
            _this.desc = _this.weather.weather[0].description;
            _this.icon = _this.weather.weather[0].id.toString();
            var date = new Date(_this.weather.sys.sunrise * 1000);
            var hours = "0" + date.getHours();
            var minutes = "0" + date.getMinutes();
            _this.sunrise = hours + 'h' + minutes.substr(-2);
            date = new Date(_this.weather.sys.sunset * 1000);
            hours = "" + date.getHours();
            minutes = "0" + date.getMinutes();
            _this.sunset = hours + 'h' + minutes.substr(-2);
        });
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'weather',
            templateUrl: 'app/weather/weather.component.html',
            styleUrls: ['app/weather/css/weather.component.css', 'app/weather/css/weather-icons-wind.min.css', 'app/weather/css/weather-icons.min.css']
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService, router_1.ActivatedRoute])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map