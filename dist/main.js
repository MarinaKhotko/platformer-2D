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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  overflow-y: hidden;\\n  font-family: \\\"Luckiest Guy\\\", serif;\\n}\\n\\ngame.ctx {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://platformer-2d/./src/style.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://platformer-2d/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://platformer-2d/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://platformer-2d/./src/style.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://platformer-2d/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://platformer-2d/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://platformer-2d/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://platformer-2d/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://platformer-2d/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://platformer-2d/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/Levels/class-AllLevels.ts":
/*!**************************************************!*\
  !*** ./src/components/Levels/class-AllLevels.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AllLevels\": () => (/* binding */ AllLevels)\n/* harmony export */ });\n/* harmony import */ var _generate_levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-levels */ \"./src/components/Levels/generate-levels.ts\");\n\r\nclass AllLevels {\r\n    constructor(game) {\r\n        this.level1 = (0,_generate_levels__WEBPACK_IMPORTED_MODULE_0__.generatelevel1)(game);\r\n        this.level2 = (0,_generate_levels__WEBPACK_IMPORTED_MODULE_0__.generatelevel2)(game);\r\n        this.levels = [this.level1, this.level2];\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/Levels/class-AllLevels.ts?");

/***/ }),

/***/ "./src/components/Levels/class-level.ts":
/*!**********************************************!*\
  !*** ./src/components/Levels/class-level.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Level\": () => (/* binding */ Level),\n/* harmony export */   \"styleScore\": () => (/* binding */ styleScore)\n/* harmony export */ });\n/* harmony import */ var _utils_GenetationEnemies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/GenetationEnemies */ \"./src/utils/GenetationEnemies.ts\");\n/* harmony import */ var _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/sprites/static/static-sprite */ \"./src/utils/sprites/static/static-sprite.ts\");\n\r\n\r\nclass Level {\r\n    constructor(game, background, platforms, allShining) {\r\n        this.scrollOffset = 0;\r\n        this.distance = 0;\r\n        this.opened = false;\r\n        this.game = game;\r\n        this.generationEnemies = new _utils_GenetationEnemies__WEBPACK_IMPORTED_MODULE_0__.GenetationEnemies(this);\r\n        this.background = background;\r\n        this.platforms = platforms;\r\n        this.allShining = allShining;\r\n        this.opened = false;\r\n        this.score = 0;\r\n        this.scoreShining = new _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_1__.Shining(this.game, { x: window.innerWidth - 200, y: 0 }, { x: 182 * 0.7, y: 206 * 0.7 });\r\n    }\r\n    update(deltaTime) {\r\n        this.background.animate();\r\n        this.generationEnemies.update(this.game, 10);\r\n        this.platforms.forEach((el) => {\r\n            el.draw();\r\n            el.render(this.game);\r\n        });\r\n        this.allShining.forEach((el) => {\r\n            el.draw();\r\n            el.update(1);\r\n        });\r\n        this.scoreShining.draw();\r\n        this.scoreShining.update(1);\r\n        styleScore(this.game, this.score);\r\n    }\r\n}\r\nfunction styleScore(game, score) {\r\n    game.ctx.fillStyle = 'white';\r\n    game.ctx.font = '80px Luckiest Guy';\r\n    game.ctx.fillText(`${score}`, window.innerWidth - 55, 95);\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/Levels/class-level.ts?");

/***/ }),

/***/ "./src/components/Levels/data-levels.ts":
/*!**********************************************!*\
  !*** ./src/components/Levels/data-levels.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paramertsLevel1\": () => (/* binding */ paramertsLevel1),\n/* harmony export */   \"paramertsLevel2\": () => (/* binding */ paramertsLevel2)\n/* harmony export */ });\nconst paramertsLevel1 = {\r\n    PlatformPositions: [\r\n        { x: 500, y: 500 },\r\n        { x: 1600, y: 700 },\r\n    ],\r\n    PlatformSize: [\r\n        { x: 300, y: 60 },\r\n        { x: 300, y: 60 },\r\n    ],\r\n    ShiningPositions: [\r\n        { x: 600, y: 400 },\r\n        { x: 1700, y: 600 },\r\n    ],\r\n};\r\nconst paramertsLevel2 = {\r\n    PlatformPositions: [\r\n        { x: 500, y: 500 },\r\n        { x: 1600, y: 700 },\r\n    ],\r\n    PlatformSize: [\r\n        { x: 300, y: 60 },\r\n        { x: 300, y: 60 },\r\n    ],\r\n    ShiningPositions: [\r\n        { x: 550, y: 500 },\r\n        { x: 1650, y: 700 },\r\n    ],\r\n};\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/Levels/data-levels.ts?");

/***/ }),

/***/ "./src/components/Levels/generate-levels.ts":
/*!**************************************************!*\
  !*** ./src/components/Levels/generate-levels.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generatelevel1\": () => (/* binding */ generatelevel1),\n/* harmony export */   \"generatelevel2\": () => (/* binding */ generatelevel2)\n/* harmony export */ });\n/* harmony import */ var _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/sprites/static/static-sprite */ \"./src/utils/sprites/static/static-sprite.ts\");\n/* harmony import */ var _backgrounds_LEVELS_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backgrounds-LEVELS/background */ \"./src/components/backgrounds-LEVELS/background.ts\");\n/* harmony import */ var _backgrounds_LEVELS_data_img_background_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backgrounds-LEVELS/data/img-background-1 */ \"./src/components/backgrounds-LEVELS/data/img-background-1.ts\");\n/* harmony import */ var _class_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class-level */ \"./src/components/Levels/class-level.ts\");\n/* harmony import */ var _data_levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-levels */ \"./src/components/Levels/data-levels.ts\");\n\r\n\r\n\r\n\r\n\r\nfunction generatelevel1(game) {\r\n    const platforms = [];\r\n    const shinings = [];\r\n    for (let i = 0; i < _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.PlatformPositions.length; i++) {\r\n        platforms.push(new _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_0__.Platform(game, _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.PlatformPositions[i], _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.PlatformSize[i], 90));\r\n    }\r\n    for (let i = 0; i < _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.ShiningPositions.length; i++) {\r\n        shinings.push(new _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_0__.Shining(game, _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.ShiningPositions[i]));\r\n    }\r\n    const level1 = new _class_level__WEBPACK_IMPORTED_MODULE_3__.Level(game, new _backgrounds_LEVELS_background__WEBPACK_IMPORTED_MODULE_1__.BackgroundParallax(game, _backgrounds_LEVELS_data_img_background_1__WEBPACK_IMPORTED_MODULE_2__.layersL1, _backgrounds_LEVELS_data_img_background_1__WEBPACK_IMPORTED_MODULE_2__.speedModifiersL1), platforms, shinings);\r\n    return level1;\r\n}\r\nfunction generatelevel2(game) {\r\n    const platforms = [];\r\n    const shinings = [];\r\n    for (let i = 0; i < _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.PlatformPositions.length; i++) {\r\n        platforms.push(new _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_0__.Platform(game, _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.PlatformPositions[i], _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.PlatformSize[i], 90));\r\n    }\r\n    for (let i = 0; i < _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.ShiningPositions.length; i++) {\r\n        shinings.push(new _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_0__.Shining(game, _data_levels__WEBPACK_IMPORTED_MODULE_4__.paramertsLevel1.ShiningPositions[i]));\r\n    }\r\n    const level2 = new _class_level__WEBPACK_IMPORTED_MODULE_3__.Level(game, new _backgrounds_LEVELS_background__WEBPACK_IMPORTED_MODULE_1__.BackgroundParallax(game, _backgrounds_LEVELS_data_img_background_1__WEBPACK_IMPORTED_MODULE_2__.layersL1, _backgrounds_LEVELS_data_img_background_1__WEBPACK_IMPORTED_MODULE_2__.speedModifiersL1), platforms, shinings);\r\n    return level2;\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/Levels/generate-levels.ts?");

/***/ }),

/***/ "./src/components/START-GAME/START-page.ts":
/*!*************************************************!*\
  !*** ./src/components/START-GAME/START-page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StartPage\": () => (/* binding */ StartPage)\n/* harmony export */ });\n/* harmony import */ var _utils_common_classes_classButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/common-classes/classButton */ \"./src/utils/common-classes/classButton.ts\");\n/* harmony import */ var _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/sprites/static/static-sprite */ \"./src/utils/sprites/static/static-sprite.ts\");\n/* harmony import */ var _styleNameGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleNameGame */ \"./src/components/START-GAME/styleNameGame.ts\");\n/* harmony import */ var _millingCuttersSTART__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./millingCuttersSTART */ \"./src/components/START-GAME/millingCuttersSTART.ts\");\n/* harmony import */ var _utils_sprites_Sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/sprites/Sprite */ \"./src/utils/sprites/Sprite.ts\");\n\r\n\r\n\r\n\r\n\r\nclass StartPage {\r\n    constructor(game) {\r\n        this.backgroundStart = new _utils_sprites_Sprite__WEBPACK_IMPORTED_MODULE_4__.Sprite(game, { x: 0, y: 0 }, { x: window.innerWidth, y: window.innerHeight }, { x: 2540, y: 1440 }, './../assets/background_start.png');\r\n        this.startGameButton = new _utils_common_classes_classButton__WEBPACK_IMPORTED_MODULE_0__.Button({ x: window.innerWidth * 0.15, y: window.innerHeight * 0.4 }, { x: 220, y: 80 }, 60, 'PLAY', 'white', 'black');\r\n        this.platform1 = new _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_1__.Platform(game, { x: 200, y: -500 }, { x: 578, y: 111 }, 48);\r\n        this.millingCutters = (0,_millingCuttersSTART__WEBPACK_IMPORTED_MODULE_3__.millingCuttersSTART)(game);\r\n    }\r\n    addListener(game) {\r\n        game.canvas.addEventListener('click', (event) => {\r\n            const mouseX = event.pageX - (game.canvas.clientLeft + game.canvas.offsetLeft);\r\n            const mouseY = event.pageY - (game.canvas.clientTop + game.canvas.offsetTop);\r\n            if (this.startGameButton.inBounds(mouseX, mouseY)) {\r\n                game.startPageOpened = false;\r\n                game.allLevels.level1.opened = true;\r\n            }\r\n            return game.startPageOpened;\r\n        });\r\n    }\r\n    update(game) {\r\n        this.backgroundStart.draw();\r\n        this.millingCutters.forEach((el) => {\r\n            el.update();\r\n            el.render();\r\n        });\r\n        this.platform1.render(game);\r\n        (0,_styleNameGame__WEBPACK_IMPORTED_MODULE_2__.styleNameGame)(game);\r\n        this.startGameButton.draw(game);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/START-GAME/START-page.ts?");

/***/ }),

/***/ "./src/components/START-GAME/millingCuttersSTART.ts":
/*!**********************************************************!*\
  !*** ./src/components/START-GAME/millingCuttersSTART.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"millingCuttersSTART\": () => (/* binding */ millingCuttersSTART)\n/* harmony export */ });\n/* harmony import */ var _utils_sprites_moving_rotating_milling_cutter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/sprites/moving/rotating/milling-cutter */ \"./src/utils/sprites/moving/rotating/milling-cutter.ts\");\n\r\nfunction millingCuttersSTART(game) {\r\n    const millingCuttersARR = [];\r\n    const sizeBig = { x: 700, y: 700 };\r\n    const sizeSmall = { x: 300, y: 300 };\r\n    const ARRpositions = [\r\n        {\r\n            sizeFinal: sizeBig,\r\n            rotationAxis: {\r\n                x: window.innerWidth * 0.7,\r\n                y: window.innerHeight * 0.3,\r\n            },\r\n        },\r\n        {\r\n            sizeFinal: sizeBig,\r\n            rotationAxis: {\r\n                x: window.innerWidth * 0.1,\r\n                y: window.innerHeight + 130,\r\n            },\r\n        },\r\n        {\r\n            sizeFinal: sizeSmall,\r\n            rotationAxis: {\r\n                x: window.innerWidth * 0.3,\r\n                y: window.innerHeight - 20,\r\n            },\r\n        },\r\n        {\r\n            sizeFinal: sizeSmall,\r\n            rotationAxis: {\r\n                x: window.innerWidth - 20,\r\n                y: window.innerHeight * 0.6,\r\n            },\r\n        },\r\n    ];\r\n    for (let i = 0; i < ARRpositions.length; i++) {\r\n        millingCuttersARR[i] = new _utils_sprites_moving_rotating_milling_cutter__WEBPACK_IMPORTED_MODULE_0__.MillingCutter(game, ARRpositions[i].sizeFinal, ARRpositions[i].rotationAxis);\r\n    }\r\n    return millingCuttersARR;\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/START-GAME/millingCuttersSTART.ts?");

/***/ }),

/***/ "./src/components/START-GAME/styleNameGame.ts":
/*!****************************************************!*\
  !*** ./src/components/START-GAME/styleNameGame.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styleNameGame\": () => (/* binding */ styleNameGame)\n/* harmony export */ });\nfunction styleNameGame(ptotot) {\r\n    ptotot.ctx.fillStyle = 'black';\r\n    ptotot.ctx.font = '120px Luckiest Guy';\r\n    ptotot.ctx.strokeStyle = 'White';\r\n    ptotot.ctx.lineWidth = 5;\r\n    ptotot.ctx.fillText('DARK MYSTERY', ptotot.canvas.width / 2, ptotot.canvas.height * 0.15);\r\n    ptotot.ctx.strokeText('DARK MYSTERY', ptotot.canvas.width / 2, ptotot.canvas.height * 0.15);\r\n    ptotot.ctx.textAlign = 'center';\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/START-GAME/styleNameGame.ts?");

/***/ }),

/***/ "./src/components/backgrounds-LEVELS/Layer.ts":
/*!****************************************************!*\
  !*** ./src/components/backgrounds-LEVELS/Layer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layer\": () => (/* binding */ Layer)\n/* harmony export */ });\n/* harmony import */ var _utils_EventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/EventListeners */ \"./src/utils/EventListeners.ts\");\n\r\nclass Layer {\r\n    constructor(game, image, speedModifier) {\r\n        this.game = game;\r\n        this.gameSpeed = _utils_EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.speed;\r\n        this.width = window.innerWidth;\r\n        this.height = window.innerHeight;\r\n        this.speedModifier = speedModifier;\r\n        this.image = image;\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.x2 = this.width;\r\n        this.speed = this.gameSpeed * this.speedModifier;\r\n        this.count = 0;\r\n    }\r\n    update() {\r\n        this.gameSpeed = _utils_EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.speed;\r\n        this.speed = this.gameSpeed * this.speedModifier;\r\n        if (this.x <= -this.width) {\r\n            this.x = this.width + this.x2 - this.speed;\r\n            this.count++;\r\n        }\r\n        if (this.x2 <= -this.width) {\r\n            this.x2 = this.width + this.x - this.speed;\r\n            this.count++;\r\n        }\r\n        this.x = Math.floor(this.x - this.speed);\r\n        this.x2 = Math.floor(this.x2 - this.speed);\r\n    }\r\n    draw() {\r\n        this.game.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);\r\n        this.game.ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);\r\n        for (let i = 0; i <= this.count + 1; i++) {\r\n            this.x < this.x2\r\n                ? this.game.ctx.drawImage(this.image, this.x - this.width * i, this.y, this.width, this.height)\r\n                : this.game.ctx.drawImage(this.image, this.x2 - this.width * i, this.y, this.width, this.height);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/backgrounds-LEVELS/Layer.ts?");

/***/ }),

/***/ "./src/components/backgrounds-LEVELS/background.ts":
/*!*********************************************************!*\
  !*** ./src/components/backgrounds-LEVELS/background.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BackgroundParallax\": () => (/* binding */ BackgroundParallax),\n/* harmony export */   \"gameSpeed\": () => (/* binding */ gameSpeed)\n/* harmony export */ });\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ \"./src/components/backgrounds-LEVELS/Layer.ts\");\n\r\nconst gameSpeed = 5;\r\nclass BackgroundParallax {\r\n    constructor(game, layers, speedModifiers) {\r\n        this.layersARR = [];\r\n        this.game = game;\r\n        this.layers = layers;\r\n        this.speedModifiers = speedModifiers;\r\n        for (let i = 0; i < this.layers.length; i++) {\r\n            this.layersARR[i] = new _Layer__WEBPACK_IMPORTED_MODULE_0__.Layer(this.game, this.layers[i], this.speedModifiers[i]);\r\n        }\r\n    }\r\n    animate() {\r\n        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);\r\n        this.layersARR.forEach((obj) => {\r\n            obj.update();\r\n            obj.draw();\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/backgrounds-LEVELS/background.ts?");

/***/ }),

/***/ "./src/components/backgrounds-LEVELS/data/img-background-1.ts":
/*!********************************************************************!*\
  !*** ./src/components/backgrounds-LEVELS/data/img-background-1.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"layersL1\": () => (/* binding */ layersL1),\n/* harmony export */   \"speedModifiersL1\": () => (/* binding */ speedModifiersL1)\n/* harmony export */ });\nconst backgroundLayer1 = new Image();\r\nbackgroundLayer1.src = __webpack_require__(/*! ../../../../assets/backgrounds/1/layer-1.png */ \"./assets/backgrounds/1/layer-1.png\");\r\nconst backgroundLayer2 = new Image();\r\nbackgroundLayer2.src = __webpack_require__(/*! ../../../../assets/backgrounds/1/layer-2.png */ \"./assets/backgrounds/1/layer-2.png\");\r\nconst backgroundLayer3 = new Image();\r\nbackgroundLayer3.src = __webpack_require__(/*! ../../../../assets/backgrounds/1/layer-3.png */ \"./assets/backgrounds/1/layer-3.png\");\r\nconst backgroundLayer4 = new Image();\r\nbackgroundLayer4.src = __webpack_require__(/*! ../../../../assets/backgrounds/1/layer-4.png */ \"./assets/backgrounds/1/layer-4.png\");\r\nconst backgroundLayer5 = new Image();\r\nbackgroundLayer5.src = __webpack_require__(/*! ../../../../assets/backgrounds/1/layer-5.png */ \"./assets/backgrounds/1/layer-5.png\");\r\nconst backgroundLayer6 = new Image();\r\nbackgroundLayer6.src = __webpack_require__(/*! ../../../../assets/backgrounds/1/layer-6.png */ \"./assets/backgrounds/1/layer-6.png\");\r\nconst backgroundLayer7 = new Image();\r\nbackgroundLayer7.src = __webpack_require__(/*! ../../../../assets/backgrounds/1/layer-7.png */ \"./assets/backgrounds/1/layer-7.png\");\r\nconst layersL1 = [\r\n    backgroundLayer1,\r\n    backgroundLayer2,\r\n    backgroundLayer3,\r\n    backgroundLayer4,\r\n    backgroundLayer5,\r\n    backgroundLayer6,\r\n    backgroundLayer7,\r\n];\r\nconst speedModifiersL1 = [0.5, 0.1, 0.2, 0.4, 0.5, 0.5, 0.8];\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/backgrounds-LEVELS/data/img-background-1.ts?");

/***/ }),

/***/ "./src/components/game-canvas.ts":
/*!***************************************!*\
  !*** ./src/components/game-canvas.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game),\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _utils_moving_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/moving-control */ \"./src/utils/moving-control.ts\");\n/* harmony import */ var _utils_sprites_moving_characters_player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sprites/moving/characters/player/player */ \"./src/utils/sprites/moving/characters/player/player.ts\");\n/* harmony import */ var _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sprites/static/static-sprite */ \"./src/utils/sprites/static/static-sprite.ts\");\n/* harmony import */ var _Levels_class_AllLevels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Levels/class-AllLevels */ \"./src/components/Levels/class-AllLevels.ts\");\n/* harmony import */ var _START_GAME_START_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./START-GAME/START-page */ \"./src/components/START-GAME/START-page.ts\");\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        this.canvas = document.querySelector('canvas');\r\n        this.ctx = this.canvas.getContext('2d');\r\n        this.player = new _utils_sprites_moving_characters_player_player__WEBPACK_IMPORTED_MODULE_1__.Player(this);\r\n        this.startPage = new _START_GAME_START_page__WEBPACK_IMPORTED_MODULE_4__.StartPage(this);\r\n        this.startPageOpened = true;\r\n        this.logo = new _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_2__.Logo(this);\r\n        this.gitHubs = new _utils_sprites_static_static_sprite__WEBPACK_IMPORTED_MODULE_2__.GitHubs(this);\r\n        this.gameSpeed = 5;\r\n        this.pause = false;\r\n        this.count = 0;\r\n        this.canvas.width = window.innerWidth;\r\n        this.canvas.height = window.innerHeight;\r\n        window.addEventListener('resize', () => {\r\n            this.canvas.width = window.innerWidth;\r\n            this.canvas.height = window.innerHeight;\r\n        });\r\n        this.startPage.addListener(this);\r\n        this.allLevels = new _Levels_class_AllLevels__WEBPACK_IMPORTED_MODULE_3__.AllLevels(this);\r\n        this.player = new _utils_sprites_moving_characters_player_player__WEBPACK_IMPORTED_MODULE_1__.Player(this);\r\n    }\r\n    update() {\r\n        // if (!this.pause){\r\n        if (this.startPageOpened)\r\n            this.startPage.update(this);\r\n        this.allLevels.levels.forEach((el) => {\r\n            if (el.opened) {\r\n                el.update(3000);\r\n                (0,_utils_moving_control__WEBPACK_IMPORTED_MODULE_0__.movingControl)(this, el);\r\n                this.player.update(2);\r\n            }\r\n        });\r\n        this.logo.draw();\r\n        this.gitHubs.draw();\r\n    }\r\n}\r\n// }\r\nconst game = new Game();\r\n// function myCallback(): void{\r\n//   game.count = 1\r\n//   game.ctx.save()\r\n//   game.pause = true\r\n//   game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)\r\n//   console.log(111)\r\n//   setInterval(myCallback2, 5000)\r\n// }\r\n// // export function pause (game: Game): void{\r\n// //   game.ctx.save()\r\n// //   game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)\r\n// //   setInterval(myCallback, 5000)\r\n// //  }\r\n// //  pause(game)\r\n// function myCallback2(): void{\r\n//   game.pause = false\r\n//   game.ctx.restore()\r\n// }\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/components/game-canvas.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game-canvas */ \"./src/components/game-canvas.ts\");\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.sass */ \"./src/style.sass\");\n\r\n\r\nconst loop = () => {\r\n    requestAnimationFrame(loop);\r\n    _components_game_canvas__WEBPACK_IMPORTED_MODULE_0__.game.update();\r\n};\r\nrequestAnimationFrame(loop);\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/index.ts?");

/***/ }),

/***/ "./src/utils/EventListeners.ts":
/*!*************************************!*\
  !*** ./src/utils/EventListeners.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keys\": () => (/* binding */ keys)\n/* harmony export */ });\n/* harmony import */ var _components_game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/game-canvas */ \"./src/components/game-canvas.ts\");\n\r\nconst keys = {\r\n    right: {\r\n        pressed: false,\r\n    },\r\n    left: {\r\n        pressed: false,\r\n    },\r\n    speed: 0,\r\n    activeKey: '',\r\n    previousKey: '',\r\n};\r\nwindow.addEventListener('keydown', (KeyboardEvent) => {\r\n    switch (KeyboardEvent.code) {\r\n        case 'KeyA' || 0:\r\n            keys.left.pressed = true;\r\n            keys.activeKey = 'left';\r\n            break;\r\n        case 'KeyS' || 0:\r\n            _components_game_canvas__WEBPACK_IMPORTED_MODULE_0__.game.player.velocityY = 30;\r\n            keys.activeKey = 'down';\r\n            break;\r\n        case 'KeyD' || 0:\r\n            keys.right.pressed = true;\r\n            keys.activeKey = 'right';\r\n            break;\r\n        case 'KeyW' || 0:\r\n            _components_game_canvas__WEBPACK_IMPORTED_MODULE_0__.game.player.velocityY = -30;\r\n            keys.activeKey = 'up';\r\n            break;\r\n    }\r\n});\r\nwindow.addEventListener('keyup', (KeyboardEvent) => {\r\n    switch (KeyboardEvent.code) {\r\n        case 'KeyA' || 0:\r\n            keys.left.pressed = false;\r\n            keys.speed = 0;\r\n            keys.previousKey = 'left';\r\n            break;\r\n        case 'KeyS' || 0:\r\n            _components_game_canvas__WEBPACK_IMPORTED_MODULE_0__.game.player.velocityY = 0;\r\n            keys.previousKey = 'down';\r\n            break;\r\n        case 'KeyD' || 0:\r\n            keys.right.pressed = false;\r\n            keys.previousKey = 'right';\r\n            keys.speed = 0;\r\n            break;\r\n        case 'KeyW' || 0:\r\n            _components_game_canvas__WEBPACK_IMPORTED_MODULE_0__.game.player.velocityY = 0;\r\n            keys.previousKey = 'up';\r\n            break;\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/EventListeners.ts?");

/***/ }),

/***/ "./src/utils/GenetationEnemies.ts":
/*!****************************************!*\
  !*** ./src/utils/GenetationEnemies.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GenetationEnemies\": () => (/* binding */ GenetationEnemies)\n/* harmony export */ });\n/* harmony import */ var _sprites_moving_characters_enemies_FlyingEnemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/moving/characters/enemies/FlyingEnemy */ \"./src/utils/sprites/moving/characters/enemies/FlyingEnemy.ts\");\n/* harmony import */ var _sprites_moving_characters_enemies_GroundEnemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprites/moving/characters/enemies/GroundEnemy */ \"./src/utils/sprites/moving/characters/enemies/GroundEnemy.ts\");\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\r\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\r\n};\r\nvar _GenetationEnemies_instances, _GenetationEnemies_addEnemy;\r\n\r\n\r\nclass GenetationEnemies {\r\n    constructor(level) {\r\n        _GenetationEnemies_instances.add(this);\r\n        this.typeEnemies = ['Ghost', 'Spider', 'Worm', 'Raven'];\r\n        this.level = level;\r\n        this.enemies = [];\r\n        this.enemyInterval = 2000;\r\n        this.enemyTimer = 0;\r\n    }\r\n    draw(proto) {\r\n        this.enemies.forEach((el) => {\r\n            el.draw();\r\n        });\r\n    }\r\n    update(proto, deltaTime) {\r\n        this.enemies = this.enemies.filter((el) => !el.markedToDeletion);\r\n        if (this.enemyTimer > this.enemyInterval) {\r\n            __classPrivateFieldGet(this, _GenetationEnemies_instances, \"m\", _GenetationEnemies_addEnemy).call(this, proto);\r\n            this.enemyTimer = 0;\r\n        }\r\n        else\r\n            this.enemyTimer += deltaTime;\r\n        this.enemies.forEach((el) => {\r\n            el.update(300);\r\n        });\r\n    }\r\n}\r\n_GenetationEnemies_instances = new WeakSet(), _GenetationEnemies_addEnemy = function _GenetationEnemies_addEnemy(proto) {\r\n    const randomEnemy = this.typeEnemies[Math.floor(Math.random() * this.typeEnemies.length)];\r\n    switch (randomEnemy) {\r\n        case 'Ghost':\r\n            this.enemies.push(new _sprites_moving_characters_enemies_FlyingEnemy__WEBPACK_IMPORTED_MODULE_0__.Ghost(proto, this.level));\r\n            break;\r\n        case 'Spider':\r\n            this.enemies.push(new _sprites_moving_characters_enemies_GroundEnemy__WEBPACK_IMPORTED_MODULE_1__.Spider(proto, this.level, 0.5 * proto.canvas.height));\r\n            break;\r\n        case 'Worm':\r\n            this.enemies.push(new _sprites_moving_characters_enemies_GroundEnemy__WEBPACK_IMPORTED_MODULE_1__.Worm(proto, this.level));\r\n            break;\r\n        case 'Raven':\r\n            this.enemies.push(new _sprites_moving_characters_enemies_FlyingEnemy__WEBPACK_IMPORTED_MODULE_0__.Raven(proto, this.level));\r\n            break;\r\n    }\r\n    this.enemies.sort((a, b) => a.position.y - b.position.y);\r\n};\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/GenetationEnemies.ts?");

/***/ }),

/***/ "./src/utils/common-classes/classButton.ts":
/*!*************************************************!*\
  !*** ./src/utils/common-classes/classButton.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\nclass Button {\r\n    constructor(position, size, FontSize, text, textColor, fillColor) {\r\n        this.position = position;\r\n        this.FontSize = FontSize;\r\n        this.text = text;\r\n        this.fillColor = fillColor;\r\n        this.textColor = textColor;\r\n        this.size = size;\r\n    }\r\n    draw(ptotot) {\r\n        ptotot.ctx.fillStyle = 'black';\r\n        ptotot.ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);\r\n        ptotot.ctx.fillStyle = this.textColor;\r\n        ptotot.ctx.font = `${this.FontSize}px Luckiest Guy`;\r\n        ptotot.ctx.fillText(this.text, this.position.x + this.size.x / 2, this.position.y + this.size.y * 0.8);\r\n        ptotot.ctx.textAlign = 'center';\r\n    }\r\n    inBounds(mouseX, mouseY) {\r\n        return !(mouseX < this.position.x ||\r\n            mouseX > this.position.x + this.size.x ||\r\n            mouseY < this.position.y ||\r\n            mouseY > this.position.y + this.size.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/common-classes/classButton.ts?");

/***/ }),

/***/ "./src/utils/moving-control.ts":
/*!*************************************!*\
  !*** ./src/utils/moving-control.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movingControl\": () => (/* binding */ movingControl),\n/* harmony export */   \"stopLeft\": () => (/* binding */ stopLeft),\n/* harmony export */   \"stopRight\": () => (/* binding */ stopRight)\n/* harmony export */ });\n/* harmony import */ var _EventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListeners */ \"./src/utils/EventListeners.ts\");\n\r\nconst stopRight = window.innerWidth * 0.4;\r\nconst stopLeft = window.innerWidth * 0.3;\r\nconst movingControl = (game, level) => {\r\n    if (_EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.right.pressed && game.player.position.x <= stopRight) {\r\n        game.player.velocityX = game.gameSpeed;\r\n        level.distance += game.gameSpeed;\r\n    }\r\n    else if (_EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.left.pressed && level.distance === 0) {\r\n        game.player.velocityX = 0;\r\n        _EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.speed = 0;\r\n    }\r\n    else if (_EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.left.pressed && game.player.position.x > stopLeft) {\r\n        game.player.velocityX = -game.gameSpeed;\r\n        level.distance -= game.gameSpeed;\r\n    }\r\n    else {\r\n        game.player.velocityX = 0;\r\n        if (_EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.right.pressed) {\r\n            level.platforms.forEach((el) => {\r\n                el.position.x -= game.gameSpeed;\r\n            });\r\n            level.allShining.forEach((el) => {\r\n                el.position.x -= game.gameSpeed;\r\n            });\r\n            level.scrollOffset += game.gameSpeed;\r\n            level.distance += game.gameSpeed;\r\n            _EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.speed = game.gameSpeed;\r\n        }\r\n        else if (_EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.left.pressed) {\r\n            if (level.distance === 0) {\r\n                _EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.speed = 0;\r\n            }\r\n            else {\r\n                level.platforms.forEach((el) => {\r\n                    el.position.x += game.gameSpeed;\r\n                });\r\n                level.allShining.forEach((el) => {\r\n                    el.position.x += game.gameSpeed;\r\n                });\r\n                level.scrollOffset -= game.gameSpeed;\r\n                level.distance -= game.gameSpeed;\r\n                _EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.speed = -game.gameSpeed;\r\n            }\r\n        }\r\n    }\r\n    level.platforms.forEach((el) => {\r\n        if (game.player.position.y + game.player.sizeFinal.y <= el.position.y &&\r\n            game.player.position.y +\r\n                game.player.sizeFinal.y +\r\n                game.player.velocityY >=\r\n                el.position.y &&\r\n            game.player.position.x + game.player.sizeFinal.x >= el.position.x &&\r\n            game.player.position.x <= el.position.x + el.sizeFinal.x)\r\n            game.player.velocityY = 0;\r\n    });\r\n    level.allShining.forEach((el) => {\r\n        if (game.player.position.y + game.player.sizeFinal.y <= el.position.y &&\r\n            game.player.position.y +\r\n                game.player.sizeFinal.y +\r\n                game.player.velocityY >=\r\n                el.position.y &&\r\n            game.player.position.x + game.player.sizeFinal.x >= el.position.x &&\r\n            game.player.position.x <= el.position.x + el.sizeFinal.x)\r\n            game.player.velocityY = 0;\r\n    });\r\n    switch (_EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.activeKey) {\r\n        case 'left':\r\n            game.player.frames.y = 1;\r\n            game.player.maxFrame = 14;\r\n            break;\r\n        case 'right':\r\n            game.player.frames.y = 0;\r\n            game.player.maxFrame = 14;\r\n            break;\r\n        case 'up':\r\n            _EventListeners__WEBPACK_IMPORTED_MODULE_0__.keys.previousKey === 'left'\r\n                ? game.player.frames.y = 1\r\n                : game.player.frames.y = 0;\r\n            game.player.maxFrame = 14;\r\n            break;\r\n        // case '':\r\n        //   keys.previousKey === 'left' \r\n        //   ? game.player.frames.y = 1\r\n        //   :  game.player.frames.y = 0\r\n        //   break\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/moving-control.ts?");

/***/ }),

/***/ "./src/utils/sprites/Sprite.ts":
/*!*************************************!*\
  !*** ./src/utils/sprites/Sprite.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sprite\": () => (/* binding */ Sprite)\n/* harmony export */ });\nclass Sprite {\r\n    constructor(game, position, sizeFinal, spriteSize, path, frames = { x: 0, y: 0 }, ctx = game.ctx) {\r\n        this.image = new Image();\r\n        this.game = game;\r\n        this.position = position;\r\n        this.sizeFinal = sizeFinal;\r\n        this.spriteSize = spriteSize;\r\n        this.ImgPath = path;\r\n        this.image.src = this.ImgPath;\r\n        this.image.onload = () => {\r\n            this.loaded = true;\r\n        };\r\n        this.frames = frames;\r\n        this.loaded = false;\r\n        this.ctx = ctx;\r\n    }\r\n    draw() {\r\n        if (!this.loaded)\r\n            return;\r\n        this.ctx.drawImage(this.image, this.spriteSize.x * this.frames.x, this.spriteSize.y * this.frames.y, this.spriteSize.x, this.spriteSize.y, this.position.x, this.position.y, this.sizeFinal.x, this.sizeFinal.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/sprites/Sprite.ts?");

/***/ }),

/***/ "./src/utils/sprites/moving/characters/MovingSprite.ts":
/*!*************************************************************!*\
  !*** ./src/utils/sprites/moving/characters/MovingSprite.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovingSprite\": () => (/* binding */ MovingSprite)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Sprite */ \"./src/utils/sprites/Sprite.ts\");\n\r\nclass MovingSprite extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite {\r\n    constructor(game, position, sizeFinal, spriteSize, path, frames, velocityX, velocityY) {\r\n        super(game, position, sizeFinal, spriteSize, path, frames);\r\n        this.velocityX = velocityX;\r\n        this.velocityY = velocityY;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/sprites/moving/characters/MovingSprite.ts?");

/***/ }),

/***/ "./src/utils/sprites/moving/characters/enemies/Enemy.ts":
/*!**************************************************************!*\
  !*** ./src/utils/sprites/moving/characters/enemies/Enemy.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Enemy\": () => (/* binding */ Enemy)\n/* harmony export */ });\n/* harmony import */ var _MovingSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MovingSprite */ \"./src/utils/sprites/moving/characters/MovingSprite.ts\");\n/* harmony import */ var _EventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../EventListeners */ \"./src/utils/EventListeners.ts\");\n/* harmony import */ var _moving_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../moving-control */ \"./src/utils/moving-control.ts\");\n\r\n\r\n\r\nclass Enemy extends _MovingSprite__WEBPACK_IMPORTED_MODULE_0__.MovingSprite {\r\n    constructor(game, level, position, sizeFinal, spriteSize, path, frames, maxFrame, velocityX, velocityY, distanceMovingMin, distanceMovingMax) {\r\n        super(game, position, sizeFinal, spriteSize, path, frames, velocityX, velocityY);\r\n        this.fps = 30;\r\n        this.frameTimer = 0;\r\n        this.frameInterval = 1000 / this.fps;\r\n        this.currantFrame = 1;\r\n        this.maxFrame = maxFrame;\r\n        this.distanceMovingMin = distanceMovingMin;\r\n        this.distanceMovingMax = distanceMovingMax;\r\n        this.markedToDeletion = false;\r\n        this.maxVelosityX = this.velocityX - game.gameSpeed;\r\n        this.minVelosityX = this.velocityX + game.gameSpeed;\r\n        this.mainVelosityX = this.velocityX;\r\n        this.level = level;\r\n    }\r\n    update(deltaTime) {\r\n        if (this.level.distance >= _moving_control__WEBPACK_IMPORTED_MODULE_2__.stopLeft) {\r\n            if (_EventListeners__WEBPACK_IMPORTED_MODULE_1__.keys.right.pressed)\r\n                this.velocityX = this.maxVelosityX;\r\n            else if (_EventListeners__WEBPACK_IMPORTED_MODULE_1__.keys.left.pressed)\r\n                this.velocityX = this.minVelosityX;\r\n            else\r\n                this.velocityX = this.mainVelosityX;\r\n        }\r\n        else\r\n            this.velocityX = this.mainVelosityX;\r\n        if (this.frameTimer > this.frameInterval) {\r\n            this.frameTimer = 0;\r\n            this.frames.x < this.maxFrame ? this.frames.x++ : (this.frames.x = 0);\r\n        }\r\n        else {\r\n            this.frameTimer += deltaTime;\r\n            if (this.position.x < 0 - this.sizeFinal.x)\r\n                this.markedToDeletion = true;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/sprites/moving/characters/enemies/Enemy.ts?");

/***/ }),

/***/ "./src/utils/sprites/moving/characters/enemies/FlyingEnemy.ts":
/*!********************************************************************!*\
  !*** ./src/utils/sprites/moving/characters/enemies/FlyingEnemy.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FlyingEnemy\": () => (/* binding */ FlyingEnemy),\n/* harmony export */   \"Ghost\": () => (/* binding */ Ghost),\n/* harmony export */   \"Raven\": () => (/* binding */ Raven)\n/* harmony export */ });\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ \"./src/utils/sprites/moving/characters/enemies/Enemy.ts\");\n\r\nclass FlyingEnemy extends _Enemy__WEBPACK_IMPORTED_MODULE_0__.Enemy {\r\n    update(deltaTime) {\r\n        super.update(deltaTime);\r\n        this.position.x += this.velocityX;\r\n        this.draw();\r\n    }\r\n}\r\nclass Raven extends FlyingEnemy {\r\n    constructor(game, level, position = {\r\n        x: game.canvas.width,\r\n        y: Math.random() * game.canvas.height * 0.4,\r\n    }, sizeFinal = { x: 270.5 * 0.6, y: 194 * 0.6 }, spriteSize = { x: 270.5, y: 194 }, path = '../../../../../../assets/raven.png', frames = { x: 0, y: 0 }, maxFrame = 5, velocityX = -(Math.random() * 2 + 3), velocityY = -(Math.random() + 1)) {\r\n        super(game, level, position, sizeFinal, spriteSize, path, frames, maxFrame, velocityX, velocityY);\r\n    }\r\n}\r\nclass Ghost extends FlyingEnemy {\r\n    constructor(game, level, position = {\r\n        x: game.canvas.width,\r\n        y: Math.random() * game.canvas.height * 0.4,\r\n    }, sizeFinal = { x: 261 * 0.6, y: 209 * 0.6 }, spriteSize = { x: 261, y: 209 }, path = '../../../../../../assets/enemy_ghost.png', frames = { x: 0, y: 0 }, maxFrame = 5, velocityX = -(Math.random() * 2 + 3), velocityY = -(Math.random() + 1)) {\r\n        super(game, level, position, sizeFinal, spriteSize, path, frames, maxFrame, velocityX, velocityY);\r\n        this.angle = 0;\r\n        this.curve = Math.random() * 2;\r\n    }\r\n    draw() {\r\n        this.ctx.save();\r\n        this.ctx.globalAlpha = 0.3;\r\n        super.draw();\r\n        this.ctx.restore();\r\n    }\r\n    update(deltaTime) {\r\n        super.update(deltaTime);\r\n        this.position.y += Math.sin(this.angle) * this.curve;\r\n        this.angle += 0.04;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/sprites/moving/characters/enemies/FlyingEnemy.ts?");

/***/ }),

/***/ "./src/utils/sprites/moving/characters/enemies/GroundEnemy.ts":
/*!********************************************************************!*\
  !*** ./src/utils/sprites/moving/characters/enemies/GroundEnemy.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GroundEnemy\": () => (/* binding */ GroundEnemy),\n/* harmony export */   \"Spider\": () => (/* binding */ Spider),\n/* harmony export */   \"Worm\": () => (/* binding */ Worm)\n/* harmony export */ });\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ \"./src/utils/sprites/moving/characters/enemies/Enemy.ts\");\n\r\nclass GroundEnemy extends _Enemy__WEBPACK_IMPORTED_MODULE_0__.Enemy {\r\n    update(deltaTime) {\r\n        super.update(deltaTime);\r\n        this.position.x += this.velocityX;\r\n        this.position.y += this.velocityY;\r\n        this.draw();\r\n    }\r\n}\r\nclass Worm extends GroundEnemy {\r\n    constructor(game, level, sizeFinal = { x: 261 * 0.6, y: 171 * 0.6 }, position = {\r\n        x: game.canvas.width,\r\n        y: game.canvas.height * 0.8 - sizeFinal.y, //  доработать\r\n    }, spriteSize = { x: 229, y: 171 }, path = '../../../../../../assets/enemy-worm.png', frames = { x: 0, y: 0 }, maxFrame = 5, velocityX = -(Math.random() * 2 + 2), velocityY = 0) {\r\n        super(game, level, position, sizeFinal, spriteSize, path, frames, maxFrame, velocityX, velocityY);\r\n    }\r\n}\r\nclass Spider extends GroundEnemy {\r\n    constructor(game, level, distanceMoving, position = {\r\n        x: Math.random() * game.canvas.width,\r\n        y: 0,\r\n    }, sizeFinal = { x: 310 * 0.7, y: 175 * 0.7 }, spriteSize = { x: 310, y: 175 }, path = '../../../../../../assets/enemy_spider.png', frames = { x: 0, y: 0 }, maxFrame = 5, velocityX = 0, velocityY = Math.random() * 2 + 2) {\r\n        super(game, level, position, sizeFinal, spriteSize, path, frames, maxFrame, velocityX, velocityY);\r\n        this.distanceMoving = distanceMoving;\r\n    }\r\n    draw() {\r\n        this.ctx.beginPath();\r\n        this.ctx.moveTo(this.position.x + this.sizeFinal.x / 2, 0);\r\n        this.ctx.lineTo(this.position.x + this.sizeFinal.x / 2, this.position.y);\r\n        this.ctx.stroke();\r\n        super.draw();\r\n    }\r\n    update(deltaTime) {\r\n        super.update(deltaTime);\r\n        if (this.position.y > this.distanceMoving)\r\n            this.velocityY *= -1;\r\n        this.draw();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/sprites/moving/characters/enemies/GroundEnemy.ts?");

/***/ }),

/***/ "./src/utils/sprites/moving/characters/player/player.ts":
/*!**************************************************************!*\
  !*** ./src/utils/sprites/moving/characters/player/player.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"PlayerStandart\": () => (/* binding */ PlayerStandart)\n/* harmony export */ });\n/* harmony import */ var _MovingSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MovingSprite */ \"./src/utils/sprites/moving/characters/MovingSprite.ts\");\n\r\nconst gravity = 0.5;\r\nclass Player extends _MovingSprite__WEBPACK_IMPORTED_MODULE_0__.MovingSprite {\r\n    constructor(game, sizeFinal = { x: 228 * 0.6, y: 185 * 0.6 }, spriteSize = { x: 226, y: 189 }, frames = { x: 0, y: 0 }, path = './../../../../../../assets/hero.png', position = {\r\n        x: 100,\r\n        y: game.canvas.height * 0.7,\r\n    }, velocityX = 10, velocityY = 10) {\r\n        super(game, position, sizeFinal, spriteSize, path, frames, velocityX, velocityY);\r\n        this.fps = 40;\r\n        this.frameTimer = 0;\r\n        this.frameInterval = 1000 / this.fps;\r\n        this.maxFrame = 14;\r\n    }\r\n    update(deltaTime) {\r\n        this.position.x += this.velocityX;\r\n        this.position.y += this.velocityY;\r\n        this.position.y + this.sizeFinal.y + this.velocityY <=\r\n            this.game.canvas.height\r\n            ? (this.velocityY += gravity)\r\n            : (this.velocityY = 0);\r\n        if (this.frameTimer > this.frameInterval) {\r\n            this.frameTimer = 0;\r\n            this.frames.x < this.maxFrame ? this.frames.x++ : (this.frames.x = 0);\r\n        }\r\n        else {\r\n            this.frameTimer += deltaTime;\r\n        }\r\n        this.draw();\r\n    }\r\n}\r\nclass PlayerStandart extends Player {\r\n    constructor(game, sizeFinal = { x: 228 * 0.6, y: 185 * 0.6 }, spriteSize = { x: 226, y: 189 }, frames = { x: 0, y: 0 }, path = './../../../../../../assets/hero.png', position = {\r\n        x: 100,\r\n        y: game.canvas.height * 0.7,\r\n    }, velocityX = 10, velocityY = 10) {\r\n        super(game, position, sizeFinal, spriteSize, path, frames, velocityX, velocityY);\r\n        this.maxFrame = 14;\r\n    }\r\n    update(deltaTime) {\r\n        this.position.x += this.velocityX;\r\n        this.position.y += this.velocityY;\r\n        this.position.y + this.sizeFinal.y + this.velocityY <=\r\n            this.game.canvas.height\r\n            ? (this.velocityY += gravity)\r\n            : (this.velocityY = 0);\r\n        if (this.frameTimer > this.frameInterval) {\r\n            this.frameTimer = 0;\r\n            this.frames.x < this.maxFrame ? this.frames.x++ : (this.frames.x = 0);\r\n        }\r\n        else {\r\n            this.frameTimer += deltaTime;\r\n        }\r\n        this.draw();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/sprites/moving/characters/player/player.ts?");

/***/ }),

/***/ "./src/utils/sprites/moving/rotating/milling-cutter.ts":
/*!*************************************************************!*\
  !*** ./src/utils/sprites/moving/rotating/milling-cutter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MillingCutter\": () => (/* binding */ MillingCutter)\n/* harmony export */ });\n/* harmony import */ var _rotating_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotating-sprite */ \"./src/utils/sprites/moving/rotating/rotating-sprite.ts\");\n\r\nclass MillingCutter extends _rotating_sprite__WEBPACK_IMPORTED_MODULE_0__.RotatingSprite {\r\n    constructor(game, sizeFinal, rotationAxis, spriteSize = { x: 594, y: 628 }, rotationSpeed = 0.01, position = { x: -sizeFinal.x / 2, y: -sizeFinal.y / 2 }, path = '../../assets/фреза.png') {\r\n        super(game, sizeFinal, spriteSize, rotationSpeed, rotationAxis, position, path);\r\n        this.rotateAngle = 0;\r\n        this.rotationSpeed = rotationSpeed;\r\n        this.rotationAxis = rotationAxis;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/sprites/moving/rotating/milling-cutter.ts?");

/***/ }),

/***/ "./src/utils/sprites/moving/rotating/rotating-sprite.ts":
/*!**************************************************************!*\
  !*** ./src/utils/sprites/moving/rotating/rotating-sprite.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RotatingSprite\": () => (/* binding */ RotatingSprite)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Sprite */ \"./src/utils/sprites/Sprite.ts\");\n\r\nclass RotatingSprite extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite {\r\n    constructor(game, sizeFinal, spriteSize, rotationSpeed, rotationAxis, position = { x: -sizeFinal.x / 2, y: -sizeFinal.y / 2 }, path = '../../assets/фреза.png') {\r\n        super(game, position, sizeFinal, spriteSize, path);\r\n        this.rotateAngle = 0;\r\n        this.rotationSpeed = rotationSpeed;\r\n        this.rotationAxis = rotationAxis;\r\n    }\r\n    render() {\r\n        this.game.ctx.save();\r\n        this.game.ctx.translate(this.rotationAxis.x, this.rotationAxis.y);\r\n        this.game.ctx.rotate((this.rotateAngle * Math.PI) / 180);\r\n        this.draw();\r\n        this.game.ctx.restore();\r\n    }\r\n    update() {\r\n        setInterval(() => {\r\n            this.rotateAngle += this.rotationSpeed;\r\n            this.render();\r\n        }, 500);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/sprites/moving/rotating/rotating-sprite.ts?");

/***/ }),

/***/ "./src/utils/sprites/static/static-sprite.ts":
/*!***************************************************!*\
  !*** ./src/utils/sprites/static/static-sprite.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GitHubs\": () => (/* binding */ GitHubs),\n/* harmony export */   \"Logo\": () => (/* binding */ Logo),\n/* harmony export */   \"Platform\": () => (/* binding */ Platform),\n/* harmony export */   \"Shining\": () => (/* binding */ Shining),\n/* harmony export */   \"StaticSprite\": () => (/* binding */ StaticSprite)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Sprite */ \"./src/utils/sprites/Sprite.ts\");\n\r\nclass StaticSprite extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite {\r\n    constructor(game, position, sizeFinal, rotateAngle, frames, spriteSize, path) {\r\n        super(game, position, sizeFinal, spriteSize, path, frames);\r\n        this.rotateAngle = rotateAngle;\r\n    }\r\n    render(game) {\r\n        this.draw();\r\n        game.ctx.save();\r\n        game.ctx.translate(0, 0);\r\n        game.ctx.rotate((this.rotateAngle * Math.PI) / 180);\r\n        this.draw();\r\n        game.ctx.restore();\r\n    }\r\n}\r\nclass Platform extends StaticSprite {\r\n    constructor(game, position, sizeFinal, rotateAngle, frames = { x: 0, y: 0 }, spriteSize = { x: 578, y: 111 }, path = '../../../../assets/platform.png') {\r\n        super(game, position, sizeFinal, rotateAngle, frames, spriteSize, path);\r\n    }\r\n}\r\nclass Logo extends StaticSprite {\r\n    constructor(game, position = { x: 5, y: 5 }, sizeFinal = { x: 200, y: 100 }, rotateAngle = 60, frames = { x: 0, y: 0 }, spriteSize = { x: 4000, y: 2000 }, path = '../../../../assets/logo_rs.png') {\r\n        super(game, position, sizeFinal, rotateAngle, frames, spriteSize, path);\r\n    }\r\n}\r\nclass GitHubs extends StaticSprite {\r\n    constructor(game, sizeFinal = { x: 150, y: 55 }, position = {\r\n        x: window.innerWidth - sizeFinal.x * 1.1,\r\n        y: window.innerHeight - sizeFinal.y * 1.1,\r\n    }, rotateAngle = 0, frames = { x: 0, y: 0 }, spriteSize = { x: 1001, y: 401 }, path = '../../../../assets/gitHubs.png') {\r\n        super(game, position, sizeFinal, rotateAngle, frames, spriteSize, path);\r\n    }\r\n}\r\nclass Shining extends StaticSprite {\r\n    constructor(game, position, sizeFinal = { x: 182 * 0.4, y: 206 * 0.4 }, rotateAngle = 0, frames = { x: 0, y: 2 }, spriteSize = { x: 182, y: 206 }, path = '../../../../assets/shining.png') {\r\n        super(game, position, sizeFinal, rotateAngle, frames, spriteSize, path);\r\n        this.fps = 30;\r\n        this.frameTimer = 0;\r\n        this.frameInterval = 1000 / this.fps;\r\n        this.currantFrame = 1;\r\n        this.maxFrame = 3;\r\n    }\r\n    update(deltaTime) {\r\n        if (this.frameTimer > this.frameInterval) {\r\n            this.frameTimer = 0;\r\n            this.frames.x < this.maxFrame ? this.frames.x++ : (this.frames.x = 0);\r\n        }\r\n        else {\r\n            this.frameTimer += deltaTime;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://platformer-2d/./src/utils/sprites/static/static-sprite.ts?");

/***/ }),

/***/ "./assets/backgrounds/1/layer-1.png":
/*!******************************************!*\
  !*** ./assets/backgrounds/1/layer-1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c381a2d10a978eea841d.png\";\n\n//# sourceURL=webpack://platformer-2d/./assets/backgrounds/1/layer-1.png?");

/***/ }),

/***/ "./assets/backgrounds/1/layer-2.png":
/*!******************************************!*\
  !*** ./assets/backgrounds/1/layer-2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d02c406b2be9783f06ca.png\";\n\n//# sourceURL=webpack://platformer-2d/./assets/backgrounds/1/layer-2.png?");

/***/ }),

/***/ "./assets/backgrounds/1/layer-3.png":
/*!******************************************!*\
  !*** ./assets/backgrounds/1/layer-3.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03fe2e198ed39ed624bf.png\";\n\n//# sourceURL=webpack://platformer-2d/./assets/backgrounds/1/layer-3.png?");

/***/ }),

/***/ "./assets/backgrounds/1/layer-4.png":
/*!******************************************!*\
  !*** ./assets/backgrounds/1/layer-4.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d6d45bd09761bcc69d4.png\";\n\n//# sourceURL=webpack://platformer-2d/./assets/backgrounds/1/layer-4.png?");

/***/ }),

/***/ "./assets/backgrounds/1/layer-5.png":
/*!******************************************!*\
  !*** ./assets/backgrounds/1/layer-5.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b741ccf0f4c22fd1e13.png\";\n\n//# sourceURL=webpack://platformer-2d/./assets/backgrounds/1/layer-5.png?");

/***/ }),

/***/ "./assets/backgrounds/1/layer-6.png":
/*!******************************************!*\
  !*** ./assets/backgrounds/1/layer-6.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92c5b7f0f2e01522bae0.png\";\n\n//# sourceURL=webpack://platformer-2d/./assets/backgrounds/1/layer-6.png?");

/***/ }),

/***/ "./assets/backgrounds/1/layer-7.png":
/*!******************************************!*\
  !*** ./assets/backgrounds/1/layer-7.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30a4d2b62c43327cac41.png\";\n\n//# sourceURL=webpack://platformer-2d/./assets/backgrounds/1/layer-7.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;