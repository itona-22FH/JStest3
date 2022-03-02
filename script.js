'use strict';

const taskList = [];
const taskAddBtn = document.getElementById('taskAddBtn');
const todoList = document.getElementById('todoList');

const showTask = () => {
  todoList.innerHTML = '';

  taskList.forEach((value, index) => {
    const newTr = document.createElement('tr');
    const idTd = document.createElement('td');
    const taskTd = document.createElement('td');

    idTd.textContent = index;
    taskTd.textContent = value.task;

    newTr.appendChild(idTd);
    newTr.appendChild(taskTd);
    newTr.appendChild(createStatusBtn(value, index));
    newTr.appendChild(createDeleteBtn(index));

    todoList.appendChild(newTr);
  });
};

const createStatusBtn = (value, index) => {
  const statusTd = document.createElement('td');
  const statusBtn = document.createElement('button');
  statusBtn.textContent = value.status;
  statusBtn.addEventListener('click', function () {
    value.status === '作業中'
      ? (value.status = '完了')
      : (value.status = '作業中');
    showTask();
  });
  statusTd.appendChild(statusBtn);
  return statusTd;
};

const createDeleteBtn = index => {
  const deleteTd = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';
  deleteBtn.addEventListener('click', function () {
    taskList.splice(index, 1);
    showTask();
  });
  deleteTd.appendChild(deleteBtn);
  return deleteTd;
};

taskAddBtn.addEventListener('click', function () {
  if (inputTask.value) {
    const inputTask = document.getElementById('inputTask');

    taskList.push({ task: inputTask.value, status: '作業中' });
    showTask();
  }
  inputTask.value = '';
});
