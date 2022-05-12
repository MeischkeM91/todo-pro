// This JS file will contain all application logic, seperate from the interface code
import { listTaskItems, createAddTaskBtn } from './content';

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

function createNewTask(){
    const menuLists = document.querySelectorAll('.todo-list');
    let newTaskName = document.querySelector('.new-task-name-input');
    let newTaskUrg = document.querySelector('.new-task-urg-input');
    let newTaskDate = document.querySelector('.new-task-date-input');
    let newTaskDesc = document.querySelector('.new-task-desc-input');
    let newTaskList = document.querySelector('.new-task-list-input');

    let createdTask = new ToDoItem(newTaskName.value, newTaskDesc.value, newTaskUrg.value.toLowerCase(), newTaskDate.value, newTaskList.value);

    console.log(createdTask);

    listTaskItems(createdTask, createdTask.list);
};

export {deleteParentDiv, makeActive, displayToDoList, createNewTask};