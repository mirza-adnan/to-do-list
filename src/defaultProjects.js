class Default{
  constructor(name, id) {
    this.name = name;
    this.tasks = [];
    this.addTask = function(task) {
      this.tasks.push(task);
    }
    this.removeTask = function(task) {
      this.tasks.forEach(task => {
        this.tasks.splice(this.tasks.indexOf(task), 1);
      })
    }
    this.element = document.querySelector(`li#${id}`);
  }
}

export default Default;