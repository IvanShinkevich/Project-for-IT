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
        this.marksMass = [
            { name: "Прога", value: 0, completed: false },
            { name: "Мат анализ", value: 0, completed: false },
            { name: "ИТ", value: 0, completed: false },
            { name: "Алгебра", value: 0, completed: false },
            { name: "Геома", value: 0, completed: false }
        ];
        this.activeButton = 0;
        this.buttonsArr = [
            { name: "Standart", pressed: true },
            { name: "Marks", pressed: false }
        ];
    }
    AppComponent.prototype.test = function () {
        console.log(this.buttonsArr[this.activeButton].name == 'Standart');
    };
    AppComponent.prototype.pressButton = function (name) {
        for (var i = 0; i < this.buttonsArr.length; i++) {
            this.buttonsArr[i].pressed = false;
        }
        for (var i = 0; i < this.buttonsArr.length; i++) {
            if (name == this.buttonsArr[i].name) {
                this.buttonsArr[i].pressed = true;
                this.activeButton = i;
            }
        }
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
            this.characteristicsMass[i].completed = false;
        }
    };
    AppComponent.prototype.addMarkInput = function () {
        var str = "Some subject";
        var lngs = this.marksMass.length;
        this.marksMass[lngs] = { name: str, value: 0, completed: false };
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