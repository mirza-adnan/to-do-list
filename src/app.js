import Project from "./project.js";
class App {
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
    if (this.projects.includes(newProject)) {
      alert("You cannot have two projects with the same name")
      return;
    }
    this.projects.push(newProject)
  }

  removeProject(projectName) {
    const projectToRemove = this.projects.find(project => {
      if (project.getName === projectName) {
        return true;
      }
    })
    this.projects.splice(this.projects.indexOf(projectToRemove), 1);
  }
}

const app = new App();
export default app;