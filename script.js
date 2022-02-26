'use strict';

const taskList = [];
const taskAddBtn = document.getElementById('taskAddBtn');
const todoList = document.getElementById('todoList');

taskAddBtn.addEventListener('click', function () {
  if (inputTask.value) {
    todoList.innerHTML = '';
    const inputTask = document.getElementById('inputTask');
    taskList.push({ task: inputTask.value});

    taskList.forEach((value, i) => {
      const newTr = document.createElement('tr');

      const idTd = document.createElement('td');
      const taskTd = document.createElement('td');
      const statusTd = document.createElement('td');
      const deleteTd = document.createElement('td');

      const statusBtn = document.createElement('button');
      statusBtn.textContent = '作業中';
      statusTd.appendChild(statusBtn);
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '削除';
      deleteTd.appendChild(deleteBtn);

      idTd.textContent = i;
      taskTd.textContent = value.task;

      statusTd.appendChild(statusBtn);

      newTr.appendChild(idTd);
      newTr.appendChild(taskTd);
      newTr.appendChild(statusTd);
      newTr.appendChild(deleteTd);

      todoList.appendChild(newTr);
    });
    inputTask.value = '';
  }
});
