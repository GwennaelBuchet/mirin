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
import {AgendaComponent} from "./agenda/agenda.component";
import {AgendaService} from "./agenda/agenda.service";

@NgModule({
	          imports: [
		          BrowserModule,
		          HttpModule,
		          routing
	          ],
	          declarations: [
		          AppComponent,
		          WeatherComponent,
		          AgendaComponent
	          ],
	          providers: [
		          WeatherService,
		          AgendaService
	          ],
	          bootstrap: [
		          AppComponent
	          ]
          })
export class AppModule {
}
