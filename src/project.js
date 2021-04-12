export default class Project {
  constructor(name, isDefault) {
    this.name = name;
    this.isDefault = isDefault;
    this.tasks = [];
  }

  get getName() {
    return this.name;
  }

  get getTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  addTask(newTask) {
    const sameTaskDesc = this.tasks.some(task => task.desc === newTask.desc);
    if (sameTaskDesc) {
      alert("You cannot have two tasks with the same description");
      return;
    }
    this.tasks.push(newTask)
  }

  removeTask(taskName) {
    const taskToDelete = this.tasks.find(task => {
      if (task.getDesc === taskName) {
        return true;
      }
    })
    this.tasks.splice(this.tasks.indexOf(taskToDelete), 1);
  }

  getTask(taskDesc) {
    const task = this.tasks.find(task => {
      if (task.getDesc === taskDesc) {
        return true;
      }
    })
    return task;
  }
}