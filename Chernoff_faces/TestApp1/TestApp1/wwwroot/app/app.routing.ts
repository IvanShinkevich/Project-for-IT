import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent} from './splash/splash.component';

const routes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'app', loadChildren: 'app/home/home.module#HomeModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);