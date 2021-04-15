import { app } from './app.js';
import Project from './project.js';
import Task from './task.js';
import Storage from './storage.js';

export default function init() {
  toggleNav();
  renderDefaultProjects();
  renderNewProjects();
  initProjectFormButtons();
  initProjectButtons();
  initDefaultProjectButtons();
  initTaskFormButtons();
  renderTasks();
  initTaskButtons();
  initClearCompleted();
  handleKeyboard();
}

// section
function initProjectFormButtons() {
  // elements related to the creation of a new project
  const newProjectButton = document.querySelector('.new-project-btn');
  const projectForm = document.querySelector('.project-form');
  const projectNameInput = document.querySelector('.project-name-input');
  const addProjectButton = document.querySelector('.add-project-btn');
  const cancelProjectButton = document.querySelector('.cancel-project-btn');

  newProjectButton.addEventListener('click', toggleProjectForm);
  cancelProjectButton.addEventListener('click', toggleProjectForm);
  addProjectButton.addEventListener('click', addProject);

  function addProject() {
    const projectName = projectNameInput.value;
    if (projectNameInput === '') {
      alert('You have to name your project');
      return;
    }
    const newProject = new Project(projectName, false);
    app.addProject(newProject);
    Storage.saveApp(app);
    toggleProjectForm();
    reloadNewProjects();
  }

  function toggleProjectForm() {
    projectNameInput.value = '';
    newProjectButton.classList.toggle('display-none');
    projectForm.classList.toggle('display-none');
    projectNameInput.focus();
  }
}

// section
function initProjectButtons() {
  // elements related to the projects that were created
  const projectDeleteButtons = document.querySelectorAll(
    '.project-delete-icon'
  );
  const projectTitle = document.querySelector('.project-title');
  const newProjects = document.querySelectorAll('.new-project');
  let deleted = false;

  projectDeleteButtons.forEach((button) => {
    button.addEventListener('click', deleteProject);
  });

  newProjects.forEach((project) => {
    project.addEventListener('click', newProjectsOnClick);
  });

  function deleteProject() {
    deleted = true;
    const projectName = this.parentNode.querySelector('p');
    app.removeProject(projectName);
    Storage.saveApp(app);
    reloadNewProjects();
  }

  function newProjectsOnClick() {
    //checking if the project that was clicked was deleted or not
    // if deleted, it switches to inbox
    if (deleted) {
      const inbox = document.querySelector('#inbox');
      inbox.click();
      deleted = false;
      return;
    }
    setActive(this);
    reloadTasks();
    projectTitle.textContent = this.querySelector('p').textContent;
    handleAddTask();
  }
}

// section
function initDefaultProjectButtons() {
  const inbox = document.querySelector('#inbox');
  /*   const today = document.querySelector("#today");
  const thisWeek = document.querySelector("#this-week"); */
  const projectTitle = document.querySelector('.project-title');

  inbox.addEventListener('click', () => {
    setActive(inbox);
    reloadTasks();
    projectTitle.textContent = inbox.querySelector('p').textContent;
    handleAddTask();
  });

  /*   today.addEventListener("click", () => {
    setActive(today);
    handleAddTask();
    reloadTasks();
    projectTitle.textContent = today.querySelector("p").textContent;
  })

  thisWeek.addEventListener("click", () => {
    setActive(thisWeek);
    handleAddTask();
    reloadTasks();
    projectTitle.textContent = thisWeek.querySelector("p").textContent;
  }) */
}

// section
function initTaskFormButtons() {
  // elements related to the creation of a new task
  const addNewTaskButton = document.querySelector('.add-task');
  const taskForm = document.querySelector('.task-form');
  const taskInput = document.querySelector('.task-desc-input');
  const taskDateInput = document.querySelector('.task-date-input');
  const addButton = document.querySelector('.task-add');
  const cancelButton = document.querySelector('.task-cancel');

  addNewTaskButton.addEventListener('click', toggleTaskForm);
  cancelButton.addEventListener('click', toggleTaskForm);
  addButton.addEventListener('click', addTask);

  function addTask() {
    const taskDesc = taskInput.value;
    if (taskDesc === '') {
      alert('You have to provide a task description');
      return;
    }
    const activeProjectName = document
      .querySelector('.active')
      .querySelector('p').textContent;
    const project = app.getProject(activeProjectName);
    const taskDate = taskDateInput.value;
    const task = new Task(taskDesc, taskDate);
    project.addTask(task);
    toggleTaskForm();
    Storage.saveApp(app);
    reloadTasks();
  }
}

function initTaskButtons() {
  const checkboxes = document.querySelectorAll('.checkbox');
  const deleteTaskButtons = document.querySelectorAll('.delete-task');
  const currentProject = getActiveProject();

  checkboxes.forEach((box) => {
    box.addEventListener('click', completeTask);
  });
  deleteTaskButtons.forEach((button) => {
    button.addEventListener('click', deleteTask);
  });

  function completeTask() {
    this.parentNode.parentNode.classList.add('completed');
    const taskDesc = this.parentNode.parentNode.querySelector('.task-desc')
      .textContent;
    const task = currentProject.getTask(taskDesc);
    task.isCompleted = true;
    reloadTasks();
    Storage.saveApp(app);
  }

  function deleteTask() {
    const taskDesc = this.parentNode.parentNode.querySelector('.task-desc')
      .textContent;
    currentProject.removeTask(taskDesc);
    this.parentNode.parentNode.remove();
    Storage.saveApp(app);
  }
}

function initClearCompleted() {
  const clearCompletedButton = document.querySelector('.clear-completed');

  clearCompletedButton.addEventListener('click', clearCompleted);

  function clearCompleted() {
    const currentProject = getActiveProject();
    currentProject.getCompletedTasks().forEach((task) => {
      currentProject.removeTask(task);
    });
    Storage.saveApp(app);
    reloadTasks();
  }
}

function handleKeyboard() {
  const projectNameInput = document.querySelector('.project-name-input');
  const addProjectButton = document.querySelector('.add-project-btn');
  const taskInput = document.querySelector('.task-desc-input');
  const taskDateInput = document.querySelector('.task-date-input');
  const addTaskButton = document.querySelector('.task-add');
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      if (document.activeElement === projectNameInput) {
        addProjectButton.click();
      } else if (
        document.activeElement === taskInput ||
        document.activeElement === taskDateInput
      ) {
        addTaskButton.click();
      }
    }
  });
}

function toggleTaskForm() {
  const addNewTaskButton = document.querySelector('.add-task');
  const taskForm = document.querySelector('.task-form');
  const taskInput = document.querySelector('.task-desc-input');
  const taskDateInput = document.querySelector('.task-date-input');
  addNewTaskButton.classList.toggle('display-none');
  taskForm.classList.toggle('display-none');
  taskInput.value = '';
  taskInput.focus();
  taskDateInput.value = '';
}

function handleAddTask() {
  const addTask = document.querySelector('.add-task');
  const taskForm = document.querySelector('.task-form');
  if (
    getActiveProject().name === 'Today' ||
    getActiveProject().name === 'This Week'
  ) {
    addTask.classList.add('display-none');
  } else {
    addTask.classList.remove('display-none');
  }
  taskForm.classList.add('display-none');
}

function getActiveProject() {
  return app.getProject(
    document.querySelector('.active').querySelector('p').textContent
  );
}

function setActive(ele) {
  const projects = document.querySelectorAll('.project');
  ele.classList.add('active');
  projects.forEach((project) => {
    if (project != ele) {
      project.classList.remove('active');
    }
  });
}

function reloadTasks() {
  removeTasks();
  renderTasks();
  initTaskButtons();
}

function renderTasks() {
  const taskList = document.querySelector('.tasks');
  const currentProject = getActiveProject();
  currentProject.tasks.forEach((task) => {
    if (!task.isCompleted) {
      const li = document.createElement('li');
      li.className = 'task';
      li.innerHTML = `<div class="task-wrapper">
      <img class="checkbox" src="img/circle.svg" alt="">
      <p class="task-desc">${task.desc}</p>
      </div>
      <p class="task-date">${task.date}</p>
      <div class="task-buttons">
        <img class="task-button delete-task" src="./img/delete.svg" alt="">
      </div>`;
      taskList.appendChild(li);
    }
  });
  currentProject.tasks.forEach((task) => {
    if (task.isCompleted) {
      const li = document.createElement('li');
      li.className = 'task completed';
      li.innerHTML = `<div class="task-wrapper">
      <img class="checkbox" src="img/circle.svg" alt="">
      <p class="task-desc">${task.desc}</p>
      </div>
      <p class="task-date">${task.date}</p>
      <div class="task-buttons">
        <img class="task-button delete-task" src="./img/delete.svg" alt="">
      </div>`;
      taskList.appendChild(li);
    }
  });
}

function removeTasks() {
  const taskList = document.querySelector('.tasks');
  taskList.textContent = '';
}

function reloadNewProjects() {
  removeNewProjects();
  renderNewProjects();
  initProjectButtons();
}

function renderNewProjects() {
  const newProjectsList = document.querySelector('.new-projects');
  app.projects.forEach((project) => {
    if (!project.isDefault) {
      const li = document.createElement('li');
      li.className = 'project new-project';
      li.innerHTML = `<div class="new-project-name">
          <img src="./img/folder.svg" alt=""> 
          <p>${project.name}</p>
        </div>
        <img class="project-delete-icon" src="./img/delete.svg" alt="">`;
      newProjectsList.appendChild(li);
    }
  });
}

function removeNewProjects() {
  const newProjects = document.querySelector('.new-projects');
  newProjects.textContent = '';
}

function renderDefaultProjects() {
  const defaultProjectsList = document.querySelector('.default-projects');
  app.getProjects.forEach((project) => {
    if (project.isDefault)
      defaultProjectsList.appendChild(createDefaultProjects(project));
  });
}

function createDefaultProjects(project) {
  const li = document.createElement('li');
  li.className = 'project default';
  if (project.getName === 'Inbox') {
    li.setAttribute('id', 'inbox');
    li.classList.add('active');
    li.innerHTML = '<img src="./img/inbox.svg" alt=""> <p>Inbox</p>';
  } /* else if (project.getName === "Today") {
    li.setAttribute("id", "today")
    li.innerHTML = '<img src="./img/today.svg" alt=""> <p>Today</p>';
  } else if (project.getName === "This Week") {
    li.setAttribute("id", "this-week")
    li.innerHTML = '<img src="./img/week.svg" alt=""> <p>This Week</p>';
  }  */
  return li;
}

function toggleNav() {
  const navButton = document.querySelector('.hamburger');
  navButton.addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('nav-adjust');
    document.querySelector('main').classList.toggle('main-adjust');
  });
}
