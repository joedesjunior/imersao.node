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
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        fluid: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-3",
          children: "Fluid jumbotron"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }, this), response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 38
        }, this) : "", response.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 40
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: sendMeta,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Nome: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "name",
            id: "name",
            placeholder: "Nome da meta: ",
            onChange: onchangeInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Descri\xE7\xE3o: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "description",
            id: "description",
            placeholder: "Descri\xE7\xE3o da meta: ",
            onChange: onchangeInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Status: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "status",
            id: "status",
            placeholder: "Status da meta: ",
            onChange: onchangeInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), response.formSave ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            disabled: true,
            children: "Cadastrando..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 34
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            children: "chch"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 91
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwibWV0YSIsInNldE1ldGEiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsIm9uY2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kTWV0YSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBRVVDLHNEQUFRLENBQUM7QUFDN0JDLFFBQUksRUFBRSxFQUR1QjtBQUU3QkMsZUFBVyxFQUFFLEVBRmdCO0FBRzdCQyxVQUFNLEVBQUU7QUFIcUIsR0FBRCxDQUZsQjtBQUFBLE1BRVBDLElBRk87QUFBQSxNQUVEQyxPQUZDOztBQUFBLG1CQVFtQkwsc0RBQVEsQ0FBQztBQUN0Q00sWUFBUSxFQUFFLEtBRDRCO0FBRXRDQyxRQUFJLEVBQUUsRUFGZ0M7QUFHdENDLFdBQU8sRUFBRTtBQUg2QixHQUFELENBUjNCO0FBQUEsTUFRTkMsUUFSTTtBQUFBLE1BUUlDLFdBUko7O0FBY2QsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxDQUFDO0FBQUEsV0FBSVAsT0FBTyxpQ0FBS0QsSUFBTCxxR0FBWVEsQ0FBQyxDQUFDQyxNQUFGLENBQVNaLElBQXJCLEVBQTRCVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBckMsR0FBWDtBQUFBLEdBQXZCOztBQUVBLE1BQU1DLFFBQVE7QUFBQSxnTUFBRyxpQkFBTUgsQ0FBTjtB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ekQ7QUFBNEUsb0JBQVEsRUFBRUE7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWSixlQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEosRUFhS0YsUUFBUSxDQUFDSCxRQUFULGdCQUFvQjtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixvQkFBUSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBcEIsZ0JBQTZFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURKO0FBNEJIOztHQXBGUVAsTTs7QUFzRk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NyZWF0ZS41MDcxZmVkZDAxNDY5ZTNhNDFjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtKdW1ib3Ryb24sIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKCkge1xyXG5cclxuICAgIGNvbnN0IFttZXRhLCBzZXRNZXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLCBcclxuICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbIHJlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6IGZhbHNlLCBcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJywgXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IG9uY2hhbmdlSW5wdXQgPSBlID0+IHNldE1ldGEoey4uLm1ldGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KVxyXG5cclxuICAgIGNvbnN0IHNlbmRNZXRhID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFJlc3BvbnNlKHtmb3JtU2F2ZTogdHJ1ZX0pO1xyXG5cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9jYWRhc3RyYXJNZXRhc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxyXG4gICAgICAgICAgICBib2R5OiAgIEpTT04uc3RyaW5naWZ5KG1ldGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICBpZihyZXNwb25zZUVudi5lcnJvcikge1xyXG4gICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2UsIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlLCBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsIFxyXG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3InLCBcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxufVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SnVtYm90cm9uIGZsdWlkPlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+IFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTNcIj5GbHVpZCBqdW1ib3Ryb248L2gxPlxyXG5cclxuICAgICAgICB7cmVzcG9uc2UudHlwZSA9PT0gJ2Vycm9yJyA/IDxwPntyZXNwb25zZS5tZXNzYWdlfTwvcD4gOiBcIlwifVxyXG4gICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycgPyA8cD57cmVzcG9uc2UubWVzc2FnZX08L3A+IDogXCJcIn1cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRNZXRhfT5cclxuICAgICAgICAgICAgPGxhYmVsPk5vbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGRhIG1ldGE6IFwiIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsPkRlc2NyacOnw6NvOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmnDp8OjbyBkYSBtZXRhOiBcIiBvbkNoYW5nZT17b25jaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbD5TdGF0dXM6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0dXNcIiBpZD1cInN0YXR1c1wiIHBsYWNlaG9sZGVyPVwiU3RhdHVzIGRhIG1ldGE6IFwiIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICB7cmVzcG9uc2UuZm9ybVNhdmUgPyA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD5DYWRhc3RyYW5kby4uLjwvYnV0dG9uPiA6IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPmNoY2g8L2J1dHRvbj4gfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTsiXSwic291cmNlUm9vdCI6IiJ9