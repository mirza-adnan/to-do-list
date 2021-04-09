class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.addTask = function(task) {
      this.tasks.push(task);
    }
    this.makeElement = function() {
      const li = document.createElement("li");
      li.classList.add("project", "new-project");
      const div = document.createElement("div");
      div.classList.add("new-project-name");
      const folderIcon = document.createElement("img");
      folderIcon.src = "./img/folder.svg";
      const projectName = document.createElement("p");
      projectName.textContent = this.name;
      div.appendChild(folderIcon);
      div.appendChild(projectName);
      const deleteButton = document.createElement("img");
      deleteButton.src = "./img/delete.svg";
      li.appendChild(div);
      li.appendChild(deleteButton);
      
      return li;
    }
    this.element = this.makeElement();
  }
}

export default Project;