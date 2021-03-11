/*
-------------------------------------- 
\        DRAG AND DROP EVENTS        \
-------------------------------------- 
*/

function dragStart(e) {
    console.log("dragStart");
}

function dragEnter(e) {
    console.log("dragEnter");
}

function dragOver(e) {
    console.log("dragOver");
}

function dragLeave(e) {
    console.log("dragLeave");
}

function dragDrop(e) {
    console.log("dragDrop");
}

function dragEnd(e) {
    console.log("dragEnd");
}

function addEventsDragAndDropTodo(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
}
