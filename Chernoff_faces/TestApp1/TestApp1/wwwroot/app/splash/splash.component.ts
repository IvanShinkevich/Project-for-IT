import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.css']
})
export class SplashComponent {
    constructor(private router: Router) { }
    ngOnInit() {
        this.router.navigate(['/app']);
    }
}
