/**
 * Created by gwen on 10/08/16.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "./weather.service";

@Component({
    selector: 'weather',
    templateUrl: 'app/weather/weather.component.html',
    styleUrls: ['app/weather/css/weather.component.css', 'app/weather/css/weather-icons-wind.min.css', 'app/weather/css/weather-icons.min.css']
})
export class WeatherComponent implements OnInit {

    days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    forecast = {
        cod: "200",
        message: 0.0289,
        city: {
            id: 2998324,
            name: "Lille",
            coord: {lon: 3.05858, lat: 50.632969},
            country: "FR",
            population: 0,
            sys: {population: 0}
        },
        cnt: 1,
        list: [{
            dt: 1471878000,
            main: {
                temp: 26.72,
                temp_min: 25.43,
                temp_max: 26.72,
                pressure: 1028.47,
                sea_level: 1040.42,
                grnd_level: 1028.47,
                humidity: 61,
                temp_kf: 1.29
            },
            weather: [
                {
                    id: 800,
                    main: "Clear",
                    description: "ensoleillé",
                    icon: "01d"
                }
            ],
            clouds: {
                all: 0
            },
            wind: {
                speed: 2.42,
                deg: 201.502
            },
            rain: {
                treeh: 0
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2016-08-22 15:00:00"
        }],
        Unit: "metric",
        Lang: "FR",
        Key: "bf14e32fe69a119b541b93d99c16cf75"

    };

    constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getCurrent();
    }

    getCurrent() {
        //noinspection TypeScriptUnresolvedFunction
        this.weatherService.getCurrent().then(f => {
            this.forecast = f;
        });
    }

    getDay(timestamp) {
        let date = new Date(timestamp * 1000);
        return this.days[date.getDay()];
    }

    getDate(timestamp) {
        let date = new Date(timestamp * 1000);
        return date.getDate();
    }

    getWindIcon(deg) {
        return Math.round(deg) % 360;
    }

    timestampToHuman(t) {
        let date = new Date(t * 1000)

        let h = this._to2Digits(date.getHours());
        let m = this._to2Digits(date.getMinutes());

        return h + ":" + m;

        //return date.toLocaleTimeString();
    }

    _to2Digits(s) {
        return s < 10 ? "0" + s : s;
    }
}
