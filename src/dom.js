import App from "./app.js";
import {app} from "./app.js";
import Project from "./project.js";
import Task from "./task.js";
import Storage from "./storage.js";


function init() {
  toggleNav();
  renderDefaultProjects();
  renderNewProjects();
  renderTasks();
  projectFormButtons();
  taskFormButtons();
  newProjectListeners();
}

function toggleNav() {
  const navButton = document.querySelector(".hamburger");
  navButton.addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("nav-hide");
    document.querySelector("main").classList.toggle("main-toggle-margin");
  });
}

function projectFormButtons() {
  const projectForm = document.querySelector(".project-form");
  const projectNameInput = document.querySelector(".project-name-input");
  const newProjectButton = document.querySelector(".new-project-btn");
  const cancelButton = document.querySelector(".cancel-project-btn");
  const addButton = document.querySelector(".add-project-btn");
  newProjectButton.addEventListener("click", toggleProjectForm);
  cancelButton.addEventListener("click", cancelProject);
  addButton.addEventListener("click", addProject);

  function addProject() {
    const projectName = projectNameInput.value;
    if (projectName === "") {
      alert("You have to name your project");
      return;
    }
    const newProject = new Project(projectName, false);
    app.addProject(newProject);
    Storage.saveApp(app);
    toggleProjectForm();
    clearProjectInput();
    reloadNewProjects();
  }
  
  function toggleProjectForm() {
    newProjectButton.classList.toggle("display-none");
    projectForm.classList.toggle("display-none");
  }
  
  function cancelProject() {
    toggleProjectForm();
    clearProjectInput()
  }
  
  function clearProjectInput() {
    projectNameInput.value = "";
  }
}

function newProjectListeners() {
  const deleteButton = document.querySelectorAll(".project-delete-icon");
  const projects = document.querySelectorAll(".project");
  deleteButton.forEach(button => {
    button.addEventListener("click", deleteProject);
  })

  projects.forEach(project => {
    project.addEventListener("click", setActive);
  })

  function deleteProject() {
    const projectName = this.parentNode.querySelector("p");
    app.removeProject(projectName);
    Storage.saveApp(app);
    reloadNewProjects();
  }

  function setActive() {
    this.classList.add("active");
    projects.forEach(project => {
      if (this != project) {
        project.classList.remove("active");
      }
    })
    reloadTasks();
  }
}

function taskFormButtons() {
  const addNewTaskButton = document.querySelector(".add-task");
  const taskForm = document.querySelector(".task-form");
  const taskInput = document.querySelector(".task-desc-input");
  const taskDateInput = document.querySelector(".task-date-input");
  const addButton = document.querySelector(".task-add");
  const cancelButton = document.querySelector(".task-cancel");
  addNewTaskButton.addEventListener("click", toggleTaskForm);
  cancelButton.addEventListener("click", toggleTaskForm);
  addButton.addEventListener("click", addTask);
  
  function toggleTaskForm() {
    addNewTaskButton.classList.toggle("display-none");
    taskForm.classList.toggle("display-none");
    taskInput.value = "";
    taskDateInput.value = "";
  }

  function addTask() {
    const taskDesc = taskInput.value;
    if (taskDesc === "") {
      alert("You have to provide a task description");
      return;
    }
    const activeProjectName = document.querySelector(".active").querySelector("p").textContent;
    const project = app.getProject(activeProjectName);
    const taskDate = taskDateInput.value;
    const task = new Task(taskDesc, taskDate);
    project.addTask(task);
    toggleTaskForm();
    Storage.saveApp(app);
    reloadTasks();
  }

}

function reloadNewProjects() {
  removeNewProjects();
  renderNewProjects();
  newProjectListeners();
}

function reloadTasks() {
  removeTasks();
  renderTasks();
}

function renderTasks() {
  const taskList  = document.querySelector(".tasks");
  const currentProject = app.getProject(document.querySelector(".active").querySelector("p").textContent);
  currentProject.tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `<div class="task-wrapper">
    <img class="checkbox" src="img/circle.svg" alt="">
    <p class="task-desc">${task.desc}</p>
  </div>
  <p class="task-date">${task.date}</p>
  <div class="task-buttons">
    <img class="task-button" src="./img/delete.svg" alt="">
  </div>`
    taskList.appendChild(li);
  })
}

function removeTasks() {
  const taskList = document.querySelector(".tasks");
  taskList.textContent = "";
}

function renderNewProjects() {
  const newProjectsList = document.querySelector(".new-projects");
  app.projects.forEach(project => {
    if (!project.isDefault) {
      const li = document.createElement("li");
      li.className = "project new-project";
      li.innerHTML = 
        `<div class="new-project-name">
          <img src="./img/folder.svg" alt=""> 
          <p>${project.name}</p>
        </div>
        <img class="project-delete-icon" src="./img/delete.svg" alt="">`; 
    newProjectsList.appendChild(li);
    }
  })
}

function removeNewProjects() {
  const newProjects = document.querySelector(".new-projects");
  newProjects.textContent = "";
}


function renderDefaultProjects() {
  const defaultProjectsList = document.querySelector(".default-projects");
  app.getProjects.forEach((project) => {
    if (project.isDefault)
      defaultProjectsList.appendChild(createDefaultProjects(project));
  });
}

function createDefaultProjects(project) {
  const li = document.createElement("li");
  li.className = "project default";
  if (project.getName === "Inbox") {
    li.setAttribute("id", "inbox")
    li.classList.add("active");
    li.innerHTML = '<img src="./img/inbox.svg" alt=""> <p>Inbox</p>';
  } else if (project.getName === "Today") {
    li.setAttribute("id", "today")
    li.innerHTML = '<img src="./img/today.svg" alt=""> <p>Today</p>';
  } else if (project.getName === "This Week") {
    li.setAttribute("id", "this-week")
    li.innerHTML = '<img src="./img/week.svg" alt=""> <p>This Week</p>';
  }
  return li;
}

export default init;
