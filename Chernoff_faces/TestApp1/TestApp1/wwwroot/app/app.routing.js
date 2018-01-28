"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var splash_component_1 = require("./splash/splash.component");
var routes = [
    { path: '', component: splash_component_1.SplashComponent },
    { path: 'app', loadChildren: 'app/home/home.module#HomeModule' }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map