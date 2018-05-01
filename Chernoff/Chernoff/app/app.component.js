"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.apt = false;
        this.name = 'драрп';
        //characteristics: { name: string, value: number, completed: boolean };
        this.characteristicsMass = [
            { name: "eyew", value: 0, completed: false },
            { name: "eyeh", value: 0, completed: false },
            { name: "brow", value: 0, completed: false },
            { name: "hair", value: 0, completed: false },
            { name: "mouth", value: 0, completed: false },
            { name: "nosew", value: 0, completed: false },
            { name: "noseh", value: 0, completed: false },
            { name: "face", value: 0, completed: false }
        ];
    }
    AppComponent.prototype.test = function () {
        console.log("It's working!");
    };
    AppComponent.prototype.isEmpty = function (ev, elem) {
        if (ev.target.value != '' && ev.target.value != undefined && ev.target.value != null) {
            for (var i = 0; i < this.characteristicsMass.length; i++) {
                if (elem == this.characteristicsMass[i].name) {
                    break;
                }
            }
            this.characteristicsMass[i].completed = true;
        }
        else {
            for (var i = 0; i < this.characteristicsMass.length; i++) {
                if (elem == this.characteristicsMass[i].name) {
                    break;
                }
            }
            console.log(this.characteristicsMass[i].completed);
            this.characteristicsMass[i].completed = false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./app/app.component.html",
            styleUrls: ["./app/app.component.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map