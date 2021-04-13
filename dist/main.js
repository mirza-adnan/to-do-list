/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App),\n/* harmony export */   \"app\": () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\nclass App {\r\n  constructor() {\r\n    this.projects = [];\r\n    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__.default(\"Inbox\", true));\r\n/*     this.projects.push(new Project(\"Today\", true));\r\n    this.projects.push(new Project(\"This Week\", true));  */\r\n  }\r\n\r\n  get getProjects() {\r\n    return this.projects;\r\n  }\r\n\r\n  addProject(newProject) {\r\n    const sameProjectName = this.projects.some(project => newProject.getName === project.getName);\r\n    if (sameProjectName) {\r\n      alert(\"You cannot have two projects with the same name\");\r\n      return;\r\n    }\r\n    this.projects.push(newProject);\r\n  }\r\n\r\n  removeProject(projectName) {\r\n    const projectToRemove = this.projects.find(project => {\r\n      if (project.getName === projectName) {\r\n        return true;\r\n      }\r\n    })\r\n    this.projects.splice(this.projects.indexOf(projectToRemove), 1);\r\n  }\r\n\r\n  setProjects(projects) {\r\n    this.projects = projects;\r\n  }\r\n\r\n  getProject(projectName) {\r\n    const project = this.projects.find(project => {\r\n      if (project.getName === projectName) return true;\r\n    })\r\n    return project;\r\n  }\r\n}\r\n\r\nconst app = getCurrentApp();\r\nfunction getCurrentApp() {\r\n  let app;\r\n  if (!localStorage.getItem(\"app\")) {\r\n    app = new App();\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_1__.default.saveApp(app);\r\n  } else {\r\n    app = _storage_js__WEBPACK_IMPORTED_MODULE_1__.default.getApp();\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_1__.default.getProjects(app);\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_1__.default.getTasks(app);\r\n  }\r\n  return app;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/app.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\n\r\nfunction init() {\r\n  toggleNav();\r\n  renderDefaultProjects();\r\n  renderNewProjects();\r\n  initProjectFormButtons();\r\n  initProjectButtons();\r\n  initDefaultProjectButtons();\r\n  initTaskFormButtons();\r\n  renderTasks();\r\n  initTaskButtons();\r\n  initClearCompleted();\r\n  handleKeyboard();\r\n}\r\n\r\n// section\r\nfunction initProjectFormButtons() {\r\n  // elements related to the creation of a new project\r\n  const newProjectButton = document.querySelector(\".new-project-btn\");\r\n  const projectForm = document.querySelector(\".project-form\");\r\n  const projectNameInput = document.querySelector(\".project-name-input\")\r\n  const addProjectButton = document.querySelector(\".add-project-btn\");\r\n  const cancelProjectButton = document.querySelector(\".cancel-project-btn\");\r\n\r\n  newProjectButton.addEventListener(\"click\", toggleProjectForm);\r\n  cancelProjectButton.addEventListener(\"click\", toggleProjectForm);\r\n  addProjectButton.addEventListener(\"click\", addProject)\r\n\r\n  function addProject() {\r\n    const projectName = projectNameInput.value;\r\n    if (projectNameInput === \"\") {\r\n      alert(\"You have to name your project\");\r\n      return;\r\n    }\r\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(projectName, false);\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.app.addProject(newProject);\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_3__.default.saveApp(_app_js__WEBPACK_IMPORTED_MODULE_0__.app);\r\n    toggleProjectForm();\r\n    reloadNewProjects();\r\n  }\r\n  \r\n  function toggleProjectForm() {\r\n    projectNameInput.value = \"\";\r\n    newProjectButton.classList.toggle(\"display-none\");\r\n    projectForm.classList.toggle(\"display-none\");\r\n    projectNameInput.focus();\r\n  }\r\n}\r\n\r\n// section\r\nfunction initProjectButtons() {\r\n  // elements related to the projects that were created\r\n  const projectDeleteButtons = document.querySelectorAll(\".project-delete-icon\");\r\n  const projectTitle = document.querySelector(\".project-title\")\r\n  const newProjects = document.querySelectorAll(\".new-project\");\r\n  let deleted = false;\r\n\r\n  projectDeleteButtons.forEach(button => {\r\n    button.addEventListener(\"click\", deleteProject);\r\n  });\r\n\r\n  newProjects.forEach(project => {\r\n    project.addEventListener(\"click\", newProjectsOnClick);\r\n  })\r\n\r\n  function deleteProject() {\r\n    deleted = true;\r\n    const projectName = this.parentNode.querySelector(\"p\");\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.app.removeProject(projectName)\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_3__.default.saveApp(_app_js__WEBPACK_IMPORTED_MODULE_0__.app);\r\n    reloadNewProjects();\r\n  }\r\n\r\n  function newProjectsOnClick() {\r\n    //checking if the project that was clicked was deleted or not\r\n    // if deleted, it switches to inbox\r\n    if (deleted) {\r\n      const inbox = document.querySelector(\"#inbox\");\r\n      inbox.click();\r\n      deleted = false;\r\n      return;\r\n    };\r\n    setActive(this);\r\n    reloadTasks();\r\n    projectTitle.textContent = this.querySelector(\"p\").textContent;\r\n    handleAddTask();\r\n  }\r\n}\r\n\r\n// section\r\nfunction initDefaultProjectButtons() {\r\n  const inbox = document.querySelector(\"#inbox\");\r\n/*   const today = document.querySelector(\"#today\");\r\n  const thisWeek = document.querySelector(\"#this-week\"); */\r\n  const projectTitle = document.querySelector(\".project-title\")\r\n  \r\n  inbox.addEventListener(\"click\", () => {\r\n    setActive(inbox);\r\n    reloadTasks();\r\n    projectTitle.textContent = inbox.querySelector(\"p\").textContent;\r\n    handleAddTask();\r\n  })\r\n\r\n/*   today.addEventListener(\"click\", () => {\r\n    setActive(today);\r\n    handleAddTask();\r\n    reloadTasks();\r\n    projectTitle.textContent = today.querySelector(\"p\").textContent;\r\n  })\r\n\r\n  thisWeek.addEventListener(\"click\", () => {\r\n    setActive(thisWeek);\r\n    handleAddTask();\r\n    reloadTasks();\r\n    projectTitle.textContent = thisWeek.querySelector(\"p\").textContent;\r\n  }) */\r\n}\r\n\r\n// section\r\nfunction initTaskFormButtons() {\r\n  // elements related to the creation of a new task\r\n  const addNewTaskButton = document.querySelector(\".add-task\");\r\n  const taskForm = document.querySelector(\".task-form\");\r\n  const taskInput = document.querySelector(\".task-desc-input\");\r\n  const taskDateInput = document.querySelector(\".task-date-input\");\r\n  const addButton = document.querySelector(\".task-add\");\r\n  const cancelButton = document.querySelector(\".task-cancel\");\r\n\r\n  addNewTaskButton.addEventListener(\"click\", toggleTaskForm);\r\n  cancelButton.addEventListener(\"click\", toggleTaskForm);\r\n  addButton.addEventListener(\"click\", addTask);\r\n\r\n  function addTask() {\r\n    const taskDesc = taskInput.value;\r\n    if (taskDesc === \"\") {\r\n      alert(\"You have to provide a task description\");\r\n      return;\r\n    }\r\n    const activeProjectName = document.querySelector(\".active\").querySelector(\"p\").textContent;\r\n    const project = _app_js__WEBPACK_IMPORTED_MODULE_0__.app.getProject(activeProjectName);\r\n    const taskDate = taskDateInput.value;\r\n    const task = new _task_js__WEBPACK_IMPORTED_MODULE_2__.default(taskDesc, taskDate);\r\n    project.addTask(task);\r\n    toggleTaskForm();\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_3__.default.saveApp(_app_js__WEBPACK_IMPORTED_MODULE_0__.app);\r\n    reloadTasks();\r\n  }\r\n}\r\n\r\nfunction initTaskButtons() {\r\n  const checkboxes = document.querySelectorAll(\".checkbox\");\r\n  const deleteTaskButtons = document.querySelectorAll(\".delete-task\");\r\n  const currentProject = getActiveProject();\r\n\r\n  checkboxes.forEach(box => {\r\n    box.addEventListener(\"click\", completeTask);\r\n  })\r\n  deleteTaskButtons.forEach(button => {\r\n    button.addEventListener(\"click\", deleteTask);\r\n  })\r\n\r\n  function completeTask() {\r\n    this.parentNode.parentNode.classList.add(\"completed\")\r\n    const taskDesc = this.parentNode.parentNode.querySelector(\".task-desc\").textContent;\r\n    const task = currentProject.getTask(taskDesc);\r\n    task.isCompleted = true;\r\n    reloadTasks();\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_3__.default.saveApp(_app_js__WEBPACK_IMPORTED_MODULE_0__.app);\r\n  }\r\n\r\n  function deleteTask() {\r\n    const taskDesc = this.parentNode.parentNode.querySelector(\".task-desc\").textContent;\r\n    currentProject.removeTask(taskDesc);\r\n    this.parentNode.parentNode.remove();\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_3__.default.saveApp(_app_js__WEBPACK_IMPORTED_MODULE_0__.app);\r\n  }\r\n}\r\n\r\nfunction initClearCompleted() {\r\n  const clearCompletedButton = document.querySelector(\".clear-completed\");\r\n\r\n  clearCompletedButton.addEventListener(\"click\", clearCompleted);\r\n\r\n  function clearCompleted() {\r\n    const currentProject = getActiveProject();\r\n    currentProject.getCompletedTasks().forEach(task => {\r\n      currentProject.removeTask(task);\r\n    })\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_3__.default.saveApp(_app_js__WEBPACK_IMPORTED_MODULE_0__.app);\r\n    reloadTasks();\r\n  }\r\n}\r\n\r\nfunction handleKeyboard() {\r\n  const projectNameInput = document.querySelector(\".project-name-input\")\r\n  const addProjectButton = document.querySelector(\".add-project-btn\");\r\n  const taskInput = document.querySelector(\".task-desc-input\");\r\n  const taskDateInput = document.querySelector(\".task-date-input\");\r\n  const addTaskButton = document.querySelector(\".task-add\");\r\n  window.addEventListener(\"keydown\", function(e) {\r\n    if (e.key === \"Enter\") {\r\n      if (document.activeElement === projectNameInput) {\r\n        addProjectButton.click();\r\n      } else if (document.activeElement === taskInput || document.activeElement === taskDateInput) {\r\n        addTaskButton.click();\r\n      }\r\n    }\r\n  })\r\n}\r\n\r\nfunction toggleTaskForm() {\r\n  const addNewTaskButton = document.querySelector(\".add-task\");\r\n  const taskForm = document.querySelector(\".task-form\");\r\n  const taskInput = document.querySelector(\".task-desc-input\");\r\n  const taskDateInput = document.querySelector(\".task-date-input\");\r\n  addNewTaskButton.classList.toggle(\"display-none\");\r\n  taskForm.classList.toggle(\"display-none\");\r\n  taskInput.value = \"\";\r\n  taskInput.focus();\r\n  taskDateInput.value = \"\";\r\n}\r\n\r\nfunction handleAddTask() {\r\n  const addTask = document.querySelector(\".add-task\");\r\n  const taskForm = document.querySelector(\".task-form\");\r\n  if (getActiveProject().name === \"Today\" || getActiveProject().name === \"This Week\") {\r\n    addTask.classList.add(\"display-none\");\r\n  } else {\r\n    addTask.classList.remove(\"display-none\");\r\n  }\r\n  taskForm.classList.add(\"display-none\");\r\n}\r\n\r\nfunction getActiveProject() {\r\n  return _app_js__WEBPACK_IMPORTED_MODULE_0__.app.getProject(document.querySelector(\".active\").querySelector(\"p\").textContent);\r\n}\r\n\r\nfunction setActive(ele) {\r\n  const projects = document.querySelectorAll(\".project\");\r\n  ele.classList.add(\"active\");\r\n  projects.forEach(project => {\r\n    if (project != ele) {\r\n      project.classList.remove(\"active\");\r\n    }\r\n  })\r\n}\r\n\r\nfunction reloadTasks() {\r\n  removeTasks();\r\n  renderTasks();\r\n  initTaskButtons();\r\n}\r\n\r\nfunction renderTasks() {\r\n  const taskList  = document.querySelector(\".tasks\");\r\n  const currentProject = getActiveProject();\r\n  currentProject.tasks.forEach(task => {\r\n    if (!task.isCompleted) {\r\n      const li = document.createElement(\"li\");\r\n      li.className = \"task\";\r\n      li.innerHTML = `<div class=\"task-wrapper\">\r\n      <img class=\"checkbox\" src=\"img/circle.svg\" alt=\"\">\r\n      <p class=\"task-desc\">${task.desc}</p>\r\n      </div>\r\n      <p class=\"task-date\">${task.date}</p>\r\n      <div class=\"task-buttons\">\r\n        <img class=\"task-button delete-task\" src=\"./img/delete.svg\" alt=\"\">\r\n      </div>`\r\n      taskList.appendChild(li);\r\n    }\r\n  })\r\n  currentProject.tasks.forEach(task => {\r\n    if (task.isCompleted) {\r\n      const li = document.createElement(\"li\");\r\n      li.className = \"task completed\";\r\n      li.innerHTML = `<div class=\"task-wrapper\">\r\n      <img class=\"checkbox\" src=\"img/circle.svg\" alt=\"\">\r\n      <p class=\"task-desc\">${task.desc}</p>\r\n      </div>\r\n      <p class=\"task-date\">${task.date}</p>\r\n      <div class=\"task-buttons\">\r\n        <img class=\"task-button delete-task\" src=\"./img/delete.svg\" alt=\"\">\r\n      </div>`\r\n      taskList.appendChild(li);\r\n    }\r\n  })\r\n}\r\n\r\nfunction removeTasks() {\r\n  const taskList = document.querySelector(\".tasks\");\r\n  taskList.textContent = \"\";\r\n}\r\n\r\nfunction reloadNewProjects() {\r\n  removeNewProjects();\r\n  renderNewProjects();\r\n  initProjectButtons();\r\n}\r\n\r\nfunction renderNewProjects() {\r\n  const newProjectsList = document.querySelector(\".new-projects\");\r\n  _app_js__WEBPACK_IMPORTED_MODULE_0__.app.projects.forEach(project => {\r\n    if (!project.isDefault) {\r\n      const li = document.createElement(\"li\");\r\n      li.className = \"project new-project\";\r\n      li.innerHTML = \r\n        `<div class=\"new-project-name\">\r\n          <img src=\"./img/folder.svg\" alt=\"\"> \r\n          <p>${project.name}</p>\r\n        </div>\r\n        <img class=\"project-delete-icon\" src=\"./img/delete.svg\" alt=\"\">`; \r\n    newProjectsList.appendChild(li);\r\n    }\r\n  })\r\n}\r\n\r\nfunction removeNewProjects() {\r\n  const newProjects = document.querySelector(\".new-projects\");\r\n  newProjects.textContent = \"\";\r\n}\r\n\r\nfunction renderDefaultProjects() {\r\n  const defaultProjectsList = document.querySelector(\".default-projects\");\r\n  _app_js__WEBPACK_IMPORTED_MODULE_0__.app.getProjects.forEach((project) => {\r\n    if (project.isDefault)\r\n      defaultProjectsList.appendChild(createDefaultProjects(project));\r\n  });\r\n}\r\n\r\nfunction createDefaultProjects(project) {\r\n  const li = document.createElement(\"li\");\r\n  li.className = \"project default\";\r\n  if (project.getName === \"Inbox\") {\r\n    li.setAttribute(\"id\", \"inbox\")\r\n    li.classList.add(\"active\");\r\n    li.innerHTML = '<img src=\"./img/inbox.svg\" alt=\"\"> <p>Inbox</p>';\r\n   }  /* else if (project.getName === \"Today\") {\r\n    li.setAttribute(\"id\", \"today\")\r\n    li.innerHTML = '<img src=\"./img/today.svg\" alt=\"\"> <p>Today</p>';\r\n  } else if (project.getName === \"This Week\") {\r\n    li.setAttribute(\"id\", \"this-week\")\r\n    li.innerHTML = '<img src=\"./img/week.svg\" alt=\"\"> <p>This Week</p>';\r\n  }  */\r\n  return li;\r\n}\r\n\r\nfunction toggleNav() {\r\n  const navButton = document.querySelector(\".hamburger\");\r\n  navButton.addEventListener(\"click\", function () {\r\n    document.querySelector(\"nav\").classList.toggle(\"nav-adjust\");\r\n    document.querySelector(\"main\").classList.toggle(\"main-adjust\");\r\n  });\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor(name, isDefault) {\r\n    this.name = name;\r\n    this.isDefault = isDefault;\r\n    this.tasks = [];\r\n  }\r\n\r\n  get getName() {\r\n    return this.name;\r\n  }\r\n\r\n  get getTasks() {\r\n    return this.tasks;\r\n  }\r\n\r\n  setTasks(tasks) {\r\n    this.tasks = tasks;\r\n  }\r\n\r\n  addTask(newTask) {\r\n    const sameTaskDesc = this.tasks.some(task => task.desc === newTask.desc);\r\n    if (sameTaskDesc) {\r\n      alert(\"You cannot have two tasks with the same description\");\r\n      return;\r\n    }\r\n    this.tasks.push(newTask)\r\n  }\r\n\r\n  removeTask(taskName) {\r\n    const taskToDelete = this.tasks.find(task => {\r\n      if (task.desc === taskName) {\r\n        return true;\r\n      }\r\n    })\r\n    this.tasks.splice(this.tasks.indexOf(taskToDelete), 1);\r\n  }\r\n\r\n  getTask(taskDesc) {\r\n    const task = this.tasks.find(task => {\r\n      if (task.desc === taskDesc) {\r\n        return true;\r\n      }\r\n    })\r\n    return task;\r\n  }\r\n\r\n  getCompletedTasks() {\r\n    const completed = this.tasks.filter(task => task.isCompleted);\r\n    return completed\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\nconst Storage = (function() {\r\n\r\n  function saveApp(appObject) {\r\n    localStorage.setItem(\"app\", JSON.stringify(appObject));\r\n  }\r\n\r\n  function getApp() {\r\n    return Object.assign(new _app_js__WEBPACK_IMPORTED_MODULE_0__.default(), JSON.parse(localStorage.getItem(\"app\")));\r\n  }\r\n\r\n  function getProjects(appObject) {\r\n    const projects = appObject.projects.map(project=> {\r\n      return Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(), project);\r\n    })\r\n    appObject.setProjects(projects);\r\n  }\r\n\r\n  function getTasks(appObject) {\r\n    appObject.projects.forEach(project => {\r\n      const tasks = project.tasks.map(task => {\r\n        return Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_2__.default(), task);\r\n      })\r\n      project.setTasks(tasks);\r\n    })\r\n  }\r\n\r\n  return {\r\n    saveApp,\r\n    getApp,\r\n    getProjects,\r\n    getTasks,\r\n  }\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(desc, date) {\r\n    this.desc = desc;\r\n    this.isCompleted = false;\r\n    if (date) {\r\n      date = date.split(\"-\");\r\n      this.date = `${date[1]}-${date[2]}-${date[0]}`;\r\n    } else {\r\n      this.date = \"No date\";\r\n    }\r\n  }\r\n\r\n  getDesc() {\r\n    return this.desc\r\n  }\r\n\r\n  date() {\r\n    return this.date;\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;