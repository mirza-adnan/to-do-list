const dom = (function() {

  function init() {
    toggleNav();
  }

  function toggleNav() {
    const navButton = document.querySelector(".hamburger");
      navButton.addEventListener("click", function() {
        document.querySelector("nav").classList.toggle("nav-hide");
        document.querySelector("main").classList.toggle("main-toggle-margin");
      })
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