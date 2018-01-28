import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { MdProgressSpinnerModule } from '@angular/material';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        SplashComponent
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    imports: [
        BrowserModule,
        MdProgressSpinnerModule,
        routing
    ],
    exports: []
})
export class AppModule { }