/* Given a positive interger num, return the sum of all 
odd Fibonacci Numberthat are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additionnal number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci Sequence ar 1, 1, 2, 3, 5, 8.

For exemple, SumOddFiboNumber(10) should return 10 because 
all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3 and 5.

SumOddFiboNumber(10) => 10 
SumOddFiboNumber(1000) => 1785 
SumOddFiboNumber(4000000) => 4613732
*/

function SumOddFiboNumber(num) {
  let n = 0; 
  let sequence = 1; 
  let temp;
  let fibonacciNumber = 0;

  while (n <= num){
    temp = n;

    n += sequence; 
    sequence = temp;

    if (sequence % 2 !== 0) {
      fibonacciNumber += sequence;
      console.log('temp => ' + temp, 'n => ' + n, 'fibonacciNumber => ' + fibonacciNumber, 'sequence => ' + sequence )
    }
  }
  return fibonacciNumber;
}

console.log(SumOddFiboNumber(4000000));









function CalculSuiteFiboJusquauMax (max) {
  let tableauSuiteFibo = [];
  let valeurSuiteFiboActuelle = 1;
  let compteur = 0;
  
  while(valeurSuiteFiboActuelle <= max ) {
    // Si mes deux valeurs précédentes existent je rentre dans le IF 
    if(tableauSuiteFibo[compteur-1] && tableauSuiteFibo[compteur-2]) {
      valeurSuiteFiboActuelle = tableauSuiteFibo[compteur-1] + tableauSuiteFibo[compteur-2];
      tableauSuiteFibo.push(valeurSuiteFiboActuelle);
    } else {
      tableauSuiteFibo.push(1);
    }
    // Quand mon compteur vaut 2
    // let nouvelleValeurAInserer = tableauSuiteFibo[1] + tableauSuiteFibo[0];
    
    compteur++;
  }
  return tableauSuiteFibo;
}

console.log(CalculSuiteFiboJusquauMax(48));

function SommeDesValeursImpaires(odd) {

 
  return ;
}
  



function SumOddFiboNumber(numMax) {
 CalculSuiteFiboJusquauMax(10);
 SommeDesValeursImpaires();
}
console.log(SumOddFiboNumber(10));




// Correction Jeremy

function CalculerSuiteFiboMax (max){
  let tableauSuiteFibo = [];
  let valeurSuiteFiboActuel = 1;
  let compteur = 0 ;

  while (valeurSuiteFiboActuel <= max ){

    if (tableauSuiteFibo[compteur-1]&& tableauSuiteFibo[compteur-2]){
    valeurSuiteFiboActuel = tableauSuiteFibo [compteur-1] + tableauSuiteFibo [compteur-2] ;
    tableauSuiteFibo.push(valeurSuiteFiboActuel);
    } else {
      tableauSuiteFibo.push(1);
    }

    //quand mon compteur vaut 2
    //let nouvelleValeurInsere = tableauSuiteFibo [1] + tableauSuiteFibo [0] ;

    compteur++;

  }
  return tableauSuiteFibo;
}
console.log(CalculerSuiteFiboMax(48))

//Jeremy
/*
function CalculSuiteFiboJusquauMax (max) {
  let tableauSuiteFibo = [];
  let valeurSuiteFiboActuelle = 1;
  let compteur = 0;
  
  while(valeurSuiteFiboActuelle <= max ) {
    // Si mes deux valeurs précédentes existent je rentre dans le IF 
    if(tableauSuiteFibo[compteur-1] && tableauSuiteFibo[compteur-2]) {
      valeurSuiteFiboActuelle = tableauSuiteFibo[compteur-1] + tableauSuiteFibo[compteur-2];
      tableauSuiteFibo.push(valeurSuiteFiboActuelle);
    } else {
      tableauSuiteFibo.push(1);
    }
    // Quand mon compteur vaut 2
    // let nouvelleValeurAInserer = tableauSuiteFibo[1] + tableauSuiteFibo[0];
    
    compteur++;
  }
  return tableauSuiteFibo;
}

console.log(CalculSuiteFiboJusquauMax(48));
*/


/* calcule de la suite fibo simple
function CalculSuiteFiboBoucleFor(max) {
  let suiteFibo = [1, 1];
  // On va calculer les n première valeurs de la suite n = max;
  for (let index = 2; index < max; index++) {
    suiteFibo[index] = suiteFibo[index-1] + suiteFibo[index- 2];
  }
  return suiteFibo;
}

console.log(CalculSuiteFiboBoucleFor(10));
*/












function SumOddFiboNumber(num) {
  let n = 0; 
  let nPlusOne = 1; 
  let temp;
  let sum = 0;

  while (n <= num){
    temp = n;
    n = n + nPlusOne; 
    nPlusOne = temp;

    if (nPlusOne % 2 !== 0) {
          sum += nPlusOne;
    }

  }

  return sum;
}



console.log(SumOddFiboNumber(1000));




/* Correction finale Jeremy suite Fibonacci 

// Trouver le moyen de calculer les valeur de la suite de Fibo
// CalculProchaineValeur([]) => 1; 
// CalculProchaineValeur([1]) => 1; 
// CalculProchaineValeur([1, 1]) => 2; 
// CalculProchaineValeur([1, 1, 2]) => 3; 
function CalculProchaineValeur(tableauFibo) {
  let prochaineValeur = 0;
  let dernierIndexDeMonTableau = tableauFibo.length;

  if(tableauFibo[dernierIndexDeMonTableau-1] && tableauFibo[dernierIndexDeMonTableau-2]) {
    prochaineValeur = tableauFibo[dernierIndexDeMonTableau-1] + tableauFibo[dernierIndexDeMonTableau-2];
  } else {
    prochaineValeur = 1;
  }

  return prochaineValeur;
}

// Trouver le moyen d'addition les valeur impaire de la suite de Fibo 
function SommeDesValeurImpaire(tableauSuiteFibo) {
  let resultSomme = 0; 
  for (let index = 0; index < tableauSuiteFibo.length; index++) {
    if (tableauSuiteFibo[index] % 2 !== 0) {
      resultSomme = resultSomme + tableauSuiteFibo[index];
    }
  }
  return resultSomme;
}

// Trouver le moyen d'arréter notre fonction quand la somme des valeures impaires est supérieure ou égal à l'entrée 
// FOnction générale
function SumOddFiboNumber(param) {
  let suiteFibo = [];
  let sommeValeurImpaireFibo = 0;

  while(sommeValeurImpaireFibo < param) {
    suiteFibo.push(CalculProchaineValeur(suiteFibo));
    sommeValeurImpaireFibo = SommeDesValeurImpaire(suiteFibo);
  }

  return sommeValeurImpaireFibo;
}
console.log(SumOddFiboNumber(4000000));

*/

/*

*/