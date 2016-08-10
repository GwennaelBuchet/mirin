/**
 * Created by gwen on 10/08/16.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "./weather.service";

@Component({
	           selector: 'weather',
	           templateUrl: 'app/weather/weather.component.html',
	           styleUrls:  ['app/weather/weather.component.css']
           })
export class WeatherComponent implements OnInit {

	weather = {
		details: 'il pleut un peu',
		temperature: 17
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

		this.weatherService.getCurrent().then(w => this.weather = w);

	}
}
