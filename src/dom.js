import Project from "./projects.js";
import app from "./app";
import Default from "./defaultProjects.js";
const dom = (function() {

  function init() {
    toggleNav();
    newProjectButtons();
    createDefaultProjects()
  }

  function toggleNav() {
    const navButton = document.querySelector(".hamburger");
      navButton.addEventListener("click", function() {
        document.querySelector("nav").classList.toggle("nav-hide");
        document.querySelector("main").classList.toggle("main-toggle-margin");
      })
  }

  function getProjectForm() {
    return document.querySelector(".project-form");
  }

  function getNewProjectButton() {
    return document.querySelector(".new-project-btn");
  }

  function newProjectButtons() {
    const newProjectButton = getNewProjectButton();
    const cancelProjectButton = document.querySelector(".cancel-project-btn");
    const addProjectButton = document.querySelector(".add-project-btn");
    newProjectButton.addEventListener("click", toggleProjectForm);
    cancelProjectButton.addEventListener("click", cancelProject);
    addProjectButton.addEventListener("click", addProject);
  }

  function cancelProject() {
    clearProjectInput();
    toggleProjectForm();
  }

  function addProject() {
    const projectNameInput = document.querySelector(".project-name-input");
    const projectName = projectNameInput.value;
    const project = new Project(projectName);
    app.addProject(project);
    renderProjects();
    toggleProjectForm();
    clearProjectInput();
  }

  function renderProjects() {
    const newProjectsList = document.querySelector(".new-projects");
    app.projects.forEach(project => {
      newProjectsList.appendChild(project.element);
    })
  }

  function createDefaultProjects() {
    const inbox = new Default("Inbox", "inbox");
    const today = new Default("Today", "today");
    const thisWeek = new Default("This Week", "this-week");
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

  return {
    init,
  }
})()
 

export {dom,}