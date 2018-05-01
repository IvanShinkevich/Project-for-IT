import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `./app/app.component.html`,
    styleUrls:[`./app/app.component.css`]
})
export class AppComponent {
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

    marksMass = [
        {name: "Прога", value: 0, completed: false },
        { name: "Мат анализ", value: 0, completed: false },
        { name: "ИТ", value: 0, completed: false },
        { name: "Алгебра", value: 0, completed: false },
        { name: "Геома", value: 0, completed: false }
    ];

    activeButton:number=0;

    buttonsArr=[
        {name: "Standart",pressed:true},
        {name:"Marks", pressed:false}
    ];

    test(){
        console.log(this.buttonsArr[this.activeButton].name=='Standart')
    }

    pressButton(name:string){
        for(var i=0;i<this.buttonsArr.length;i++){
            this.buttonsArr[i].pressed = false;
        }
        for(var i=0;i<this.buttonsArr.length;i++){
            if(name == this.buttonsArr[i].name){
                this.buttonsArr[i].pressed = true;
                this.activeButton = i;
            }
        }
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
            this.characteristicsMass[i].completed = false;

        }
    }
}