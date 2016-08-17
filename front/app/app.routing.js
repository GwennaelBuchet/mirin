/**
 * Created by gwen on 10/08/16.
 */
"use strict";
var router_1 = require("@angular/router");
var weather_component_1 = require("./weather/weather.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/weather',
        pathMatch: 'full'
    },
    {
        path: 'weather',
        component: weather_component_1.WeatherComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map