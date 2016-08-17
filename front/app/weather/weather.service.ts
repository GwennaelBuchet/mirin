/**
 * Created by gwen on 10/08/16.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";


@Injectable()
export class WeatherService {

	private weatherUrl = 'http://localhost:8090/weather';

	constructor(private http: Http) {
	}

	getCurrent(city: string = 'lille', countryCode: string = 'fr') {
		return this.http.get(this.weatherUrl)
		           .toPromise()
		           .then(response => response.json())
		           //.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}

