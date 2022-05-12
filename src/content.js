// This code will create the task list within the content container as well as the expanded task information container
import expandBtn from './images/expand-btn.svg';
import deleteBtn from './images/close-btn.svg';
import addBtn from './images/add-task-btn.svg';
import { deleteParentDiv, createNewTask } from './logic';

const menu = document.querySelector('#menu');
const content = document.querySelector('#content');


const createPopout = (item) =>{
    const popContainer = document.createElement('div');
    popContainer.classList.add('todo-item-pop-container');
    // Close Button
    const popClose = document.createElement('img');
    popClose.src = deleteBtn;
    popClose.alt = 'Close';
    popClose.classList.add('pop-close-btn');
    popClose.addEventListener('click', ()=>{
        deleteParentDiv(popClose);
    });
    // Title
    const popTitle = document.createElement('p');
    popTitle.classList.add('pop-item-title');
    popTitle.innerText = item.title;
    // Due Date
    const popDue = document.createElement('p');
    popDue.classList.add('pop-item-due');
    popDue.innerText = `Due: ${item.dueDate}`;
    // Urgency
    const popUrg = document.createElement('p');
    popUrg.classList.add('pop-item-urgency');
    let urgencyVal = item.urgency.charAt(0).toUpperCase() +
    item.urgency.slice(1);
    popUrg.innerText = `Urgency: ${urgencyVal}`;
    // Description
    const popDescription = document.createElement('p');
    popDescription.classList.add('pop-item-description');
    popDescription.innerText = item.description;
    // Build Popout
    content.appendChild(popContainer);
    popContainer.appendChild(popTitle);
    popContainer.appendChild(popClose);
    popContainer.appendChild(popDue);
    popContainer.appendChild(popUrg);
    popContainer.appendChild(popDescription);
};

export const listTaskItems = (item) =>{
    
    const listItemContainer = document.createElement('div');
    listItemContainer.classList.add('list-item');

    const listItemStatus = document.createElement('input');
    listItemStatus.type = 'checkbox';
    listItemStatus.id = 'list-item-status-check';

    const listItemTitle = document.createElement('p');
    listItemTitle.classList.add('list-item-title');
    listItemTitle.innerText= item.title; 
    
    const listItemExpandBtn = document.createElement('img');
    listItemExpandBtn.classList.add('list-item-expand-btn');
    listItemExpandBtn.src = expandBtn;
    listItemExpandBtn.addEventListener('click', () =>{
        createPopout(item);
    })

    const listItemUrgency = document.createElement('p');
    listItemUrgency.classList.add('list-item-urgency');
    if (item.urgency == 'low'){
        listItemUrgency.classList.add('low-urg');
        listItemUrgency.innerText = 'LOW';
    } else if (item.urgency == 'high'){
        listItemUrgency.classList.add('high-urg');
        listItemUrgency.innerText ='HIGH';
    }
    else {  listItemUrgency.innerText = "ERROR"  };

    const listItemDueDate = document.createElement('p');
    listItemDueDate.classList.add('list-item-due');
    listItemDueDate.innerText = item.dueDate;

    const listItemDelBtn = document.createElement('img');
    listItemDelBtn.classList.add('list-item-delete-btn');
    listItemDelBtn.src = deleteBtn;
    listItemDelBtn.addEventListener('click', ()=>{
        deleteParentDiv(listItemDelBtn);
    });

    // Create the list item
    content.appendChild(listItemContainer);
    listItemContainer.appendChild(listItemStatus);
    listItemContainer.appendChild(listItemTitle);
    listItemContainer.appendChild(listItemExpandBtn);
    listItemContainer.appendChild(listItemUrgency);
    listItemContainer.appendChild(listItemDueDate);
    listItemContainer.appendChild(listItemDelBtn);
};

const createAddTaskForm = () =>{
    const newTaskBg = document.createElement('div');
    newTaskBg.classList.add('new-task-bg');
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('new-task-container');
    const newTaskContainerHead = document.createElement('p');
    newTaskContainerHead.classList.add('new-task-container-head');
    newTaskContainerHead.innerText = 'Create a New Task';
    const newTaskNameHead = document.createElement('p');
    newTaskNameHead.classList.add('new-task-name-head');
    newTaskNameHead.innerText = 'Task Name:';
    const newTaskNameInput = document.createElement('input');
    newTaskNameInput.type = 'text';
    newTaskNameInput.classList.add('new-task-name-input')
    const newTaskInputContainer = document.createElement('div');
    const newTaskUrgContainer = document.createElement('div');
    newTaskUrgContainer.classList.add('new-task-urg');
    const newTaskUrgHead = document.createElement('p')
    newTaskUrgHead.innerText = 'Urgency:';
    const newTaskUrgSel = document.createElement('select');
    newTaskUrgSel.classList.add('new-task-urg-input');
    const newTaskUrgHigh = document.createElement('option');
    newTaskUrgHigh.innerText = 'High';
    const newTaskUrgLow = document.createElement('option');
    newTaskUrgLow.innerText = 'Low';
    const newTaskDueContainer = document.createElement('div');
    newTaskDueContainer.classList.add('new-task-due');
    const newTaskDueHead = document.createElement('p')
    newTaskDueHead.innerText = 'Date Due:';
    const newTaskDueDate = document.createElement('input');
    newTaskDueDate.type = 'date';
    newTaskDueDate.classList.add('new-task-date-input');
    const newTaskDescHead = document.createElement('p');
    newTaskDescHead.classList.add('new-task-desc-head');
    newTaskDescHead.innerText = 'Description:';
    const newTaskDescText = document.createElement('textarea');
    newTaskDescText.classList.add('new-task-desc-input');
    const addNewTaskBtn = document.createElement('button');
    addNewTaskBtn.innerText = 'Create';
    // Create a list of active To Do Lists
    const toDoListSelArr = document.querySelectorAll('.todo-list');
    const toDoListContainer = document.createElement('div');
    toDoListContainer.classList.add('new-todo-list-sel');
    const toDoListSelHead = document.createElement('p')
    toDoListSelHead.innerText = 'To-Do List:';
    const toDoListSel= document.createElement('select');
    toDoListSel.classList.add('new-task-list-input');

    // This eventListener will create a new task
    addNewTaskBtn.addEventListener('click', ()=>{
        createNewTask();
        deleteParentDiv(newTaskContainer);
    });
    // This eventListener will close to new list prompt if clicked outside of container
    newTaskBg.addEventListener('click', (e)=>{
        if (!newTaskContainer.contains(e.target)){
            deleteParentDiv(newTaskContainer);
        }
    });

    content.appendChild(newTaskBg);
    newTaskBg.appendChild(newTaskContainer);
    newTaskContainer.appendChild(newTaskContainerHead);
    newTaskContainer.appendChild(newTaskNameHead);
    newTaskContainer.appendChild(newTaskNameInput);
    newTaskContainer.appendChild(newTaskInputContainer);
    newTaskInputContainer.appendChild(newTaskUrgContainer);
    newTaskUrgContainer.appendChild(newTaskUrgHead);
    newTaskUrgContainer.appendChild(newTaskUrgSel);
    newTaskUrgSel.appendChild(newTaskUrgHigh);
    newTaskUrgSel.appendChild(newTaskUrgLow);
    newTaskInputContainer.appendChild(newTaskDueContainer);
    newTaskDueContainer.appendChild(newTaskDueHead);
    newTaskDueContainer.appendChild(newTaskDueDate);
    newTaskContainer.appendChild(newTaskDescHead);
    newTaskContainer.appendChild(newTaskDescText);
    newTaskContainer.appendChild(toDoListContainer);
    toDoListContainer.appendChild(toDoListSelHead);
    toDoListContainer.appendChild(toDoListSel);
    newTaskContainer.appendChild(addNewTaskBtn);
    // Add all list options
    for(let i=0; i<toDoListSelArr.length;i++){
        const toDoListSelOpt = document.createElement('option');
        toDoListSelOpt.innerText = toDoListSelArr[i].innerText;
        toDoListSel.appendChild(toDoListSelOpt);
    };
};

export const createAddTaskBtn = () =>{
    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-task-btn');
    addTaskContainer.addEventListener('click', () =>{
        createAddTaskForm();
        console.log('add task');
    });
    const addTaskImg = document.createElement('img');
    addTaskImg.src = addBtn;
    addTaskImg.alt = "Add Task"

    content.appendChild(addTaskContainer);
    addTaskContainer.appendChild(addTaskImg);
};

