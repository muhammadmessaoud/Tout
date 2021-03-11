// Variables
const resultElement1 = document.getElementById('result1');

let resultExo1 = 1;

resultElement1.textContent = resultExo1;

// Fin Variable


// test

const resultElement2 = document.getElementById('result2');

let numberOfLearner = 25;

numberOfLearner = 24;

let result;

result  =   3;

resultElement2.textContent = numberOfLearner;

// Fin test


// opération arithmétique
const resultElement3 = document.getElementById('result3');

let prixArticle1 = 40;

let prixArticle2 = 20;

let valeurPrixPanier = prixArticle1 + prixArticle2;

let prixArticle3 = 21;

// valeurPrixPanier = valeurPrixPanier + prixArticle3;

valeurPrixPanier += prixArticle3;


// valeurPrixPanier = valeurPrixPanier - prixArticle3;
// Même instruction 
// valeurPrixPanier -= prixArticle3;


// let nombreArticlePanier = 1;
// nombreArticlePanier ++; //nombreArticlePanier = 2


// let nombreArticlePanier = 2;
// nombreArticlePanier --; //nombreArticlePanier = 1


let nombreApprenant = 24;
// let prixMenu = 50;
// let montantAdditionRepas = nombreApprenant * prixMenu; // 24*50
// let prixQueChacunPaye = montantAdditionRepas / nombreApprenant // montantAdditionRepas / 24

nombreApprenant *=2; // multiplie le nombre d'apprenant par 2 24*2


console.log('Valeur nombreApprenant après multiplication :' , nombreApprenant);

nombreApprenant /=2; // divise le nombre d'apprenant par 2 48/2


console.log('Valeur nombreApprenant après division :' , nombreApprenant);

resultElement3.textContent = valeurPrixPanier;

// Fin operation arithmétique

// Constante 

const nombreSecondeHeure = 3600;
const nombreHeureJour = 24;
const nombreJourAnnee = 365;

const resultElement4 = document.getElementById('result4');

resultElement4.textContent = nombreSecondeHeure*nombreHeureJour*nombreJourAnnee;
let result4 = nombreSecondeHeure*nombreHeureJour*nombreJourAnnee;

console.log("Nombre de seconde par an : ", result4);

// déclarer un objet

let manga = {
 title : "L'attaque des titans",
 year : 2009,
inProgress : true
};
console.log ("Object manga",manga);
// accès a un attribut de mon object
// console.log ("Object manga",manga)
let titreManga = manga.title;
console.log("Titre du manga :" , titreManga);


let muhammad = {
    prenom : "Muhammad",
    nom : "Messaoud",
    anneeDeNaissance : 1999,
    inProgress : true
   };
  console.log("Nom et date de naissance :" , muhammad.nom,",",muhammad.anneeDeNaissance);

  console.log("-------------------------------------------------------------------------------------");

  // Modifier la valeur d'un attribut de mon objet manga

  manga.title = "Bleach";

console.log ("Modification du titre :",manga.title);

console.log("-------------------------------------------------------------------------------------");

let listApprenants = [ "Muh" , "Mes" , "Muhammad" , "Messsaoud" , "Muhessaoud" ];
console.log ("Liste des apprenants",listApprenants);
console.log("-------------------------------------------------------------------------------------");

// Ecraser une valeur du tableau
listApprenants[1] = "Skuuurt" ;

console.log ("Modification de la valeur 1:",listApprenants);
console.log("-------------------------------------------------------------------------------------");


let payePoleEmploi = {
    dateDePaie : "Premier du mois",
    montantDeLaPaie : 20000,
    nombreDePaie : 12,
   };

let tableauPoleEmploi = [payePoleEmploi];

payePoleEmploi.dateDePaie = "Deuxieme du mois";
console.log ("Changement de la date de paie :",payePoleEmploi.dateDePaie);
console.log (payePoleEmploi);
console.log("-------------------------------------------------------------------------------------");


let moiMeme = "Cheveux noir";

let tableauMoiMeme = [moiMeme];

moiMeme = "Cheveux noir avec un peu de gris";

console.log ("Modification de la valeur",tableauMoiMeme);
console.log("-------------------------------------------------------------------------------------");


let chaineDeCaractere = "Simplon";
let newChaine = "";
for (let i = 0; i < chaineDeCaractere.length; i++) {
    newChaine += chaineDeCaractere.charAt(chaineDeCaractere.length - (i+1));
}
console.log(newChaine)


let amIHappy = true ;

if (amIHappy)  {
    console.log ("Yes");
} else {
}
console.log("-------------------------------------------------------------------------------------");


// Exercice: Vérifier si l’heure donnée est juste ou non (‘13:58’ oui, ‘25:35’ non, ‘13:76’ non)


    let hour = 25;
    let min = 58;
    
    if ( hour < 24 ) {
      console.log('oui');
    } 
    else if ( min < 60) {
        console.log('oui');
    } else {
        console.log('non');
    }
    
    


  console.log("-------------------------------------------------------------------------------------");


  let heureDeBase = "13:58";


let heure1 = "13:58";
let heure2 = "25:35";
let heure3 = "13:76";


if(heureDeBase === heure1){
    console.log("oui");
}else if(heureDeBase === heure2 || heureDeBase === heure3){
    console.log("non");
}

console.log("-------------------------------------------------------------------------------------");



let d = new Date()

console.log(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

console.log("-------------------------------------------------------------------------------------");

// Correction exercice: Vérifier si l’heure donnée est juste ou non (‘13:58’ oui, ‘25:35’ non, ‘13:76’ non)


let heureDepart = "13:58";
let heureSplit = heureDepart.split(":");

let heure10 = heureSplit[0]; 
let minute10 = heureSplit[1];

heure10 = parseInt(heure10);
minute10 = parseInt(minute10);

if (heure10 >= 0 && heure10 < 24 && minute10 >= 0 && minute10 < 60) {
    console.log("Yes")
}
else { 
    console.log("Non")
}

console.log("-------------------------------------------------------------------------------------");

// Fonction cours ( éviter les répétitions )

function ValidationHeure(heureEnEntree) {

    let heureSplit = heureEnEntree.split(":");

let heure10 = heureSplit[0]; 
let minute10 = heureSplit[1];

heure10 = parseInt(heure10);
minute10 = parseInt(minute10);

if (heure10 >= 0 && heure10 < 24 && minute10 >= 0 && minute10 < 60) {
    console.log("Yes")
}
else { 
    console.log("No")
}

}

ValidationHeure("24:58"); //No
ValidationHeure("13:58"); //Yes
ValidationHeure("22:76"); //No

console.log("-------------------------------------------------------------------------------------");


//répétition de else if


let heurr = 12

if (heurr == 9) {
    console.log("Debut de journee")
} else if (heurr == 11) {
    console.log("Pause")
} else if (heurr == 13) {
    console.log("Pause dej")
} else if (heurr == 14) {
    console.log("Reprise des cours")
} else if (heurr == 17) {
    console.log("Fin de journee")
} else {
    console.log("autre heurr")
}

console.log("-------------------------------------------------------------------------------------");

//Solution alternative plus efficace


switch (heurr) {
    case 9 :
    console.log("Debut de journee");
    break;

    case 11 :
    console.log("Pause");
    break;

    case 13 :
    console.log("Pause Dej");
    break;

    case 14 :
    console.log("Reprise des cours");
    break;

    case 17 :
    console.log("Fin de journee");
    break;
    
    default:
        console.log("autre heurr");
    break;
}
//case 17 :
//case 9:
//console.log("Fin de journee")
//break;


console.log("-------------------------------------------------------------------------------------");

//boucle

let lisstApprenant = ["Farima","Abdoulaye","Alexis","Alicia","Asad","Ayoub"];

for (let cpt = 0; cpt < lisstApprenants.length; cpt++) {
    console.log("Valeur du compteur:", cpt)
    console.log("Bonjour:" + lisstApprenant[cpt])
}

console.log("-------------------------------------------------------------------------------------");

//boucle

let lissstApprenant = ["Denis","David","Gaelle","Caroline","Fodie","Bamba"];
console.log("Longueur de mon tableau:",lissstApprenant.length)

for (let index = 0; index < lissstApprenants.length; index++) {
    console.log("Bonjour:" + lissstApprenant[index])
}

console.log("-------------------------------------------------------------------------------------");

//function + boucle

function indicateurCompteurBonjour(paramCompteur,valeurDuTableau){
    console.log("Valeur du compteur:", paramCompteur)
    console.log("Bonjour:" + valeurDuTableau)

}

for (let index = 0; index < lissstApprenants.length; index++) {
    indicateurCompteurBonjour(index + lissstApprenant[index])
}

//boucle + conditions

let listApprenant1 = [
    {
        prenom : "Muh",
        estPresent : true
    },
    {
        prenom : "Mes",
        estPresent : true
    },
    {
        prenom : "Meh",
        estPresent : false
    },

];



function indicateurCompteurBonjour(cpt,listApprenant1){
    console.log("Valeur du compteur:", paramCompteur);
    if (listApprenant1[cpt].estPresent){
        console.log("Bonjour:" + listApprenant1[cpt].estPresent)
    }
    

}


//correction Jeremy
let listeApprenant10 = [
    {
      prenom : 'Abdoul-Nasser',
      estPresent : true
    },
    {
      prenom : 'Abdoulaye',
      estPresent : true
    },
    {
      prenom : 'Farima',
      estPresent : false
    },
  ];
  
  console.log('Longueur du tableau : ', listeApprenant10.length); 
  
  //console.log(Longueur du tableau : ${listeApprenant.length}); 
  
  for (let cpt = 0 ; cpt < listeApprenant10.length; cpt++) {
    console.log('Valeur du compteur : ', cpt);
    if (listeApprenant10[cpt].estPresent) {
      console.log('Bonjour ' + listeApprenant10[cpt].prenom); 
    }
  }
  
  