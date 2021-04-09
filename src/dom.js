import Project from "./projects.js";
import app from "./app";

const dom = (function() {
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
    newProjectButton.addEventListener("click", openProjectForm);
    cancelProjectButton.addEventListener("click",cancelProject);
  }

  function openProjectForm() {
    toggleNewProjectButton();
    toggleProjectForm();
  }

  function cancelProject() {
    const projectNameInput = document.querySelector(".project-name-input");
    projectNameInput.value = "";
    toggleNewProjectButton();
    toggleProjectForm();
  }

  function addProject() {
    const projectNameInput = document.querySelector(".project-name-input");
    const projectName = projectNameInput.value;

  }

  function toggleNewProjectButton() {
    const newProjectButton = getNewProjectButton();
    newProjectButton.classList.toggle("display-none");
  }

  function toggleProjectForm() {
    const projectForm = getProjectForm();
    projectForm.classList.toggle("display-none");
  }

  return {
    toggleNav,
    newProjectButtons,
  }
})()
 

export {dom,}