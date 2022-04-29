// In this file we will create the Side Menu of our page, including an 'New List' button, 'today'-'week'-'all' tabs, and a list of all To Do lists.

const topbar = document.querySelector('#topbar');
const menu = document.querySelector('#menu');
const content = document.querySelector('#content');

const createNewListBtn = () =>{
    const newListBtn = document.createElement('div');
    newListBtn.classList.add('new-list-btn');
    newListBtn.innerText = '+ New List';
    menu.appendChild(newListBtn);
};

const createPeriodicList = () =>{
    const periodicContainer = document.createElement('div');
    periodicContainer.classList.add('periodic-container');
    // Link to display tasks due today
    const dueTodayLink = document.createElement('div');
    dueTodayLink.classList.add('due-today-link');
    dueTodayLink.innerText = 'Today';
    // Link to display tasks due current week
    const dueWeekLink = document.createElement('div');
    dueWeekLink.classList.add('due-week-link');
    dueWeekLink.innerText = 'Week';

    menu.appendChild(periodicContainer);
    periodicContainer.appendChild(dueTodayLink);
    periodicContainer.appendChild(dueWeekLink);
};

// Run each () to create the menu 
const createMenu = () =>{
    createNewListBtn();
    createPeriodicList();
};
// Load topbar to page
export default function loadMenu() {
    createMenu();
};