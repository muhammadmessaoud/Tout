
let cpt = 1;
let todos = [];
function add(e){

    
    let obj = {
        id: '',
        title: '',
        isActive: false
    };

    let titre = document.getElementById('titre');

    obj.id = cpt++;
    obj.title = titre.value;
todos.push(obj);

     createHtml(todos);
}

 function createHtml(todos){

    let html = "<ul>";
        for (let index = 0; index < todos.length; index++) {
            html += `<li id=${todos[index].id}>${todos[index].title} <span class="delete">X</span> </li>`;
            
        }

        html += "</ul>";
        document.querySelector(".content").innerHTML = html;

console.log(html);


}
function remove(){
    let id = 1 ;

    todos.findIndex((element) => element.id = 1);


}

let button = document.getElementById("button");
let buttonDelete = document.querySelector(".delete");
button.addEventListener("click", add);
button.addEventListener("click", remove);


/*
let todos = [];
let cpt = 1;
let button = document.querySelector('.add');
function add() {
    let obj = {
        id: '',
        title: '',
        isActive: false
    };

    let titre = document.getElementById("titre");
    obj.id = cpt++;
    obj.title = titre.value;
    todos.push(obj);

    createHtml(todos);
}
titre.value = "";

function createHtml(todos) {

    let html = '<ul>';

    for (let index = 0; index < todos.length; index++) {
        html += <li>${todos[index].title} <span id=${todos[index].id} class='delete'>X</span></li>;

    }
    html += '</ul>';
    document.querySelector('.content').innerHTML = html;
    addEventButtonDelete();
}


function addEventButtonDelete() {
    let list = document.querySelectorAll('ul li');

    for (let index = 0; index < list.length; index++) {
        list[index].addEventListener('click', remove);
    }
}

function remove(event) {
    let id = event.target.getAttribute('id');
    let index = todos.findIndex(todo => todo.id == id);
    todos.splice(index, 1);
    createHtml(todos);

}

button.addEventListener("click", add);

*/
