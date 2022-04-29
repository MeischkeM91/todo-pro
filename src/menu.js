// In this file we will create the Side Menu of our page, including an 'New List' button, 'today'-'week'-'all' tabs, and a list of all To Do lists.

const topbar = document.querySelector('#topbar');
const menu = document.querySelector('#menu');
const content = document.querySelector('#content');

const createNewListBtn = () =>{
    const newListBtn = document.createElement('div');
    newListBtn.classList.add('new-list-btn');
    newListBtn.innerText = '+ New List';
    menu.appendChild(newListBtn);
}

// Run each () to create the menu 
const createMenu = () =>{
    createNewListBtn();
};
// Load topbar to page
export default function loadMenu() {
    createMenu();
};