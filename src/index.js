import './style.css';
import loadTopbar from './topbar';
import loadMenu from './menu';
import { createAddTaskBtn } from './content';


const loadPage = () =>{
    loadTopbar();
    loadMenu();
    createAddTaskBtn();
}

document.onload =loadPage();
