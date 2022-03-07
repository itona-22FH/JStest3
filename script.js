'use strict';

const allTaskList = [];

const taskAddBtn = document.getElementById('taskAddBtn');
const todoList = document.getElementById('todoList');
const radios = document.getElementsByName('choice');

const showTask = () => {
  todoList.innerHTML = '';
  allTaskList.forEach((value, index) => {
    value.id = index;
  });

  const taskList = [];
  if (radioAll.checked) {
    allTaskList.forEach(task => {
      taskList.push(task);
    });
  } else if (radioStatus.checked) {
    allTaskList.forEach(task => {
      if (task.status === '作業中') {
        taskList.push(task);
      }
    });
  } else if (radioCompleted.checked) {
    allTaskList.forEach(task => {
      if (task.status === '完了') {
        taskList.push(task);
      }
    });
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
  } else {
    deleteBtn.addEventListener('click', function () {
      allTaskList.splice(value.id, 1);
      showTask();
    });
  }
  deleteTd.appendChild(deleteBtn);
  return deleteTd;
};

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
