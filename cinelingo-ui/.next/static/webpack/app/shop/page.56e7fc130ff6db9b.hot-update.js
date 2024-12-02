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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst products = [\n    {\n        id: 1,\n        name: \"Product 1\",\n        price: 100\n    },\n    {\n        id: 2,\n        name: \"Product 2\",\n        price: 150\n    },\n    {\n        id: 3,\n        name: \"Product 3\",\n        price: 200\n    }\n];\nconst Cart = ()=>{\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Cart.useEffect\": ()=>{\n            let totalAmount = 0;\n            if (cartItems.length) {\n                cartItems.map({\n                    \"Cart.useEffect\": (item)=>{\n                        totalAmount += item.price * item.count;\n                    }\n                }[\"Cart.useEffect\"]);\n            }\n            setTotal(totalAmount);\n        }\n    }[\"Cart.useEffect\"], [\n        cartItems\n    ]);\n    function addToCart(id, price) {\n        const isItemInCart = cartItems.filter((item)=>item.id === id);\n        if (isItemInCart.length) {\n            const res = cartItems.map((item)=>{\n                if (item.id === id) {\n                    return {\n                        ...item,\n                        count: item.count + 1\n                    };\n                } else {\n                    return item;\n                }\n            });\n            setCartItems(res);\n        } else {\n            setCartItems([\n                ...cartItems,\n                {\n                    id: id,\n                    price: price,\n                    count: 1\n                }\n            ]);\n        }\n    }\n    function removeFromCart(id, price) {\n        const itemInCart = cartItems.filter((item)=>item.id === id);\n        debugger;\n        if (itemInCart.count === 1) {\n            const res = cartItems.filter((item)=>{\n                if (item.id !== id) {\n                    return item;\n                }\n            });\n            setCartItems(res);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            products.map((param)=>{\n                let { id, name, price } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        name,\n                        \"-\",\n                        price,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>removeFromCart(id, price),\n                            children: \"Remove Cart\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 49\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>addToCart(id, price),\n                            children: \"Add to Cart\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 116\n                        }, undefined)\n                    ]\n                }, id, true, {\n                    fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 21\n                }, undefined);\n            }),\n            JSON.stringify(cartItems),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Total- \",\n                    total\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chelladuraipandian/langApp/cinelingo-ui/src/app/shop/page.tsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Cart, \"ScTS65IMhH+WxJUXqfFKovZLirk=\");\n_c = Cart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2hvcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMkM7QUFFM0MsTUFBTUUsV0FBVztJQUVqQjtRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBYUMsT0FBTztJQUFJO0lBRXZDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFhQyxPQUFPO0lBQUk7SUFFdkM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWFDLE9BQU87SUFBSTtDQUV0QztBQUlELE1BQU1DLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFVLEVBQUU7SUFDdEQsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DQyxnREFBU0E7MEJBQUM7WUFDTixJQUFJVSxjQUFZO1lBQ2hCLElBQUlKLFVBQVVLLE1BQU0sRUFBRTtnQkFDbEJMLFVBQVVNLEdBQUc7c0NBQUMsQ0FBQ0M7d0JBRVhILGVBQWVHLEtBQUtULEtBQUssR0FBR1MsS0FBS0MsS0FBSztvQkFDdEM7O1lBQ1I7WUFDQUwsU0FBU0M7UUFDYjt5QkFBRztRQUFDSjtLQUFVO0lBRWQsU0FBU1MsVUFBVWIsRUFBRSxFQUFDRSxLQUFLO1FBQ3ZCLE1BQU1ZLGVBQWVWLFVBQVVXLE1BQU0sQ0FBQyxDQUFDSixPQUFTQSxLQUFLWCxFQUFFLEtBQUtBO1FBQzVELElBQUljLGFBQWFMLE1BQU0sRUFBRTtZQUNyQixNQUFNTyxNQUFNWixVQUFVTSxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ3ZCLElBQUlBLEtBQUtYLEVBQUUsS0FBS0EsSUFBSTtvQkFDaEIsT0FBUTt3QkFDSixHQUFHVyxJQUFJO3dCQUNQQyxPQUFPRCxLQUFLQyxLQUFLLEdBQUM7b0JBQ3RCO2dCQUNKLE9BQU87b0JBQ0gsT0FBT0Q7Z0JBQ1g7WUFDSjtZQUNBTixhQUFhVztRQUNqQixPQUFPO1lBRVBYLGFBQ0E7bUJBQUlEO2dCQUFXO29CQUNYSixJQUFJQTtvQkFDSkUsT0FBTUE7b0JBQ05VLE9BQU87Z0JBQ2Y7YUFBRTtRQUVGO0lBRUo7SUFFSSxTQUFTSyxlQUFlakIsRUFBRSxFQUFFRSxLQUFLO1FBQzdCLE1BQU1nQixhQUFhZCxVQUFVVyxNQUFNLENBQUMsQ0FBQ0osT0FBU0EsS0FBS1gsRUFBRSxLQUFLQTtRQUMxRCxRQUFTO1FBQ1QsSUFBSWtCLFdBQVdOLEtBQUssS0FBSyxHQUFHO1lBQ3ZCLE1BQU1JLE1BQU1aLFVBQVVXLE1BQU0sQ0FBQyxDQUFDSjtnQkFDMUIsSUFBSUEsS0FBS1gsRUFBRSxLQUFLQSxJQUFJO29CQUNoQixPQUFPVztnQkFDWjtZQUNIO1lBQ0ROLGFBQWFXO1FBQ2pCO0lBQ0o7SUFHQSxxQkFDSSw4REFBQ0c7O1lBR0lwQixTQUFTVyxHQUFHLENBQUM7b0JBQUMsRUFBRVYsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtnQkFDOUIscUJBQ0ksOERBQUNpQjs7d0JBQWNsQjt3QkFBSzt3QkFBRUM7c0NBQU0sOERBQUNrQjs0QkFBT0MsU0FBUyxJQUFJSixlQUFlakIsSUFBR0U7c0NBQVE7Ozs7OztzQ0FBb0IsOERBQUNrQjs0QkFBT0MsU0FBUyxJQUFJUixVQUFVYixJQUFHRTtzQ0FBUTs7Ozs7OzttQkFBL0hGOzs7OztZQUVsQjtZQUNDc0IsS0FBS0MsU0FBUyxDQUFDbkI7MEJBQ2hCLDhEQUFDZTs7b0JBQUk7b0JBQVNiOzs7Ozs7Ozs7Ozs7O0FBSzFCO0dBdEVNSDtLQUFBQTtBQXdFTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2NoZWxsYWR1cmFpcGFuZGlhbi9sYW5nQXBwL2NpbmVsaW5nby11aS9zcmMvYXBwL3Nob3AvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHByb2R1Y3RzID0gW1xuXG57IGlkOiAxLCBuYW1lOiBcIlByb2R1Y3QgMVwiLCBwcmljZTogMTAwIH0sXG5cbnsgaWQ6IDIsIG5hbWU6IFwiUHJvZHVjdCAyXCIsIHByaWNlOiAxNTAgfSxcblxueyBpZDogMywgbmFtZTogXCJQcm9kdWN0IDNcIiwgcHJpY2U6IDIwMCB9LFxuXG5dO1xuXG5cblxuY29uc3QgQ2FydCA9ICgpID0+IHtcbiAgICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGU8dW5rbm93bj4oW10pO1xuICAgIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHRvdGFsQW1vdW50PTA7XG4gICAgICAgIGlmIChjYXJ0SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50ICs9IGl0ZW0ucHJpY2UgKiBpdGVtLmNvdW50O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0VG90YWwodG90YWxBbW91bnQpO1xuICAgIH0sIFtjYXJ0SXRlbXNdKTtcblxuICAgIGZ1bmN0aW9uIGFkZFRvQ2FydChpZCxwcmljZSkge1xuICAgICAgICBjb25zdCBpc0l0ZW1JbkNhcnQgPSBjYXJ0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XG4gICAgICAgIGlmIChpc0l0ZW1JbkNhcnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50KzEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyhyZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgIHNldENhcnRJdGVtcyhcbiAgICAgICAgWy4uLmNhcnRJdGVtcywge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgcHJpY2U6cHJpY2UsXG4gICAgICAgICAgICBjb3VudDogMVxuICAgIH1dICBcbiAgICApXG4gICAgfVxuXG59XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGcm9tQ2FydChpZCwgcHJpY2UpIHtcbiAgICAgICAgY29uc3QgaXRlbUluQ2FydCA9IGNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGlmIChpdGVtSW5DYXJ0LmNvdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgY29uc3QgcmVzID0gY2FydEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0Q2FydEl0ZW1zKHJlcyk7ICAgIFxuICAgICAgICB9ICAgIFxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShwcm9kdWN0cyl9ICovfVxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoeyBpZCwgbmFtZSwgcHJpY2UgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+e25hbWV9LXtwcmljZX08YnV0dG9uIG9uQ2xpY2s9eygpPT5yZW1vdmVGcm9tQ2FydChpZCxwcmljZSl9PlJlbW92ZSBDYXJ0PC9idXR0b24+PGJ1dHRvbiBvbkNsaWNrPXsoKT0+YWRkVG9DYXJ0KGlkLHByaWNlKX0+QWRkIHRvIENhcnQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpfVxuICAgICAgICAgICAgPGRpdj5Ub3RhbC0geyB0b3RhbH08L2Rpdj5cblxuICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByb2R1Y3RzIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJDYXJ0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwidG90YWwiLCJzZXRUb3RhbCIsInRvdGFsQW1vdW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImNvdW50IiwiYWRkVG9DYXJ0IiwiaXNJdGVtSW5DYXJ0IiwiZmlsdGVyIiwicmVzIiwicmVtb3ZlRnJvbUNhcnQiLCJpdGVtSW5DYXJ0IiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIkpTT04iLCJzdHJpbmdpZnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/shop/page.tsx\n"));

/***/ })

});