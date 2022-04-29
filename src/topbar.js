// In this file we will create the Topbar of our page, including the menu btn, logo, account name, and theme changer
const wrapper = document.querySelector('#wrapper');
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
    // Update status of Menu btn
    menuBtnContainer.addEventListener('click', ()=>{
        if(!menuOpen){
            menuBtnContainer.classList.add('open');
            wrapper.classList.remove('closed');
            menuOpen=true;
            console.log(menuOpen);
        } else{
            menuBtnContainer.classList.remove('open');
            wrapper.classList.add('closed');
            menuOpen=false;
            console.log(menuOpen);
        };
      });
    topbar.appendChild(menuBtnContainer);
    menuBtnContainer.appendChild(menuBtn);
};

const addLogo = () =>{
    const logo = document.createElement('div');
    logo.classList.add('top-logo');
    logo.innerText = 'ToDo Pro';
    topbar.appendChild(logo);
};

let accUsername = 'Maximilian12';
const displayAccount = (username) =>{
    const usernameDisplay = document.createElement('div');
    usernameDisplay.classList.add('username-display');
    usernameDisplay.innerText=username;
    topbar.appendChild(usernameDisplay);
};

const createThemeList = () =>{
    // Div to hold the theme dropdown
    const themeContainer = document.createElement('div');
    themeContainer.classList.add('theme-container');
    themeContainer.setAttribute('id','theme-container')
    topbar.appendChild(themeContainer);
    // Create a select list with each alt theme option
    const themeList = document.createElement('select');
    themeList.classList.add('theme-list');
    const sandyBeachTheme = document.createElement('option');
    sandyBeachTheme.classList.add('theme-list-item');
    sandyBeachTheme.value = 'sandy-beach';
    sandyBeachTheme.innerText = 'Sandy Beach';
    const nightMoonTheme = document.createElement('option');
    nightMoonTheme.classList.add('theme-list-item');
    nightMoonTheme.value = 'night-moon';
    nightMoonTheme.innerText = 'Night Moon';
    const lushForestTheme = document.createElement('option');
    lushForestTheme.classList.add('theme-list-item');
    lushForestTheme.value = 'lush-forest';
    lushForestTheme.innerText = 'Lush Forest';
    // Update the page theme when a certain theme is chosen
    themeContainer.addEventListener('change', () =>{
        topbar.classList = '';
        topbar.classList = themeList.value;
        menu.classList = '';
        menu.classList = themeList.value;        
        content.classList = '';
        content.classList = themeList.value;
    })
    themeContainer.appendChild(themeList);
    themeList.appendChild(sandyBeachTheme);
    themeList.appendChild(nightMoonTheme);
    themeList.appendChild(lushForestTheme);
};

// Run each () to create the topbar 
const createTopbar = () =>{
    createMenuBtn();
    addLogo();
    displayAccount(accUsername);
    createThemeList();
};
// Load topbar to page
export default function loadTopbar() {
    createTopbar();
};