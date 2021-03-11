
/*
-------------------------------------- 
\            LOCAL STORAGE           \
-------------------------------------- 
*/
function _getDataLocalStorage() {
    let todosLocalStorage = _parseDataStorage();
    return todosLocalStorage ? todosLocalStorage : [];
}

function _undateDataStorage(data) {
    localStorage.setItem(DATA_LOCAL_NAME, JSON.stringify(data));
}

function _parseDataStorage() {
    return JSON.parse(localStorage.getItem(DATA_LOCAL_NAME));
}
