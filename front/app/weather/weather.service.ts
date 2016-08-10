/**
 * Created by gwen on 10/08/16.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class WeatherService {

	getCurrent(city: string = 'lille', countryCode: string = 'fr') {
		return Promise.resolve(
			{
				details: 'il pleut un peu',
				temperature: 17
			}
		);
	}
}

