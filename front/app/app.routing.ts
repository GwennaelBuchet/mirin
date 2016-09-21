/**
 * Created by gwen on 10/08/16.
 */

import {Routes, RouterModule} from "@angular/router";
import {WeatherComponent} from "./weather/weather.component";
import {AgendaComponent} from "./agenda/agenda.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/weather',
		pathMatch: 'full'
	},
	{
		path: 'weather',
		component: WeatherComponent
	},
	{
		path: 'agenda',
		component: AgendaComponent
	}
];

export const routing = RouterModule.forRoot(appRoutes);

