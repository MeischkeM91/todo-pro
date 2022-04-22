// In this file we will create the Topbar of our page, including the menu btn, logo, account name, and theme changer

const topbar = document.querySelector('#topbar');
const menu = document.querySelector('#menu');
const content = document.querySelector('#content');


const createMenuBtn = () =>{
    // Container for btn
    const menuBtnContainer = document.createElement('div');
    menuBtnContainer.classList.add('menu-btn-container');
    // Menu btn
    const menuBtn = document.createElement('div');
    menuBtn.classList.add('menu-btn');    

    topbar.appendChild(menuBtnContainer);
    menuBtnContainer.appendChild(menuBtn);
};



export default function loadTopbar() {
    createTopbar();
};