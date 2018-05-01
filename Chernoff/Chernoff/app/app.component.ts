import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `./app/app.component.html`,
    styleUrls:[`./app/app.component.css`]
})
export class AppComponent {
    apt:boolean=false;
    name = 'драрп';
    //characteristics: { name: string, value: number, completed: boolean };
    characteristicsMass = [
        { name: "eyew", value: 0, completed: false },
        { name: "eyeh", value: 0, completed: false },
        { name: "brow", value: 0, completed: false },
        { name: "hair", value: 0, completed: false },
        { name: "mouth", value: 0, completed: false },
        { name: "nosew", value: 0, completed: false },
        { name: "noseh", value: 0, completed: false },
        { name: "face", value: 0, completed: false }
    ];
    test() {
        console.log("It's working!");
    }

    isEmpty(ev:any,elem:string){
        if(ev.target.value!='' && ev.target.value!=undefined && ev.target.value!=null){
            for(var i=0;i<this.characteristicsMass.length;i++){
                if(elem==this.characteristicsMass[i].name){
                    break;
                }
            }
            this.characteristicsMass[i].completed=true;
        }
        else{
            for(var i=0;i<this.characteristicsMass.length;i++){
                if(elem==this.characteristicsMass[i].name){
                    break;
                }
            }
            console.log(this.characteristicsMass[i].completed);
            this.characteristicsMass[i].completed = false;

        }
    }
}