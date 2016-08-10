/**
 * Created by gwen on 10/08/16.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "./weather.service";

@Component({
	           selector: 'weather',
	           templateUrl: 'app/weather/weather.component.html',
	           styleUrls: ['app/weather/weather.component.css']
           })
export class WeatherComponent implements OnInit {

	weather = {
		temperature: {
			temp: 0,
			temp_min: 0,
			temp_max: 0
		}
	};


	constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.getCurrent();
	}

	getCurrent() {
		/*this.route.params.forEach((params: Params) => {
		 let city:string = +params['city'];
		 let country = +params['country'];
		 this.weatherService.getCurrent(city, country).then(w => this.weather = w);
		 });*/

		this.weatherService.getCurrent().then(w => {
			this.weather = w;
			//to convert from Kelvin to Celcius :
			this.weather.temperature.temp -= 273.15;
			this.weather.temperature.temp_min -= 273.15;
			this.weather.temperature.temp_max -= 273.15;
		});

	}
}
