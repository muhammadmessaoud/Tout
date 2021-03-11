
function reset(element) {
    var allElements = document.getElementsByClassName(element);
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].classList.remove('block');
    }
};


let lancerBouton = document.querySelector('.lancerbouton');

lancerBouton.addEventListener('click', function (event) {
    let random = Math.floor(Math.random() * 6) + 1;
    reset('dice');
    let face = document.getElementById('face-' + random);
    face.classList.add('block');
});

/*
1 -> 6
créer une classse qui lie chaque element
6-d
*/