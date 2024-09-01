document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.addEventListener('click', toggleComplete);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);

    listItem.appendChild(taskContent);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = '';
}

function toggleComplete(event) {
    event.target.classList.toggle('complete');
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}
