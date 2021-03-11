(function () {
    let button = _find(ACTION_ADD);
    let todosLocalStorage = _getDataLocalStorage();
    _addEnventListener(button, EVENT_CLICK, insertTodo);
    createTodoListHtml();

    /*
    -------------------------------------- 
    \           TODO CRUD                \
    -------------------------------------- 
    */
    function insertTodo(event) {
        noDefaultAcion(event);
        let todo = {
            id:  _getUniqueId(),
            title: _getMultiValueForm('form', true).get('title'),
            title: _getMultiValueForm('form', true).get('title'),
            done: false
        };
        todosLocalStorage.push(todo);


        _getMultiValueForm('form', false).reset();
        _undateDataStorage(todosLocalStorage);
        createTodoLiHtml(todo);
    }

    function updateTodo(event) {
        let target = event.target;
            buttonsParent = target.parentElement,
            iconEditButtonsParent = _findByParent(buttonsParent, ACTION_EDIT),
            contenteditable = _find('[contenteditable=true]'),
            todosLocalStorage = _getDataLocalStorage(),
            index = _getIdWithIndex(target, todosLocalStorage).index,
            todo = { title: contenteditable.textContent };
            _updateObjectArray(index, todo, todosLocalStorage);
            _undateDataStorage(todosLocalStorage);
            _ifElementClassExitRemove(_find('.fa-save.show'), SHOW_CLASS);
            _ifElementClassExitRemove(iconEditButtonsParent, HIDE_CLASS);
            _ifElementClassExitRemove(contenteditable, HIDE_CLASS);
    }

    function deleteTodo(event) {
        let target = event.target,
            confirm_remove_todo = confirm(MESSAGE_CONFIRME_DELETE);
            if (confirm_remove_todo) {
                todosLocalStorage = _getDataLocalStorage();
                todosLocalStorage.splice(_getIdWithIndex(target, todosLocalStorage).index, 1);
                _undateDataStorage(todosLocalStorage);
                target.closest('li').remove();
            }
    }

    function editTodoIcon(event) {
        let target = event.target,
            buttonsParent = target.parentElement,
            faButtonSave = _findByParent(buttonsParent, ACTION_SAVE),
            todoEdit = findToodEditElement(target);
            _ifElementContenteditableExitChange(_find('[contenteditable=true]'),false, true);
            _ifElementClassExitRemove(_find('.fa-edit.hide'), HIDE_CLASS);
            _ifElementClassExitRemove(_find('.fa-save.show'), SHOW_CLASS);
            _addClass(faButtonSave, SHOW_CLASS);
            _addClass(target, HIDE_CLASS);
            todoEdit.setAttribute('contenteditable', true);
            todoEdit.addEventListener(EVENT_INPUT, (e) => {
                _addClass(target, EVENT_CHANGE);
            });
            todoEdit.focus();
    }

    function checkedTodo(event) {
        let target = event.target,
        todoEdit = findToodEditElement(target),
        index = _getIdWithIndex(target, todosLocalStorage).index;
        todosLocalStorage = _getDataLocalStorage();
        if(event.target.checked){
            _addClass(todoEdit, LINE_CLASS);
            _updateObject(index, DONE_CLASS,  true, todosLocalStorage);
        }else{
            _updateObject(index, DONE_CLASS,  false, todosLocalStorage);
            _removeClass(todoEdit, LINE_CLASS);
        }
        _undateDataStorage(todosLocalStorage);
    }

    function selectTodoById(id) {
        return todosLocalStorage.find(todo => todo.id == id);
    }

    /*
    -------------------------------------- 
    \           TODO EVENT               \
    -------------------------------------- 
    */
    function addEventTodoLi(event, li, className, func) {
        let elem = li.querySelector(className);
        _addEnventListener(elem, event, func);
    }

    function addEventsTodo(li) {
        addEventTodoLi(EVENT_CLICK, li, ACTION_TRASH, deleteTodo);
        addEventTodoLi(EVENT_CLICK, li, ACTION_EDIT, editTodoIcon);
        addEventTodoLi(EVENT_CLICK, li, ACTION_SAVE, updateTodo);
        addEventTodoLi(EVENT_CHANGE, li, ACTION_DONE, checkedTodo)
       // addEventsDragAndDropTodo(li);
    }

    /*
    -------------------------------------- 
    \          TODO CREATE HTML          \
    -------------------------------------- 
    */
    function createTodoHtml(todo) {
        return `<div class="todo">
                    <div class="todo_edit${todo.done ? ' line' : ''}">
                        ${todo.title}
                    </div>
                    <div class="todos_buttons">
                        <input id=${todo.id}  type="checkbox" name="done" class="done" ${todo.done ? ' checked' : ''}>
                        <span id=${todo.id} class="fas fa-save fa-color_green hide"></span>
                        <span id=${todo.id} class="fas fa-edit fa-color_blue"></span>
                        <span id=${todo.id} class="fas fa-trash fa-color_red"></span>
                    </div>
                </div>`;
    }

    function createTodoLiHtml(todo) {
        let li = document.createElement('li'),
            todoHtml = createTodoHtml(todo);
            li.setAttribute("class", "draggable");
            li.setAttribute("draggable", true);
            li.innerHTML = todoHtml;
            _find(TODO_CLASS).append(li);
            addEventsTodo(li);
    }

    function createTodoListHtml() {
        todosLocalStorage = _getDataLocalStorage();
        _find(TODO_CLASS).innerHTML = "";
        for (let index = 0; index < todosLocalStorage.length; index++) {
            createTodoLiHtml(todosLocalStorage[index]);
        }
    }

    /*
    -------------------------------------- 
    \            FIND ELEMENT            \
    -------------------------------------- 
    */
    function findToodEditElement(target){
        let buttonsParent = target.parentElement,
        todoEdit = buttonsParent.previousElementSibling;
        return todoEdit;
    }
})();






