// In this file we will create the Side Menu of our page, including an 'New List' button, 'today'-'week'-'all' tabs, and a list of all To Do lists.
import { deleteParentDiv, makeActive, displayToDoList } from "./logic";

const topbar = document.querySelector('#topbar');
const menu = document.querySelector('#menu');
const content = document.querySelector('#content');


const createNewToDoList = (title) =>{
    let listmenu = document.querySelector('.todo-list-menu');
    const newToDoList = document.createElement('div');
    newToDoList.classList.add('todo-list');
    newToDoList.innerText = title;
    let newTodoListVal = title.replace(' ','-').toLowerCase();
    newToDoList.setAttribute('value',newTodoListVal);
    newToDoList.addEventListener('click', ()=>{
        makeActive(newToDoList);
        displayToDoList(newTodoListVal);
    });
    const newToDoListContent = document.createElement('div');
    newToDoListContent.setAttribute('id',newTodoListVal);
    newToDoListContent.classList.add('todo-content');
    newToDoListContent.style.display = 'none';

    listmenu.appendChild(newToDoList);
    content.appendChild(newToDoListContent);
};
const createListForm = () =>{
    const newListBg = document.createElement('div');
    newListBg.classList.add('new-list-bg');
    const newListContainer = document.createElement('div');
    newListContainer.classList.add('new-list-container');
    const newListHeader = document.createElement('h2');
    newListHeader.classList.add('new-list-header');
    newListHeader.innerText = 'New List Name:'
    const newListInput = document.createElement('input');
    newListInput.type = 'text';
    const addNewListBtn = document.createElement('button');
    addNewListBtn.innerText = 'Create'
    // When Create is clicked, new list is created and added to menu
    addNewListBtn.onclick = function() {
        createNewToDoList(newListInput.value); 
        deleteParentDiv(newListContainer)
    };
    //this eventListener will close to new list prompt if clicked outside of container
    newListBg.addEventListener('click', (e)=>{
        if (!newListContainer.contains(e.target)){
            deleteParentDiv(newListContainer);
        }
    });
    content.appendChild(newListBg);
    newListBg.appendChild(newListContainer);
    newListContainer.appendChild(newListHeader);
    newListContainer.appendChild(newListInput);
    newListContainer.appendChild(addNewListBtn);
};
const createNewListBtn = () =>{
    const newListBtn = document.createElement('div');
    newListBtn.classList.add('new-list-btn');
    newListBtn.innerHTML = `&#65291; New List`;
    newListBtn.addEventListener('click', ()=>{
        createListForm();
    });
    menu.appendChild(newListBtn);
};

const createPeriodicList = () =>{
    const periodicContainer = document.createElement('div');
    periodicContainer.classList.add('periodic-container');
    // Link to display tasks due today
    const dueTodayLink = document.createElement('div');
    dueTodayLink.classList.add('todo-list');
    //dueTodayLink.classList.add('due-today-link');
    dueTodayLink.setAttribute('id','due-today-link')
    dueTodayLink.innerText = 'Today';
    const todayListContent = document.createElement('div');
    todayListContent.setAttribute('id','due-today');
    todayListContent.classList.add('todo-content');
    todayListContent.style.display = 'none';
    dueTodayLink.addEventListener('click', ()=>{
        makeActive(dueTodayLink);
        displayToDoList('due-today');
    });
    // Link to display tasks due current week
    const dueWeekLink = document.createElement('div');
    dueWeekLink.classList.add('todo-list');
    //dueWeekLink.classList.add('due-week-link');
    dueWeekLink.setAttribute('id','due-week-link')
    dueWeekLink.innerText = 'Week';
    dueWeekLink.addEventListener('click', ()=>{
        makeActive(dueWeekLink);
        displayToDoList('due-week');
    });
    const weekListContent = document.createElement('div');
    weekListContent.setAttribute('id','due-week');
    weekListContent.classList.add('todo-content');
    weekListContent.style.display = 'none';


    menu.appendChild(periodicContainer);
    periodicContainer.appendChild(dueTodayLink);
    periodicContainer.appendChild(dueWeekLink);
    content.appendChild(todayListContent);
    content.appendChild(weekListContent);
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