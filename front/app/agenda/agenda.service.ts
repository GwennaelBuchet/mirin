/**
 * Created by gwen on 10/08/16.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";


@Injectable()
export class AgendaService {

    private agendaURL = 'http://localhost:8090/api/v1/agenda/incoming';
    private Promise;

    constructor(private http: Http) {
    }

    getCurrentDay() {
        return this.http.get(this.agendaURL)
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

