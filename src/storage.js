import App from "./app";
import Project from "./project";
import Task from "./task";

const Storage = (function () {
  function saveApp(appObject) {
    localStorage.setItem("app", JSON.stringify(appObject));
  }

  function getApp() {
    return Object.assign(new App(), JSON.parse(localStorage.getItem("app")));
  }

  function getProjects(appObject) {
    const projects = appObject.projects.map((project) => Object.assign(new Project(), project));
    appObject.setProjects(projects);
  }

  function getTasks(appObject) {
    appObject.projects.forEach((project) => {
      const tasks = project.tasks.map((task) => Object.assign(new Task(), task));
      project.setTasks(tasks);
    });
  }

  return {
    saveApp,
    getApp,
    getProjects,
    getTasks,
  };
}());

export default Storage;
