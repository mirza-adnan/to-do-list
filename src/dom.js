import App from "./app.js";
import {app} from "./app.js";
import Project from "./project.js";
import Task from "./task.js";
import Storage from "./storage.js";


function init() {
  toggleNav();
  renderDefaultProjects();
}

function toggleNav() {
  const navButton = document.querySelector(".hamburger");
  navButton.addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("nav-hide");
    document.querySelector("main").classList.toggle("main-toggle-margin");
  });
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
    li.innerHTML = '<img src="./img/inbox.svg" alt=""> <span>This Week</span>';
  }
  return li;
}

function toggleProjectForm() {
  const newProjectButton = getNewProjectButton();
  newProjectButton.classList.toggle("display-none");
  const projectForm = getProjectForm();
  projectForm.classList.toggle("display-none");
}

function clearProjectInput() {
  document.querySelector(".project-name-input").value = "";
}

export default init;
