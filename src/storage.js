import App from "./app.js";
import Project from "./project.js"
const Storage = (function() {

  function saveApp(appObject) {
    localStorage.setItem("app", JSON.stringify(appObject));
  }

  function getApp() {
    return Object.assign(new App(), JSON.parse(localStorage.getItem("app")));
  }

  function setProjects(appObject) {
    const projects = appObject.projects.map(project=> {
      return Object.assign(new Project(), project);
    })
    return projects;
  }

  return {
    saveApp,
    getApp,
    setProjects,
  }
})()

export default Storage;