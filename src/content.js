// This code will create the task list within the content container as well as the expanded task information container
import expandBtn from './images/expand-btn.svg';
import deleteBtn from './images/close-btn.svg';

const menu = document.querySelector('#menu');
const content = document.querySelector('#content');



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

    // Create the list item
    content.appendChild(listItemContainer);
    listItemContainer.appendChild(listItemStatus);
    listItemContainer.appendChild(listItemTitle);
    listItemContainer.appendChild(listItemExpandBtn);
    listItemContainer.appendChild(listItemUrgency);
    listItemContainer.appendChild(listItemDueDate);
    listItemContainer.appendChild(listItemDelBtn);

}