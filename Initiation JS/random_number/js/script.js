let question = "Trouver le nombre entre 0 et 100";
let random = Math.floor(Math.random() * 100) + 1;
console.log(random);
let bool = false;
let cpt = 1;
let start = new Date().getTime();

// je lance une boucle, où i <= au nombre d'essai voulu 
do {
    //nous demander de le trouver
    let nb = prompt(question);
    nb = parseInt(nb);

    if (cpt === 5) {
        alert("Vous avez perdu!")
        bool = true;
    }
    // nous afficher quand c'est gagné
    if (nb < random) { // nous indiquer si c'est plus ou c'est moins
        question = nb + " est trop petit";
        cpt++;
    } else if (nb > random) {
        question = nb + " est trop grand";
        cpt++;
    } else if (nb === random) {
        bool = true;
        let end = new Date().getTime();
        let time = (end-start)/1000;
        //time = time.toFixed(2);
        console.log(time);
        alert("Vous avez gagné en : " + cpt + " coups et " + time + " secondes");
    } else {
        bool = true;
    }

} while (!bool);
console.log(start)
/* let button = document.querySelector("#button");
let para = document.createElement("p");

let nb = 0 ;

button.addEventListener("click", (e)=>{
    let contenu = document.querySelector("#content");

    button.innerHTML = "Nouveau Mail";
    if (nb <= 1) {
        para.textContent = `Il y a ${nb} mail`;
    } else {
        para.textContent = `Il y a ${nb} mails`;
    }
    contenu.appendChild(para);
    nb++;
})
 */

