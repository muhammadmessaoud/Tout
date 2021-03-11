/*
let element1 = document.getElementsByClassName("hello");

let element2 = document.getElementById("exo");

let element3 = document.getElementsByTagName("ul");

let element4 = document.querySelector(".salut");

console.log(element2);

console.log(element3);

console.log(element4);

element2.parentElement;
console.log(element2.parentElement);




element1.addEventListener("click", event  =>{
    cpt++;
    console.log("Nombre de click : ", cpt)
    if (cpt % 2 == 0) {
        element1.classList.add("bleu");
    } else {
        element1.classList.remove("bleu");
    }
});




let titre = document.getElementById("titre");
console.log(titre);

titre.classList.add("bleu");

titre.id = "taille";
*/




/* let para = document.getElementById("para1");
console.log(para);

let cpt = 0;

para.addEventListener("click", event => {
    cpt++;
    console.log("Nombre de clique : ", cpt);
    if (cpt % 2 == 0) {
        para.classList.add("petitetaille");
    } else {
        para.classList.remove("petitetaille");
    }if (cpt % 2 ==! 0) {
        para.classList.add("grandetaille");
    } else {
        para.classList.remove("grandetaille");
    }
    console.log(event);
});
 */

/* 
let heure = moment().format('HH:mm:ss');

console.log(heure);



setInterval(moment().format('HH:mm:ss') {

}, 2000);

/* para.textContent = heure ;

setInterval(moment().format('HH:mm:ss'), 2000); */ 
import moment from 'moment';

function Horloge() {
    let heure = moment().format('HH:mm:ss');
    let para = document.getElementById("para");
    para.textContent = heure;

    if (moment().format('ss')% 6 == 0) {
        para.classList.add("vert");
    } else {
        para.classList.remove("vert");
    }
}
setInterval(Horloge, 2000);


function Devine(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min )) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
let entier = Devine(1, 100);