// Permet de générer un entier entre 0 et 100 
const aleaNum = Math.floor(Math.random() * 101);
console.log(aleaNum); 

// Je déclare une variable qui me permettra de 
//stocker le résultat de ma boite de dialogue
let message;

// Je démarre une boucle do...while, qui s'execute 
//au moins 1 fois (même si la condition du while est vrai) 
do {
  // En stockant le résultat d'une boite de dialogie dans ma variable message 
  //je récupère ce qui a été tappé par l'utilisateur
  message = prompt('Devine un nombre entre 0 et 100');
  console.log(message);

  // Je vérifie si la saisie de l'utilisateur est supérieur au nombre aléatoire généré
  if(message > aleaNum) {
    alert("C'est trop haut");
  } 
  // Je vérifie si la saisie de l'utilisateur est inférieur au nombre aléatoire généré
  else if (message < aleaNum) {
    alert("C'est trop bas");
  } 
  // Si la saisie n'est ni sup ni inférieur c'est égal 
  else {
    alert("C'est Gagné ! ");
  }
} while (message != aleaNum)
// Ma condition de rééxecution de la boucle While 
