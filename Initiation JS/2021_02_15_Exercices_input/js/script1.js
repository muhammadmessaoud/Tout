let button = document.getElementById("button");
let show = document.getElementById("show");
let inputName = document.querySelector(".inputName");

button.addEventListener("click", (event)=>  {
    let nom = inputName.value;
    show.textContent = "Bonjour " + nom +" !";
});



//exercice checkbox

let paragraph = document.querySelector(".red")
let checkbox1 = document.querySelector(".fontcolor");
let checkbox2 = document.querySelector(".padding");
let checkbox3 = document.querySelector(".backcolor");

checkbox1.addEventListener("click", function() {
   /*  if(checkbox1.checked) {
        paragraph.classList.add("fontcolor") ;
    } else {
        paragraph.classList.remove("fontcolor") ; solution trop longe
    } */
    toggle(checkbox1,"fontcolor")
  });

  checkbox2.addEventListener("click", function() {
    
    toggle(checkbox2,"padding")
  });

  checkbox3.addEventListener("click", function() {
    
    toggle(checkbox3,"backcolor")
  });

  function toggle(element , style){ // solution 100000 fois plus rapide
    if(element.checked) {
        paragraph.classList.add(style) ;
    } else {
        paragraph.classList.remove(style) ;//if else en raccourci :  isCheck ?  paragraph.classList.add(className) :paragraph.classList.remove(className)
    }
  };

/* Correction Denis 

document.querySelectorAll('.class').forEach(function(item, index){
    item.addEventListener("change", function(e) {
        let name = e.target.name;
        switch(name){
            case 'color':
                    addAndremoveClass(e.target.checked, 'color', '.paragraphe');
                break;
            case 'padding':
                    addAndremoveClass(e.target.checked, 'padding', '.paragraphe');
                break;
            case 'bg_color':
                    addAndremoveClass(e.target.checked, 'bg_color', '.paragraphe');
                break;
        }
    });
});

function addAndremoveClass(isChecked, classeName, elem){
    let elem = document.querySelector(elem);
    isChecked ? elem.classList.add(classeName) : elem.classList.remove(classeName);
}

*/

let radio1 = document.querySelector("#radio1");
let radio2 = document.querySelector("#radio2");
let radio3 = document.querySelector("#radio3");

let radioGroup = document.querySelectorAll("input[type=radio]");
let paragraph1 = document.querySelector("#p1");

function addOrRemoveClass(className,add) {
    if (add) {
        paragraph1.classList.add(className) ;
    } else {
        paragraph1.classList.remove(className) ;
    }

}

for (let index = 0; index < radioGroup.length; index++) {
    radioGroup[index].addEventListener("change", event =>{
console.log(`isChecked radio 1 : ${radioGroup[0].checked} value :${radioGroup[0].checked}`);
console.log(`isChecked radio 2 : ${radioGroup[1].checked} value :${radioGroup[1].checked}`);
console.log(`isChecked radio 3 : ${radioGroup[2].checked} value :${radioGroup[2].checked}`);
     for (index = 0; index < radioGroup.length; index++) {
        if(radioGroup[index].checked){
        addOrRemoveClass(radioGroup[index].value , true);
        } else {
            addOrRemoveClass(radioGroup[index].value , false);
        }

         
     }
    })};