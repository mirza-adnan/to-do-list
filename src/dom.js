import App from "./app.js";
import {app} from "./app.js";
import Project from "./project.js";
import Task from "./task.js";
import Storage from "./storage.js";


function init() {
  toggleNav();
  renderDefaultProjects();
  renderNewProjects();
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
  }
}

function taskFormButtons() {
  const addNewTaskButton = document.querySelector(".add-task");
  const taskForm = document.querySelector(".task-form");
  addNewTaskButton.addEventListener("click", toggleTaskForm);

  function toggleTaskForm() {
    addNewTaskButton.classList.toggle("display-none");
    taskForm.classList.toggle("display-none");
  }
}

function reloadNewProjects() {
  removeNewProjects();
  renderNewProjects();
  newProjectListeners();
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
  const newProjects = document.querySelectorAll(".new-project");
  newProjects.forEach(project => {
    project.remove();
  })
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
    li.innerHTML = '<img src="./img/inbox.svg" alt=""> <span>Inbox</span>';
  } else if (project.getName === "Today") {
    li.innerHTML = '<img src="./img/today.svg" alt=""> <span>Today</span>';
  } else if (project.getName === "This Week") {
    li.innerHTML = '<img src="./img/week.svg" alt=""> <span>This Week</span>';
  }
  return li;
}

export default init;
