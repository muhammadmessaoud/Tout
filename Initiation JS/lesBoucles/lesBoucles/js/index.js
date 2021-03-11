// Ecrire une fonction permettant de trouver le plus grand nombre dans le tableau
/* let tab = [2, 4, -1, 28, 3, -10, 29, 12, 21 -3]
function LargestNumber() {
  let max = tab[0];

  for (let val of tab) {
    if (val > max) {
      max = val;
    }
  }
  return max;
}
console.log(LargestNumber(tab)); */



// FUNCTION 2
// function arrayMax(arr) {
//   let len = arr.length, max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   return max;
// };

// console.log(arrayMax(tab));

// FUNCTION 3
// function LargestNumber() {
//   let tab = [2, 4, -1, 28, 3, -10, 29, 12, 21 - 3];
//   for (let i = 0; i < tab.length; i++) {
//     let j = i + 1;
//     while (tab[i] > tab[j]) {
//       let tab2 = tab[i];
//       tab[i] = tab[j];
//       tab[j] = tab2;
//       j++;
//     }
//   }

// Ecrire une fonction qui va donner la note correspondant à chaque élève au sein du tableau et 
// < 60 : F
// < 70 : D
// < 80 : C
// < 90 : B
// < 100 : A
function NoterLesEleve() {
  let eleves = [{
    'Prénom': 'Luna',
    'Point': 73,
    'Note': ''
  },
  {
    'Prénom': 'Joe',
    'Point': 80,
    'Note': ''
  },
  {
    'Prénom': 'Thomas',
    'Point': 79,
    'Note': ''
  },
  {
    'Prénom': 'Raman',
    'Point': 45,
    'Note': ''
  },
  {
    'Prénom': 'Alexandra',
    'Point': 92,
    'Note': ''
  },
  {
    'Prénom': 'Jeanne',
    'Point': 42,
    'Note': ''
  }];

  for (let i = 0; i < eleves.length; i++) {
    let eleve = eleves[i];

    if (eleve.Point < 60) {
      eleve.Note = "F";
    } else if (eleve.Point >= 60 && eleve.Point < 70) {
      eleve.Note = "D";
    } else if (eleve.Point >= 70 && eleve.Point < 80) {
      eleve.Note = "C";
    } else if (eleve.Point >= 80 && eleve.Point < 90) {
      eleve.Note = "B";
    } else if (eleve.Point >= 90 && eleve.Point < 100) {
      eleve.Note = "A";
    }
  }


  return eleves;
}
console.log(NoterLesEleve());

// Ecrire un fonction qui va iteré de 1 à 100 et : 
// Pour toute les multiples de 3 afficher dans la console le mot 'Fizz'
// Pour toute les multiples de 5 afficher dans la console le mot 'Buzz'
// Pour toute les multiples de 3 et 5 afficher dans la console le mot 'FizzBuzz'
function FizzBuzz() {

  for (let index = 1; index <= 100; index++) {

    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz " + index);
    } else if (index % 5 === 0) {
      console.log("Buzz " + index);
    } else if (index % 3 === 0) {
      console.log("Fizz " + index);
    }

  }
}

FizzBuzz();

//Ecrire une fonction qui va retourner les 5 premier chiffres heureux (https://fr.wikipedia.org/wiki/Nombre_heureux)

function HappyNumber() {
  let cpt = 0;
  let tab = [];
  for (let i = 0; i < 20; i++) {
    if (cpt < 5 && isHappyNumber(i)) {
      tab.push(i);
      cpt++;
    }
    break;
  }
  return tab;
}

function isHappyNumber(n) {
  let number = 0;

  let tabChiffre = n.toString().split("");
  console.log(tabChiffre);

  for (let i = 0; i < tabChiffre.length; i++) {
    number += tabChiffre[i] * tabChiffre[i];
    console.log(number);
  } 

  if (number === 1) {
    return true;
  } else if (number === 4) {
    return false;
  } else {
    return isHappyNumber(number);
  }
}

console.log(HappyNumber());

