import './style.css';
import loadTopbar from './topbar';
import loadMenu from './menu';
import { listTaskItems, createAddTaskBtn } from './content';

/* TESTING CODE FOR LIST ITEMS */
const toDoItem = (title, description, urgency, dueDate, list) =>{
    return {title,description,urgency,dueDate, list}
};

let listItems = [];
listItems.push(toDoItem('Take little Bob to football practice','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','high','5/15/2022','list-one'));
listItems.push(toDoItem('Take little Ethel to saxophone lessons','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','low','5/23/2022','list-two'));
/* END TESTING CODE FOR LIST ITEMS */

const loadPage = () =>{
    loadTopbar();
    loadMenu();
    createAddTaskBtn();
    listTaskItems(listItems[0]);
    listTaskItems(listItems[1]);
}

document.onload =loadPage();
