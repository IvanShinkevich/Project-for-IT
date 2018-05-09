﻿import { Component } from '@angular/core'
declare function reactTriggerChange(node:any):any;
@Component({
    selector: 'my-app',
    templateUrl: `./app/app.component.html`,
    styleUrls:[`./app/app.component.css`]
})

export class AppComponent {
    //Установки для контролов

    //Установка по значению
    setFace(value:any){
        let input = <HTMLInputElement>document.getElementById("chernFace");
        input.value = value.toString();
        reactTriggerChange(input);
    }
    setEyew(value:any){
        let input = <HTMLInputElement>document.getElementById("chernEyew");
        input.value = value.toString();
        reactTriggerChange(input);
    }
    setEyeh(value:any)  {
        let input = <HTMLInputElement>document.getElementById("chernEyeh");
        input.value = value.toString();
        reactTriggerChange(input);
    }
    setNosew(value:any){
        let input = <HTMLInputElement>document.getElementById("chernNosew");
        input.value = value.toString();
        reactTriggerChange(input);
    }
    setNoseh(value:any){
        let input = <HTMLInputElement>document.getElementById("chernNoseh");
        input.value = value.toString();
        reactTriggerChange(input);
    }
    setHair(value:any){
        let input = <HTMLInputElement>document.getElementById("chernHair");
        input.value = value.toString();
        reactTriggerChange(input);
    }
    setBrow(value:any){
        let input = <HTMLInputElement>document.getElementById("chernBrow");
        input.value = value.toString();
        reactTriggerChange(input);
    }
    setMouth(value:any){
        let input = <HTMLInputElement>document.getElementById("chernMouth");
        input.value = value.toString();
        reactTriggerChange(input);
    }

    setAll(face:any,hair:any,mouth:any,brow:any,nosew:any,noseh:any,eyew:any,eyeh:any){
        this.characteristicsMass[7].value = face;
        this.setFace(face);
        this.characteristicsMass[3].value = hair;
        this.setHair(hair);
        this.characteristicsMass[4].value=mouth;
        this.setMouth(mouth);
        this.characteristicsMass[2].value=brow;
        this.setBrow(brow);
        this.characteristicsMass[5].value=nosew;
        this.setNosew(nosew);
        this.characteristicsMass[6].value=noseh;
        this.setNoseh(noseh);
        this.characteristicsMass[0].value=eyew;
        this.setEyew(eyew);
        this.characteristicsMass[1].value=eyeh;
        this.setEyeh(eyeh);
    }
    //берут данные из массива characteristicsMass
    updateFace(){

        let input = <HTMLInputElement>document.getElementById("chernFace");
        input.value = this.characteristicsMass[7].value.toString();
        reactTriggerChange(input);
    }
    updateEyew(){
        let input = <HTMLInputElement>document.getElementById("chernEyew");
        input.value = this.characteristicsMass[0].value.toString();
        reactTriggerChange(input);
    }
    updateEyeh()  {
        let input = <HTMLInputElement>document.getElementById("chernEyeh");
        input.value = this.characteristicsMass[1].value.toString();
        reactTriggerChange(input);
    }
    updateNosew(){
        let input = <HTMLInputElement>document.getElementById("chernNosew");
        input.value = this.characteristicsMass[5].value.toString();
        reactTriggerChange(input);
    }
    updateNoseh(){
        let input = <HTMLInputElement>document.getElementById("chernNoseh");
        input.value = this.characteristicsMass[6].value.toString();
        reactTriggerChange(input);
    }
    updateHair(){
        let input = <HTMLInputElement>document.getElementById("chernHair");
        input.value = this.characteristicsMass[3].value.toString();
        reactTriggerChange(input);
    }
    updateBrow(){
        let input = <HTMLInputElement>document.getElementById("chernBrow");
        input.value = this.characteristicsMass[2].value.toString();
        reactTriggerChange(input);
    }
    updateMouth(){
        let input = <HTMLInputElement>document.getElementById("chernMouth");
        input.value = this.characteristicsMass[4].value.toString();
        reactTriggerChange(input);
    }


    updateByName(name:string){
        switch(name){
            case "face":this.updateFace();break;
            case "eyew":this.updateEyew();break;
            case "eyeh":this.updateEyeh();break;
            case "brow":this.updateBrow();break;
            case "hair":this.updateHair();break;
            case "mouth":this.updateMouth();break;
            case "nosew":this.updateNosew();break;
            case "noseh":this.updateNoseh();break;
        }
    }

    updateAll(){
        for(let i=0;i<this.characteristicsMass.length;i++){
            this.updateByName(this.characteristicsMass[i].name,);
        }
    }
    //Для корректной работы инпутов

    isEmpty(ev: any, elem: string) {
        if (ev.target.value != '' && ev.target.value != undefined && ev.target.value != null) {
            for (var i = 0; i < this.characteristicsMass.length; i++) {
                if (elem == this.characteristicsMass[i].name) {
                    this.characteristicsMass[i].value = ev.target.value;
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

        console.log(this.characteristicsMass);
    }

    //Части панели управления


    
    //Кнопки
    buttonsArr=[
        {name: "Стандарт",pressed:true},
        { name: "Оценки", pressed: false },
        {name: "Опросник", pressed: false}
    ];

    activeButton: number = 0;

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


    //Стандартная панель

    characteristicsMass = [
        { name: "eyew", value: -1.9, completed: false },
        { name: "eyeh", value: 0.6, completed: false },
        { name: "brow", value: -1, completed: false },
        { name: "hair", value: -1, completed: false },
        { name: "mouth", value: 1.2, completed: false },
        { name: "nosew", value: 0.3, completed: false },
        { name: "noseh", value: 0.3, completed: false },
        { name: "face", value: 0.2, completed: false }
    ];


    //Панель Оценок
    marksMass:any[]=[];
    addMark="";
    full:boolean;
    addMarkInput() {
        console.log(this.addMark);
        let lngs: number = this.marksMass.length;
        if(this.addMark!="" && this.addMark!=null){
            this.marksMass[lngs] = { name: this.addMark, value: 0, completed: false };
            this.addMark="";
        }
    }
    isFilled(ev: any){
        if (ev.target.value != '' && ev.target.value != undefined && ev.target.value != null) {
            this.full=true;
        }
        else{
            this.full=false;
        }
    }



    //Панель теста

    answered=0;
    resultVar = 0;
    questions = [
        {
            name: "Охотно ли Вы беретесь за решение неординарных, нестандартных управленческих задач?",
            yesresult: 1, noresult: 0
        },
        {
            name: "Трудно ли Вам было отказаться от тех приемов руководства подчиненными, которыми Вы пользовались, находясь на ступень ниже?",
            yesresult: 0, noresult: 1
        },
        {
            name: "После повышения, уделяли ли Вы внимание прежнему участку работы?",
            yesresult: 0, noresult: 1
        },
        {
            name: "Стремитесь ли Вы выработать универсальный метод управления, подходящий для большинства ситуаций?",
            yesresult: 0, noresult: 2
        },
        {
            name: "Умеете ли Вы дать полную, целостную оценку сотрудникам/ руководителям, обоснованно квалифицировав их как сильных, средних и слабых в вопросах управления?",
            yesresult: 2, noresult: 0
        },
        {
            name: "Легко ли Вам выйти за рамки личных симпатий или антипатий в кадровых вопросах?",
            yesresult: 1, noresult: 0
        },
        {
            name: "Считаете ли Вы, что универсального стиля руководства нет, а нужно уметь сочетать различные стили в зависимости от специфики управленческой ситуации?",
            yesresult: 1, noresult: 0
        },
        {
            name: "Утверждаете ли Вы, что Вам легче избежать конфликта с вышестоящим руководством, чем с подчиненными?",
            yesresult: 0, noresult: 2
        },
        {
            name: "Хочется ли Вам сломать стереотип управления, сложившийся в возглавляемом учреждении?",
            yesresult: 1, noresult: 0
        },
        {
            name: "Часто ли оказывается верным Ваше первое впечатление о качествах человека как руководителя?",
            yesresult: 1, noresult: 0
        },
        {
            name: "Часто ли Вам приходится объяснять свои неудачи в управлении?",
            yesresult: 0, noresult: 2
        },
        {
            name: "Часто ли Вы ощущаете. что для эффективной управляющей деятельности труда Вам не хватает времени?",
            yesresult: 0, noresult: 1
        },
        {
            name: "Как вы думаете, если бы у Вас была возможность чаще бывать в нижестоящих должностях, то увеличилась бы эффективность Вашего руководства?",
            yesresult: 0, noresult: 2
        },
        {
            name: "Предоставляете ли Вы больше полномочий и самостоятельности в решении вопросов более инициативным и компетентным из подчиненных Вам сотрудников/ руководителей?",
            yesresult: 2, noresult: 0
        },
        {
            name: "Можете ли утверждать, что Ваша управленческая деятельность имеет четкую систему управления?",
            yesresult: 2, noresult: 0
        },
        {
            name: "Считаете ли Вы, что интересы работы пострадают, если ежедневно отвлекаться от всех дел и заниматься не менее 1 часа совершенствованием своей управленческой компетентности?",
            yesresult: 0, noresult: 2
        },
        {
            name: "Вы еженедельно проводите совещания с сотрудниками по совершенствованию их управленческой деятельности?",
            yesresult: 2, noresult: 0
        },
        {
            name: "Всегда ли Вы предусматриваете компоненты мотивации для сотрудников при принятии решения?",
            yesresult: 0, noresult: 2
        },
        {
            name: "Главное ли место в жизни занимает Ваша профессиональная деятельность?",
            yesresult: 1, noresult: 0
        },
        {
            name: "Используете ли Вы различные варианты для развития, продуктивности и самореализации сотрудников в вашей деятельности?",
            yesresult: 1, noresult: 0
        }
    ];
    results = [
        {
            result: "Ваши интересы находятся в большей степени не в сфере управленческой деятельности. Руководство людьми, вероятнее всего. Вам не приносит удовольствия. Если представится возможность заняться иным видом профессиональной деятельности, то сделайте такой выбор. Он будет правильный. Не надо колебаться, а следует решиться.",
            from:0,
            to:6,
            //face,hair,mouth,brow,nose w, nose h, eye w, eye h
            stats:[1,-1,-1,1.5,1,0.5,2,0.2]
        },
        {
            result: "Нельзя утверждать, что Вы эффективный руководитель, но если в возглавляемом Вами коллективе дела идут неплохо, то лучше не принимать коренных изменений и реформ. Они будут для Вас и коллектива чрезмерно трудными. Однако важно обеспечивать совершенство управления в контексте общих тенденций и требований вышестоящего руководства. Надо больше прислушиваться к мнению подчиненных. Постарайтесь выявить стереотипы-блокаторы эффективного управления, овладевайте новыми подходами в своей работе и ориентируйтесь в ее организации на ближайшую и дальнюю перспективу.",
            from:7,
            to:12,
            //face,hair,mouth,brow,nose w, nose h, eye w, eye h
            stats:[0.7,-0.5,-0.5,0.8,0.9,0.6,1.7,0.5]
        },
        {
            result: "Вы можете отнести себя к уровню достаточно сформировавшихся руководителей. Ваши способности и возможности целесообразно совершенствовать применительно к управленческой деятельности. Для достижения более значительных результатов в управлении необходимо овладеть современной системой управленческой деятельности. Обращайте при этом внимание не только на собственное развитие, но чтобы подчиненные тоже овладели моделью, алгоритмом и технологией управленческой деятельности. Это положительно скажется на результатах труда.",
            from:13,
            to:18,
            //face,hair,mouth,brow,nose w, nose h, eye w, eye h
            stats:[0.5,0,0,0,0.8,0.7,1.5,0.8]
        },
        {
            result: "Вы относитесь к числу эффективных руководителей. Умеете выделить главное в работе и концентрировать на ключевых направлениях необходимые силы и средства. Ваша сильная сторона состоит в сочетании текущего и перспективного планирования труда, умении последовательно решать принципиальные вопросы, использовать потенциал персонала, не останавливаться перед такими трудностями, как нажим, командирский тон, конфликты. Будет правильно, если Вы начнете активнее внедрять в практику управления современные подходы. Ваш опыт руководства следовало бы очистить от имеющихся стереотипов-блокаторов. Управленческая деятельность на порученном Вам участке организуется достаточно эффективно.",
            from:19,
            to:24,
            //face,hair,mouth,brow,nose w, nose h, eye w, eye h
            stats:[0.3,0.5,1,1,0.6,1.3,1]
        },
        {
            result: "Можно уверенно сказать, что Вы — современный руководитель. Добиваясь эффективного руководства, обращайте внимание на его оптимизацию, что позволит достичь не только более значительных результатов, но и обеспечить максимально возможную комфортность в профессиональной деятельности ив повседневном общении — труде.",
            from:25,
            to:30,
            //face,hair,mouth,brow,nose w, nose h, eye w, eye h
            stats:[0,1,1.7,1.5,0.6,1,2,1.2]
        }
    ];
    addToRes(res:number){
        this.resultVar+=res;
        this.answered++;
    }
    getResults(){
        for(let i=0;i<this.results.length;i++){
            if(this.resultVar<=this.results[i].to && this.resultVar>=this.results[i].from){
                this.setAll(this.results[i].stats[0],this.results[i].stats[1],this.results[i].stats[2],this.results[i].stats[3],this.results[i].stats[4],this.results[i].stats[5],this.results[i].stats[6],this.results[i].stats[7]);
                return this.results[i].result;
            }
        }
        return "";
    }
    indexOfQuest(title:string){
        let result = 0;
        for(let i=0;i<this.questions.length;i++){
            if(title == this.questions[i].name){
                result =i;
                break;
            }
        }
        return result;
    }

    startAgain(){
        this.answered=0;
        this.resultVar=0;
    }
}