'use strict';

const taskList = [];
const taskAddBtn = document.getElementById('taskAddBtn');
const todoList = document.getElementById('todoList');

const createStatusBtn = value => {
  const statusTd = document.createElement('td');
  const statusBtn = document.createElement('button');
  statusBtn.textContent = value.status;
  statusTd.appendChild(statusBtn);
  return statusTd;
};

const createDeleteBtn = () => {
  const deleteTd = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';
  deleteTd.appendChild(deleteBtn);
  return deleteTd;
};

taskAddBtn.addEventListener('click', function () {
  if (inputTask.value) {
    todoList.innerHTML = '';
    const inputTask = document.getElementById('inputTask');
    taskList.push({ task: inputTask.value, status: '作業中' });

    taskList.forEach((value, i) => {
      const newTr = document.createElement('tr');
      const idTd = document.createElement('td');
      const taskTd = document.createElement('td');

      idTd.textContent = i;
      taskTd.textContent = value.task;

      newTr.appendChild(idTd);
      newTr.appendChild(taskTd);
      newTr.appendChild(createStatusBtn(value));
      newTr.appendChild(createDeleteBtn());

      todoList.appendChild(newTr);
    });
    inputTask.value = '';
  }
});
