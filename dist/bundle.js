/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'G:\\\\Git\\\\react-ts\\\\node_modules\\\\react-dom\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'G:\\\\Git\\\\react-ts\\\\node_modules\\\\react\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react/index.js?");

/***/ }),

/***/ "./src/components/TodoForm/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/TodoForm/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar TodoForm = function () {\r\n    var _a = react_1.useState(''), taskNameInputValue = _a[0], taskNameInputValueSet = _a[1];\r\n    var _b = react_1.useState([]), taskList = _b[0], taskListSet = _b[1];\r\n    var taskNameInputHandler = function (event) {\r\n        taskNameInputValueSet(event.target.value);\r\n    };\r\n    var taskNameButtonHandler = function (event) {\r\n        taskListSet(__spreadArrays(taskList, [\r\n            taskNameInputValue\r\n        ]));\r\n        taskNameInputValueSet('');\r\n    };\r\n    return (React.createElement(\"div\", null,\r\n        React.createElement(\"label\", null, \"Write the task you want to add!\"),\r\n        \" :\",\r\n        React.createElement(\"input\", { placeholder: \"task name\", value: taskNameInputValue, onChange: taskNameInputHandler }),\r\n        React.createElement(\"button\", { onClick: taskNameButtonHandler }, \"Add task\"),\r\n        React.createElement(\"br\", null),\r\n        React.createElement(\"ul\", null, taskList.map(function (ele, key) { return React.createElement(\"li\", null, ele); }))));\r\n};\r\nexports.default = TodoForm;\r\n\n\n//# sourceURL=webpack:///./src/components/TodoForm/index.tsx?");

/***/ }),

/***/ "./src/components/containers/Main/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/containers/Main/index.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar context_1 = __webpack_require__(/*! ../../../context */ \"./src/context/index.tsx\");\r\nvar container = function (props) {\r\n    var booksContext = react_1.useContext(context_1.BooksContext);\r\n    console.log(booksContext);\r\n    return (React.createElement(\"div\", null, props.children));\r\n};\r\nexports.MainContainer = container;\r\n\n\n//# sourceURL=webpack:///./src/components/containers/Main/index.tsx?");

/***/ }),

/***/ "./src/context/BooksContext.tsx":
/*!**************************************!*\
  !*** ./src/context/BooksContext.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nexports.Context = react_1.createContext({});\r\nexports.Provider = function (props) {\r\n    var initialBooks = props.books, children = props.children;\r\n    var _a = react_1.useState(initialBooks), books = _a[0], setBooks = _a[1];\r\n    var booksContext = {\r\n        books: books,\r\n        setBooks: setBooks\r\n    };\r\n    return React.createElement(exports.Context.Provider, { value: booksContext }, children);\r\n};\r\nexports.Consumer = exports.Context.Consumer;\r\n\n\n//# sourceURL=webpack:///./src/context/BooksContext.tsx?");

/***/ }),

/***/ "./src/context/index.tsx":
/*!*******************************!*\
  !*** ./src/context/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar BooksContext_1 = __webpack_require__(/*! ./BooksContext */ \"./src/context/BooksContext.tsx\");\r\nexports.BooksContext = BooksContext_1.Context;\r\nexports.BooksContextProvider = BooksContext_1.Provider;\r\nexports.BooksContextConsumer = BooksContext_1.Consumer;\r\n\n\n//# sourceURL=webpack:///./src/context/index.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\r\nvar Main_1 = __webpack_require__(/*! ./components/containers/Main */ \"./src/components/containers/Main/index.tsx\");\r\nvar TodoForm_1 = __webpack_require__(/*! ./components/TodoForm */ \"./src/components/TodoForm/index.tsx\");\r\nvar context_1 = __webpack_require__(/*! ./context */ \"./src/context/index.tsx\");\r\nvar books = [{ id: 1, name: \"John\" }, { id: 2, name: \"Joanna\" }];\r\nReactDOM.render(React.createElement(React.Fragment, null,\r\n    React.createElement(context_1.BooksContextProvider, { books: books },\r\n        React.createElement(Main_1.MainContainer, null,\r\n            React.createElement(TodoForm_1.default, null)))), document.querySelector('#root'));\r\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

/******/ });