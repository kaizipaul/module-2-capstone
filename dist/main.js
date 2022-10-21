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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&family=IBM+Plex+Mono:wght@600;700&family=Roboto+Slab&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  max-width: 100vw;\\r\\n  box-sizing: border-box;\\r\\n  overflow-x: hidden;\\r\\n  font-family: 'Archivo', sans-serif;\\r\\n  background-color: #061014;\\r\\n  color: #281a2e;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  position: fixed;\\r\\n  z-index: 3;\\r\\n  width: 100vw;\\r\\n  background-color: rgba(47, 48, 63, 0.7);\\r\\n  backdrop-filter: blur(30px);\\r\\n  font-weight: 700;\\r\\n  font-size: 1.1rem;\\r\\n  color: rgba(244, 138, 53, 0.75);\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  gap: 4rem;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 1rem 2.5rem 0.5rem;\\r\\n  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 4rem;\\r\\n  height: 4rem;\\r\\n}\\r\\n\\r\\n.logo img {\\r\\n  width: 4rem;\\r\\n  height: 4rem;\\r\\n  object-fit: fill;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: relative;\\r\\n  z-index: 3;\\r\\n  width: 100vw;\\r\\n  padding: 1rem 1rem;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  backdrop-filter: blur(30px);\\r\\n  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(4, 1fr);\\r\\n  grid-template-rows: repeat(13, 1fr);\\r\\n  column-gap: 10px;\\r\\n  row-gap: 10px;\\r\\n  padding: 6.5rem 2rem;\\r\\n}\\r\\n\\r\\n.pokemon-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border: none;\\r\\n  box-shadow: rgba(50, 50, 93, 0.2) 0 30px 60px -12px inset, rgba(0, 0, 0, 0.7) 0 18px 36px -18px inset;\\r\\n  padding: 0;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  z-index: 1;\\r\\n  background-color: rgba(47, 48, 63, 0.7);\\r\\n  backdrop-filter: blur(10px);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.photo-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n  height: 50%;\\r\\n}\\r\\n\\r\\n.poke-img {\\r\\n  width: 6.5rem;\\r\\n  height: 45%;\\r\\n  object-fit: contain;\\r\\n}\\r\\n\\r\\n.details-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: rgba(252, 249, 229, 0.7);\\r\\n  width: 100%;\\r\\n  height: 50%;\\r\\n  align-items: center;\\r\\n  box-shadow: rgba(50, 50, 93, 0.1) 0 30px 60px -12px inset, rgba(0, 0, 0, 0.4) 0 18px 36px -12px inset;\\r\\n  border-radius: 0 0 5px 5px;\\r\\n}\\r\\n\\r\\n.name-like {\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0.5rem;\\r\\n  height: 50%;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.line {\\r\\n  height: 1.5rem;\\r\\n  border-left: 1px solid black;\\r\\n}\\r\\n\\r\\n.likes-count {\\r\\n  margin-left: 5px;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  font-size: 1.2rem;\\r\\n  text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);\\r\\n}\\r\\n\\r\\n.far:hover {\\r\\n  color: #f48a35;\\r\\n}\\r\\n\\r\\n.fas {\\r\\n  color: #f48a35;\\r\\n}\\r\\n\\r\\n.poke-name {\\r\\n  font-size: 1.1rem;\\r\\n  font-family: 'IBM Plex Mono', monospace;\\r\\n  font-weight: 700;\\r\\n  text-transform: uppercase;\\r\\n  letter-spacing: 1px;\\r\\n  color: rgba(0, 0, 0, 0.9);\\r\\n  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.2);\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n  font-family: 'IBM Plex Mono', monospace;\\r\\n  font-weight: 600;\\r\\n  height: 25%;\\r\\n  width: 80%;\\r\\n  cursor: pointer;\\r\\n  padding: 0.5rem;\\r\\n  box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px, rgba(6, 24, 44, 0.65) 0 4px 6px -1px, rgba(255, 255, 255, 0.08) 0 1px 0 inset;\\r\\n  border-radius: 5px;\\r\\n  background-color: rgba(244, 138, 53, 0.9);\\r\\n  color: rgba(0, 0, 0, 0.9);\\r\\n  letter-spacing: 1.5px;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 55%;\\r\\n  width: 95vw;\\r\\n  height: 95vh;\\r\\n  transform: translate(-50%, -50%) scale(0);\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  transition: 0.3s ease-in-out;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.modal.active {\\r\\n  transform: translate(-50%, -50%) scale(1);\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  position: fixed;\\r\\n  opacity: 0;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  background-color: rgba(0, 0, 0, 0.8);\\r\\n  backdrop-filter: blur(20px);\\r\\n  transition: 300ms ease-in-out;\\r\\n  pointer-events: none;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.overlay.active {\\r\\n  opacity: 1;\\r\\n  pointer-events: all;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  color: #fff;\\r\\n  width: 80%;\\r\\n  height: 100%;\\r\\n  border: 2px solid black;\\r\\n  border-radius: 5px;\\r\\n  z-index: 10;\\r\\n  background-color: #061014;\\r\\n  position: relative;\\r\\n  padding: 0.7rem;\\r\\n  overflow-y: scroll;\\r\\n  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;\\r\\n}\\r\\n\\r\\n.moves {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 13px;\\r\\n  position: absolute;\\r\\n  list-style: none;\\r\\n  top: 20px;\\r\\n  left: 10px;\\r\\n  border: none;\\r\\n  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;\\r\\n  border-radius: 10px;\\r\\n  padding: 2rem;\\r\\n  background: transparent;\\r\\n}\\r\\n\\r\\n.moves > h4 {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.counter {\\r\\n  position: relative;\\r\\n  padding: 6px 6px;\\r\\n  font-size: 0.9rem;\\r\\n  top: -12px;\\r\\n  left: -4px;\\r\\n  background-color: rgba(244, 138, 53, 0.7);\\r\\n  border-radius: 50%;\\r\\n  color: rgba(0, 0, 0, 0.9);\\r\\n}\\r\\n\\r\\n#close {\\r\\n  position: absolute;\\r\\n  right: 5px;\\r\\n  top: -25px;\\r\\n  font-size: 40px;\\r\\n  font-weight: 400;\\r\\n  cursor: pointer;\\r\\n  transition: 0.5s ease-in;\\r\\n}\\r\\n\\r\\n#close:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  width: 40%;\\r\\n  height: 30%;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.attributes {\\r\\n  width: 60%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 5px;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n.comment-input,\\r\\n.comment-area {\\r\\n  padding: 0.5rem;\\r\\n  border: none;\\r\\n  background: transparent;\\r\\n  border-bottom: 2px solid white;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.submit {\\r\\n  width: fit-content;\\r\\n  align-self: flex-end;\\r\\n  cursor: pointer;\\r\\n  background: #2443c2;\\r\\n  color: #fff;\\r\\n  border-radius: 5px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.line-rule {\\r\\n  display: block;\\r\\n  border-bottom: 0.1px solid aliceblue;\\r\\n  width: 20%;\\r\\n}\\r\\n\\r\\n.comments-section {\\r\\n  min-height: 40px;\\r\\n  overflow-y: scroll;\\r\\n  width: 50%;\\r\\n  background-color: rgba(6, 16, 20, 0.5);\\r\\n  color: white;\\r\\n  border-radius: 5px;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\ni {\\r\\n  padding-right: 5px;\\r\\n}\\r\\n\\r\\n.first {\\r\\n  color: #ed6f07;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  background-color: #ed6f07;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.second {\\r\\n  color: #392876;\\r\\n}\\r\\n\\r\\n#type {\\r\\n  background-color: #392876;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.third {\\r\\n  color: #ac9e06;\\r\\n}\\r\\n\\r\\n#weight {\\r\\n  background-color: #ac9e06;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.fourth {\\r\\n  color: #ac0606;\\r\\n}\\r\\n\\r\\n#height {\\r\\n  background-color: #ac0606;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.popup-name {\\r\\n  font-size: 20px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.fa-comment {\\r\\n  padding-left: 5px;\\r\\n  color: #38c11f;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 5px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-track {\\r\\n  background: transparent;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #888;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #555;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  .container {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    grid-template-rows: repeat(20, 1fr);\\r\\n    column-gap: 12px;\\r\\n    row-gap: 12px;\\r\\n    padding: 6.5rem 0.5rem;\\r\\n  }\\r\\n\\r\\n  .navbar .planets-section,\\r\\n  .races-section,\\r\\n  .line {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  header {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .modal {\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    height: 95%;\\r\\n    width: 95%;\\r\\n  }\\r\\n\\r\\n  .popup {\\r\\n    height: 85%;\\r\\n    width: 85%;\\r\\n  }\\r\\n\\r\\n  .moves {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .comment-form {\\r\\n    width: 80%;\\r\\n    gap: 10px;\\r\\n  }\\r\\n\\r\\n  .comments-section {\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  .attributes {\\r\\n    width: 80%;\\r\\n    justify-content: center;\\r\\n    gap: 5px;\\r\\n  }\\r\\n\\r\\n  .navbar {\\r\\n    gap: 2rem;\\r\\n    padding: 0.5rem 0.5rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/images/pokeball.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/pokeball.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/pokeball.jpeg\");\n\n//# sourceURL=webpack://webpack-setup/./src/assets/images/pokeball.jpeg?");

/***/ }),

/***/ "./src/assets/images/pokeball.png":
/*!****************************************!*\
  !*** ./src/assets/images/pokeball.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/pokeball.png\");\n\n//# sourceURL=webpack://webpack-setup/./src/assets/images/pokeball.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/commentsApi.js":
/*!****************************!*\
  !*** ./src/commentsApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCount\": () => (/* binding */ commentCount),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments)\n/* harmony export */ });\nconst getComments = async (id) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OqoSKrCAwmdPUD6ymYnk/comments?item_id=${id}`);\r\n  const dataFetch = await response.json();\r\n  return dataFetch;\r\n};\r\n\r\nconst postComments = async (id, name, comment) => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OqoSKrCAwmdPUD6ymYnk/comments/', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: name,\r\n      comment,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  return response.status;\r\n};\r\n\r\nconst commentCount = async (id) => {\r\n  const comments = await getComments(id);\r\n  const numComments = comments.length;\r\n  return numComments;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/commentsApi.js?");

/***/ }),

/***/ "./src/displayModal.js":
/*!*****************************!*\
  !*** ./src/displayModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentsApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsApi.js */ \"./src/commentsApi.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n\n\n\nconst displayModal = async (id) => {\n  const comments = await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n  const count = await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_0__.commentCount)(id);\n  const pokeData = await (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.renderPokemon)(id);\n  const modal = document.querySelector('.modal');\n  const overlay = document.querySelector('.overlay');\n  modal.innerHTML = ` <div class=\"popup\">\n    <p id=\"close\" class=\"close-popup\">&times;</p>\n    <div class=\"moves\">\n    <h4>Special Moves</h4>\n    <li><i class=\"fa-solid fa-circle first\"></i>${(0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)(pokeData.moves[0].move.name)}</li>\n    <li><i class=\"fa-solid fa-circle second\"></i>${(0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)(pokeData.moves[1].move.name)}</li>\n    <li><i class=\"fa-solid fa-circle third\"></i>${(0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)(pokeData.moves[2].move.name)}</li>\n    <li><i class=\"fa-solid fa-circle fourth\"></i>${(0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)(pokeData.moves[3].move.name)}</li>\n    </div>\n    <img class=\"popup-img\" src=\"${pokeData.sprites.other.dream_world.front_default}\">\n    <h3 class=\"popup-name\">${(0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)(pokeData.species.name)}</h3>\n    <div class=\"line-rule\"></div>\n    <div class=\"attributes\">\n        <p id=\"name\"><strong>Base Experience</strong>: ${pokeData.base_experience}</p>\n        <p id=\"type\"><strong>Type</strong>: ${(0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)(pokeData.types[0].type.name)}</p>\n    </div>\n    <div class=\"attributes\">\n        <p id=\"weight\"><strong>Weight</strong>: ${pokeData.weight} lbs</p>\n        <p id=\"height\"><strong>Height</strong>: ${pokeData.height}</p>\n    </div>\n    <div class=\"line-rule\"></div>\n    <h4 class=\"comments-header\">Comments(${count || 0})</h4>\n    <div class=\"comments-section\">\n        ${comments.length >= 1\n    ? comments.map((comment) => `<p class=\"comm\">${comment.creation_date}-  ${comment.username}: ${comment.comment}</p>`).join('')\n    : '<p>\"No available comment\"</p>'}\n    </div>\n    <form class=\"comment-form\">\n        <h4 class=\"add-comment\">Add a comment<i class=\"fa-solid fa-comment\"></i></h4>\n        <input id=\"comment-input\" class=\"comment-input\" placeholder=\"Your Name\" type=\"text\" required>\n        <textarea id=\"comment-area\" class=\"comment-area\" placeholder=\"Your Message\" required></textarea>\n        <button class=\"submit\">Comment</button>\n    </form>\n  </div>`;\n  const form = document.querySelector('.comment-form');\n  const nameInput = document.getElementById('comment-input');\n  const commentInput = document.getElementById('comment-area');\n\n  form.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const comment = commentInput.value;\n    const user = nameInput.value;\n    await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_0__.postComments)(id, comment, user);\n    commentInput.value = '';\n    nameInput.value = '';\n    await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n    await displayModal(id);\n  });\n\n  const closeBtn = document.querySelectorAll('.close-popup');\n  closeBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      modal.classList.remove('active');\n      overlay.classList.remove('active');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayModal);\n\n//# sourceURL=webpack://webpack-setup/./src/displayModal.js?");

/***/ }),

/***/ "./src/handleLikes.js":
/*!****************************!*\
  !*** ./src/handleLikes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"sendData\": () => (/* binding */ sendData),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OqoSKrCAwmdPUD6ymYnk/likes/';\r\n\r\nconst likesArray = [];\r\nconst getLikes = async () => {\r\n  const response = await fetch(likesUrl);\r\n  const data = await response.json();\r\n\r\n  data.forEach((element) => {\r\n    likesArray.push(element);\r\n  });\r\n};\r\n\r\nconst updateLikes = async (id, likeCounter) => {\r\n  await getLikes(id);\r\n  let counter = 0;\r\n  likesArray.forEach((like) => {\r\n    if (like.item_id === id) {\r\n      counter = like.likes;\r\n    }\r\n  });\r\n  likeCounter.innerText = `${counter}`;\r\n};\r\n\r\nconst sendData = async (id) => {\r\n  await fetch(likesUrl, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\ndocument.addEventListener('click', async (e) => {\r\n  const likeID = Number(e.target.id);\r\n  if (e.target.classList.contains('far')) {\r\n    e.target.classList.remove('far');\r\n    e.target.classList.add('fas');\r\n    const numLikes = e.target.parentElement.children[1].innerText;\r\n    e.target.parentElement.children[1].innerText = `${Number(numLikes) + 1}`;\r\n    await sendData(likeID);\r\n    await updateLikes(likeID);\r\n  }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/handleLikes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_images_pokeball_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/pokeball.png */ \"./src/assets/images/pokeball.png\");\n/* harmony import */ var _assets_images_pokeball_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/pokeball.jpeg */ \"./src/assets/images/pokeball.jpeg\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _displayModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayModal.js */ \"./src/displayModal.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.fetchPokemon)();\n});\n\ndocument.addEventListener('click', (e) => {\n  const num = Number(e.target.id);\n  if (e.target.classList.contains('comments')) {\n    const modal = document.querySelector('.modal');\n    const overlay = document.querySelector('.overlay');\n    modal.classList.add('active');\n    overlay.classList.add('active');\n    (0,_displayModal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(num);\n  }\n});\n\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize),\n/* harmony export */   \"displayPokemon\": () => (/* binding */ displayPokemon),\n/* harmony export */   \"fetchPokemon\": () => (/* binding */ fetchPokemon),\n/* harmony export */   \"renderPokemon\": () => (/* binding */ renderPokemon)\n/* harmony export */ });\n/* harmony import */ var _handleLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleLikes.js */ \"./src/handleLikes.js\");\n\n\nconst capitalize = (str) => {\n  const cap = str.charAt(0).toUpperCase() + str.slice(1);\n  return cap;\n};\n\nconst renderPokemon = async (id) => {\n  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;\n  const response = await fetch(url);\n  const pokemon = await response.json();\n  return pokemon;\n};\n\nconst displayPokemon = (pokemon, id) => {\n  const container = document.querySelector('.container');\n  const mainContainer = document.createElement('div');\n  mainContainer.classList.add('pokemon-card');\n  const photoContainer = document.createElement('div');\n  photoContainer.classList.add('photo-container');\n  const pokeImg = document.createElement('img');\n  pokeImg.classList.add('poke-img');\n  pokeImg.setAttribute('src', pokemon.sprites.other.dream_world.front_default);\n  const detailsContainer = document.createElement('div');\n  detailsContainer.classList.add('details-container');\n  const nameLike = document.createElement('div');\n  nameLike.classList.add('name-like');\n  const secondDiv = document.createElement('div');\n  secondDiv.classList.add('name-likes');\n  secondDiv.innerHTML = `<h4 class=\"poke-name\">${pokemon.species.name}</h4>`;\n  const likes = document.createElement('p');\n  likes.innerHTML = `<i id=${id} class=\"far fa-heart\"></i><span id=counter${id} class=\"likes-count\">0</span>`;\n  const commentsBtn = document.createElement('button');\n  commentsBtn.setAttribute('id', id);\n  commentsBtn.classList.add('comments');\n  commentsBtn.textContent = 'Details';\n  photoContainer.appendChild(pokeImg);\n  nameLike.append(secondDiv, likes);\n  detailsContainer.append(nameLike, commentsBtn);\n  mainContainer.append(photoContainer, detailsContainer);\n  container.appendChild(mainContainer);\n\n  const likeCounter = document.getElementById(`counter${id}`);\n  (0,_handleLikes_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(id, likeCounter);\n  const counter = document.querySelector('.counter');\n  const itemCounter = Number(id) - 300;\n  counter.innerText = `${itemCounter}`;\n};\n\nconst getPokemon = async (id) => {\n  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;\n  const response = await fetch(url);\n  const pokemon = await response.json();\n  displayPokemon(pokemon, id);\n  return pokemon;\n};\n\nconst fetchPokemon = async () => {\n  const num = 355;\n  for (let i = 300; i <= num; i += 1) {\n    // eslint-disable-next-line no-await-in-loop\n    await getPokemon(i);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/modal.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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