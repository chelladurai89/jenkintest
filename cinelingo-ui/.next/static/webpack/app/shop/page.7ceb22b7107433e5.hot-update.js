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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst products = [\n    {\n        id: 1,\n        name: \"Product 1\",\n        price: 100\n    },\n    {\n        id: 2,\n        name: \"Product 2\",\n        price: 150\n    },\n    {\n        id: 3,\n        name: \"Product 3\",\n        price: 200\n    }\n];\nconst Cart = ()=>{\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Cart.useEffect\": ()=>{\n            let totalAmount = 0;\n            if (cartItems.length) {\n                cartItems.map({\n                    \"Cart.useEffect\": (item)=>{\n                        totalAmount += item.price * item.count;\n                    }\n                }[\"Cart.useEffect\"]);\n            }\n            setTotal(totalAmount);\n        }\n    }[\"Cart.useEffect\"], [\n        cartItems\n    ]);\n    function addToCart(id, price) {\n        const isItemInCart = cartItems.filter((item)=>item.id === id);\n        if (isItemInCart.length) {\n            const res = cartItems.map((item)=>{\n                if (item.id === id) {\n                    return {\n                        ...item,\n                        count: item.count + 1\n                    };\n                } else {\n                    return item;\n                }\n            });\n            setCartItems(res);\n        } else {\n            setCartItems([\n                ...cartItems,\n                {\n                    id: id,\n                    price: price,\n                    count: 1\n                }\n            ]);\n        }\n    }\n    function removeFromCart() {}\n    function listProducts() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            products.map((param)=>{\n                let { id, name, price } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        name,\n                        \"-\",\n                        price,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>addToCart(id, price),\n                            children: \"Add to Cart\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 49\n                        }, undefined)\n                    ]\n                }, id, true, {\n                    fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 21\n                }, undefined);\n            }),\n            JSON.stringify(cartItems),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Total- \",\n                    total\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cart, \"ScTS65IMhH+WxJUXqfFKovZLirk=\");\n_c = Cart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2hvcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMkM7QUFFM0MsTUFBTUUsV0FBVztJQUVqQjtRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBYUMsT0FBTztJQUFJO0lBRXZDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFhQyxPQUFPO0lBQUk7SUFFdkM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWFDLE9BQU87SUFBSTtDQUV0QztBQUlELE1BQU1DLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFVLEVBQUU7SUFDdEQsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DQyxnREFBU0E7MEJBQUM7WUFDTixJQUFJVSxjQUFZO1lBQ2hCLElBQUlKLFVBQVVLLE1BQU0sRUFBRTtnQkFDbEJMLFVBQVVNLEdBQUc7c0NBQUMsQ0FBQ0M7d0JBRVhILGVBQWVHLEtBQUtULEtBQUssR0FBR1MsS0FBS0MsS0FBSztvQkFDdEM7O1lBQ1I7WUFDQUwsU0FBU0M7UUFDYjt5QkFBRztRQUFDSjtLQUFVO0lBRWQsU0FBU1MsVUFBVWIsRUFBRSxFQUFDRSxLQUFLO1FBQ3ZCLE1BQU1ZLGVBQWVWLFVBQVVXLE1BQU0sQ0FBQyxDQUFDSixPQUFTQSxLQUFLWCxFQUFFLEtBQUtBO1FBQzVELElBQUljLGFBQWFMLE1BQU0sRUFBRTtZQUNyQixNQUFNTyxNQUFNWixVQUFVTSxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ3ZCLElBQUlBLEtBQUtYLEVBQUUsS0FBS0EsSUFBSTtvQkFDaEIsT0FBUTt3QkFDSixHQUFHVyxJQUFJO3dCQUNQQyxPQUFPRCxLQUFLQyxLQUFLLEdBQUM7b0JBQ3RCO2dCQUNKLE9BQU87b0JBQ0gsT0FBT0Q7Z0JBQ1g7WUFDSjtZQUNBTixhQUFhVztRQUNqQixPQUFPO1lBRVBYLGFBQ0E7bUJBQUlEO2dCQUFXO29CQUNYSixJQUFJQTtvQkFDSkUsT0FBTUE7b0JBQ05VLE9BQU87Z0JBQ2Y7YUFBRTtRQUVGO0lBRUo7SUFFQSxTQUFTSyxrQkFFVDtJQUVBLFNBQVNDLGdCQUVUO0lBQ0kscUJBQ0ksOERBQUNDOztZQUdJcEIsU0FBU1csR0FBRyxDQUFDO29CQUFDLEVBQUVWLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUU7Z0JBQzlCLHFCQUNJLDhEQUFDaUI7O3dCQUFjbEI7d0JBQUs7d0JBQUVDO3NDQUFNLDhEQUFDa0I7NEJBQU9DLFNBQVMsSUFBSVIsVUFBVWIsSUFBR0U7c0NBQVE7Ozs7Ozs7bUJBQTVERjs7Ozs7WUFFbEI7WUFDQ3NCLEtBQUtDLFNBQVMsQ0FBQ25COzBCQUNoQiw4REFBQ2U7O29CQUFJO29CQUFTYjs7Ozs7Ozs7Ozs7OztBQUsxQjtHQS9ETUg7S0FBQUE7QUFpRU4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVsbGFkdXJhaXBhbmRpYW4vbGFuZ0FwcC9jaW5lbGluZ28tdWkvc3JjL2FwcC9zaG9wL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBwcm9kdWN0cyA9IFtcblxueyBpZDogMSwgbmFtZTogXCJQcm9kdWN0IDFcIiwgcHJpY2U6IDEwMCB9LFxuXG57IGlkOiAyLCBuYW1lOiBcIlByb2R1Y3QgMlwiLCBwcmljZTogMTUwIH0sXG5cbnsgaWQ6IDMsIG5hbWU6IFwiUHJvZHVjdCAzXCIsIHByaWNlOiAyMDAgfSxcblxuXTtcblxuXG5cbmNvbnN0IENhcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlPHVua25vd24+KFtdKTtcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCB0b3RhbEFtb3VudD0wO1xuICAgICAgICBpZiAoY2FydEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCArPSBpdGVtLnByaWNlICogaXRlbS5jb3VudDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHNldFRvdGFsKHRvdGFsQW1vdW50KTtcbiAgICB9LCBbY2FydEl0ZW1zXSk7XG5cbiAgICBmdW5jdGlvbiBhZGRUb0NhcnQoaWQscHJpY2UpIHtcbiAgICAgICAgY29uc3QgaXNJdGVtSW5DYXJ0ID0gY2FydEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAoaXNJdGVtSW5DYXJ0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudCsxLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRDYXJ0SXRlbXMocmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICBzZXRDYXJ0SXRlbXMoXG4gICAgICAgIFsuLi5jYXJ0SXRlbXMsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHByaWNlOnByaWNlLFxuICAgICAgICAgICAgY291bnQ6IDFcbiAgICB9XSAgXG4gICAgKVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tQ2FydCgpIHtcbiAgICBcbn1cblxuZnVuY3Rpb24gbGlzdFByb2R1Y3RzKCkge1xuICAgIFxufVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpfSAqL31cbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHsgaWQsIG5hbWUsIHByaWNlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PntuYW1lfS17cHJpY2V9PGJ1dHRvbiBvbkNsaWNrPXsoKT0+YWRkVG9DYXJ0KGlkLHByaWNlKX0+QWRkIHRvIENhcnQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpfVxuICAgICAgICAgICAgPGRpdj5Ub3RhbC0geyB0b3RhbH08L2Rpdj5cblxuICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RzIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwidG90YWwiLCJzZXRUb3RhbCIsInRvdGFsQW1vdW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImNvdW50IiwiYWRkVG9DYXJ0IiwiaXNJdGVtSW5DYXJ0IiwiZmlsdGVyIiwicmVzIiwicmVtb3ZlRnJvbUNhcnQiLCJsaXN0UHJvZHVjdHMiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/shop/page.tsx\n"));

/***/ })

});