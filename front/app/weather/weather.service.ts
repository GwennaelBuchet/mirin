/**
 * Created by gwen on 10/08/16.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class WeatherService {

	getCurrent(city: string = 'lille', countryCode: string = 'fr') {
		return Promise.resolve(
			 //temporary mock :
			{
				"sunrise_time": 1470803403,
				"dewpoint": null,
				"weather_code": 802,
				"humidex": null,
				"status": "Clouds",
				"clouds": 36,
				"weather_icon_name": "03n",
				"rain": {},
				"sunset_time": 1470856482,
				"heat_index": null,
				"wind": {"deg": 92.0001, "speed": 1.31},
				"detailed_status": "partiellement ensoleill\u00e9",
				"humidity": 85,
				"temperature": {"temp": 284.43, "temp_min": 280.93, "temp_max": 295.93, "temp_kf": null},
				"reference_time": 1470869724,
				"snow": {},
				"visibility_distance": null,
				"pressure": {"sea_level": null, "press": 1021.688}
			}
		);
	}
}

