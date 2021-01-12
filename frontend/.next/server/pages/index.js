module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\joede\\OneDrive\\\xC1rea de Trabalho\\imersaoNode\\frontend\\components\\Menu.js";



const Menu = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      color: "light",
      light: true,
      expand: "md",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
        href: "/",
        children: "reactstrap"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
        onClick: toggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: isOpen,
        navbar: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "mr-auto",
          navbar: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              href: "/components/",
              children: "Components"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              href: "https://github.com/reactstrap/reactstrap",
              children: "GitHub"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"], {
            nav: true,
            inNavbar: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
              nav: true,
              caret: true,
              children: "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
              right: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                children: "Option 1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                children: "Option 2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                divider: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
                children: "Reset"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarText"], {
          children: "Simple Text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\joede\\OneDrive\\\xC1rea de Trabalho\\imersaoNode\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // This default export is required in a new `pages/_app.js` file.

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");


var _jsxFileName = "C:\\Users\\joede\\OneDrive\\\xC1rea de Trabalho\\imersaoNode\\frontend\\pages\\index.js";



function HomePage({
  data
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Minha metas:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [console.log(data.MetasModels), data.MetasModels.map(meta => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Nome: ", meta.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Descri\xE7\xE3o: ", meta.description]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Status: ", meta.status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }, this)]
      }, meta._id, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

async function getServerSideProps(context) {
  const api = await fetch(`http://localhost:8000/listarMetas`);
  const data = await api.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiTWVudSIsInByb3BzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkhvbWVQYWdlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJNZXRhc01vZGVscyIsIm1hcCIsIm1ldGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJfaWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiYXBpIiwiZmV0Y2giLCJqc29uIiwibm90Rm91bmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hB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SDtBQUVjRCx1RUFBZixFOzs7Ozs7Ozs7OztBQ3ZDQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ29sbGFwc2UsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdmJhclRvZ2dsZXIsXHJcbiAgTmF2YmFyQnJhbmQsXHJcbiAgTmF2LFxyXG4gIE5hdkl0ZW0sXHJcbiAgTmF2TGluayxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIE5hdmJhclRleHRcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGNvbG9yPVwibGlnaHRcIiBsaWdodCBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPnJlYWN0c3RyYXA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jb21wb25lbnRzL1wiPkNvbXBvbmVudHM8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdHN0cmFwL3JlYWN0c3RyYXBcIj5HaXRIdWI8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duIG5hdiBpbk5hdmJhcj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgbmF2IGNhcmV0PlxyXG4gICAgICAgICAgICAgICAgT3B0aW9uc1xyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSByaWdodD5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIE9wdGlvbiAxXHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIE9wdGlvbiAyXHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8TmF2YmFyVGV4dD5TaW1wbGUgVGV4dDwvTmF2YmFyVGV4dD5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5cclxuLy8gVGhpcyBkZWZhdWx0IGV4cG9ydCBpcyByZXF1aXJlZCBpbiBhIG5ldyBgcGFnZXMvX2FwcC5qc2AgZmlsZS5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59IiwiaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0ICcuL19hcHAnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHtkYXRhfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPE1lbnUgLz5cclxuICAgICAgPGgxPk1pbmhhIG1ldGFzOjwvaDE+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIHtjb25zb2xlLmxvZyhkYXRhLk1ldGFzTW9kZWxzKX1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhLk1ldGFzTW9kZWxzLm1hcChtZXRhID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e21ldGEuX2lkfT5cclxuICAgICAgICAgICAgICA8aDI+Tm9tZToge21ldGEubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxoMj5EZXNjcmnDp8Ojbzoge21ldGEuZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgICAgICAgICA8aDI+U3RhdHVzOiB7bWV0YS5zdGF0dXN9PC9oMj5cclxuICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4gIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGFwaSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvbGlzdGFyTWV0YXNgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuanNvbigpOyBcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9