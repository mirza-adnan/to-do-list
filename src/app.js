class App {
  constructor() {
    this.projects = [];
    this.addProject = function(project) {
      this.projects.push(project);
    }
    this.removeProject = function(project) {
      this.projects.splice(this.projects.indexOf(project), 1);
    }
  }
}

const app = new App();

export default app;