'use strict';
////////////////////////////////////////////////
/////////////////////VARIABLES//////////////////
////////////////////////////////////////////////
const allTaskList = [];
let workingTaskList;
let completedTaskList;

const taskAddBtn = document.getElementById('taskAddBtn');
const todoList = document.getElementById('todoList');
const radios = [];
radios.push(
  document.getElementById('radioAll'),
  document.getElementById('radioStatus'),
  document.getElementById('radioCompleted')
);

const showTask = () => {
  todoList.innerHTML = '';
  allTaskList.forEach((value, index) => {
    value.id = index;
  });
  let taskList;
  if (radioAll.checked) {
    taskList = allTaskList;
  } else if (radioStatus.checked) {
    workingTaskList = allTaskList.filter(value => value.status === '作業中');
    taskList = workingTaskList;
  } else if (radioCompleted.checked) {
    completedTaskList = allTaskList.filter(value => value.status === '完了');
    taskList = completedTaskList;
  }
  taskList.forEach((value, index) => {
    const newTr = document.createElement('tr');
    const idTd = document.createElement('td');
    const taskTd = document.createElement('td');

    idTd.textContent = value.id;
    taskTd.textContent = value.task;

    newTr.appendChild(idTd);
    newTr.appendChild(taskTd);
    newTr.appendChild(createStatusBtn(value));
    newTr.appendChild(createDeleteBtn(value, index));

    todoList.appendChild(newTr);
  });
};

////////////////////////////////////////////////
////////////////CREATE BUTTON///////////////////
////////////////////////////////////////////////

const createStatusBtn = value => {
  const statusTd = document.createElement('td');
  const statusBtn = document.createElement('button');

  statusBtn.textContent = value.status;
  statusBtn.addEventListener('click', function () {
    const status = value.status === '作業中' ? '完了' : '作業中';
    value.status = status;
    showTask();
  });

  statusTd.appendChild(statusBtn);
  return statusTd;
};

const createDeleteBtn = (value, index) => {
  const deleteTd = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';

  if (radioAll.checked) {
    deleteBtn.addEventListener('click', function () {
      allTaskList.splice(index, 1);
      showTask();
    });
  } else if (radioStatus.checked) {
    deleteBtn.addEventListener('click', function () {
      workingTaskList.splice(index, 1);
      allTaskList.splice(value.id, 1);
      showTask();
    });
  } else if (radioCompleted.checked) {
    deleteBtn.addEventListener('click', function () {
      completedTaskList.splice(index, 1);
      allTaskList.splice(value.id, 1);
      showTask();
    });
  }
  deleteTd.appendChild(deleteBtn);
  return deleteTd;
};

////////////////////////////////////////////////
////////////////ADDEVENTLISTENER////////////////
////////////////////////////////////////////////

taskAddBtn.addEventListener('click', function () {
  if (inputTask.value) {
    const inputTask = document.getElementById('inputTask');

    allTaskList.push({ task: inputTask.value, status: '作業中' });
    showTask();
  }
  inputTask.value = '';
});

radios.forEach(radio => {
  radio.addEventListener('click', function () {
    showTask();
  });
});
