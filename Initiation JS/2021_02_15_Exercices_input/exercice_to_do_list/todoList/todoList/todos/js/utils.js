/*
-------------------------------------- 
\               UTILS                \
-------------------------------------- 
*/
function noDefaultAcion(e){
    e.preventDefault();
}

function _find(className) {
    return document.querySelector(className);
}

function _findByParent(parent, className) {
    return parent.querySelector(className);
}

function _addClass(element, className){
    element.classList.add(className);
}

function _removeClass(element, className){
    element.classList.remove(className);
}

function _ifElementClassExitRemove(elem, className) {
    elem ? _removeClass(elem, className) : '';
    return elem;
}

function _ifElementContenteditableExitChange(elem, bool) {
    elem ? elem.setAttribute('contenteditable', bool) : '';
    return elem;
}

function _getIdWithIndex(target, array) {
    let id = target.getAttribute('id'),
        index = array.findIndex(item => item.id == id);
        return {
            id: id,
            index: index
        }
}

function _getUniqueId() {
    return (new Date()).getTime();
};

function _removeClasses() {
    let i = 0;
    while( i < els.length) {
        addSelectorRemove(els[i], 'active');
        i++;
    }
}

function _addEnventListener(elem, event, func){
    elem.addEventListener(event, func);
}

function _updateObjectArray(index, obj, array){
    for (const property in obj) {
        array[index][property] = obj[property].trim();
    }
    return array;
}

function _updateObject(index, property, value, array){
    array[index][property] = value;
    return array;
}
   
/*
-------------------------------------- 
\                FORM                \
-------------------------------------- 
*/
function _getMultiValueForm(formById, isLoadData) {
    let obj = {};
    let form = _find(formById);
    if(isLoadData){
        const formData = new FormData(form);
        for (var [key, value] of formData.entries()) {
            obj[key] = value;
        }
    }
    return {
        reset: () => form.reset(),
        get: (name) => obj[name]
    };
}

function _getInputValueFormById(id) {
    let input = document.getElementById(id);
    return input.value;
}