/**
 * Created by gwen on 10/08/16.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";


@Injectable()
export class WeatherService {

	private weatherUrl = 'http://localhost:8090/weather';
	private Promise;

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
		return this.Promise.reject(error.message || error);
	}
}

