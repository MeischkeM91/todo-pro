function deleteParentDiv(e){
    e.parentElement.remove();
};

function makeActive(e){
    if(!e.classList.contains('active')){
        e.classList.add('active');
    } else return;
};


export {deleteParentDiv, makeActive};