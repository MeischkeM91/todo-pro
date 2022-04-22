// In this file we will create the Topbar of our page, including the menu btn, logo, account name, and theme changer

const topbar = document.querySelector('#topbar');
const menu = document.querySelector('#menu');
const content = document.querySelector('#content');
let menuOpen = true;

const createMenuBtn = () =>{
    // Container for btn
    const menuBtnContainer = document.createElement('div');
    menuBtnContainer.classList.add('menu-btn-container');
    // Menu btn
    const menuBtn = document.createElement('div');
    menuBtn.classList.add('menu-btn');    

    menuBtnContainer.addEventListener('click', ()=>{
        if(!menuOpen){
            menuBtnContainer.classList.add('open');
            menuOpen=true;
            console.log(menuOpen);
        } else{
            menuBtnContainer.classList.remove('open');
            menuOpen=false;
            console.log(menuOpen);
        };
      });

    topbar.appendChild(menuBtnContainer);
    menuBtnContainer.appendChild(menuBtn);
};

const createTopbar = () =>{
    createMenuBtn();
};
export default function loadTopbar() {
    createTopbar();
};