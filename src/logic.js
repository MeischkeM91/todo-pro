// This JS file will contain all application logic, seperate from the interface code


function deleteParentDiv(e){
    e.parentElement.remove();
};

function makeActive(e){
    const menuLists = document.querySelectorAll('.todo-list');
    if(!e.classList.contains('active')){
        menuLists.forEach(element => {
            element.classList.remove('active');
        });
        e.classList.add('active');
    } else return;
};


export {deleteParentDiv, makeActive};