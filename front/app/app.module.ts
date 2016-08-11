/**
 * Created by gwen on 10/08/16.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {routing} from "./app.routing";

import {WeatherComponent} from "./weather/weather.component";
import {WeatherService} from "./weather/weather.service";

@NgModule({
	          imports: [
		          BrowserModule,
		          HttpModule,
		          routing
	          ],
	          declarations: [
		          AppComponent,
		          WeatherComponent
	          ],
	          providers: [
		          WeatherService
	          ],
	          bootstrap: [
		          AppComponent
	          ]
          })
export class AppModule {
}
