import './style.css';
import loadTopbar from './topbar';
import loadMenu from './menu';
import { listTaskItems } from './content';

/* TESTING CODE FOR LIST ITEMS */
const toDoItem = (title, description, urgency, dueDate) =>{
    return {title,description,urgency,dueDate}
};

let listItems = [];
listItems.push(toDoItem('Take little Bob to football practice','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','high','5/15/2022'));
listItems.push(toDoItem('Take little Ethel to saxophone lessons','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','low','5/23/2022'));
/* END TESTING CODE FOR LIST ITEMS */

const loadPage = () =>{
    loadTopbar();
    loadMenu();
    listTaskItems(listItems[0]);
    listTaskItems(listItems[1]);
}

document.onload =loadPage();
