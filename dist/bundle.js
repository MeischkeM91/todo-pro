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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    --soft-blue: #D3E2EB;\\n    --soft-blue-hover: #b6d2e3;\\n    --dark-blue: #6F8C9E;\\n    --soft-brown: #EAE0D2;\\n    --dark-brown: #9E917E;\\n    --midnight-violet: #4D4E66;\\n    --moonlit-purple: #9889AB;\\n    --night-pink: #D9B5E0;\\n    --deep-midnight: #1B2129;\\n    --canopy-green: #21401D;\\n    --lush-green: #94A37E;\\n    --earthy-brown: #7D745E;\\n    --lastleaf-brown: #AA9D7F;\\n    --raleway: 'Raleway', sans-serif;\\n}\\n*{\\n    margin: 0;\\n    padding: 0;\\n    font-family: var(--raleway);\\n}\\n#wrapper{\\n    display: grid;\\n    grid-template-rows: auto 1fr;\\n    grid-template-columns: auto 1fr;\\n    grid-template-areas: \\n    'topbarDiv topbarDiv'\\n    'menuDiv contentDiv';\\n    background: var(--soft-blue);\\n}\\n#wrapper.closed{\\n    display: grid;\\n    grid-template-rows: auto 1fr;\\n    grid-template-columns: 0px 1fr;\\n    grid-template-areas: \\n    'topbarDiv topbarDiv'\\n    'menuDiv contentDiv';\\n    background: var(--soft-blue);\\n}\\n/***********\\n** TOPBAR **\\n***********/\\n#topbar{\\n    grid-area: topbarDiv;\\n    display: grid;\\n    grid-template-columns: auto 4fr repeat(2,1fr);\\n    background-color: var(--dark-blue);\\n    width: 100vw;\\n}\\n/** Menu Expand Btn **/\\n.menu-btn-container{\\n    display: flex;\\n    justify-content:center;\\n    align-items:center;\\n    width:75px;\\n    height:75px; \\n    cursor: pointer; \\n    transition: all .5s ease-in-out;\\n}\\n.menu-btn{\\n    width:40px;\\n    height:5px;\\n    background: white;\\n    border-radius: 5px;\\n    transition: all .5s ease-in-out;\\n}\\n.menu-btn::before,\\n.menu-btn::after{\\n  content:'';\\n  position: absolute;\\n  width:40px;\\n  height:5px;\\n  background: white;\\n  border-radius:5px;\\n  transition: all .5s ease-in-out;\\n}\\n.menu-btn::before{\\n  transform: translateY(-12px);\\n}\\n.menu-btn::after{\\n  transform: translateY(12px);\\n}\\n.menu-btn-container.open .menu-btn{\\n  background: transparent;\\n}\\n.menu-btn-container.open .menu-btn::before{\\n  transform: rotate(45deg) ;\\n}\\n.menu-btn-container.open .menu-btn::after{\\n  transform: rotate(-45deg);\\n}\\n/** Logo **/\\n.top-logo{\\n    color: white;\\n    font-size: 4rem;\\n    font-weight: 600;\\n    align-self: center;\\n    padding-left: 15px;\\n    text-shadow: 1px 1px 2px black;\\n}\\n/** Account Username Display **/\\n.username-display{\\n    justify-self: end;\\n    align-self: center;\\n    background-color: var(--soft-blue);\\n    padding: 5px 20px;\\n    box-shadow: 1px 1px 3px black;\\n    border-radius: 50px;\\n    font-weight: 500;\\n}\\n.username-display:hover{\\n    background-color: var(--soft-blue-hover);\\n}\\n.username-display:active{\\n    transform: translate(1px, 1px);\\n}\\n/** Theme Selection **/\\n.theme-container{\\n    display: flex;\\n    justify-content:center;\\n    align-items:center;\\n}\\n.theme-list{    \\n    background-color: var(--soft-blue);\\n    padding: 3px 5px;\\n    margin-left: 6px;\\n    border-radius: 20px;\\n    box-shadow: 1px 1px 3px black;\\n    font-weight: 500;\\n}\\n.theme-list:hover{\\n    background-color: var(--soft-blue-hover);\\n}\\n/***********\\n**  MENU  **\\n***********/\\n#menu{\\n    grid-area: menuDiv;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--soft-brown);\\n    width: 200px;\\n    height: 92vh;\\n    border-right: 1px solid var(--dark-brown);\\n    padding: 15px 10px;\\n    transition: all .2s ease-in-out;\\n}\\n#wrapper.closed > #menu{\\n    width: 10px;\\n}\\n/** New List Btn **/\\n.new-list-btn{\\n    align-self: stretch;\\n    text-align: center;\\n    font-size: 1.2rem;\\n    font-weight: 600;\\n    background-color:#dccdb9;\\n    border: 2px solid var(--dark-brown);\\n    border-radius: 7px;\\n    padding: 2px 0;\\n    margin-bottom: 15px;\\n}\\n.new-list-btn:hover{\\n    background-color:#d1bea6;\\n    cursor: pointer;\\n}\\n.new-list-btn:active{\\n    transform: scale(.95);\\n}\\n/** Periodic Tabs **/\\n.periodic-container{\\n    display: flex;\\n    flex-direction: column;\\n    font-size: 1.3rem;\\n    font-weight: 500;\\n    gap: 10px;\\n    padding: 0px 20px 10px;\\n}\\n.periodic-container>div:hover{\\n    font-size: 1.4rem;\\n    font-weight: 600;\\n    cursor: pointer;\\n}\\n/** To-Do List Menu **/\\n.todo-list-menu{\\n    display: flex;\\n    flex-direction: column;\\n    font-weight: 500;\\n    gap: 10px;\\n}\\n.todo-list-menu>div{\\n    font-size: 1.3rem;\\n    padding: 0px 20px;\\n}\\n.todo-list-menu>div:hover{\\n    font-size: 1.4rem;\\n    font-weight: 600;\\n    cursor: pointer;\\n}\\n/*****************\\n** PAGE CONTENT **\\n*****************/\\n#content{\\n    grid-area: contentDiv;\\n    background-color: var(--soft-blue);\\n    box-shadow: inset 1px 0px 6px black;\\n}\\n/** List Items **/\\n.list-item{\\n    display: grid;\\n    grid-template-columns: 1rem 1fr repeat(4, auto);\\n    grid-template-rows: auto;\\n    justify-items: center;\\n    align-items: center;\\n    margin: 10px 25px 2px 15px;\\n    padding: 2px 0px 3px 0px;\\n    border-bottom: 1px solid black;\\n    font-size: 1.2rem;\\n}\\n.list-item:hover{\\n    background-color: var(--soft-blue-hover);\\n}\\n#list-item-status-check{\\n    margin-left: 10px;\\n    transform: scale(1.5);\\n}\\n.list-item-title{\\n    justify-self: start;\\n    padding-left: 1rem;\\n}\\n.list-item-expand-btn{\\n    background-repeat: no-repeat;\\n}\\n.list-item-urgency{\\n    font-weight: 600;\\n    margin: 0px 10px;\\n}\\n.list-item-urgency.high-urg{\\n    color: red;\\n}\\n.list-item-urgency.low-urg{\\n    color: green;\\n}\\n.list-item-due{\\n    font-weight: 500;\\n}\\n.list-item-delete-btn{\\n    margin-left: 10px;\\n}\\n.list-item-delete-btn:hover, .list-item-expand-btn:hover{\\n    transform: scale(1.2);\\n}\\n/* Task Popout */\\n.todo-item-pop-container{\\n    position: fixed;\\n    width: 50%;\\n    top: 40%;\\n    left: 34%;\\n    display: grid;\\n    grid-template-columns: 1fr auto;\\n    grid-template-rows: repeat(4, auto);\\n    grid-template-areas: \\n    \\\"popTitle popClose\\\"\\n    \\\"popDue popDue\\\"\\n    \\\"popUrg popUrg\\\"\\n    \\\"popDesc popDesc\\\";\\n    gap: 3px;\\n    padding: 10px 15px;\\n    background-color: white;\\n    box-shadow: 1px 1px 3px black;\\n    border-radius: 10px;\\n    font-size: 1.3rem;\\n}\\n.pop-item-title{\\n    grid-area: popTitle;\\n    font-size: 1.5rem;\\n    font-weight: 600;\\n    border-bottom: 1px solid black;\\n}\\n.pop-close-btn{\\n    grid-area: popClose;\\n    width: 25px;\\n    background-color: whitesmoke;\\n    border-radius: 50%;\\n    padding: 2px;\\n    margin-left: 30px;\\n}\\n.pop-close-btn:hover{\\n    transform: scale(1.1);\\n    background-color: lightgray;\\n}\\n.pop-item-due{ grid-area: popDue;}\\n.pop-item-urgency {grid-area: popUrg;}\\n.pop-item-description {grid-area: popDesc;}\\n\\n.pop-close-btn:active, .list-item-delete-btn:active, .list-item-expand-btn:active{transform: translate(1px, 1px);}\\n/*****************\\n** Theme Colors **\\n*****************/\\n/**** Night Moon Theme ****/\\n#menu.night-moon{\\n    background-color: var(--midnight-violet);\\n    border-right: 1px solid #9889AB;\\n}\\n#topbar.night-moon{\\n    background-color: var(--moonlit-purple);\\n}\\n#content.night-moon{\\n    background-color: var(--deep-midnight);\\n    box-shadow: inset 1px 0px 6px  #9889AB;\\n}\\n#topbar.night-moon > .username-display{\\n    background-color: var(--night-pink);\\n}\\n#topbar.night-moon > .username-display:hover{\\n    background-color: #d2a7db;\\n}\\n#topbar.night-moon  .theme-list{    \\n    background-color: var(--night-pink);\\n}\\n#topbar.night-moon  .theme-list:hover{\\n    background-color: #d2a7db;\\n}\\n/**** Lush Forest Theme ****/\\n#menu.lush-forest{\\n    background-color: var(--lastleaf-brown);\\n    border-right: 1px solid var(--earthy-brown);\\n}\\n#topbar.lush-forest{\\n    background-color: var(--canopy-green);\\n}\\n#content.lush-forest{\\n    background-color: var(--lush-green);\\n    box-shadow: inset 1px 0px 6px  var(--earthy-brown);\\n}\\n#topbar.lush-forest > .username-display{\\n    background-color: var(--lush-green);\\n}\\n#topbar.lush-forest > .username-display:hover{\\n    background-color: #86956f;\\n}\\n#topbar.lush-forest .theme-list{    \\n    background-color: var(--lush-green);\\n}\\n#topbar.lush-forest .theme-list:hover{\\n    background-color: #86956f;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-pro/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-pro/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-pro/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-pro/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-pro/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-pro/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-pro/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-pro/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-pro/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-pro/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listTaskItems\": () => (/* binding */ listTaskItems)\n/* harmony export */ });\n/* harmony import */ var _images_expand_btn_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/expand-btn.svg */ \"./src/images/expand-btn.svg\");\n/* harmony import */ var _images_close_btn_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/close-btn.svg */ \"./src/images/close-btn.svg\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n// This code will create the task list within the content container as well as the expanded task information container\n\n\n\n\nconst menu = document.querySelector('#menu');\nconst content = document.querySelector('#content');\n\n\nconst createPopout = (item) =>{\n    const popContainer = document.createElement('div');\n    popContainer.classList.add('todo-item-pop-container');\n    // Close Button\n    const popClose = document.createElement('img');\n    popClose.src = _images_close_btn_svg__WEBPACK_IMPORTED_MODULE_1__;\n    popClose.alt = 'Close';\n    popClose.classList.add('pop-close-btn');\n    popClose.addEventListener('click', ()=>{\n        (0,_logic__WEBPACK_IMPORTED_MODULE_2__.deleteParentDiv)(popClose);\n    });\n    // Title\n    const popTitle = document.createElement('p');\n    popTitle.classList.add('pop-item-title');\n    popTitle.innerText = item.title;\n    // Due Date\n    const popDue = document.createElement('p');\n    popDue.classList.add('pop-item-due');\n    popDue.innerText = `Due: ${item.dueDate}`;\n    // Urgency\n    const popUrg = document.createElement('p');\n    popUrg.classList.add('pop-item-urgency');\n    let urgencyVal = item.urgency.charAt(0).toUpperCase() +\n    item.urgency.slice(1);\n    popUrg.innerText = `Urgency: ${urgencyVal}`;\n    // Description\n    const popDescription = document.createElement('p');\n    popDescription.classList.add('pop-item-description');\n    popDescription.innerText = item.description;\n    // Build Popout\n    content.appendChild(popContainer);\n    popContainer.appendChild(popTitle);\n    popContainer.appendChild(popClose);\n    popContainer.appendChild(popDue);\n    popContainer.appendChild(popUrg);\n    popContainer.appendChild(popDescription);\n};\n\nconst listTaskItems = (item) =>{\n    \n    const listItemContainer = document.createElement('div');\n    listItemContainer.classList.add('list-item');\n\n    const listItemStatus = document.createElement('input');\n    listItemStatus.type = 'checkbox';\n    listItemStatus.id = 'list-item-status-check';\n\n    const listItemTitle = document.createElement('p');\n    listItemTitle.classList.add('list-item-title');\n    listItemTitle.innerText= item.title; \n    \n    const listItemExpandBtn = document.createElement('img');\n    listItemExpandBtn.classList.add('list-item-expand-btn');\n    listItemExpandBtn.src = _images_expand_btn_svg__WEBPACK_IMPORTED_MODULE_0__;\n    listItemExpandBtn.addEventListener('click', () =>{\n        createPopout(item);\n    })\n\n    const listItemUrgency = document.createElement('p');\n    listItemUrgency.classList.add('list-item-urgency');\n    if (item.urgency == 'low'){\n        listItemUrgency.classList.add('low-urg');\n        listItemUrgency.innerText = 'LOW';\n    } else if (item.urgency == 'high'){\n        listItemUrgency.classList.add('high-urg');\n        listItemUrgency.innerText ='HIGH';\n    }\n    else {  listItemUrgency.innerText = \"ERROR\"  };\n\n    const listItemDueDate = document.createElement('p');\n    listItemDueDate.classList.add('list-item-due');\n    listItemDueDate.innerText = item.dueDate;\n\n    const listItemDelBtn = document.createElement('img');\n    listItemDelBtn.classList.add('list-item-delete-btn');\n    listItemDelBtn.src = _images_close_btn_svg__WEBPACK_IMPORTED_MODULE_1__;\n    listItemDelBtn.addEventListener('click', ()=>{\n        (0,_logic__WEBPACK_IMPORTED_MODULE_2__.deleteParentDiv)(listItemDelBtn);\n    });\n\n    // Create the list item\n    content.appendChild(listItemContainer);\n    listItemContainer.appendChild(listItemStatus);\n    listItemContainer.appendChild(listItemTitle);\n    listItemContainer.appendChild(listItemExpandBtn);\n    listItemContainer.appendChild(listItemUrgency);\n    listItemContainer.appendChild(listItemDueDate);\n    listItemContainer.appendChild(listItemDelBtn);\n};\n\n\n\n//# sourceURL=webpack://todo-pro/./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar */ \"./src/topbar.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\n\n\n\n\n/* TESTING CODE FOR LIST ITEMS */\nconst toDoItem = (title, description, urgency, dueDate, list) =>{\n    return {title,description,urgency,dueDate, list}\n};\n\nlet listItems = [];\nlistItems.push(toDoItem('Take little Bob to football practice','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','high','5/15/2022','list-one'));\nlistItems.push(toDoItem('Take little Ethel to saxophone lessons','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','low','5/23/2022','list-two'));\n/* END TESTING CODE FOR LIST ITEMS */\n\nconst loadPage = () =>{\n    (0,_topbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_content__WEBPACK_IMPORTED_MODULE_3__.listTaskItems)(listItems[0]);\n    (0,_content__WEBPACK_IMPORTED_MODULE_3__.listTaskItems)(listItems[1]);\n}\n\ndocument.onload =loadPage();\n\n\n//# sourceURL=webpack://todo-pro/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteParentDiv\": () => (/* binding */ deleteParentDiv)\n/* harmony export */ });\nfunction deleteParentDiv(e){\n    e.parentElement.remove();\n}\n\n\n\n//# sourceURL=webpack://todo-pro/./src/logic.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n// In this file we will create the Side Menu of our page, including an 'New List' button, 'today'-'week'-'all' tabs, and a list of all To Do lists.\n\nconst topbar = document.querySelector('#topbar');\nconst menu = document.querySelector('#menu');\nconst content = document.querySelector('#content');\n\nconst createNewListBtn = () =>{\n    const newListBtn = document.createElement('div');\n    newListBtn.classList.add('new-list-btn');\n    newListBtn.innerHTML = `&#65291; New List`;\n    menu.appendChild(newListBtn);\n};\n\nconst createPeriodicList = () =>{\n    const periodicContainer = document.createElement('div');\n    periodicContainer.classList.add('periodic-container');\n    // Link to display tasks due today\n    const dueTodayLink = document.createElement('div');\n    dueTodayLink.classList.add('due-today-link');\n    dueTodayLink.innerText = 'Today';\n    // Link to display tasks due current week\n    const dueWeekLink = document.createElement('div');\n    dueWeekLink.classList.add('due-week-link');\n    dueWeekLink.innerText = 'Week';\n\n    menu.appendChild(periodicContainer);\n    periodicContainer.appendChild(dueTodayLink);\n    periodicContainer.appendChild(dueWeekLink);\n};\n\nconst createToDoListMenu = () =>{\n    const toDoListMenu = document.createElement('div')\n    toDoListMenu.classList.add('todo-list-menu');\n    // Projects header\n    const toDoHeader = document.createElement('h1');\n    toDoHeader.classList.add('todo-list-header');\n    toDoHeader.innerText = 'To-Do Lists';\n\n    menu.appendChild(toDoListMenu);\n    toDoListMenu.appendChild(toDoHeader);\n};\n\nconst createNewToDoList = (title) =>{\n    let listmenu = document.querySelector('.todo-list-menu');\n    const newToDoList = document.createElement('div');\n    newToDoList.classList.add('todo-list');\n    newToDoList.innerText = title;\n    listmenu.appendChild(newToDoList);\n};\n\n\n\n// Run each () to create the menu \nconst createMenu = () =>{\n    createNewListBtn();\n    createPeriodicList();\n    createToDoListMenu();\n    createNewToDoList('List One');\n    createNewToDoList('List Two');\n};\n// Load topbar to page\nfunction loadMenu() {\n    createMenu();\n};\n\n//# sourceURL=webpack://todo-pro/./src/menu.js?");

/***/ }),

/***/ "./src/topbar.js":
/*!***********************!*\
  !*** ./src/topbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadTopbar)\n/* harmony export */ });\n// In this file we will create the Topbar of our page, including the menu btn, logo, account name, and theme changer\nconst wrapper = document.querySelector('#wrapper');\nconst topbar = document.querySelector('#topbar');\nconst menu = document.querySelector('#menu');\nconst content = document.querySelector('#content');\nlet menuOpen = true;\n\nconst createMenuBtn = () =>{\n    // Container for btn\n    const menuBtnContainer = document.createElement('div');\n    menuBtnContainer.classList.add('menu-btn-container');\n    // Menu btn\n    const menuBtn = document.createElement('div');\n    menuBtn.classList.add('menu-btn');    \n    // Update status of Menu btn\n    menuBtnContainer.addEventListener('click', ()=>{\n        if(!menuOpen){\n            menuBtnContainer.classList.add('open');\n            wrapper.classList.remove('closed');\n            menuOpen=true;\n            console.log(menuOpen);\n        } else{\n            menuBtnContainer.classList.remove('open');\n            wrapper.classList.add('closed');\n            menuOpen=false;\n            console.log(menuOpen);\n        };\n      });\n    topbar.appendChild(menuBtnContainer);\n    menuBtnContainer.appendChild(menuBtn);\n};\n\nconst addLogo = () =>{\n    const logo = document.createElement('div');\n    logo.classList.add('top-logo');\n    logo.innerText = 'ToDo Pro';\n    topbar.appendChild(logo);\n};\n\nlet accUsername = 'Maximilian12';\nconst displayAccount = (username) =>{\n    const usernameDisplay = document.createElement('div');\n    usernameDisplay.classList.add('username-display');\n    usernameDisplay.innerText=username;\n    topbar.appendChild(usernameDisplay);\n};\n\nconst createThemeList = () =>{\n    // Div to hold the theme dropdown\n    const themeContainer = document.createElement('div');\n    themeContainer.classList.add('theme-container');\n    themeContainer.setAttribute('id','theme-container')\n    topbar.appendChild(themeContainer);\n    // Create a select list with each alt theme option\n    const themeList = document.createElement('select');\n    themeList.classList.add('theme-list');\n    const sandyBeachTheme = document.createElement('option');\n    sandyBeachTheme.classList.add('theme-list-item');\n    sandyBeachTheme.value = 'sandy-beach';\n    sandyBeachTheme.innerText = 'Sandy Beach';\n    const nightMoonTheme = document.createElement('option');\n    nightMoonTheme.classList.add('theme-list-item');\n    nightMoonTheme.value = 'night-moon';\n    nightMoonTheme.innerText = 'Night Moon';\n    const lushForestTheme = document.createElement('option');\n    lushForestTheme.classList.add('theme-list-item');\n    lushForestTheme.value = 'lush-forest';\n    lushForestTheme.innerText = 'Lush Forest';\n    // Update the page theme when a certain theme is chosen\n    themeContainer.addEventListener('change', () =>{\n        topbar.classList = '';\n        topbar.classList = themeList.value;\n        menu.classList = '';\n        menu.classList = themeList.value;        \n        content.classList = '';\n        content.classList = themeList.value;\n    })\n    themeContainer.appendChild(themeList);\n    themeList.appendChild(sandyBeachTheme);\n    themeList.appendChild(nightMoonTheme);\n    themeList.appendChild(lushForestTheme);\n};\n\n// Run each () to create the topbar \nconst createTopbar = () =>{\n    createMenuBtn();\n    addLogo();\n    displayAccount(accUsername);\n    createThemeList();\n};\n// Load topbar to page\nfunction loadTopbar() {\n    createTopbar();\n};\n\n//# sourceURL=webpack://todo-pro/./src/topbar.js?");

/***/ }),

/***/ "./src/images/close-btn.svg":
/*!**********************************!*\
  !*** ./src/images/close-btn.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cd3645cf868e38fd4b5.svg\";\n\n//# sourceURL=webpack://todo-pro/./src/images/close-btn.svg?");

/***/ }),

/***/ "./src/images/expand-btn.svg":
/*!***********************************!*\
  !*** ./src/images/expand-btn.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8151025346b155bdb335.svg\";\n\n//# sourceURL=webpack://todo-pro/./src/images/expand-btn.svg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;