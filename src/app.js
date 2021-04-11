import Project from "./project.js";
import Storage from "./storage.js";
export default class App {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Inbox", true));
    this.projects.push(new Project("Today", true));
    this.projects.push(new Project("This Week", true));
  }

  get getProjects() {
    return this.projects;
  }

  addProject(newProject) {
    const sameProjectName = this.projects.some(project => newProject.getName === project.getName);
    if (sameProjectName) {
      alert("You cannot have two projects with the same name");
      return;
    }
    this.projects.push(newProject);
  }

  removeProject(projectName) {
    const projectToRemove = this.projects.find(project => {
      if (project.getName === projectName) {
        return true;
      }
    })
    this.projects.splice(this.projects.indexOf(projectToRemove), 1);
  }

  set setProjects(projects) {
    this.projects = projects;
  }

  getProject(projectName) {
    const project = this.projects.find(project => {
      if (project.getName === projectName) return true;
    })
    return project;
  }
}

const app = getCurrentApp();

function getCurrentApp() {
  let app;
  if (!localStorage.getItem("app")) {
    app = new App();
    Storage.saveApp(app);
  } else {
    app = Storage.getApp();
    Storage.getProjects(app);
    Storage.getTasks(app);
  }
  return app;
}
export {app};
