// In this file we will create the Side Menu of our page, including an 'New List' button, 'today'-'week'-'all' tabs, and a list of all To Do lists.

const topbar = document.querySelector('#topbar');
const menu = document.querySelector('#menu');
const content = document.querySelector('#content');

const createNewListBtn = () =>{
    const newListBtn = document.createElement('div');
    newListBtn.classList.add('new-list-btn');
    newListBtn.innerHTML = `&#65291; New List`;
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

const createToDoListMenu = () =>{
    const toDoListMenu = document.createElement('div')
    toDoListMenu.classList.add('todo-list-menu');
    // Projects header
    const toDoHeader = document.createElement('h1');
    toDoHeader.classList.add('todo-list-header');
    toDoHeader.innerText = 'To-Do Lists';

    menu.appendChild(toDoListMenu);
    toDoListMenu.appendChild(toDoHeader);
};

const createNewToDoList = (title) =>{
    let listmenu = document.querySelector('.todo-list-menu');
    const newToDoList = document.createElement('div');
    newToDoList.classList.add('todo-list');
    newToDoList.innerText = title;
    listmenu.appendChild(newToDoList);
};



// Run each () to create the menu 
const createMenu = () =>{
    createNewListBtn();
    createPeriodicList();
    createToDoListMenu();
    createNewToDoList('List One');
    createNewToDoList('List Two');
};
// Load topbar to page
export default function loadMenu() {
    createMenu();
};