var faceCtrl = document.querySelector("div.buttonToggle.forScript1");
var notFaceCtrl = document.querySelector("div.buttonToggle.forScript2");
var litso = document.querySelector("div.container.litso");
var visualNotFace = document.querySelector("div.visual");


faceCtrl.addEventListener('click',makePressed.bind(),false);
notFaceCtrl.addEventListener('click',makePressed.bind(),false);



function makePressed(elem) {

    faceCtrl.classList.remove('pressed');
    notFaceCtrl.classList.remove('pressed');
    elem.toElement.classList.add('pressed');

    if(elem.toElement.innerHTML == "Face"){
        litso.classList.remove('hidden');
        visualNotFace.classList.remove('hidden');
        litso.classList.add('hidden');
        visualNotFace.classList.add('hidden');
        litso.classList.remove('hidden');
    }
    else{
        litso.classList.remove('hidden');
        visualNotFace.classList.remove('hidden');
        litso.classList.add('hidden');
        visualNotFace.classList.add('hidden');
        visualNotFace.classList.remove('hidden');
    }
}
