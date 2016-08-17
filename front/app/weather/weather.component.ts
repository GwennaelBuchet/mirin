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

    weather = {
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
    desc = '';
    icon = '';
    sunrise = '';
    sunset = '';


    constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getCurrent();
    }

    getCurrent() {
        this.weatherService.getCurrent().then(w => {
            this.weather = w;
            this.desc = this.weather.weather[0].description;
            this.icon = this.weather.weather[0].id.toString();

            var date = new Date(this.weather.sys.sunrise * 1000);
            var hours =  "0" + date.getHours();
            var minutes = "0" + date.getMinutes();
            this.sunrise = hours + 'h' + minutes.substr(-2);

            date = new Date(this.weather.sys.sunset * 1000);
            hours =  date.getHours();
            minutes = "0" + date.getMinutes();
            this.sunset = hours + 'h' + minutes.substr(-2);
        });

    }
}
