const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value;

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskItem.addEventListener('click', markTaskCompleted);

    taskItem.addEventListener('dblclick', deleteTask);

    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}

function markTaskCompleted(event) {
  const taskItem = event.target;
  taskItem.classList.toggle('completed');
}

function deleteTask(event) {
  const taskItem = event.target;
  taskItem.parentNode.removeChild(taskItem);
}
