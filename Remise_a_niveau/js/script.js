/*
let nomVariable = 1;




let variableTableau = ["Abdoulaye","Ayoub","Nasser","Muh","Mes","Mumuh"]

console.log('Execution de la boucle for : ')
for (let index = 0; index < 6; index++) {
    console.log(index);
    console.log(variableTableau[index]);
}

for (let cpt = 0; cpt < 6; cpt++) {
    console.log(cpt);
}
for (let cpt = 0; cpt < variableTableau.length; cpt++) {
    console.log(variableTableau[cpt]);
}


//boucle while (tant que)
let annee = 2000;
console.log("Avant while :",annee)

let cpt = 0;
while (annee < 2795) {
    annee = annee + 0.1;
    cpt++; // cpt= cpt+1;
}
console.log("Après while :",annee)
console.log("Nombre de passage dans la boucle while :", cpt);



let age = 19;

if (age>= 18) {
    console.log("Tu peux t'inscrire pour passer le permis");
} else if (age>16) {
    console.log("Tu peux t'inscrire pour passer le permis accompagné");
} else {
    console.log("Pas de miper");
}
*/




//fonctions

function NomDeFonction(param1,param2){ // bloc d'instruction de ma fonction
let result = param1 + param2;
return result;
}


//appel de fonction 
NomDeFonction(1,2);

let retourDeFonction = NomDeFonction(1,2);

console.log(retourDeFonction);