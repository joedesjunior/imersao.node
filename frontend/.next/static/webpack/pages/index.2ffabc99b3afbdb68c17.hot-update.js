webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");


var _jsxFileName = "C:\\Users\\joede\\OneDrive\\\xC1rea de Trabalho\\imersaoNode\\frontend\\pages\\index.js";



function HomePage(_ref) {
  var _this = this;

  var data = _ref.data;
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
      children: [console.log(data.MetasModels), data.MetasModels.map(function (meta) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["Nome: ", meta.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["Descri\xE7\xE3o: ", meta.description]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: ["Status: ", meta.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, _this)]
        }, meta._id, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = HomePage;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIk1ldGFzTW9kZWxzIiwibWFwIiwibWV0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsUUFBVCxPQUEwQjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUN0QixzQkFDRTtBQUFBLDRCQUNBLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFHQTtBQUFBLGlCQUNHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxXQUFqQixDQURILEVBR0lILElBQUksQ0FBQ0csV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQUMsSUFBSTtBQUFBLDRCQUN2QjtBQUFBLGtDQUNFO0FBQUEsaUNBQVdBLElBQUksQ0FBQ0MsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSw0Q0FBZ0JELElBQUksQ0FBQ0UsV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxtQ0FBYUYsSUFBSSxDQUFDRyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUEsV0FBVUgsSUFBSSxDQUFDSSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHVCO0FBQUEsT0FBekIsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIQTtBQUFBLGtCQURGO0FBbUJIOztLQXBCUVYsUTs7QUFtQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmZmFiYzk5YjNhZmJkYjY4YzE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgJy4vX2FwcCc7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2Uoe2RhdGF9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8TWVudSAvPlxyXG4gICAgICA8aDE+TWluaGEgbWV0YXM6PC9oMT5cclxuICAgICAgPHA+XHJcbiAgICAgICAge2NvbnNvbGUubG9nKGRhdGEuTWV0YXNNb2RlbHMpfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGEuTWV0YXNNb2RlbHMubWFwKG1ldGEgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17bWV0YS5faWR9PlxyXG4gICAgICAgICAgICAgIDxoMj5Ob21lOiB7bWV0YS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGgyPkRlc2NyacOnw6NvOiB7bWV0YS5kZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgIDxoMj5TdGF0dXM6IHttZXRhLnN0YXR1c308L2gyPlxyXG4gICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiAgXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgYXBpID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9saXN0YXJNZXRhc2ApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5qc29uKCk7IFxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=