"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/shop/page",{

/***/ "(app-pages-browser)/./src/app/shop/page.tsx":
/*!*******************************!*\
  !*** ./src/app/shop/page.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst products = [\n    {\n        id: 1,\n        name: \"Product 1\",\n        price: 100\n    },\n    {\n        id: 2,\n        name: \"Product 2\",\n        price: 150\n    },\n    {\n        id: 3,\n        name: \"Product 3\",\n        price: 200\n    }\n];\nconst Cart = ()=>{\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let total;\n    function addToCart(id) {\n        setCartItems([\n            ...cartItems,\n            {\n                id: id,\n                count: 1\n            }\n        ]);\n    }\n    function removeFromCart() {}\n    function listProducts() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: products.map((param)=>{\n            let { id, name, price } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    name,\n                    \"-\",\n                    price,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>addToCart(id),\n                        children: \"Add to Cart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 49\n                    }, undefined)\n                ]\n            }, id, true, {\n                fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 21\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cart, \"jeyeRm/hZ/3zvXF4PAYTLSHDNRs=\");\n_c = Cart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2hvcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUM7QUFFakMsTUFBTUMsV0FBVztJQUVqQjtRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBYUMsT0FBTztJQUFJO0lBRXZDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFhQyxPQUFPO0lBQUk7SUFFdkM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWFDLE9BQU87SUFBSTtDQUV0QztBQUlELE1BQU1DLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFVLEVBQUU7SUFDdEQsSUFBSVE7SUFHUixTQUFTQyxVQUFVUCxFQUFFO1FBQ2pCSyxhQUNJO2VBQUlEO1lBQVc7Z0JBQ1hKLElBQUlBO2dCQUNKUSxPQUFNO1lBQ2Q7U0FBRTtJQUVOO0lBRUEsU0FBU0Msa0JBRVQ7SUFFQSxTQUFTQyxnQkFFVDtJQUNJLHFCQUNJLDhEQUFDQztrQkFHSVosU0FBU2EsR0FBRyxDQUFDO2dCQUFDLEVBQUVaLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7WUFDOUIscUJBQ0ksOERBQUNTOztvQkFBY1Y7b0JBQUs7b0JBQUVDO2tDQUFNLDhEQUFDVzt3QkFBT0MsU0FBUyxJQUFJUCxVQUFVUDtrQ0FBSzs7Ozs7OztlQUF0REE7Ozs7O1FBRWxCOzs7Ozs7QUFJWjtHQWpDTUc7S0FBQUE7QUFtQ04saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVsbGFkdXJhaXBhbmRpYW4vbGFuZ0FwcC9jaW5lbGluZ28tdWkvc3JjL2FwcC9zaG9wL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHByb2R1Y3RzID0gW1xuXG57IGlkOiAxLCBuYW1lOiBcIlByb2R1Y3QgMVwiLCBwcmljZTogMTAwIH0sXG5cbnsgaWQ6IDIsIG5hbWU6IFwiUHJvZHVjdCAyXCIsIHByaWNlOiAxNTAgfSxcblxueyBpZDogMywgbmFtZTogXCJQcm9kdWN0IDNcIiwgcHJpY2U6IDIwMCB9LFxuXG5dO1xuXG5cblxuY29uc3QgQ2FydCA9ICgpID0+IHtcbiAgICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGU8dW5rbm93bj4oW10pO1xuICAgIGxldCB0b3RhbDtcblxuXG5mdW5jdGlvbiBhZGRUb0NhcnQoaWQpIHtcbiAgICBzZXRDYXJ0SXRlbXMoXG4gICAgICAgIFsuLi5jYXJ0SXRlbXMsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGNvdW50OjFcbiAgICB9XSAgXG4gICAgKVxufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tQ2FydCgpIHtcbiAgICBcbn1cblxuZnVuY3Rpb24gbGlzdFByb2R1Y3RzKCkge1xuICAgIFxufVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpfSAqL31cbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHsgaWQsIG5hbWUsIHByaWNlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PntuYW1lfS17cHJpY2V9PGJ1dHRvbiBvbkNsaWNrPXsoKT0+YWRkVG9DYXJ0KGlkKX0+QWRkIHRvIENhcnQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJwcm9kdWN0cyIsImlkIiwibmFtZSIsInByaWNlIiwiQ2FydCIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInRvdGFsIiwiYWRkVG9DYXJ0IiwiY291bnQiLCJyZW1vdmVGcm9tQ2FydCIsImxpc3RQcm9kdWN0cyIsImRpdiIsIm1hcCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/shop/page.tsx\n"));

/***/ })

});