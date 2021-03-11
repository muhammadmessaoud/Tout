

let section = document.getElementsByTagName("section");
console.log(section[0]);

let conteur = 0 ;
section[0].addEventListener('click', Event => {
   
    conteur++;

    console.log("nombre de clique:",conteur);

  if (conteur %2 == 0) {
    section[0].classList.add("fondrouge") ;
  } else {
    section[0].classList.remove("fondrouge") ;
  }
    
});


