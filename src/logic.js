// This JS file will contain all application logic, seperate from the interface code
import { listTaskItems, createAddTaskBtn } from './content';
import { addDays, isToday, format, isThisWeek } from 'date-fns';

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
    return {title,description,urgency,dueDate, list}
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

    console.log(createdTask);
    allTasks.push(createdTask);
    listTaskItems(createdTask, createdTask.list);
    addToPeriodicList(createdTask);
};

function addToPeriodicList(task){
    const today = new Date();
    const todayFormat = format(today, 'yyyy-MM-dd');
    const nextWeek = addDays(today, 7);
    const nextWeekFormat = format(nextWeek, 'yyyy-MM-dd');
    console.log(todayFormat);
    console.log(nextWeekFormat);
    console.log(task.dueDate);
    if(nextWeekFormat < task.dueDate){ // FIX OPERATOR
        listTaskItems(task, 'due-today');
        if(todayFormat == task.dueDate){
            listTaskItems(task, 'due-week');
        } else return;
    } else {console.log('ERROR')};
};

export {deleteParentDiv, makeActive, displayToDoList, createNewTask};