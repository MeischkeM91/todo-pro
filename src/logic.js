// This JS file will contain all application logic, seperate from the interface code
import { listTaskItems } from './content';
import { addDays, format, isBefore, parseISO } from 'date-fns';

function deleteParentDiv(e){
    e.parentElement.remove();
};

function makeActive(e){
    const menuLists = document.querySelectorAll('.todo-list');
    if(!e.classList.contains('active')){
        menuLists.forEach(element => {
            element.classList.remove('active');
        });
        e.classList.add('active');
    } else return;
};

function displayToDoList(listID){
    const toDoLists = document.querySelectorAll('.todo-content');
    const listToActivate = document.getElementById(listID);
    toDoLists.forEach(element => {
        element.style.display='none';
    });
    listToActivate.style.display = '';
};

function ToDoItem (title, description, urgency, dueDate, list){
    return {title,description,urgency,dueDate, list};
};
const allTasks = [];

function createNewTask(){
    const menuLists = document.querySelectorAll('.todo-list');
    let newTaskName = document.querySelector('.new-task-name-input');
    let newTaskUrg = document.querySelector('.new-task-urg-input');
    let newTaskDate = document.querySelector('.new-task-date-input');
    let newTaskDesc = document.querySelector('.new-task-desc-input');
    let newTaskList = document.querySelector('.new-task-list-input');
    let createdTask = new ToDoItem(newTaskName.value, newTaskDesc.value, newTaskUrg.value.toLowerCase(), newTaskDate.value, newTaskList.value);
    
    //console.log(createdTask);
    allTasks.push(createdTask);
    listTaskItems(createdTask, createdTask.list);
};

function loadTodaysTasks(){
    // start the list from empty on each load
    const todayContent = document.querySelector('#due-today');
    todayContent.innerHTML = '';
    // run through the array containing every task and display the tasks with current date
    const today = new Date();
    const todayFormat = format(today, 'yyyy-MM-dd');
    allTasks.forEach(element => {
        if (todayFormat == element.dueDate){
            listTaskItems(element, 'due-today');
        };
    });
};

function loadWeeksTasks(){
    // start the list from empty on each load
    const weekContent = document.querySelector('#due-week');
    weekContent.innerHTML = '';
    // run through the array containing every task and display the tasks with current date
    const today = new Date();
    const nextWeek = addDays(today, 8);
    const nexWeekFormat = parseISO(format(nextWeek, 'yyyy-MM-dd'));
    allTasks.forEach(element => {
        let parsedDate = parseISO(element.dueDate); 
        if (isBefore(parsedDate, nexWeekFormat)){
            listTaskItems(element, 'due-week');
        };
    });
};

export {deleteParentDiv, makeActive, displayToDoList, createNewTask, loadTodaysTasks, loadWeeksTasks};