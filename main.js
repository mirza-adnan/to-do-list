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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App),\n/* harmony export */   \"app\": () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\nclass App {\r\n  constructor() {\r\n    this.projects = [];\r\n    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__.default(\"Inbox\", true));\r\n    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__.default(\"Today\", true));\r\n    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__.default(\"This Week\", true));\r\n  }\r\n\r\n  get getProjects() {\r\n    return this.projects;\r\n  }\r\n\r\n  addProject(newProject) {\r\n    const sameProjectName = this.projects.some(project => newProject.getName === project.getName);\r\n    if (sameProjectName) {\r\n      alert(\"You cannot have two projects with the same name\");\r\n      return;\r\n    }\r\n    this.projects.push(newProject);\r\n  }\r\n\r\n  removeProject(projectName) {\r\n    const projectToRemove = this.projects.find(project => {\r\n      if (project.getName === projectName) {\r\n        return true;\r\n      }\r\n    })\r\n    this.projects.splice(this.projects.indexOf(projectToRemove), 1);\r\n  }\r\n\r\n  set setProjects(projects) {\r\n    this.projects = projects;\r\n  }\r\n}\r\n\r\nconst app = getCurrentApp();\r\n\r\nfunction getCurrentApp() {\r\n  let app;\r\n  if (!localStorage.getItem(\"app\")) {\r\n    app = new App();\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_1__.default.saveApp(app);\r\n  } else {\r\n    app = _storage_js__WEBPACK_IMPORTED_MODULE_1__.default.getApp();\r\n    app.setProjects = _storage_js__WEBPACK_IMPORTED_MODULE_1__.default.setProjects(app);\r\n  }\r\n  return app;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/app.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction init() {\r\n  toggleNav();\r\n  renderDefaultProjects();\r\n  renderNewProjects();\r\n  newProjectButtons();\r\n}\r\n\r\nfunction toggleNav() {\r\n  const navButton = document.querySelector(\".hamburger\");\r\n  navButton.addEventListener(\"click\", function () {\r\n    document.querySelector(\"nav\").classList.toggle(\"nav-hide\");\r\n    document.querySelector(\"main\").classList.toggle(\"main-toggle-margin\");\r\n  });\r\n}\r\n\r\nfunction newProjectButtons() {\r\n  const projectForm = document.querySelector(\".project-form\");\r\n  const projectNameInput = document.querySelector(\".project-name-input\");\r\n  const newProjectButton = document.querySelector(\".new-project-btn\");\r\n  const cancelButton = document.querySelector(\".cancel-project-btn\");\r\n  const addButton = document.querySelector(\".add-project-btn\");\r\n  newProjectButton.addEventListener(\"click\", toggleProjectForm);\r\n  cancelButton.addEventListener(\"click\", cancelProject);\r\n  addButton.addEventListener(\"click\", addProject);\r\n\r\n  function addProject() {\r\n    const projectName = projectNameInput.value;\r\n    if (projectName === \"\") {\r\n      alert(\"You have to name your project\");\r\n      return;\r\n    }\r\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(projectName, false);\r\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.app.addProject(newProject);\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_3__.default.saveApp(_app_js__WEBPACK_IMPORTED_MODULE_0__.app);\r\n    toggleProjectForm();\r\n    clearProjectInput();\r\n    removeNewProjects();\r\n    renderNewProjects();\r\n  }\r\n  \r\n  function toggleProjectForm() {\r\n    newProjectButton.classList.toggle(\"display-none\");\r\n    projectForm.classList.toggle(\"display-none\");\r\n  }\r\n  \r\n  function cancelProject() {\r\n    toggleProjectForm();\r\n    clearProjectInput()\r\n  }\r\n  \r\n  function clearProjectInput() {\r\n    projectNameInput.value = \"\";\r\n  }\r\n}\r\n\r\nfunction renderNewProjects() {\r\n  const newProjectsList = document.querySelector(\".new-projects\");\r\n  _app_js__WEBPACK_IMPORTED_MODULE_0__.app.projects.forEach(project => {\r\n    if (!project.isDefault) {\r\n      const li = document.createElement(\"li\");\r\n      li.className = \"project new-project\";\r\n      li.innerHTML = \r\n        `<div class=\"new-project-name\">\r\n          <img src=\"./img/folder.svg\" alt=\"\"> \r\n          <p>${project.name}</p>\r\n        </div>\r\n        <img class=\"delete-icon\" src=\"./img/delete.svg\" alt=\"\">`; \r\n    newProjectsList.appendChild(li);\r\n    }\r\n  })\r\n}\r\n\r\nfunction removeNewProjects() {\r\n  const newProjects = document.querySelectorAll(\".new-project\");\r\n  newProjects.forEach(project => {\r\n    project.remove();\r\n  })\r\n}\r\n\r\nfunction renderDefaultProjects() {\r\n  const defaultProjectsList = document.querySelector(\".default-projects\");\r\n  _app_js__WEBPACK_IMPORTED_MODULE_0__.app.getProjects.forEach((project) => {\r\n    if (project.isDefault)\r\n      defaultProjectsList.appendChild(createDefaultProjects(project));\r\n  });\r\n}\r\n\r\nfunction createDefaultProjects(project) {\r\n  const li = document.createElement(\"li\");\r\n  li.className = \"project default\";\r\n  if (project.getName === \"Inbox\") {\r\n    li.innerHTML = '<img src=\"./img/inbox.svg\" alt=\"\"> <span>Inbox</span>';\r\n  } else if (project.getName === \"Today\") {\r\n    li.innerHTML = '<img src=\"./img/today.svg\" alt=\"\"> <span>Today</span>';\r\n  } else if (project.getName === \"This Week\") {\r\n    li.innerHTML = '<img src=\"./img/week.svg\" alt=\"\"> <span>This Week</span>';\r\n  }\r\n  return li;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor(name, isDefault) {\r\n    this.name = name;\r\n    this.isDefault = isDefault;\r\n    this.tasks = [];\r\n  }\r\n\r\n  get getName() {\r\n    return this.name;\r\n  }\r\n\r\n  get getTasks() {\r\n    return this.tasks;\r\n  }\r\n\r\n  addTask(newTask) {\r\n    if (this.tasks.includes(newTask)) {\r\n      alert(\"You cannot have two tasks with the same description\");\r\n      return;\r\n    }\r\n    this.tasks.push(newTask)\r\n  }\r\n\r\n  removeTask(taskName) {\r\n    const taskToDelete = this.tasks.find(task => {\r\n      if (task.getDesc === taskName) {\r\n        return true;\r\n      }\r\n    })\r\n    this.tasks.splice(this.tasks.indexOf(taskToDelete), 1);\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\nconst Storage = (function() {\r\n\r\n  function saveApp(appObject) {\r\n    localStorage.setItem(\"app\", JSON.stringify(appObject));\r\n  }\r\n\r\n  function getApp() {\r\n    return Object.assign(new _app_js__WEBPACK_IMPORTED_MODULE_0__.default(), JSON.parse(localStorage.getItem(\"app\")));\r\n  }\r\n\r\n  function setProjects(appObject) {\r\n    const projects = appObject.projects.map(project=> {\r\n      return Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(), project);\r\n    })\r\n    return projects;\r\n  }\r\n\r\n  return {\r\n    saveApp,\r\n    getApp,\r\n    setProjects,\r\n  }\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(desc, day) {\r\n    this.desc = desc;\r\n    this.date = date;\r\n  }\r\n\r\n  get getDesc() {\r\n    return this.desc\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

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