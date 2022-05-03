import './style.css';
import loadTopbar from './topbar';
import loadMenu from './menu';


const loadPage = () =>{
    loadTopbar();
    loadMenu();
}

document.onload =loadPage();
