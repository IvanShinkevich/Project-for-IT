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
        //Методы для взаимодействия с лицом
        //Для корректной работы инпутов
        //Части панели управления
        //Кнопки
        this.buttonsArr = [
            { name: "Стандарт", pressed: true },
            { name: "Оценки", pressed: false },
            { name: "Опросник", pressed: false },
            { name: "Курсовая", pressed: false },
        ];
        this.activeButton = 0;
        //Стандартная панель
        this.characteristicsMass = [
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
        this.marksMass = [];
        this.addMark = "";
        //Панель теста
        this.answered = 0;
        this.resultVar = 0;
        this.questions = [
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
        this.results = [
            {
                result: "Ваши интересы находятся в большей степени не в сфере управленческой деятельности. Руководство людьми, вероятнее всего. Вам не приносит удовольствия. Если представится возможность заняться иным видом профессиональной деятельности, то сделайте такой выбор. Он будет правильный. Не надо колебаться, а следует решиться.",
                from: 0,
                to: 6,
                //face,hair,mouth,brow,nose w, nose h, eye w, eye h
                stats: [1, -1, -1.5, 1.1, 1, 0.4, 2, 0.4],
                par: 10
            },
            {
                result: "Нельзя утверждать, что Вы эффективный руководитель, но если в возглавляемом Вами коллективе дела идут неплохо, то лучше не принимать коренных изменений и реформ. Они будут для Вас и коллектива чрезмерно трудными. Однако важно обеспечивать совершенство управления в контексте общих тенденций и требований вышестоящего руководства. Надо больше прислушиваться к мнению подчиненных. Постарайтесь выявить стереотипы-блокаторы эффективного управления, овладевайте новыми подходами в своей работе и ориентируйтесь в ее организации на ближайшую и дальнюю перспективу.",
                from: 7,
                to: 12,
                //face,hair,mouth,brow,nose w, nose h, eye w, eye h
                stats: [0.7, -0.5, -0.8, 0.8, 0.9, 0.6, 1.7, 0.5],
                par: 60
            },
            {
                result: "Вы можете отнести себя к уровню достаточно сформировавшихся руководителей. Ваши способности и возможности целесообразно совершенствовать применительно к управленческой деятельности. Для достижения более значительных результатов в управлении необходимо овладеть современной системой управленческой деятельности. Обращайте при этом внимание не только на собственное развитие, но чтобы подчиненные тоже овладели моделью, алгоритмом и технологией управленческой деятельности. Это положительно скажется на результатах труда.",
                from: 13,
                to: 18,
                //face,hair,mouth,brow,nose w, nose h, eye w, eye h
                stats: [0.5, 0, 0, 0, 0.8, 0.7, 1.5, 0.8],
                par: 110
            },
            {
                result: "Вы относитесь к числу эффективных руководителей. Умеете выделить главное в работе и концентрировать на ключевых направлениях необходимые силы и средства. Ваша сильная сторона состоит в сочетании текущего и перспективного планирования труда, умении последовательно решать принципиальные вопросы, использовать потенциал персонала, не останавливаться перед такими трудностями, как нажим, командирский тон, конфликты. Будет правильно, если Вы начнете активнее внедрять в практику управления современные подходы. Ваш опыт руководства следовало бы очистить от имеющихся стереотипов-блокаторов. Управленческая деятельность на порученном Вам участке организуется достаточно эффективно.",
                from: 19,
                to: 24,
                //face,hair,mouth,brow,nose w, nose h, eye w, eye h
                stats: [0.3, 0.8, 1, 1, 0.6, 1.3, 1.8, 1],
                par: 160
            },
            {
                result: "Можно уверенно сказать, что Вы — современный руководитель. Добиваясь эффективного руководства, обращайте внимание на его оптимизацию, что позволит достичь не только более значительных результатов, но и обеспечить максимально возможную комфортность в профессиональной деятельности ив повседневном общении — труде.",
                from: 25,
                to: 30,
                //face,hair,mouth,brow,nose w, nose h, eye w, eye h
                stats: [0, 1, 1.5, 1.5, 0.6, 1, 2, 1.2],
                par: 210
            }
        ];
        //Панель курсовой
        this.params = [
            { name: 'Процент сделанной работы', value: 0, completed: false },
            { name: 'Дней до сдачи курсовой', value: 0, completed: false }
        ];
    }
    //Установка по значению
    AppComponent.prototype.setFace = function (value) {
        var input = document.getElementById("chernFace");
        input.value = value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.setEyew = function (value) {
        var input = document.getElementById("chernEyew");
        input.value = value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.setEyeh = function (value) {
        var input = document.getElementById("chernEyeh");
        input.value = value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.setNosew = function (value) {
        var input = document.getElementById("chernNosew");
        input.value = value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.setNoseh = function (value) {
        var input = document.getElementById("chernNoseh");
        input.value = value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.setHair = function (value) {
        var input = document.getElementById("chernHair");
        input.value = value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.setBrow = function (value) {
        var input = document.getElementById("chernBrow");
        input.value = value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.setMouth = function (value) {
        var input = document.getElementById("chernMouth");
        input.value = value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.setAll = function (face, hair, mouth, brow, nosew, noseh, eyew, eyeh) {
        this.characteristicsMass[7].value = face;
        this.setFace(face);
        this.characteristicsMass[3].value = hair;
        this.setHair(hair);
        this.characteristicsMass[4].value = mouth;
        this.setMouth(mouth);
        this.characteristicsMass[2].value = brow;
        this.setBrow(brow);
        this.characteristicsMass[5].value = nosew;
        this.setNosew(nosew);
        this.characteristicsMass[6].value = noseh;
        this.setNoseh(noseh);
        this.characteristicsMass[0].value = eyew;
        this.setEyew(eyew);
        this.characteristicsMass[1].value = eyeh;
        this.setEyeh(eyeh);
    };
    //берут данные из массива characteristicsMass
    AppComponent.prototype.updateFace = function () {
        var input = document.getElementById("chernFace");
        input.value = this.characteristicsMass[7].value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.updateEyew = function () {
        var input = document.getElementById("chernEyew");
        input.value = this.characteristicsMass[0].value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.updateEyeh = function () {
        var input = document.getElementById("chernEyeh");
        input.value = this.characteristicsMass[1].value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.updateNosew = function () {
        var input = document.getElementById("chernNosew");
        input.value = this.characteristicsMass[5].value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.updateNoseh = function () {
        var input = document.getElementById("chernNoseh");
        input.value = this.characteristicsMass[6].value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.updateHair = function () {
        var input = document.getElementById("chernHair");
        input.value = this.characteristicsMass[3].value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.updateBrow = function () {
        var input = document.getElementById("chernBrow");
        input.value = this.characteristicsMass[2].value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.updateMouth = function () {
        var input = document.getElementById("chernMouth");
        input.value = this.characteristicsMass[4].value.toString();
        reactTriggerChange(input);
    };
    AppComponent.prototype.updateByName = function (name) {
        switch (name) {
            case "face":
                this.updateFace();
                break;
            case "eyew":
                this.updateEyew();
                break;
            case "eyeh":
                this.updateEyeh();
                break;
            case "brow":
                this.updateBrow();
                break;
            case "hair":
                this.updateHair();
                break;
            case "mouth":
                this.updateMouth();
                break;
            case "nosew":
                this.updateNosew();
                break;
            case "noseh":
                this.updateNoseh();
                break;
        }
    };
    AppComponent.prototype.updateAll = function () {
        for (var i = 0; i < this.characteristicsMass.length; i++) {
            this.updateByName(this.characteristicsMass[i].name);
        }
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
    };
    AppComponent.prototype.addMarkInput = function () {
        console.log(this.addMark);
        var lngs = this.marksMass.length;
        if (this.addMark != "" && this.addMark != null) {
            this.marksMass[lngs] = { name: this.addMark, value: 0, completed: false };
            this.addMark = "";
        }
        console.log(this.marksMass);
    };
    AppComponent.prototype.deleteMarkInput = function (name) {
        for (var i = 0; i < this.marksMass.length; i++) {
            if (name == this.marksMass[i].name) {
                this.marksMass.splice(i, 1);
                console.log("true");
                console.log(this.marksMass);
                break;
            }
        }
    };
    AppComponent.prototype.addValuesAndValid = function (ev, mark) {
        if (ev.target.value != '' && ev.target.value != undefined && ev.target.value != null) {
            for (var i = 0; i < this.marksMass.length; i++) {
                if (mark == this.marksMass[i].name) {
                    if (ev.target.value <= 10 && ev.target.value >= 0) {
                        this.marksMass[i].value = ev.target.value;
                        this.marksMass[i].completed = true;
                    }
                    break;
                }
            }
        }
        else {
            for (var i = 0; i < this.marksMass.length; i++) {
                if (mark == this.marksMass[i].name) {
                    this.marksMass[i].completed = false;
                    break;
                }
            }
        }
    };
    AppComponent.prototype.buildFaceByMarks = function () {
        var param = 10;
        var sred = 0;
        var sum = 0;
        var face = 1; // значения для грустного лица
        var hair = -1;
        var mouth = -1.5;
        var brow = 1.1;
        var nosew = 1;
        var noseh = 0.4;
        var eyew = 2;
        var eyeh = 0.4;
        if (this.marksMass.length != 0 && this.marksMass != null && this.marksMass != undefined) {
            for (var i = 0; i < this.marksMass.length; i++) {
                sum += this.marksMass[i].value * 1;
            }
            sred = parseFloat((sum / this.marksMass.length).toFixed(1)) * 10; //Среднее значение по оценкам * на 10 = количсетво шагов
            for (var i = 0, j = 0, l = 0; i <= sred; i++) {
                param += 2;
                if (i % 10 == 1) {
                    if (i < 51) {
                        eyew -= 0.1;
                    }
                    else {
                        eyew += 0.1;
                    }
                    face -= 0.1;
                }
                if (i % 5 == 1) {
                    hair += 0.1;
                }
                if (i % 4 == 1 && j % 5 != 0) {
                    j++;
                    mouth += 0.1;
                }
                else {
                    if (i % 3 == 1 && j % 5 == 0) {
                        j++;
                        mouth += 0.1;
                    }
                }
                if (i < 51) {
                    if (i % 4 == 1 && j % 5 != 0) {
                        brow -= 0.1;
                    }
                    else {
                        if (i % 3 == 1 && j % 5 == 0) {
                            brow -= 0.1;
                        }
                    }
                }
                else {
                    if (i % 4 == 1 && j % 5 != 0) {
                        brow += 0.1;
                    }
                    else {
                        if (i % 3 == 1 && j % 5 == 0) {
                            brow += 0.1;
                        }
                    }
                }
                if (i % 30 == 1) {
                    nosew -= 0.1;
                }
                if (i % 17 == 1) {
                    noseh += 0.1;
                }
                if (i % 13 == 1 && l % 3 != 0) {
                    l++;
                    eyeh += 0.1;
                }
                else {
                    if (i % 12 == 1 && l % 3 == 0) {
                        l++;
                        eyeh += 0.1;
                    }
                }
            }
            par(param);
            this.setAll(face, hair, mouth, brow, nosew, noseh, eyew, eyeh);
        }
        else {
            this.setAll(0.5, 0, 0, 0, 0.8, 0.7, 1.5, 0.8);
            par(110);
        }
    };
    AppComponent.prototype.isFilled = function (ev) {
        this.full = ev.target.value != '' && ev.target.value != undefined && ev.target.value != null;
    };
    AppComponent.prototype.addToRes = function (res) {
        this.resultVar += res;
        this.answered++;
    };
    AppComponent.prototype.getResults = function () {
        for (var i = 0; i < this.results.length; i++) {
            if (this.resultVar <= this.results[i].to && this.resultVar >= this.results[i].from) {
                this.setAll(this.results[i].stats[0], this.results[i].stats[1], this.results[i].stats[2], this.results[i].stats[3], this.results[i].stats[4], this.results[i].stats[5], this.results[i].stats[6], this.results[i].stats[7]);
                par(this.results[i].par);
                return this.results[i].result;
            }
        }
        return "";
    };
    AppComponent.prototype.indexOfQuest = function (title) {
        var result = 0;
        for (var i = 0; i < this.questions.length; i++) {
            if (title == this.questions[i].name) {
                result = i;
                break;
            }
        }
        return result;
    };
    AppComponent.prototype.startAgain = function () {
        this.answered = 0;
        this.resultVar = 0;
    };
    AppComponent.prototype.isCompleted = function (ev, elem) {
        if (ev.target.value != '' && ev.target.value != undefined && ev.target.value != null) {
            for (var i = 0; i < this.params.length; i++) {
                if (elem == this.params[i].name) {
                    if (parseFloat(ev.target.value) >= 0 && parseFloat(ev.target.value) <= 100)
                        this.params[i].value = ev.target.value;
                    else if (elem == 'Дней до сдачи курсовой' && parseInt(ev.target.value) >= 0) {
                        this.params[i].value = parseFloat(ev.target.value);
                    }
                    break;
                }
            }
            this.params[i].completed = true;
        }
        else {
            for (var i = 0; i < this.params.length; i++) {
                if (elem == this.params[i].name) {
                    break;
                }
            }
            this.params[i].completed = false;
        }
        console.log(this.params);
    };
    AppComponent.prototype.buildFaceByCourse = function () {
        var face = 0.5; // значения для нейтрального лица
        var hair = 0;
        var mouth = 0;
        var brow = 0;
        var nosew = 0.8;
        var noseh = 0.7;
        var eyew = 1.5;
        var eyeh = 0.8;
        // if(this.params[0].value==100){
        //     face=0;
        //     hair=1;
        //     mouth=1.5;
        //     brow=1.5;
        //     nosew=0.6;
        //     noseh=1;
        //     eyew=2;
        //     eyeh=1.2;
        // }
        // else
        //     for (let i = 1, j = 0, l = 0; i <= this.params[0].value; i++) {
        //         if(i%20==0){
        //             face-=0.1;
        //             eyew+=0.1;
        //         }
        //         if(i%10==0){
        //             hair+=0.1;
        //         }
        //         if(i%6==0 && i!=6){
        //             mouth+=0.1;
        //             brow+=0.1;
        //         }
        //         if(i%50==0){
        //             nosew-=0.1;
        //         }
        //         if(i%33==0){
        //             noseh+=0.1;
        //         }
        //         if(i%25==0){
        //             eyeh+=0.1;
        //         }
        //     }
        // if(this.params[1].value<30) {
        //     let koef:number;
        //     let ponizKoef:number;
        //     let par:number = this.params[0].value/10;
        //     switch(par){
        //         case 0:{
        //             koef=10;
        //                 break;
        //         }
        //         case 1:{
        //             koef=9;
        //             break;
        //         }
        //         case 2:{
        //             koef=8;
        //             break;
        //         }
        //         case 3:{
        //             koef=7;
        //             break;
        //         }
        //         case 4:{
        //             koef=6;
        //             break;
        //         }
        //         case 5:{
        //             koef=5;
        //             break;
        //         }
        //         case 6:{
        //             koef=4;
        //             break;
        //         }
        //         case 7:{
        //             koef=3;
        //             break;
        //         }
        //         case 8:{
        //             koef=2;
        //             break;
        //         }
        //         case 9:{
        //             koef=1;
        //             break;
        //         }
        //     }
        //
        //     ponizKoef=this.params[0].value*koef;
        //
        // }
        this.setAll(face, hair, mouth, brow, nosew, noseh, eyew, eyeh);
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