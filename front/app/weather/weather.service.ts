/**
 * Created by gwen on 10/08/16.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";


@Injectable()
export class WeatherService {

    private weatherURL = 'http://localhost:8090/api/v1/weather/forecast/';
    private Promise;

    constructor(private http: Http) {
    }

    getCurrent(nbForecast: number, city: string = 'lille', countryCode: string = 'fr') {
        return this.http.get(this.weatherURL + nbForecast)
            .toPromise()
            .then(
                response => response.json()
            );

        //.catch(this.handleError);
    }

    private
    handleError(error: any) {
        console.error('An error occurred', error);
        return this.Promise.reject(error.message || error);
    }
}

