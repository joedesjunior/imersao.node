webpackHotUpdate_N_E("pages/create",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "C:\\Users\\joede\\OneDrive\\\xC1rea de Trabalho\\imersaoNode\\frontend\\pages\\create.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function create() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    description: '',
    status: ''
  }),
      meta = _useState[0],
      setMeta = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1];

  var onchangeInput = function onchangeInput(e) {
    return setMeta(_objectSpread(_objectSpread({}, meta), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.value)));
  };

  var sendMeta = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setResponse({
                formSave: true
              });
              _context.prev = 2;
              _context.next = 5;
              return fetch("http://localhost:8000/cadastrarMetas", {
                method: 'POST',
                body: JSON.stringify(meta),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              responseEnv = _context.sent;

              if (responseEnv.error) {
                setResponse({
                  formSave: false,
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setResponse({
                  formSave: false,
                  type: 'success',
                  message: responseEnv.message
                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              setResponse({
                formSave: false,
                type: 'error',
                message: 'Error'
              });

            case 15:
              ;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function sendMeta(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Cadastrar Nova meta"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: response.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 38
      }, this) : "", response.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: response.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 40
      }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: sendMeta,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Nome: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          id: "name",
          placeholder: "Nome da meta: ",
          onChange: onchangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Descri\xE7\xE3o: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "description",
          id: "description",
          placeholder: "Descri\xE7\xE3o da meta: ",
          onChange: onchangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Status: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "status",
          id: "status",
          placeholder: "Status da meta: ",
          onChange: onchangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, this), response.formSave ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          disabled: true,
          children: "Cadastrando..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 34
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "chch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 91
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

_s(create, "G3PtRy5gv7m8n01I24s+7/FNNlU=");

/* harmony default export */ __webpack_exports__["default"] = (create);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwibWV0YSIsInNldE1ldGEiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsIm9uY2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kTWV0YSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBRVVDLHNEQUFRLENBQUM7QUFDN0JDLFFBQUksRUFBRSxFQUR1QjtBQUU3QkMsZUFBVyxFQUFFLEVBRmdCO0FBRzdCQyxVQUFNLEVBQUU7QUFIcUIsR0FBRCxDQUZsQjtBQUFBLE1BRVBDLElBRk87QUFBQSxNQUVEQyxPQUZDOztBQUFBLG1CQVFtQkwsc0RBQVEsQ0FBQztBQUN0Q00sWUFBUSxFQUFFLEtBRDRCO0FBRXRDQyxRQUFJLEVBQUUsRUFGZ0M7QUFHdENDLFdBQU8sRUFBRTtBQUg2QixHQUFELENBUjNCO0FBQUEsTUFRTkMsUUFSTTtBQUFBLE1BUUlDLFdBUko7O0FBY2QsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxDQUFDO0FBQUEsV0FBSVAsT0FBTyxpQ0FBS0QsSUFBTCxxR0FBWVEsQ0FBQyxDQUFDQyxNQUFGLENBQVNaLElBQXJCLEVBQTRCVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckMsR0FBWDtBQUFBLEdBQXZCOztBQUVBLE1BQU1DLFFBQVE7QUFBQSxnTUFBRyxpQkFBTUgsQ0FBTjtB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QWFLRixRQUFRLENBQUNILFFBQVQsZ0JBQW9CO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0Isa0JBQVEsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXBCLGdCQUE2RTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQTBCSDs7R0FsRlFQLE07O0FBb0ZNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcmVhdGUuZTBmMmJmZGVjMDg5MjM5ZjU4MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7SnVtYm90cm9uLCBDb250YWluZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuXHJcbiAgICBjb25zdCBbbWV0YSwgc2V0TWV0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJywgXHJcbiAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgWyByZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZvcm1TYXZlOiBmYWxzZSwgXHJcbiAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgbWVzc2FnZTogJycsIFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvbmNoYW5nZUlucHV0ID0gZSA9PiBzZXRNZXRhKHsuLi5tZXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcclxuXHJcbiAgICBjb25zdCBzZW5kTWV0YSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRSZXNwb25zZSh7Zm9ybVNhdmU6IHRydWV9KTtcclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvY2FkYXN0cmFyTWV0YXNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcclxuICAgICAgICAgICAgYm9keTogICBKU09OLnN0cmluZ2lmeShtZXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYocmVzcG9uc2VFbnYuZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlLCBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZSwgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLCBcclxuICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yJywgXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbn1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEp1bWJvdHJvbj5cclxuICAgICAgICA8aDE+Q2FkYXN0cmFyIE5vdmEgbWV0YTwvaDE+XHJcblxyXG4gICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnZXJyb3InID8gPHA+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9wPiA6IFwiXCJ9XHJcbiAgICAgICAge3Jlc3BvbnNlLnR5cGUgPT09ICdzdWNjZXNzJyA/IDxwPntyZXNwb25zZS5tZXNzYWdlfTwvcD4gOiBcIlwifVxyXG5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZE1ldGF9PlxyXG4gICAgICAgICAgICA8bGFiZWw+Tm9tZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWUgZGEgbWV0YTogXCIgb25DaGFuZ2U9e29uY2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWw+RGVzY3Jpw6fDo286IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyacOnw6NvIGRhIG1ldGE6IFwiIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsPlN0YXR1czogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXR1c1wiIGlkPVwic3RhdHVzXCIgcGxhY2Vob2xkZXI9XCJTdGF0dXMgZGEgbWV0YTogXCIgb25DaGFuZ2U9e29uY2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIHtyZXNwb25zZS5mb3JtU2F2ZSA/IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPkNhZGFzdHJhbmRvLi4uPC9idXR0b24+IDogPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Y2hjaDwvYnV0dG9uPiB9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlOyJdLCJzb3VyY2VSb290IjoiIn0=